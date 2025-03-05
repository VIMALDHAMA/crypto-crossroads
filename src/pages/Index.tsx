import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, Shield, Globe, Coins, 
  Wallet, Receipt, CreditCard, 
  BarChart3, ArrowLeftRight, Bot,
  AlertTriangle, TrendingUp, Lock
} from "lucide-react";
import { Link } from "react-router-dom";
import { AIInsights } from "@/components/AIInsights";
import { AICopilot } from "@/components/AICopilot";
import { PortfolioAnalytics } from "@/components/PortfolioAnalytics";
import { motion, MotionConfig } from "framer-motion";

interface AIInsight {
  type: "alert" | "recommendation" | "prediction";
  title: string;
  description: string;
  timestamp: string;
}

const mockInsights: AIInsight[] = [
  {
    type: "alert",
    title: "Suspicious Activity Detected",
    description: "Multiple high-value transactions detected from unknown IP addresses. Security review recommended.",
    timestamp: new Date().toISOString()
  },
  {
    type: "recommendation",
    title: "Portfolio Optimization",
    description: "Market analysis suggests increasing allocation in Ethereum and Solana. Consider rebalancing.",
    timestamp: new Date().toISOString()
  },
  {
    type: "prediction",
    title: "Market Trend Analysis",
    description: "Bullish indicators detected for Layer 2 solutions. Consider exploring Polygon investments.",
    timestamp: new Date().toISOString()
  }
];

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MotionConfig>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        {/* Hero Section */}
        <section className="container py-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
              Next-Generation Blockchain Financial Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience seamless crypto trading across Solana, Ethereum, Polygon, and Lightning Network with advanced AI-powered insights
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <Link to="/signup">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/login">Connect Wallet</Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Security Features */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="text-center">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
                <p className="text-gray-600">Multi-layer protection with real-time fraud detection</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multi-Chain Support</h3>
                <p className="text-gray-600">Seamless integration with major blockchain networks</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Smart recommendations and market analysis</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AI Insights & Analytics Section */}
        <section className="py-20">
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-4xl font-bold mb-4">AI-Powered Insights</h2>
              <p className="text-xl text-gray-600">Real-time analytics and smart recommendations for your portfolio</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <AIInsights />
              <PortfolioAnalytics />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Wallet */}
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <Link to="/wallet" className="block">
                      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                        <Wallet className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">Multi-Chain Wallet</h3>
                      <p className="text-gray-600">Support for MetaMask, WalletConnect, and custom wallets</p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Exchange */}
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <Link to="/exchange" className="block">
                      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                        <ArrowLeftRight className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">Cross-Chain Exchange</h3>
                      <p className="text-gray-600">Seamless trading across multiple blockchain networks</p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Assets */}
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <Link to="/assets" className="block">
                      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                        <Coins className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">Digital Assets</h3>
                      <p className="text-gray-600">Manage tokens, NFTs, and smart contracts</p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Transactions */}
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <Link to="/transactions" className="block">
                      <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                        <Receipt className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">Transaction History</h3>
                      <p className="text-gray-600">Detailed tracking with fraud detection</p>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Security */}
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Advanced Security</h3>
                    <p className="text-gray-600">Multi-factor authentication and fraud prevention</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Analytics */}
              <motion.div variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">Portfolio Analytics</h3>
                    <p className="text-gray-600">AI-powered insights and recommendations</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container">
            <motion.div 
              className="grid md:grid-cols-3 gap-8 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-4xl font-bold text-primary mb-2">$5B+</h3>
                <p className="text-gray-600">Trading Volume</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-4xl font-bold text-primary mb-2">250K+</h3>
                <p className="text-gray-600">Active Users</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-4xl font-bold text-primary mb-2">4</h3>
                <p className="text-gray-600">Blockchain Networks</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-20">
          <div className="container text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust our platform for secure multi-chain trading
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/signup">Create Account</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white hover:text-primary" asChild>
                  <Link to="/login">Connect Wallet</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Copilot */}
        <AICopilot />
      </div>
    </MotionConfig>
  );
};

export default Index;
