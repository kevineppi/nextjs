/**
 * Hook für STL-Dateianalyse im Browser.
 * Cached Ergebnisse – neue Analyse nur bei neuem Upload.
 */

import { useState, useCallback } from 'react';
import { parseSTL, type GeometryData } from '@/lib/stlParser';

export interface ModelAnalysisState {
  /** Analyseergebnisse (null = keine Datei) */
  geometry: GeometryData | null;
  /** Name der hochgeladenen Datei */
  fileName: string | null;
  /** Dateigröße in Bytes */
  fileSize: number | null;
  /** Analyse läuft */
  isAnalyzing: boolean;
  /** Fehlermeldung */
  error: string | null;
  /** Raw ArrayBuffer für 3D-Viewer */
  arrayBuffer: ArrayBuffer | null;
  /** Original File object for upload */
  file: File | null;
}

export function useModelAnalysis() {
  const [state, setState] = useState<ModelAnalysisState>({
    geometry: null,
    fileName: null,
    fileSize: null,
    isAnalyzing: false,
    error: null,
    arrayBuffer: null,
    file: null,
  });

  const analyzeFile = useCallback(async (file: File) => {
    // Validierung
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (ext !== 'stl') {
      setState(prev => ({
        ...prev,
        error: 'Bitte laden Sie eine STL-Datei hoch.',
        geometry: null,
        fileName: null,
        fileSize: null,
        arrayBuffer: null,
        file: null,
      }));
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      setState(prev => ({
        ...prev,
        error: 'Die Datei ist zu groß (max. 100 MB).',
        geometry: null,
        fileName: null,
        fileSize: null,
        arrayBuffer: null,
        file: null,
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      isAnalyzing: true,
      error: null,
      fileName: file.name,
      fileSize: file.size,
    }));

    try {
      const buffer = await file.arrayBuffer();

      // Parsing in einem Timeout, um UI nicht zu blockieren
      const geometry = await new Promise<GeometryData>((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(parseSTL(buffer));
          } catch (e) {
            reject(e);
          }
        }, 50);
      });

      setState({
        geometry,
        fileName: file.name,
        fileSize: file.size,
        isAnalyzing: false,
        error: null,
        arrayBuffer: buffer,
        file,
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        isAnalyzing: false,
        error: err instanceof Error
          ? `Die Datei konnte nicht verarbeitet werden: ${err.message}`
          : 'Die Datei konnte nicht verarbeitet werden.',
        geometry: null,
        arrayBuffer: null,
        file: null,
      }));
    }
  }, []);

  const clearFile = useCallback(() => {
    setState({
      geometry: null,
      fileName: null,
      fileSize: null,
      isAnalyzing: false,
      error: null,
      arrayBuffer: null,
      file: null,
    });
  }, []);

  return { ...state, analyzeFile, clearFile };
}
