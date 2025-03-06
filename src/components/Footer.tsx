
import { Link } from "react-router-dom";
import { Shield, BarChart2, CreditCard, HelpCircle, Users, Briefcase, Phone, FileText, Info } from "lucide-react";

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
            <div className="mt-4 flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
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
              <li>
                <Link to="/service-charges" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Service Charges
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contribution" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Contribution
                </Link>
              </li>
              <li>
                <Link to="/affiliation" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Affiliation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help-center" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security
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
