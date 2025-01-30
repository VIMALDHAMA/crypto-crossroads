import { BrowserRouter as Router } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import "./App.css";
import Dashboard from "@/pages/Dashboard";
import Index from "@/pages/Index";

function App() {
  return (
    <MotionConfig>
      <Router>
        <Index />
        <Dashboard />
      </Router>
    </MotionConfig>
  );
}

export default App;
