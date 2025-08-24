'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { pkkmbChatbot } from '@/ai/flows/pkkmb-chatbot';
import { Bot, User, CornerDownLeft, Mic, Paperclip, Loader2, MessageSquare, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await pkkmbChatbot({ question: input });
      const botMessage: Message = { role: 'bot', content: result.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: "There was a problem with the chatbot. Please try again later.",
      })
      const errorMessage: Message = { role: 'bot', content: 'Sorry, I am having trouble connecting. Please try again later.' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-16 h-16 shadow-lg bg-accent hover:bg-accent/90"
          onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X className="h-8 w-8 text-accent-foreground" /> : <MessageSquare className="h-8 w-8 text-accent-foreground" />}
        </Button>
      </div>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-full max-w-sm shadow-2xl animate-in fade-in-5 slide-in-from-bottom-5">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://placehold.co/40x40.png" alt="Bot" data-ai-hint="robot avatar" />
                <AvatarFallback>BOT</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">PKKMB Assistant</CardTitle>
                <p className="text-sm text-muted-foreground">Ask me anything!</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px] pr-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                    <Avatar className="w-8 h-8 border">
                        <AvatarFallback><Bot size={16}/></AvatarFallback>
                    </Avatar>
                    <div className="bg-secondary p-3 rounded-lg rounded-tl-none">
                        <p>Hello! How can I help you with the PKKMB orientation today?</p>
                    </div>
                </div>
                {messages.map((message, index) => (
                  <div key={index} className={cn(
                    "flex items-start gap-3 text-sm",
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}>
                    {message.role === 'bot' && (
                        <Avatar className="w-8 h-8 border">
                            <AvatarFallback><Bot size={16}/></AvatarFallback>
                        </Avatar>
                    )}
                    <div className={cn(
                      "p-3 rounded-lg max-w-xs",
                      message.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary rounded-tl-none'
                    )}>
                      <p>{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                        <Avatar className="w-8 h-8 border">
                            <AvatarFallback><User size={16}/></AvatarFallback>
                        </Avatar>
                    )}
                  </div>
                ))}
                 {isLoading && (
                  <div className="flex items-start gap-3 text-sm">
                     <Avatar className="w-8 h-8 border">
                        <AvatarFallback><Bot size={16}/></AvatarFallback>
                    </Avatar>
                    <div className="bg-secondary p-3 rounded-lg rounded-tl-none flex items-center">
                        <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                id="message"
                placeholder="Type your question..."
                className="flex-1"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="bg-accent hover:bg-accent/90">
                <CornerDownLeft className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
