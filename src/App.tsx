import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import BrokerageSourcingPage from "./pages/BrokerageSourcingPage";
import OriginsPage from "./pages/OriginsPage";
import OriginDetailPage from "./pages/OriginDetailPage";
import InsightsPage from "./pages/InsightsPage";
import InsightDetailPage from "./pages/InsightDetailPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ui/scroll-to-top";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="system" storageKey="imwera-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/brokerage-sourcing" element={<BrokerageSourcingPage />} />
              <Route path="/origins" element={<OriginsPage />} />
              <Route path="/origins/:slug" element={<OriginDetailPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<InsightDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
