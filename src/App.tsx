import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TodoPage from "./pages/TodoPage";
import CalculatorPage from "./pages/CalculatorPage";
import GamePage from "./pages/GamePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./Navbar";
import StripeCheckout from "./pages/StripeCheckout";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/stripe-checkout" element={<StripeCheckout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
