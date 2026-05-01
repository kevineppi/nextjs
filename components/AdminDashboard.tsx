'use client'

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type ContactInquiry = Tables<'contact_inquiries'>;
import { useToast } from "@/hooks/use-toast";
import { Search, Filter, Download, RefreshCw, Eye, CheckCircle, Clock, Archive, Image } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import ReferencesManager from "./ReferencesManager";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<ContactInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);
  const [activeTab, setActiveTab] = useState("inquiries");
  const { toast } = useToast();

  useEffect(() => {
    loadInquiries();
  }, []);

  useEffect(() => {
    filterInquiries();
  }, [inquiries, searchTerm, statusFilter]);

  const loadInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error('Error loading inquiries:', error);
      toast({
        title: "Fehler",
        description: "Anfragen konnten nicht geladen werden.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filterInquiries = () => {
    let filtered = inquiries;

    if (searchTerm) {
      filtered = filtered.filter(inquiry =>
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(inquiry => inquiry.status === statusFilter);
    }

    setFilteredInquiries(filtered);
  };

  const updateStatus = async (id: string, newStatus: ContactInquiry['status']) => {
    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .update({ 
          status: newStatus,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;

      setInquiries(prev => 
        prev.map(inquiry => 
          inquiry.id === id 
            ? { ...inquiry, status: newStatus, updated_at: new Date().toISOString() }
            : inquiry
        )
      );

      toast({
        title: "Status aktualisiert",
        description: "Der Status der Anfrage wurde erfolgreich geändert.",
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: "Fehler",
        description: "Status konnte nicht aktualisiert werden.",
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: ContactInquiry['status']) => {
    const statusConfig = {
      new: { label: "Neu", variant: "destructive" as const, icon: RefreshCw },
      in_progress: { label: "In Bearbeitung", variant: "default" as const, icon: Clock },
      completed: { label: "Abgeschlossen", variant: "secondary" as const, icon: CheckCircle },
      archived: { label: "Archiviert", variant: "outline" as const, icon: Archive }
    };

    const config = statusConfig[status];
    const IconComponent = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <IconComponent className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const getProjectTypeLabel = (projectType: string) => {
    const types = {
      einzelanfertigung: "Einzelanfertigung",
      mehrfachanfertigung: "Mehrfachanfertigung", 
      inneneinrichtung: "Inneneinrichtung",
      beratung: "Beratung & Design",
      sonstiges: "Sonstiges"
    };
    return types[projectType as keyof typeof types] || projectType;
  };

  const getTimelineLabel = (timeline: string) => {
    const timelines = {
      express: "Express (24-48h)",
      standard: "Standard (3-5 Tage)",
      extended: "Erweitert (1-2 Wochen)",
      flexibel: "Flexibel"
    };
    return timelines[timeline as keyof typeof timelines] || timeline;
  };

  const exportToCSV = () => {
    const csvContent = [
      ["Name", "E-Mail", "Projekt-Art", "Zeitrahmen", "Status", "Erstellt am", "Nachricht"],
      ...filteredInquiries.map(inquiry => [
        inquiry.name,
        inquiry.email,
        getProjectTypeLabel(inquiry.project_type),
        getTimelineLabel(inquiry.timeline),
        inquiry.status,
        inquiry.created_at ? format(new Date(inquiry.created_at), "dd.MM.yyyy HH:mm", { locale: de }) : "",
        inquiry.message.replace(/\n/g, " ")
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `kontaktanfragen_${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 p-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Admin <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Verwaltung aller Kontaktanfragen, Bestellungen und Kundenanfragen
          </p>
        </div>


        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-lg grid-cols-2">
            <TabsTrigger value="inquiries">
              <Filter className="h-4 w-4 mr-2" />
              Kontaktanfragen
            </TabsTrigger>
            <TabsTrigger value="references">
              <Image className="h-4 w-4 mr-2" />
              Referenzen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inquiries" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Neue Anfragen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-destructive">
                    {inquiries.filter(i => i.status === 'new').length}
                  </div>
                </CardContent>
              </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                In Bearbeitung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {inquiries.filter(i => i.status === 'in_progress').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Abgeschlossen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">
                {inquiries.filter(i => i.status === 'completed').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Archiviert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-muted-foreground">
                {inquiries.filter(i => i.status === 'archived').length}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Gesamt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {inquiries.length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter & Aktionen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Suche nach Name, E-Mail oder Nachricht..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Status filtern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Status</SelectItem>
                  <SelectItem value="new">Neu</SelectItem>
                  <SelectItem value="in_progress">In Bearbeitung</SelectItem>
                  <SelectItem value="completed">Abgeschlossen</SelectItem>
                  <SelectItem value="archived">Archiviert</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Button onClick={loadInquiries} variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Aktualisieren
                </Button>
                <Button onClick={exportToCSV} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inquiries Table */}
        <Card>
          <CardHeader>
            <CardTitle>
              Kontaktanfragen ({filteredInquiries.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Projekt-Art</TableHead>
                    <TableHead>Zeitrahmen</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Erstellt</TableHead>
                    <TableHead>Aktionen</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell className="font-medium">{inquiry.name}</TableCell>
                      <TableCell>{inquiry.email}</TableCell>
                      <TableCell>{getProjectTypeLabel(inquiry.project_type)}</TableCell>
                      <TableCell>{getTimelineLabel(inquiry.timeline)}</TableCell>
                      <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                      <TableCell>
                        {inquiry.created_at ? format(new Date(inquiry.created_at), "dd.MM.yyyy", { locale: de }) : ""}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedInquiry(inquiry)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {inquiry.status === 'new' && (
                            <Button
                              size="sm"
                              onClick={() => updateStatus(inquiry.id!, 'in_progress')}
                            >
                              Bearbeiten
                            </Button>
                          )}
                          {inquiry.status === 'in_progress' && (
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => updateStatus(inquiry.id!, 'completed')}
                            >
                              Abschließen
                            </Button>
                          )}
                          {inquiry.status === 'completed' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateStatus(inquiry.id!, 'archived')}
                            >
                              <Archive className="h-4 w-4 mr-1" />
                              Archivieren
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Inquiry Detail Modal */}
        {selectedInquiry && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Anfrage Details
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedInquiry(null)}
                  >
                    ✕
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <p>{selectedInquiry.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">E-Mail</label>
                    <p>{selectedInquiry.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Projekt-Art</label>
                    <p>{getProjectTypeLabel(selectedInquiry.project_type)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Zeitrahmen</label>
                    <p>{getTimelineLabel(selectedInquiry.timeline)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Status</label>
                    <p>{getStatusBadge(selectedInquiry.status)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Erstellt am</label>
                    <p>
                      {selectedInquiry.created_at 
                        ? format(new Date(selectedInquiry.created_at), "dd.MM.yyyy HH:mm", { locale: de })
                        : ""
                      }
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Nachricht</label>
                  <p className="mt-1 p-3 bg-muted rounded-md whitespace-pre-wrap">
                    {selectedInquiry.message}
                  </p>
                </div>
                <div className="flex gap-2 pt-4">
                  <Select 
                    value={selectedInquiry.status} 
                    onValueChange={(value) => updateStatus(selectedInquiry.id!, value as ContactInquiry['status'])}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Neu</SelectItem>
                      <SelectItem value="in_progress">In Bearbeitung</SelectItem>
                      <SelectItem value="completed">Abgeschlossen</SelectItem>
                      <SelectItem value="archived">Archiviert</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    onClick={() => window.open(`mailto:${selectedInquiry.email}`, '_blank')}
                    variant="outline"
                  >
                    E-Mail senden
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
          </TabsContent>

          <TabsContent value="references" className="space-y-6">
            <ReferencesManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;