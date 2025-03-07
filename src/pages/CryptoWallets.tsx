
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ArrowDownLeft, ArrowUpRight, Clipboard, CreditCard, Eye, EyeOff, 
  Key, Plus, Trash2, Wallet 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QRCodeHandler } from "@/components/QRCodeHandler";
import { WalletCard } from "@/components/WalletCard";
import { useWeb3 } from "@/lib/web3";

interface WalletType {
  id: string;
  name: string;
  currency: string;
  balance: number;
  address: string;
  privateKey: string;
  change24h?: number;
}

const mockWallets: WalletType[] = [
  {
    id: "1",
    name: "Main Bitcoin Wallet",
    currency: "Bitcoin",
    balance: 0.85,
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    privateKey: "6PRVWUbkzzsbcVac2qwfssoUJAN1Xhrg6bNk8J7Nzm5H7kxEbn2Nh2ZoGg",
    change24h: 2.4,
  },
  {
    id: "2",
    name: "ETH Savings",
    currency: "Ethereum",
    balance: 5.2,
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    privateKey: "7f6d8a890cb45e6c8f5d44ba5a6ce7b289ffa507922d06bb7432cb69a530731c",
    change24h: -1.3,
  },
  {
    id: "3",
    name: "USDT Reserve",
    currency: "USDT",
    balance: 1500,
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    privateKey: "a934bd22d5f11895d85e044ae1347668bbcdf01b0564cc6b0f94797ad5b7837d",
    change24h: 0.1,
  },
];

const walletSchema = z.object({
  name: z.string().min(1, "Wallet name is required"),
  privateKey: z.string().min(1, "Private key is required").optional(),
  seedPhrase: z.string().min(1, "Seed phrase is required").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
});

