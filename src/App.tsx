import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dashboard from "@/pages/Dashboard";
import Index from "@/pages/Index";
import Account from "@/pages/Account";
import Assets from "@/pages/Assets";
import Exchange from "@/pages/Exchange";
import Transactions from "@/pages/Transactions";
import Wallet from "@/pages/Wallet";
import Payment from "@/pages/Payment";
import CryptoPayment from "@/pages/CryptoPayment";
import Security from "@/pages/Security";
import Analytics from "@/pages/Analytics";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";

function App() {
  return (
    <MotionConfig>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/crypto-payment" element={<CryptoPayment />} />
              <Route path="/security" element={<Security />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;