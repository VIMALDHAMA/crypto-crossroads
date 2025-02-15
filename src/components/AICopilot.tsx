
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Send, Mic, Paperclip, X, Maximize2, Minimize2, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'portfolio' | 'security' | 'file';
}

export function AICopilot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isProcessingFile, setIsProcessingFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize voice recognition
    if ('MediaRecorder' in window) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          mediaRecorderRef.current = new MediaRecorder(stream);
          
          mediaRecorderRef.current.ondataavailable = async (event) => {
            if (event.data.size > 0) {
              const audioBlob = new Blob([event.data], { type: 'audio/wav' });
              await processVoiceInput(audioBlob);
            }
          };
        })
        .catch(error => {
          console.error('Error accessing microphone:', error);
        });
    }
  }, []);

  const processVoiceInput = async (audioBlob: Blob) => {
    // Here we would normally send the audio to a speech-to-text service
    // For now, we'll simulate the response
    const simulatedText = "Show me my portfolio analysis";
    setInput(simulatedText);
    await handleSend(simulatedText);
  };

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const newUserMessage: Message = {
      role: 'user',
      content: text,
      timestamp: new Date(),
      type: 'text'
    };

    const newAssistantMessage: Message = {
      role: 'assistant',
      content: 'Analyzing your request with quantum-resistant encryption...',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages([...messages, newUserMessage, newAssistantMessage]);
    setInput('');

    // Simulate AI response with different types of insights
    setTimeout(() => {
      let response: Message;

      if (text.toLowerCase().includes('portfolio')) {
        response = {
          role: 'assistant',
          content: `Portfolio Analysis:\n
          1. Risk Level: Moderate\n
          2. Diversification Score: 8.5/10\n
          3. Recommendations:\n
             - Consider increasing allocation in quantum-resistant cryptocurrencies\n
             - Rebalance portfolio to maintain optimal risk level\n
             - Look into emerging blockchain technologies`,
          timestamp: new Date(),
          type: 'portfolio'
        };
      } else if (text.toLowerCase().includes('security')) {
        response = {
          role: 'assistant',
          content: `Security Status:\n
          1. Quantum Resistance: Active\n
          2. Encryption: Post-Quantum Cryptography Enabled\n
          3. Last Security Scan: Clean\n
          4. Recommendations:\n
             - Enable two-factor authentication\n
             - Regular security audits\n
             - Keep recovery phrases in secure storage`,
          timestamp: new Date(),
          type: 'security'
        };
      } else {
        response = {
          role: 'assistant',
          content: `Based on your request, here are my insights:\n
          1. Market Analysis: Bullish trends detected\n
          2. Risk Assessment: Low exposure to volatile assets\n
          3. Recommendations:\n
             - Consider DeFi opportunities\n
             - Monitor quantum computing developments\n
             - Regular portfolio rebalancing`,
          timestamp: new Date(),
          type: 'text'
        };
      }

      setMessages(prev => [...prev.slice(0, -1), response]);
    }, 1000);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsProcessingFile(true);
    try {
      // Here we would normally process the file with AI
      // For now, we'll simulate file analysis
      await new Promise(resolve => setTimeout(resolve, 2000));

      const newMessage: Message = {
        role: 'assistant',
        content: `File Analysis Complete: ${file.name}\n
        1. Document Type: ${file.type}\n
        2. Size: ${(file.size / 1024).toFixed(2)} KB\n
        3. Recommendations:\n
           - File appears to be a ${file.type.split('/')[1]}\n
           - Contains potential investment information\n
           - Suggesting automated portfolio adjustments`,
        timestamp: new Date(),
        type: 'file'
      };

      setMessages(prev => [...prev, newMessage]);
      toast({
        title: "File Analysis Complete",
        description: `${file.name} has been processed with quantum-resistant encryption.`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Failed to process file securely.",
      });
    } finally {
      setIsProcessingFile(false);
    }
  };

  const toggleRecording = () => {
    if (!mediaRecorderRef.current) return;

    if (isRecording) {
      mediaRecorderRef.current.stop();
      toast({
        title: "Voice Recording Stopped",
        description: "Processing your message...",
      });
    } else {
      mediaRecorderRef.current.start();
      toast({
        title: "Voice Recording Started",
        description: "Listening to your message...",
      });
    }
    setIsRecording(!isRecording);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg"
      >
        <Bot className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 w-96 shadow-xl transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[600px]'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5" />
          <span className="font-semibold">Quantum-Safe AI Copilot</span>
          <Lock className="w-4 h-4 text-green-500" />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {!isMinimized && (
        <>
          <CardContent className="flex-1 overflow-y-auto space-y-4 p-4 h-[calc(600px-8rem)]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  } ${
                    message.type === 'security' ? 'border-2 border-green-500' : ''
                  }`}
                >
                  <div className="whitespace-pre-line">{message.content}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
          <div className="p-4 border-t">
            <div className="flex gap-2 items-center">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for insights or recommendations..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.csv"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={isProcessingFile}
              >
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleRecording}
                className={isRecording ? 'text-red-500' : ''}
              >
                <Mic className="w-4 h-4" />
              </Button>
              <Button onClick={() => handleSend()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