const CryptoWallets = () => {
  const [wallets, setWallets] = useState<WalletType[]>(mockWallets);
  const [activeWallet, setActiveWallet] = useState<WalletType | null>(null);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const { toast } = useToast();
  const { isConnected, account, connectWallet } = useWeb3();

  const form = useForm<z.infer<typeof walletSchema>>({
    resolver: zodResolver(walletSchema),
    defaultValues: {
      name: "",
      privateKey: "",
      seedPhrase: "",
      password: "",
    },
  });

  const onImportWallet = (values: z.infer<typeof walletSchema>) => {
    // In a real app, this would validate and import the wallet
    const newWallet: WalletType = {
      id: Date.now().toString(),
      name: values.name,
      currency: "Bitcoin",
      balance: 0,
      address: `bc1q${Math.random().toString(36).substring(2, 15)}`,
      privateKey: values.privateKey || "mock-private-key",
      change24h: 0,
    };

    setWallets([...wallets, newWallet]);
    form.reset();

    toast({
      title: "Wallet imported",
      description: "Your wallet has been successfully imported",
    });
  };

  const handleCreateWallet = () => {
    const newWallet: WalletType = {
      id: Date.now().toString(),
      name: "New Wallet",
      currency: "Bitcoin",
      balance: 0,
      address: `bc1q${Math.random().toString(36).substring(2, 15)}`,
      privateKey: "mock-private-key-generated",
      change24h: 0,
    };

    setWallets([...wallets, newWallet]);
    
    toast({
      title: "Wallet created",
      description: "Your new wallet has been created successfully",
    });
  };

  const handleDeleteWallet = (id: string) => {
    setWallets(wallets.filter(wallet => wallet.id !== id));
    
    toast({
      title: "Wallet removed",
      description: "The wallet has been removed from your account",
    });
  };

  const handleConnectExistingWallet = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} copied`,
      description: `The ${type.toLowerCase()} has been copied to your clipboard`,
    });
  };

  const getCurrencySymbol = (currency: string) => {
    switch (currency) {
      case "Bitcoin":
        return "₿";
      case "Ethereum":
        return "Ξ";
      case "USDT":
        return "$";
      default:
        return "";
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Crypto Wallets</h1>

      <div className="grid grid-cols-1 md:flex gap-4 mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create New Wallet
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Wallet</DialogTitle>
              <DialogDescription>
                Create a new crypto wallet to store your digital assets.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="wallet-name">Wallet Name</Label>
                <Input id="wallet-name" placeholder="My Bitcoin Wallet" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wallet-password">Secure Password</Label>
                <Input id="wallet-password" type="password" placeholder="Create a strong password" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => {}}>Cancel</Button>
              <Button onClick={handleCreateWallet}>Create Wallet</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Key className="h-4 w-4" />
              Import Wallet
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Import Wallet</DialogTitle>
              <DialogDescription>
                Import an existing wallet using private key or seed phrase.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onImportWallet)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wallet Name</FormLabel>
                      <FormControl>
                        <Input placeholder="My Imported Wallet" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Tabs defaultValue="private-key">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="private-key">Private Key</TabsTrigger>
                    <TabsTrigger value="seed-phrase">Seed Phrase</TabsTrigger>
                  </TabsList>
                  <TabsContent value="private-key" className="space-y-4">
                    <FormField
                      control={form.control}
                      name="privateKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Private Key</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                  <TabsContent value="seed-phrase" className="space-y-4">
                    <FormField
                      control={form.control}
                      name="seedPhrase"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seed Phrase</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your 12 or 24 word seed phrase"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TabsContent>
                </Tabs>

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password (to encrypt wallet)</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Import Wallet
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

        {!isConnected && (
          <Button variant="outline" onClick={handleConnectExistingWallet} className="gap-2">
            <Wallet className="h-4 w-4" />
            Connect Existing Wallet
          </Button>
        )}
      </div>

      {isConnected && (
        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center">
              <Wallet className="h-5 w-5 mr-2 text-primary" />
              <span className="text-sm">Connected: </span>
              <span className="text-sm font-mono ml-2 truncate">{account}</span>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wallets.map((wallet) => (
          <div key={wallet.id} className="flex flex-col">
            <WalletCard
              currency={wallet.currency}
              balance={wallet.balance}
              symbol={getCurrencySymbol(wallet.currency)}
              change24h={wallet.change24h}
            />
            <div className="flex mt-2 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={() => setActiveWallet(wallet)}
              >
                <Key className="h-4 w-4 mr-1" />
                Details
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                onClick={() => handleDeleteWallet(wallet.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!activeWallet} onOpenChange={(open) => !open && setActiveWallet(null)}>
        <DialogContent className="max-w-md">
          {activeWallet && (
            <>
              <DialogHeader>
                <DialogTitle>{activeWallet.name}</DialogTitle>
                <DialogDescription>
                  {activeWallet.currency} Wallet
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Address</label>
                  <div className="flex mt-1">
                    <Input 
                      value={activeWallet.address} 
                      readOnly 
                      className="font-mono text-sm"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2"
                      onClick={() => copyToClipboard(activeWallet.address, "Address")}
                    >
                      <Clipboard className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Private Key</label>
                  <div className="flex mt-1">
                    <Input 
                      type={showPrivateKey ? "text" : "password"} 
                      value={activeWallet.privateKey} 
                      readOnly 
                      className="font-mono text-sm"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2"
                      onClick={() => setShowPrivateKey(!showPrivateKey)}
                    >
                      {showPrivateKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-1"
                      onClick={() => copyToClipboard(activeWallet.privateKey, "Private key")}
                    >
                      <Clipboard className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-destructive mt-1">
                    Never share your private key with anyone!
                  </p>
                </div>
                
                <QRCodeHandler 
                  address={activeWallet.address} 
                  onScan={(data) => {
                    toast({
                      title: "QR Code Scanned",
                      description: `Scanned address: ${data.substring(0, 10)}...`,
                    });
                  }} 
                />
                
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center"
                    onClick={() => {
                      setActiveWallet(null);
                      toast({
                        title: "Redirecting",
                        description: "Redirecting to send page...",
                      });
                    }}
                  >
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    Send
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center"
                    onClick={() => {
                      setActiveWallet(null);
                      toast({
                        title: "Redirecting",
                        description: "Redirecting to receive page...",
                      });
                    }}
                  >
                    <ArrowDownLeft className="w-4 h-4 mr-1" />
                    Receive
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CryptoWallets;
