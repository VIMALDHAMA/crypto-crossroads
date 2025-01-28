import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Globe, Coins, Zap, Wallet, Receipt, CreditCard, UserCircle, KeyRound } from "lucide-react";
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
            Secure cross-border payments and tokenized asset trading, powered by blockchain technology
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

      {/* Quick Access Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/dashboard" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Dashboard</h3>
                  <p className="text-gray-600">View your financial overview</p>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/wallet" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Wallet className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Wallet</h3>
                  <p className="text-gray-600">Manage your crypto wallet</p>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/assets" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Coins className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Assets</h3>
                  <p className="text-gray-600">View and manage your assets</p>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/transactions" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Receipt className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Transactions</h3>
                  <p className="text-gray-600">Track your transactions</p>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/payment" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Payments</h3>
                  <p className="text-gray-600">Make secure payments</p>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/account" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <UserCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Account</h3>
                  <p className="text-gray-600">Manage your account settings</p>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Link to="/forgot-password" className="block">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <KeyRound className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Password Recovery</h3>
                  <p className="text-gray-600">Reset your password</p>
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
            Join thousands of businesses and individuals who trust BlockFin for their blockchain financial needs
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