import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Category Routes */}
          <Route path="/noticias" element={<CategoryPage />} />
          <Route path="/custo-de-vida" element={<CategoryPage />} />
          <Route path="/comercio-servicos" element={<CategoryPage />} />
          <Route path="/imoveis" element={<CategoryPage />} />
          <Route path="/educacao" element={<CategoryPage />} />
          <Route path="/saude" element={<CategoryPage />} />
          <Route path="/eventos" element={<CategoryPage />} />
          <Route path="/transporte" element={<CategoryPage />} />
          <Route path="/guia" element={<CategoryPage />} />
          
          {/* Article Route */}
          <Route path="/artigo/:slug" element={<ArticlePage />} />
          
          {/* 404 - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
