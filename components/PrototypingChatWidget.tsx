'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Bot, X, Send, Clock, Euro, Layers } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
  recommendations?: {
    material?: string;
    estimatedCost?: string;
    deliveryTime?: string;
    priority?: 'express' | 'standard';
  };
}

const PrototypingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Hallo! Ich bin Ihr Rapid Prototyping Assistent. Ich helfe Ihnen bei der Material-Auswahl, Kosten-Schätzung und beantworte alle Fragen zu 3D-Druck Prototypen.\n\nWie kann ich Ihnen helfen?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    { icon: Layers, text: 'Welches Material für Outdoor?', query: 'outdoor' },
    { icon: Clock, text: 'Wie lange dauert 10x10cm?', query: 'time' },
    { icon: Euro, text: 'Was kostet mein Projekt?', query: 'cost' },
  ];

  const handleQuickQuestion = (type: string) => {
    let userMessage = '';
    let assistantMessage = '';
    let recommendations = undefined;

    switch (type) {
      case 'outdoor':
        userMessage = 'Welches Material empfehlt ihr für einen Outdoor-Prototyp?';
        assistantMessage = 'Für Outdoor-Anwendungen empfehle ich **ASA** oder **PETG**:\n\n**ASA:**\n✅ UV-beständig\n✅ Witterungsbeständig\n✅ Hohe Temperaturbeständigkeit\n❌ Etwas teurer\n\n**PETG:**\n✅ Gute UV-Beständigkeit\n✅ Chemikalienbeständig\n✅ Kostengünstiger als ASA\n❌ Nicht ganz so UV-stabil wie ASA\n\nFür maximale Haltbarkeit im Freien würde ich ASA wählen.';
        recommendations = {
          material: 'ASA',
          estimatedCost: '€30-60',
          deliveryTime: '3-5 Werktage',
          priority: 'standard'
        };
        break;
      case 'time':
        userMessage = 'Wie lange dauert ein 10x10x5cm Teil?';
        assistantMessage = 'Die Produktionszeit für ein **10x10x5cm** Teil hängt von der Schichthöhe ab:\n\n**Standard (0.2mm):**\n⏱️ Ca. 8-12 Stunden Druckzeit\n📦 Lieferung in 3-5 Werktagen\n\n**Express (0.2mm, priorisiert):**\n⚡ Sofortige Produktion\n📦 Lieferung in 24-48 Stunden\n\n**Fein (0.1mm):**\n⏱️ Ca. 16-24 Stunden\n📦 Lieferung in 4-6 Werktagen\n\nBenötigen Sie Express-Service?';
        recommendations = {
          deliveryTime: '3-5 Werktage (Standard)',
          estimatedCost: '€25-40',
          priority: 'standard'
        };
        break;
      case 'cost':
        userMessage = 'Was kostet ungefähr ein Präsentationsgehäuse 15x10x8cm in PETG?';
        assistantMessage = 'Für ein **Präsentationsgehäuse 15x10x8cm in PETG** kalkuliere ich:\n\n**Material-Kosten:**\n• PETG Filament: ~€8-12\n\n**Produktions-Kosten:**\n• Druckzeit (~16h): ~€25-35\n• Setup & QC: ~€8-10\n\n**Gesamt-Schätzung:**\n💰 **€45-65** (Standard)\n💰 **€65-90** (Express 24-48h)\n\n*Endpreis hängt ab von:*\n- Wandstärke\n- Infill-Dichte\n- Detailgrad\n\nMöchten Sie ein genaues Angebot?';
        recommendations = {
          material: 'PETG',
          estimatedCost: '€45-65',
          deliveryTime: '3-5 Werktage',
          priority: 'standard'
        };
        break;
    }

    setMessages(prev => [
      ...prev,
      { role: 'user', content: userMessage, timestamp: new Date() },
      { 
        role: 'assistant', 
        content: assistantMessage, 
        timestamp: new Date(),
        recommendations 
      }
    ]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages(prev => [
      ...prev,
      { role: 'user', content: inputValue, timestamp: new Date() },
      { 
        role: 'assistant', 
        content: '🤖 Das ist ein Demo-Modus. Die echte AI-Integration würde hier Ihre Frage analysieren und eine maßgeschneiderte Antwort mit Material-Empfehlungen, Kosten-Schätzungen und Lieferzeiten geben.\n\nKlicken Sie auf eine der Schnellfragen oben für eine Demo-Antwort!', 
        timestamp: new Date() 
      }
    ]);
    setInputValue('');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 rounded-full shadow-2xl hover-scale bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            <Bot className="h-8 w-8" />
          </Button>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[420px] h-[600px] shadow-2xl border-2 flex flex-col animate-fade-in">
          <CardHeader className="border-b bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">Prototyping-Berater</CardTitle>
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
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] ${msg.role === 'user' ? 'order-2' : 'order-1'}`}>
                      {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
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
                        {msg.recommendations && (
                          <div className="mt-3 pt-3 border-t border-border/50 space-y-2">
                            {msg.recommendations.material && (
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  <Layers className="w-3 h-3 mr-1" />
                                  {msg.recommendations.material}
                                </Badge>
                              </div>
                            )}
                            {msg.recommendations.estimatedCost && (
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  <Euro className="w-3 h-3 mr-1" />
                                  {msg.recommendations.estimatedCost}
                                </Badge>
                              </div>
                            )}
                            {msg.recommendations.deliveryTime && (
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {msg.recommendations.deliveryTime}
                                </Badge>
                              </div>
                            )}
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
                  placeholder="Ihre Frage zum Prototyping..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                💡 Demo-Modus • Powered by AI
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default PrototypingChatWidget;
