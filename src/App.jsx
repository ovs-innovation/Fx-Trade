import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/layout/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesOverview from "./pages/ServicesOverview";
import DomesticTradeFinance from "./pages/DomesticTradeFinance";
import InternationalTradeFinance from "./pages/InternationalTradeFinance";
import ForexServices from "./pages/ForexServices";
import DebtSyndication from "./pages/DebtSyndication";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main Production Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route
            path="/services/domestic-trade-finance"
            element={<DomesticTradeFinance />}
          />
          <Route
            path="/services/international-trade-finance"
            element={<InternationalTradeFinance />}
          />
          <Route
            path="/services/forex-services"
            element={<ForexServices />}
          />
          <Route
            path="/services/debt-syndication"
            element={<DebtSyndication />}
          />
          <Route path="/contact" element={<Contact />} />

          {/* Legacy .html URL Compatibility Redirects */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />
          <Route
            path="/domastictradefinance.html"
            element={<Navigate to="/services/domestic-trade-finance" replace />}
          />
          <Route
            path="/domestictradefinance.html"
            element={<Navigate to="/services/domestic-trade-finance" replace />}
          />
          <Route
            path="/internationaltradefinance.html"
            element={<Navigate to="/services/international-trade-finance" replace />}
          />
          <Route
            path="/forexservices.html"
            element={<Navigate to="/services/forex-services" replace />}
          />
          <Route
            path="/debtsyndication.html"
            element={<Navigate to="/services/debt-syndication" replace />}
          />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="/signup.html" element={<Navigate to="/contact" replace />} />
          <Route path="/signin.html" element={<Navigate to="/contact" replace />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
