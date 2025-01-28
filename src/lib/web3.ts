import { createContext, useContext, useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface Balance {
  crypto: string;
  fiat: string;
  currency: string;
}

interface Web3ContextType {
  web3: any | null;
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  sendTransaction: (to: string, amount: string) => Promise<string>;
  getBalances: () => Promise<Balance[]>;
  isConnected: boolean;
}

const Web3Context = createContext<Web3ContextType>({} as Web3ContextType);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [web3, setWeb3] = useState<any | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const { toast } = useToast();

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new (window as any).Web3((window as any).ethereum);
        const accounts = await web3Instance.eth.getAccounts();
        
        setWeb3(web3Instance);
        setAccount(accounts[0]);
        
        // Add account change listener
        (window as any).ethereum.on('accountsChanged', (newAccounts: string[]) => {
          setAccount(newAccounts[0] || null);
        });

        toast({
          title: "Wallet Connected",
          description: "Successfully connected to your wallet",
        });
      } catch (error) {
        console.error('Wallet connection failed:', error);
        toast({
          variant: "destructive",
          title: "Connection Failed",
          description: "Failed to connect to wallet",
        });
        throw new Error('Wallet connection failed');
      }
    } else {
      toast({
        variant: "destructive",
        title: "No Wallet Found",
        description: "Please install MetaMask or another Web3 wallet",
      });
      throw new Error('No Ethereum provider detected');
    }
  };

  const disconnectWallet = () => {
    setWeb3(null);
    setAccount(null);
    toast({
      title: "Wallet Disconnected",
      description: "Successfully disconnected from your wallet",
    });
  };

  const sendTransaction = async (to: string, amount: string) => {
    if (!web3 || !account) throw new Error('Wallet not connected');
    
    const tx = {
      from: account,
      to,
      value: web3.utils.toWei(amount, 'ether'),
      gas: 21000,
    };

    try {
      const receipt = await web3.eth.sendTransaction(tx);
      toast({
        title: "Transaction Sent",
        description: `Transaction hash: ${receipt.transactionHash}`,
      });
      return receipt.transactionHash;
    } catch (error) {
      console.error('Transaction failed:', error);
      toast({
        variant: "destructive",
        title: "Transaction Failed",
        description: "Failed to send transaction",
      });
      throw new Error('Transaction failed');
    }
  };

  const getBalances = async (): Promise<Balance[]> => {
    // Mock data for now - replace with actual Web3 calls
    return [
      { crypto: "ETH", fiat: "50000", currency: "USD" },
      { crypto: "BTC", fiat: "75000", currency: "USD" },
      { crypto: "USDT", fiat: "25000", currency: "USD" },
    ];
  };

  return (
    <Web3Context.Provider 
      value={{ 
        web3, 
        account, 
        connectWallet, 
        disconnectWallet, 
        sendTransaction,
        getBalances,
        isConnected: !!account
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);