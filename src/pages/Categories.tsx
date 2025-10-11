import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Trophy, Music, Palette, Music2, Theater, Camera, Gamepad2, BookOpen, Lightbulb } from "lucide-react";
import { categories } from "@/data/mockData";

const Categories = () => {
  const categoryIcons: Record<string, any> = {
    Code, Trophy, Music, Palette, Music2, Theater, Camera, Gamepad2, BookOpen, Lightbulb
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Categories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore events across different categories and find what interests you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <Link key={category.id} to={`/category/${category.id}`}>
                <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)] overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      {Icon && (
                        <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      )}
                      <span className="text-sm text-muted-foreground">25+ Events</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">
                      Discover amazing {category.name.toLowerCase()} events happening near you
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
