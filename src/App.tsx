
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Architecture from "./pages/Architecture";
import NotFound from "./pages/NotFound";
import Technical from "./pages/Technical";
import Safety from "./pages/Safety";
import CostComparison from "./pages/CostComparison";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/technical" element={<Technical />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/cost-comparison" element={<CostComparison />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
