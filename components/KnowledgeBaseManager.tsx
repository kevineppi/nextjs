'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Loader2, Plus, Trash2, Edit, Save, X, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface KnowledgeEntry {
  id: string;
  title: string;
  content: string;
  category: string;
  page_url?: string;
  is_active: boolean;
  created_at: string;
}

const categories = [
  'Materialien',
  'Verfahren',
  'Preise',
  'Lieferung',
  'Services',
  'Technische Details',
  'Standorte',
  'Sonstiges'
];

const KnowledgeBaseManager = () => {
  const [entries, setEntries] = useState<KnowledgeEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: categories[0],
    page_url: '',
    is_active: true
  });

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('knowledge_base')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEntries(data || []);
    } catch (error) {
      console.error('Error loading knowledge base:', error);
      toast({
        title: 'Fehler',
        description: 'Knowledge Base konnte nicht geladen werden',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const generateEmbedding = async (text: string) => {
    const { data, error } = await supabase.functions.invoke('generate-embedding', {
      body: { text }
    });

    if (error) throw error;
    return data.embedding;
  };

  const handleSave = async () => {
    if (!formData.title || !formData.content) {
      toast({
        title: 'Fehler',
        description: 'Bitte füllen Sie alle Pflichtfelder aus',
        variant: 'destructive'
      });
      return;
    }

    setSaving(true);

    try {
      // Generate embedding
      const embedding = await generateEmbedding(`${formData.title}\n\n${formData.content}`);

      if (editingId) {
        // Update existing entry
        const { error } = await supabase
          .from('knowledge_base')
          .update({
            ...formData,
            embedding
          })
          .eq('id', editingId);

        if (error) throw error;
        
        toast({
          title: 'Erfolgreich',
          description: 'Eintrag wurde aktualisiert'
        });
      } else {
        // Create new entry
        const { error } = await supabase
          .from('knowledge_base')
          .insert([{
            ...formData,
            embedding
          }]);

        if (error) throw error;
        
        toast({
          title: 'Erfolgreich',
          description: 'Eintrag wurde erstellt'
        });
      }

      // Reset form and reload
      setFormData({
        title: '',
        content: '',
        category: categories[0],
        page_url: '',
        is_active: true
      });
      setEditingId(null);
      setShowForm(false);
      loadEntries();

    } catch (error) {
      console.error('Error saving entry:', error);
      toast({
        title: 'Fehler',
        description: 'Eintrag konnte nicht gespeichert werden',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (entry: KnowledgeEntry) => {
    setFormData({
      title: entry.title,
      content: entry.content,
      category: entry.category,
      page_url: entry.page_url || '',
      is_active: entry.is_active
    });
    setEditingId(entry.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Möchten Sie diesen Eintrag wirklich löschen?')) return;

    try {
      const { error } = await supabase
        .from('knowledge_base')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Erfolgreich',
        description: 'Eintrag wurde gelöscht'
      });

      loadEntries();
    } catch (error) {
      console.error('Error deleting entry:', error);
      toast({
        title: 'Fehler',
        description: 'Eintrag konnte nicht gelöscht werden',
        variant: 'destructive'
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      content: '',
      category: categories[0],
      page_url: '',
      is_active: true
    });
    setEditingId(null);
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Knowledge Base Management</h2>
          <p className="text-muted-foreground mt-1">
            Verwalten Sie die Inhalte, die der AI-Chatbot für Antworten verwendet
          </p>
        </div>
        {!showForm && (
          <Button onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Neuer Eintrag
          </Button>
        )}
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Eintrag bearbeiten' : 'Neuer Eintrag'}</CardTitle>
            <CardDescription>
              Der Inhalt wird automatisch vektorisiert für die AI-Suche
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Titel *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="z.B. PLA Material Eigenschaften"
              />
            </div>

            <div>
              <Label htmlFor="category">Kategorie *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="content">Inhalt *</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Detaillierte Informationen, die der Chatbot verwenden kann..."
                rows={8}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Tipp: Schreiben Sie klar und strukturiert für beste AI-Ergebnisse
              </p>
            </div>

            <div>
              <Label htmlFor="page_url">Seiten-URL (optional)</Label>
              <Input
                id="page_url"
                value={formData.page_url}
                onChange={(e) => setFormData(prev => ({ ...prev, page_url: e.target.value }))}
                placeholder="/3d-druck-materialien"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
              />
              <Label htmlFor="is_active">Aktiv</Label>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSave} disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Speichern...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Speichern
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={handleCancel} disabled={saving}>
                <X className="w-4 h-4 mr-2" />
                Abbrechen
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {entries.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-lg font-medium">Keine Einträge vorhanden</p>
              <p className="text-sm text-muted-foreground">
                Erstellen Sie den ersten Eintrag für die Knowledge Base
              </p>
            </CardContent>
          </Card>
        ) : (
          entries.map(entry => (
            <Card key={entry.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{entry.title}</h3>
                      <Badge variant={entry.is_active ? "default" : "secondary"}>
                        {entry.is_active ? 'Aktiv' : 'Inaktiv'}
                      </Badge>
                      <Badge variant="outline">{entry.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {entry.content}
                    </p>
                    {entry.page_url && (
                      <p className="text-xs text-primary">
                        📄 {entry.page_url}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(entry)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(entry.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default KnowledgeBaseManager;
