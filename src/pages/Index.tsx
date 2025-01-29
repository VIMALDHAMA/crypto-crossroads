import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, Shield, Globe, Coins, Zap, 
  Wallet, Receipt, CreditCard, UserCircle, 
  KeyRound, QrCode, Brain, Exchange
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-20 animate-fade-in">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Next-Generation Blockchain Financial Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Secure cross-border payments and tokenized asset trading, powered by blockchain technology and AI
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Wallet Features */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/wallet" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Wallet className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Multi-Currency Wallet</h3>
                  <p className="text-gray-600">Manage multiple cryptocurrencies with real-time conversion</p>
                </Link>
              </CardContent>
            </Card>

            {/* QR Code Features */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/payment" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <QrCode className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">QR Payments</h3>
                  <p className="text-gray-600">Send and receive payments using QR codes</p>
                </Link>
              </CardContent>
            </Card>

            {/* Exchange Features */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/exchange" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Exchange className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Crypto Exchange</h3>
                  <p className="text-gray-600">Real-time crypto-to-crypto conversion with AI optimization</p>
                </Link>
              </CardContent>
            </Card>

            {/* AI Features */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/insights" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Insights</h3>
                  <p className="text-gray-600">Smart analytics and fraud detection</p>
                </Link>
              </CardContent>
            </Card>

            {/* Transaction Features */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/transactions" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Receipt className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Transactions</h3>
                  <p className="text-gray-600">View history and optimize fees</p>
                </Link>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/security" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Security</h3>
                  <p className="text-gray-600">Advanced security features and monitoring</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for their crypto needs
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