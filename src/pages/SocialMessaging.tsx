
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Send, 
  Heart, 
  Image, 
  AtSign,
  Share,
  Bookmark,
  Search
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastSeen: string;
  isOnline: boolean;
  unreadCount: number;
}

export default function SocialMessaging() {
  const [activeTab, setActiveTab] = useState("messages");
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  // Mock data initialization
  useEffect(() => {
    const mockContacts: Contact[] = [
      {
        id: "1",
        name: "Alex Trader",
        avatar: "",
        lastSeen: new Date().toISOString(),
        isOnline: true,
        unreadCount: 3
      },
      {
        id: "2",
        name: "Crypto Jane",
        avatar: "",
        lastSeen: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
        isOnline: false,
        unreadCount: 0
      },
      {
        id: "3",
        name: "Bitcoin Bob",
        avatar: "",
        lastSeen: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        isOnline: true,
        unreadCount: 1
      },
      {
        id: "4",
        name: "Trading Pro",
        avatar: "",
        lastSeen: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
        isOnline: false,
        unreadCount: 0
      },
    ];

    const mockMessages: Record<string, Message[]> = {
      "1": [
        {
          id: "m1",
          senderId: "1",
          receiverId: "current-user",
          content: "Have you seen the BTC price action?",
          timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
          read: true
        },
        {
          id: "m2",
          senderId: "current-user",
          receiverId: "1",
          content: "Yes! Looks like a breakout pattern forming",
          timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
          read: true
        },
        {
          id: "m3",
          senderId: "1",
          receiverId: "current-user",
          content: "I'm thinking of buying more at this support level",
          timestamp: new Date(Date.now() - 1000 * 60 * 20).toISOString(),
          read: false
        },
        {
          id: "m4",
          senderId: "1",
          receiverId: "current-user",
          content: "What's your take on ETH right now?",
          timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
          read: false
        },
        {
          id: "m5",
          senderId: "1",
          receiverId: "current-user",
          content: "Check out this trading setup I found",
          timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
          read: false
        }
      ],
      "2": [
        {
          id: "m6",
          senderId: "2",
          receiverId: "current-user",
          content: "Hey, did you use the new AI trading feature?",
          timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
          read: true
        },
        {
          id: "m7",
          senderId: "current-user",
          receiverId: "2",
          content: "Not yet, how's it working for you?",
          timestamp: new Date(Date.now() - 1000 * 60 * 115).toISOString(),
          read: true
        }
      ],
      "3": [
        {
          id: "m8",
          senderId: "3",
          receiverId: "current-user",
          content: "I just shared my portfolio with you",
          timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
          read: true
        },
        {
          id: "m9",
          senderId: "current-user",
          receiverId: "3",
          content: "Thanks, I'll take a look at it",
          timestamp: new Date(Date.now() - 1000 * 60 * 175).toISOString(),
          read: true
        },
        {
          id: "m10",
          senderId: "3",
          receiverId: "current-user",
          content: "What do you think about my BTC position?",
          timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
          read: false
        }
      ]
    };

    setContacts(mockContacts);
    setMessages(mockMessages);
  }, []);

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!messageInput.trim() || !activeChat) return;

    const newMessage: Message = {
      id: `new-${Date.now()}`,
      senderId: "current-user",
      receiverId: activeChat,
      content: messageInput,
      timestamp: new Date().toISOString(),
      read: true
    };

    setMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage]
    }));

    setMessageInput("");

    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully",
    });
  };

  const handleChatSelect = (contactId: string) => {
    setActiveChat(contactId);
    
    // Mark messages as read
    setContacts(prev => 
      prev.map(contact => 
        contact.id === contactId 
          ? { ...contact, unreadCount: 0 } 
          : contact
      )
    );
  };

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Social Trading</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="discover">Discover</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="messages" className="space-y-4">
          <div className="flex h-[600px] rounded-lg overflow-hidden border">
            {/* Left sidebar - Contacts */}
            <div className="w-1/3 border-r bg-muted/30">
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search contacts"
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-[calc(100%-70px)]">
                {filteredContacts.map(contact => (
                  <div 
                    key={contact.id}
                    className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition-colors ${activeChat === contact.id ? 'bg-muted' : ''}`}
                    onClick={() => handleChatSelect(contact.id)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={contact.avatar} />
                        <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      {contact.isOnline && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{contact.name}</h3>
                        <span className="text-xs text-muted-foreground">
                          {new Date(contact.lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground truncate">
                          {messages[contact.id]?.[messages[contact.id]?.length - 1]?.content || "No messages yet"}
                        </p>
                        {contact.unreadCount > 0 && (
                          <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {contact.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Chat */}
            <div className="w-2/3 flex flex-col">
              {activeChat ? (
                <>
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={contacts.find(c => c.id === activeChat)?.avatar} />
                        <AvatarFallback>{contacts.find(c => c.id === activeChat)?.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{contacts.find(c => c.id === activeChat)?.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {contacts.find(c => c.id === activeChat)?.isOnline ? 'Online' : 'Offline'}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Share className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <AtSign className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages[activeChat]?.map(message => (
                      <div 
                        key={message.id}
                        className={`flex ${message.senderId === "current-user" ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[70%] p-3 rounded-lg ${
                            message.senderId === "current-user" 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}
                        >
                          <p>{message.content}</p>
                          <div className={`text-xs mt-1 ${
                            message.senderId === "current-user" 
                              ? 'text-primary-foreground/70' 
                              : 'text-muted-foreground'
                          }`}>
                            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            {message.senderId === "current-user" && (
                              <span className="ml-2">{message.read ? '✓✓' : '✓'}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 border-t">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Image className="h-5 w-5" />
                      </Button>
                      <Input 
                        placeholder="Type a message..." 
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} size="icon">
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <h3 className="text-xl font-medium mb-2">Your Messages</h3>
                    <p>Select a contact to view messages</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="discover" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured traders */}
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>T{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">TopTrader{i}</h3>
                        <p className="text-xs text-muted-foreground">Return: +{i * 12}% (30d)</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Follow</Button>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <p className="text-sm">
                      Just entered a long position on $BTC at the key support level. RSI indicates oversold conditions!
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-xs">{i * 25}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                        <MessageSquare className="h-4 w-4" />
                        <span className="text-xs">{i * 8}</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="hover:text-foreground transition-colors">
                        <Share className="h-4 w-4" />
                      </button>
                      <button className="hover:text-foreground transition-colors">
                        <Bookmark className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <ul className="divide-y">
                {[1, 2, 3, 4, 5].map(i => (
                  <li key={i} className="p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>T{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p>
                          <span className="font-medium">Trader{i}</span>
                          {' '}
                          {i % 3 === 0 
                            ? 'mentioned you in a post' 
                            : i % 3 === 1 
                              ? 'started following you' 
                              : 'shared a trading insight with you'
                          }
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(Date.now() - 1000 * 60 * 60 * i).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
