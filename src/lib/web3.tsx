import { createContext, useContext, useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface Balance {
  crypto: string;
  fiat: string;
  currency: string;
  chain: string;
}

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  status: 'pending' | 'completed' | 'failed';
  fee: string;
  chain: string;
}

interface CrossChainSwap {
  fromChain: string;
  toChain: string;
  fromToken: string;
  toToken: string;
  amount: string;
  estimatedGas: string;
  slippage: number;
}

interface Web3ContextType {
  web3: any | null;
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  sendTransaction: (to: string, amount: string, chain: string) => Promise<string>;
  getBalances: () => Promise<Balance[]>;
  importWallet: (privateKey: string) => Promise<void>;
  exportWallet: () => Promise<string>;
  predictFee: () => Promise<{ slow: string; medium: string; fast: string }>;
  isConnected: boolean;
  supportedChains: string[];
  currentChain: string;
  switchChain: (chainId: string) => Promise<void>;
  estimateCrossChainSwap: (swap: Omit<CrossChainSwap, 'estimatedGas'>) => Promise<CrossChainSwap>;
  executeCrossChainSwap: (swap: CrossChainSwap) => Promise<string>;
}

const supportedChainsConfig = [
  { id: '1', name: 'Ethereum', symbol: 'ETH' },
  { id: '56', name: 'BNB Chain', symbol: 'BNB' },
  { id: '137', name: 'Polygon', symbol: 'MATIC' },
  { id: '43114', name: 'Avalanche', symbol: 'AVAX' },
];

const Web3Context = createContext<Web3ContextType>({} as Web3ContextType);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const [web3, setWeb3] = useState<any | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [currentChain, setCurrentChain] = useState<string>('1'); // Default to Ethereum
  const { toast } = useToast();

  const connectWallet = async () => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new (window as any).Web3((window as any).ethereum);
        const accounts = await web3Instance.eth.getAccounts();
        const chainId = await web3Instance.eth.getChainId();
        
        setWeb3(web3Instance);
        setAccount(accounts[0]);
        setCurrentChain(chainId.toString());
        
        (window as any).ethereum.on('accountsChanged', (newAccounts: string[]) => {
          setAccount(newAccounts[0] || null);
        });

        (window as any).ethereum.on('chainChanged', (chainId: string) => {
          setCurrentChain(parseInt(chainId).toString());
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

  const switchChain = async (chainId: string) => {
    if (!web3 || !account) throw new Error('Wallet not connected');

    try {
      await (window as any).ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${parseInt(chainId).toString(16)}` }],
      });
      
      setCurrentChain(chainId);
      toast({
        title: "Network Changed",
        description: `Switched to ${supportedChainsConfig.find(c => c.id === chainId)?.name}`,
      });
    } catch (error: any) {
      if (error.code === 4902) {
        toast({
          variant: "destructive",
          title: "Network Not Found",
          description: "Please add this network to your wallet first",
        });
      }
      throw new Error('Failed to switch chain');
    }
  };

  const estimateCrossChainSwap = async (swap: Omit<CrossChainSwap, 'estimatedGas'>): Promise<CrossChainSwap> => {
    // Implementation would integrate with actual bridge protocols
    return {
      ...swap,
      estimatedGas: "0.005"
    };
  };

  const executeCrossChainSwap = async (swap: CrossChainSwap): Promise<string> => {
    if (!web3 || !account) throw new Error('Wallet not connected');

    try {
      // Implementation would integrate with actual bridge protocols
      toast({
        title: "Cross-Chain Swap Initiated",
        description: `Swapping ${swap.amount} ${swap.fromToken} from ${swap.fromChain} to ${swap.toChain}`,
      });
      return "mock_transaction_hash";
    } catch (error) {
      console.error('Cross-chain swap failed:', error);
      toast({
        variant: "destructive",
        title: "Swap Failed",
        description: "Failed to execute cross-chain swap",
      });
      throw new Error('Cross-chain swap failed');
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

  const sendTransaction = async (to: string, amount: string, chain: string) => {
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
    return [
      { crypto: "ETH", fiat: "50000", currency: "USD", chain: "1" },
      { crypto: "BTC", fiat: "75000", currency: "USD", chain: "1" },
      { crypto: "USDT", fiat: "25000", currency: "USD", chain: "1" },
    ];
  };

  const importWallet = async (privateKey: string): Promise<void> => {
    // Implementation would go here
    toast({
      title: "Wallet Imported",
      description: "Successfully imported wallet",
    });
  };

  const exportWallet = async (): Promise<string> => {
    // Implementation would go here
    return "mock_private_key";
  };

  const predictFee = async () => {
    return {
      slow: "0.001",
      medium: "0.002",
      fast: "0.003"
    };
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
        importWallet,
        exportWallet,
        predictFee,
        isConnected: !!account,
        supportedChains: supportedChainsConfig.map(chain => chain.id),
        currentChain,
        switchChain,
        estimateCrossChainSwap,
        executeCrossChainSwap,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);
