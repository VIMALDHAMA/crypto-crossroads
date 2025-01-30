import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, Shield, Globe, Coins, 
  Wallet, Receipt, CreditCard, 
  BarChart3, ArrowLeftRight, Bot
} from "lucide-react";
import { Link } from "react-router-dom";
import { AIInsights } from "@/components/AIInsights";
import { AICopilot } from "@/components/AICopilot";
import { PortfolioAnalytics } from "@/components/PortfolioAnalytics";

const mockInsights = [
  {
    type: 'alert',
    title: 'Unusual Activity Detected',
    description: 'Multiple high-value transactions detected in the last hour. Consider reviewing for security.',
    timestamp: new Date().toISOString()
  },
  {
    type: 'recommendation',
    title: 'Portfolio Diversification',
    description: 'Your portfolio is heavily concentrated in crypto. Consider diversifying into different asset classes.',
    timestamp: new Date().toISOString()
  },
  {
    type: 'prediction',
    title: 'Market Trend Analysis',
    description: 'Based on current trends, consider increasing your position in stable coins.',
    timestamp: new Date().toISOString()
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-20 animate-fade-in">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Next-Generation Blockchain Financial Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience seamless crypto trading, secure wallet management, and advanced financial tools powered by blockchain technology
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/signup">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/login">Login to Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Insights & Analytics Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Insights</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <AIInsights insights={mockInsights} />
            <AICopilot />
          </div>
          <div className="mt-8">
            <PortfolioAnalytics />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wallet */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/wallet" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Wallet className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Multi-Currency Wallet</h3>
                  <p className="text-gray-600">Secure storage and management of multiple cryptocurrencies</p>
                </Link>
              </CardContent>
            </Card>

            {/* Exchange */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/exchange" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <ArrowLeftRight className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Advanced Exchange</h3>
                  <p className="text-gray-600">Trade cryptocurrencies with real-time market data</p>
                </Link>
              </CardContent>
            </Card>

            {/* Dashboard */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/dashboard" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600">Comprehensive portfolio tracking and analysis</p>
                </Link>
              </CardContent>
            </Card>

            {/* Assets */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/assets" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Coins className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Digital Assets</h3>
                  <p className="text-gray-600">Manage and track your digital asset portfolio</p>
                </Link>
              </CardContent>
            </Card>

            {/* Transactions */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/transactions" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Receipt className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Transaction History</h3>
                  <p className="text-gray-600">Track and analyze your transaction history</p>
                </Link>
              </CardContent>
            </Card>

            {/* AI Assistant */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">AI Copilot</h3>
                <p className="text-gray-600">Get personalized insights and recommendations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">$1B+</h3>
              <p className="text-gray-600">Trading Volume</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">100K+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600">Supported Currencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Trading?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for their crypto trading needs
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/signup">Create Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white hover:text-primary" asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;