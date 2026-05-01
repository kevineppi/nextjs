'use client'

import { useCallback, useRef, useState } from "react";
import { Upload, FileCheck, X, Loader2, AlertCircle, Box, Maximize2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { GeometryData } from "@/lib/stlParser";

interface Props {
  geometry: GeometryData | null;
  fileName: string | null;
  fileSize: number | null;
  isAnalyzing: boolean;
  error: string | null;
  onFileSelect: (file: File) => void;
  onClear: () => void;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const ModelUpload = ({ geometry, fileName, fileSize, isAnalyzing, error, onFileSelect, onClear }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback(
    (file: File) => {
      onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
      if (inputRef.current) inputRef.current.value = "";
    },
    [handleFile]
  );

  return (
    <div className="space-y-2">
      <Label className="text-sm font-semibold">3D-Datei (STL)</Label>

      {/* Analyseergebnis anzeigen */}
      {geometry && fileName ? (
        <div className="border border-primary/30 bg-primary/5 rounded-lg p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <FileCheck className="h-5 w-5 text-primary shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{fileName}</p>
                {fileSize && (
                  <p className="text-xs text-muted-foreground">{formatBytes(fileSize)} · {geometry.triangleCount.toLocaleString("de-AT")} Dreiecke</p>
                )}
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7 shrink-0"
              onClick={onClear}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Geometriedaten */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 bg-background rounded-md px-3 py-2">
              <Box className="h-4 w-4 text-primary shrink-0" />
              <div>
                <p className="text-[11px] text-muted-foreground">Volumen</p>
                <p className="text-sm font-semibold text-foreground">{geometry.volumeCm3.toFixed(2)} cm³</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-background rounded-md px-3 py-2">
              <Maximize2 className="h-4 w-4 text-primary shrink-0" />
              <div>
                <p className="text-[11px] text-muted-foreground">Oberfläche</p>
                <p className="text-sm font-semibold text-foreground">{geometry.surfaceCm2.toFixed(2)} cm²</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-background rounded-md px-3 py-2">
              <Maximize2 className="h-4 w-4 text-primary shrink-0" />
              <div>
                <p className="text-[11px] text-muted-foreground">Maße</p>
                <p className="text-sm font-semibold text-foreground">
                  {geometry.boundingBoxMm.x.toFixed(0)} × {geometry.boundingBoxMm.y.toFixed(0)} × {geometry.boundingBoxMm.z.toFixed(0)} mm
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-primary font-medium">
            ✓ Geometriedaten werden für die Preisberechnung verwendet.
          </p>
        </div>
      ) : isAnalyzing ? (
        <div className="border-2 border-dashed border-primary/40 rounded-lg p-6 text-center bg-primary/5">
          <Loader2 className="h-8 w-8 text-primary mx-auto mb-2 animate-spin" />
          <p className="text-sm text-foreground font-medium">Datei wird analysiert…</p>
          <p className="text-xs text-muted-foreground mt-1">Volumen, Oberfläche und Abmessungen werden berechnet.</p>
        </div>
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/40"
          }`}
        >
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm text-muted-foreground">
            STL-Datei hierher ziehen oder <span className="text-primary font-medium">auswählen</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Unterstützt: .stl (binär & ASCII) · max. 100 MB
          </p>
          {!geometry && !error && (
            <p className="text-xs text-muted-foreground mt-2 italic">
              Ohne Datei wird mit Beispielwerten kalkuliert.
            </p>
          )}
        </div>
      )}

      {/* Fehler */}
      {error && (
        <div className="flex items-start gap-2 text-destructive bg-destructive/10 rounded-md px-3 py-2">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <p className="text-xs">{error}</p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".stl"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ModelUpload;
