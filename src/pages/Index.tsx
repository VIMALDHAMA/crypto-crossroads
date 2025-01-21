import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Globe, Coins, Zap } from "lucide-react";
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
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/wallet">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/assets">Explore Assets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose BlockFin</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Payments</h3>
                <p className="text-gray-600">Instant cross-border transfers at minimal costs</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Asset Tokenization</h3>
                <p className="text-gray-600">Trade fractional ownership in real-world assets</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-grade encryption and multi-sig protection</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Smart Contracts</h3>
                <p className="text-gray-600">Automated compliance and instant settlements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-2">Basic</h3>
                <div className="text-3xl font-bold mb-4">$29<span className="text-lg font-normal text-gray-600">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Up to 100 transactions/month
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Basic asset tokenization
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-primary">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-2">Professional</h3>
                <div className="text-3xl font-bold mb-4">$99<span className="text-lg font-normal text-gray-600">/mo</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Unlimited transactions
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Advanced asset tokenization
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    24/7 priority support
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">Custom</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Custom transaction limits
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Custom asset solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Dedicated account manager
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Contact Sales</Button>
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
          <Button size="lg" variant="secondary" asChild>
            <Link to="/wallet">Create Your Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;