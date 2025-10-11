import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, Mail, Lock, ArrowLeft, Building } from "lucide-react";

const OrganiserLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-primary to-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-sm text-foreground/70 hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-8 border border-border">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Briefcase className="h-8 w-8" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">
              {isLogin ? "Organiser Portal" : "Become an Organiser"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin ? "Manage and create amazing events" : "Register to start organizing events"}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organisation Name</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="org-name" placeholder="Enter organisation name" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-person">Contact Person</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="contact-person" placeholder="Enter your name" className="pl-10" />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="org-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="org-email" type="email" placeholder="Enter organisation email" className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="org-password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="org-password" type="password" placeholder="Enter your password" className="pl-10" />
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-accent hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            <Button variant="cta" className="w-full h-12 text-base" type="submit">
              {isLogin ? "Login" : "Register"}
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "New organiser?" : "Already registered?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-accent hover:underline font-medium"
              >
                {isLogin ? "Register Now" : "Login"}
              </button>
            </p>
          </div>

          {/* Divider */}
          <div className="mt-6 flex items-center">
            <div className="flex-1 border-t border-border"></div>
            <span className="px-4 text-sm text-muted-foreground">or</span>
            <div className="flex-1 border-t border-border"></div>
          </div>

          {/* Alternative Login */}
          <div className="mt-6">
            <Link to="/auth/user">
              <Button variant="outline" className="w-full">
                Login as User
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganiserLogin;
