import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserLogin from "./pages/auth/UserLogin";
import OrganiserLogin from "./pages/auth/OrganiserLogin";
import EventDetails from "./pages/EventDetails";
import Categories from "./pages/Categories";
import CategoryEvents from "./pages/CategoryEvents";
import Colleges from "./pages/Colleges";
import Clubs from "./pages/Clubs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/user" element={<UserLogin />} />
          <Route path="/auth/organiser" element={<OrganiserLogin />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categoryId" element={<CategoryEvents />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/clubs" element={<Clubs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
