import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Scan } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QRCodeHandlerProps {
  address: string;
  onScan: (data: string) => void;
}

export function QRCodeHandler({ address, onScan }: QRCodeHandlerProps) {
  const [showScanner, setShowScanner] = useState(false);
  const { toast } = useToast();

  const handleScan = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // Implementation would go here
      stream.getTracks().forEach(track => track.stop());
      onScan("mock_scanned_address");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Scanner Error",
        description: "Could not access camera",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>QR Code</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${address}`}
            alt="Wallet QR Code"
            className="w-48 h-48"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => setShowScanner(!showScanner)} className="gap-2">
            <Scan className="w-4 h-4" />
            {showScanner ? "Hide Scanner" : "Show Scanner"}
          </Button>
          <Button variant="outline" onClick={() => {
            navigator.clipboard.writeText(address);
            toast({
              title: "Address Copied",
              description: "Wallet address copied to clipboard",
            });
          }} className="gap-2">
            <QrCode className="w-4 h-4" />
            Copy Address
          </Button>
        </div>
        {showScanner && (
          <div className="mt-4">
            <Button onClick={handleScan} className="w-full">
              Scan QR Code
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}