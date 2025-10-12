import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { clubs } from "@/data/mockData";

const Clubs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter clubs based on search
  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Popular <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Student Clubs</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join vibrant student communities and discover amazing events
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search clubs by name or college..."
              className="pl-12 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredClubs.length}</span> club{filteredClubs.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredClubs.map((club) => (
            <Link key={club.id} to={`/club/${club.id}`}>
              <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)] h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition-all">
                    <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {club.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{club.description}</p>
                    <p className="text-xs text-muted-foreground mt-3">{club.college}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredClubs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No clubs found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Clubs;
