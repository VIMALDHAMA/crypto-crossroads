import { Link } from "react-router-dom";
import { Shield, BarChart2, CreditCard, HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">BlockFin</h3>
            <p className="text-sm text-muted-foreground">
              Next-Generation Blockchain Financial Platform
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/wallet" className="text-sm text-muted-foreground hover:text-primary">
                  Wallet
                </Link>
              </li>
              <li>
                <Link to="/exchange" className="text-sm text-muted-foreground hover:text-primary">
                  Exchange
                </Link>
              </li>
              <li>
                <Link to="/assets" className="text-sm text-muted-foreground hover:text-primary">
                  Assets
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Security</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/security" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Advanced Security
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <BarChart2 className="w-4 h-4" />
                  Analytics
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Payment Methods
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BlockFin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;