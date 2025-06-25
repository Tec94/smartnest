import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { Suspense, lazy } from "react";
import ScrollToAnchor from "./components/ScrollToAnchor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToAnchor />
        <AnimatedRoutes />
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;