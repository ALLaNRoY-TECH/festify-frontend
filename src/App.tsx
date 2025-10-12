import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import UserLogin from "./pages/auth/UserLogin";
import OrganiserLogin from "./pages/auth/OrganiserLogin";
import EventDetails from "./pages/EventDetails";
import Categories from "./pages/Categories";
import CategoryEvents from "./pages/CategoryEvents";
import Colleges from "./pages/Colleges";
import Clubs from "./pages/Clubs";
import CollegeDetails from "./pages/CollegeDetails";
import ClubDetails from "./pages/ClubDetails";
import BookEvent from "./pages/BookEvent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/auth/user" element={<UserLogin />} />
            <Route path="/auth/organiser" element={<OrganiserLogin />} />
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/event/:id" element={<ProtectedRoute><EventDetails /></ProtectedRoute>} />
            <Route path="/event/:id/book" element={<ProtectedRoute><BookEvent /></ProtectedRoute>} />
            <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
            <Route path="/category/:categoryId" element={<ProtectedRoute><CategoryEvents /></ProtectedRoute>} />
            <Route path="/colleges" element={<ProtectedRoute><Colleges /></ProtectedRoute>} />
            <Route path="/college/:id" element={<ProtectedRoute><CollegeDetails /></ProtectedRoute>} />
            <Route path="/clubs" element={<ProtectedRoute><Clubs /></ProtectedRoute>} />
            <Route path="/club/:id" element={<ProtectedRoute><ClubDetails /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
