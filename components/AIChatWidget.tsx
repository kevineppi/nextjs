'use client'

import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Bot, X, Send, Clock, Euro, Layers, ExternalLink, Loader2, Calculator } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
  sources?: Array<{
    title: string;
    category: string;
    url?: string;
    similarity?: number;
  }>;
  recommendations?: {
    material?: string;
    estimatedCost?: string;
    deliveryTime?: string;
    priority?: 'express' | 'standard';
  };
  actions?: Array<{
    label: string;
    url: string;
    icon?: 'calculator' | 'contact' | 'material' | 'external';
  }>;
}

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId] = useState(() => `session_${crypto.randomUUID()}`);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Hallo! Ich bin Ihr 3D-Druck Assistent. Ich beantworte Ihre Fragen basierend auf den Informationen unserer Website.\n\nWie kann ich Ihnen helfen?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from sessionStorage on mount
  useEffect(() => {
    const savedMessages = sessionStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: msg.timestamp ? new Date(msg.timestamp) : undefined
        }));
        setMessages(messagesWithDates);
      } catch (e) {
        console.error('Failed to load chat messages:', e);
      }
    }
  }, []);

  // Save messages to sessionStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to the latest assistant message (scroll to top of new message)
  useEffect(() => {
    if (messages.length > 0) {
      // Find the last assistant message
      const lastAssistantIndex = [...messages].reverse().findIndex(m => m.role === 'assistant');
      if (lastAssistantIndex !== -1) {
        // Scroll with a slight delay to ensure DOM is updated
        setTimeout(() => {
          const messageElements = document.querySelectorAll('[data-message-role="assistant"]');
          const lastAssistantElement = messageElements[messageElements.length - 1];
          if (lastAssistantElement) {
            lastAssistantElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [messages]);

  // Auto-scroll when chat is opened
  useEffect(() => {
    if (isOpen && messages.length > 0) {
      // Scroll to last assistant message when opening the chat
      setTimeout(() => {
        const messageElements = document.querySelectorAll('[data-message-role="assistant"]');
        const lastAssistantElement = messageElements[messageElements.length - 1];
        if (lastAssistantElement) {
          lastAssistantElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [isOpen]);

  const quickQuestions = [
    { icon: Layers, text: 'Welches Material passt?', query: 'material' },
    { icon: Clock, text: 'Wie lange dauert\'s?', query: 'time' },
    { icon: Euro, text: 'Was kostet mein Projekt?', query: 'cost' },
  ];

  const handleQuickQuestion = (type: string) => {
    let userMessage = '';
    let assistantMessage = '';
    let actions: Array<{label: string; url: string; icon: 'calculator' | 'contact' | 'material' | 'external'}> = [];

    switch (type) {
      case 'material':
        userMessage = 'Welches Material empfehlt ihr für mein Projekt?';
        assistantMessage = 'Die Material-Wahl hängt von Ihrer Anwendung ab:\n\n🟢 PLA: Günstig, einfach zu drucken, ideal für Designstudien und Modelle\n🔵 PETG: Robust, chemikalienbeständig, für langlebige Schaumodelle\n🟡 ASA: UV-beständig, witterungsbeständig, perfekt für Outdoor-Modelle\n🟣 TPU: Flexibel, elastisch, für flexible Konzeptmuster\n\nWofür möchten Sie das Modell verwenden?';
        actions = [
          { label: 'Material-Guide ansehen', url: '/ratgeber/material-guide', icon: 'material' },
          { label: 'Beratung anfragen', url: '/kontakt', icon: 'contact' }
        ];
        break;
      case 'time':
        userMessage = 'Wie lange dauert die Fertigung?';
        assistantMessage = 'Die Produktionszeit hängt von Größe & Komplexität ab:\n\n🔸 Kleine Teile (<5cm): 2-4h Druck, 2-3 Werktage Lieferung\n🔶 Mittlere Teile (5-15cm): 6-16h Druck, 3-5 Werktage Lieferung\n🔺 Große Teile (>15cm): 16-48h Druck, 5-7 Werktage Lieferung\n\n⚡ Express-Service: 24-48h Lieferung (+40-60% Aufpreis)\n\nBenötigen Sie Express-Fertigung?';
        actions = [
          { label: 'Angebot anfordern', url: '/kontakt', icon: 'contact' }
        ];
        break;
      case 'cost':
        userMessage = 'Was kostet ungefähr mein 3D-Druck Projekt?';
        assistantMessage = 'Die Kosten hängen von mehreren Faktoren ab:\n\n💡 Beispiel 10×10×5cm in PETG:\nMaterial: ~€8-12 | Produktion: ~€20-30 | Setup: ~€8-10\n💰 Gesamt: €40-55 (Standard) | €55-75 (Express)\n\n📊 Einflussfaktoren:\n📏 Größe | ⚙️ Komplexität | 🧱 Material | ⚡ Express';
        actions = [
          { label: 'Anfrage stellen', url: '/kontakt', icon: 'contact' },
          { label: 'Individuelles Angebot', url: '/kontakt', icon: 'contact' }
        ];
        break;
    }

    setMessages(prev => [
      ...prev,
      { role: 'user', content: userMessage, timestamp: new Date() },
      { 
        role: 'assistant', 
        content: assistantMessage, 
        timestamp: new Date(),
        actions
      }
    ]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setInputValue('');
    
    // Add user message
    setMessages(prev => [
      ...prev,
      { role: 'user', content: userMessage, timestamp: new Date() }
    ]);

    setIsLoading(true);

    try {
      // Call RAG chat function with conversation history
      const conversationHistory = messages
        .filter(msg => msg.role === 'user' || msg.role === 'assistant')
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }));

      const { data, error } = await supabase.functions.invoke('rag-chat', {
        body: { 
          message: userMessage,
          conversationHistory: conversationHistory,
          sessionId: sessionId
        }
      });

      if (error) {
        console.error('Error calling rag-chat:', error);
        throw error;
      }

      if (data.rateLimited) {
        toast({
          title: "Zu viele Anfragen",
          description: "Bitte versuchen Sie es in einem Moment erneut.",
          variant: "destructive"
        });
        
        setMessages(prev => [
          ...prev,
          { 
            role: 'assistant', 
            content: 'Entschuldigung, ich bin gerade überlastet. Bitte versuchen Sie es in einem Moment erneut oder nutzen Sie unser Kontaktformular für eine direkte Antwort!', 
            timestamp: new Date() 
          }
        ]);
        return;
      }

      // Add AI response with sources and actions
      setMessages(prev => [
        ...prev,
        { 
          role: 'assistant', 
          content: data.answer,
          sources: data.sources || [],
          actions: data.actions || [],
          timestamp: new Date() 
        }
      ]);

    } catch (error) {
      console.error('Chat error:', error);
      
      toast({
        title: "Fehler",
        description: "Es gab ein Problem bei der Verarbeitung Ihrer Anfrage.",
        variant: "destructive"
      });

      setMessages(prev => [
        ...prev,
        { 
          role: 'assistant', 
          content: 'Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt!', 
          timestamp: new Date() 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        {!isOpen && (
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="h-14 w-14 md:h-16 md:w-16 rounded-full shadow-2xl hover-scale bg-gradient-to-br from-primary to-primary/70 hover:from-primary/90 hover:to-accent/90"
          >
            <Bot className="h-6 w-6 md:h-8 md:w-8" />
          </Button>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed top-20 left-4 right-4 bottom-4 md:top-auto md:bottom-6 md:right-6 md:left-auto md:w-[420px] md:h-[600px] z-50 shadow-2xl border-2 flex flex-col animate-fade-in">
          <CardHeader className="border-b bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">3D-Druck Berater</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Online & bereit</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-destructive/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Quick Questions */}
            <div className="p-4 border-b bg-muted/30">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Schnellfragen:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickQuestion(q.query)}
                    className="text-xs hover:bg-primary/10 hover:border-primary"
                  >
                    <q.icon className="w-3 h-3 mr-1" />
                    {q.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    data-message-role={msg.role}
                  >
                    <div className={`max-w-[85%] ${msg.role === 'user' ? 'order-2' : 'order-1'}`}>
                      {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-muted-foreground">
                            AI Assistent
                          </span>
                        </div>
                      )}
                      <div
                        className={`rounded-2xl p-3 ${
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line leading-relaxed">
                          {msg.content}
                        </p>
                        
                        {/* Removed sources display for better clarity */}

                        {msg.actions && msg.actions.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-border/50">
                            <div className="flex flex-wrap gap-2">
                              {msg.actions.map((action, idx) => (
                                <Button
                                  key={idx}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => action.url.startsWith('/') ? navigate(action.url) : window.location.href = action.url}
                                  className="text-xs hover:bg-primary/10"
                                >
                                  {action.icon === 'calculator' && <Calculator className="w-3 h-3 mr-1" />}
                                  {action.icon === 'contact' && <Send className="w-3 h-3 mr-1" />}
                                  {action.icon === 'material' && <Layers className="w-3 h-3 mr-1" />}
                                  {action.icon === 'external' && <ExternalLink className="w-3 h-3 mr-1" />}
                                  {action.label}
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {msg.timestamp && (
                        <p className="text-xs text-muted-foreground mt-1 px-2">
                          {msg.timestamp.toLocaleTimeString('de-AT', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  placeholder="Ihre Frage zum 3D-Druck..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="icon"
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-gradient-to-br from-primary to-primary/70 hover:from-primary/90 hover:to-accent/90"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                🤖 KI-gestützt • Basiert auf Website-Inhalten
              </p>
              <p className="text-[10px] text-muted-foreground/70 mt-1 text-center">
                Alle Angaben ohne Gewähr
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIChatWidget;
