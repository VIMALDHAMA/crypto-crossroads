import { WalletCard } from "@/components/WalletCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon } from "lucide-react";

const mockWallets = [
  {
    currency: "US Dollar",
    balance: 50000,
    symbol: "$",
    change24h: 2.5,
  },
  {
    currency: "Euro",
    balance: 42000,
    symbol: "€",
    change24h: -1.2,
  },
  {
    currency: "Bitcoin",
    balance: 2.5,
    symbol: "₿",
    change24h: 5.7,
  },
];

const Wallet = () => {
  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Wallet</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="gap-2">
            <ArrowUpRight className="w-4 h-4" />
            Send
          </Button>
          <Button variant="outline" className="gap-2">
            <ArrowDownLeft className="w-4 h-4" />
            Receive
          </Button>
          <Button className="gap-2">
            <WalletIcon className="w-4 h-4" />
            Add Wallet
          </Button>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {mockWallets.map((wallet, index) => (
          <WalletCard key={index} {...wallet} />
        ))}
      </div>
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-24 flex-col gap-2">
            <ArrowUpRight className="w-6 h-6" />
            Send Money
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-2">
            <ArrowDownLeft className="w-6 h-6" />
            Receive Money
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-2">
            <WalletIcon className="w-6 h-6" />
            Add Wallet
          </Button>
          <Button variant="outline" className="h-24 flex-col gap-2">
            <WalletIcon className="w-6 h-6" />
            Exchange
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Wallet;