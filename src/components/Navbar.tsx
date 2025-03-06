
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  User, LogOut, Shield, BarChart2, Wallet, 
  ArrowLeftRight, Coins, FileText, CreditCard, 
  Home, Lock
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // This would typically come from your auth context
  const isAuthenticated = false;

  const navItems = [
    { path: "/", label: "Home", icon: Home, protected: false },
    { path: "/dashboard", label: "Dashboard", icon: BarChart2, protected: true },
    { path: "/wallet", label: "Wallet", icon: Wallet, protected: true },
    { path: "/exchange", label: "Exchange", icon: ArrowLeftRight, protected: true },
    { path: "/assets", label: "Assets", icon: Coins, protected: true },
    { path: "/transactions", label: "Transactions", icon: FileText, protected: true },
    { path: "/payment", label: "Payment", icon: CreditCard, protected: true },
    { path: "/security", label: "Security", icon: Shield, protected: true },
    { path: "/analytics", label: "Analytics", icon: BarChart2, protected: true },
  ];

  const handleLogout = () => {
    // Implement logout logic here
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8 flex items-center space-x-2">
            <Lock className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-primary">BlockFin</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                (!item.protected || isAuthenticated) && (
                  <NavigationMenuItem key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                        location.pathname === item.path && "bg-accent/50"
                      )}
                    >
                      {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/account">Account Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
