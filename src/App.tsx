import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Wedding from "./pages/Wedding";
import Registry from "./pages/Registry";
import StripeGift from "./pages/StripeGift";
import GroomBride from "./pages/GroomBride";
import Greetings from "./pages/Greetings";
import WhenWhere from "./pages/WhenWhere";
import Hotels from "./pages/Hotels";
import RSVP from "./pages/RSVP";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Preloader from "./components/Preloader";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and check if it's the first visit
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // First visit - show preloader for 5 seconds
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 5000);
      
      return () => clearTimeout(timer);
    } else {
      // Returning visitor - show preloader briefly
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Preloader key="preloader" />
          ) : (
            <BrowserRouter key="app">
              <Routes>
                <Route path="/" element={<Wedding />} />
                <Route path="/groom-bride" element={<GroomBride />} />
                <Route path="/greetings" element={<Greetings />} />
                <Route path="/when-where" element={<WhenWhere />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/rsvp" element={<RSVP />} />
                <Route path="/registry" element={<Registry />} />
                <Route path="/gift" element={<StripeGift />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
