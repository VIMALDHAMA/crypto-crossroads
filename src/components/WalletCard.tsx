import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface WalletCardProps {
  currency: string;
  balance: number;
  symbol: string;
  change24h?: number;
}

export function WalletCard({ currency, balance, symbol, change24h }: WalletCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{currency}</CardTitle>
        <div className="flex items-center space-x-2">
          {change24h && (
            <span className={`text-xs ${change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              {change24h >= 0 ? "+" : ""}{change24h}%
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{symbol}{balance.toLocaleString()}</div>
        <div className="flex justify-between mt-4">
          <button className="flex items-center text-sm text-secondary hover:text-secondary/80">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            Send
          </button>
          <button className="flex items-center text-sm text-secondary hover:text-secondary/80">
            <ArrowDownLeft className="w-4 h-4 mr-1" />
            Receive
          </button>
        </div>
      </CardContent>
    </Card>
  );
}