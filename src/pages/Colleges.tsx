import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Filter } from "lucide-react";
import { colleges } from "@/data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Colleges = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("all");

  // Get unique states by parsing location
  const states = Array.from(new Set(colleges.map(c => {
    const parts = c.location.split(", ");
    return parts[parts.length - 1]; // Get the last part (state)
  }))).sort();

  // Filter colleges based on search and state
  const filteredColleges = colleges.filter((college) => {
    const [city, state] = college.location.split(", ");
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesState = stateFilter === "all" || college.location.endsWith(stateFilter);
    return matchesSearch && matchesState;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Top Colleges</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover events from {colleges.length}+ premier institutions across India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 p-4 bg-card rounded-2xl shadow-[var(--shadow-card)]">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search colleges by name, city, or state..."
                className="pl-12 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={stateFilter} onValueChange={setStateFilter}>
              <SelectTrigger className="w-full md:w-[200px] h-12">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredColleges.length}</span> college{filteredColleges.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredColleges.map((college) => (
            <Link key={college.id} to={`/college/${college.id}`}>
              <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)] h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition-all">
                    <img src={college.logo} alt={college.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {college.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{college.description}</p>
                    <div className="flex items-center justify-center text-xs text-muted-foreground mt-3 space-x-2">
                      <MapPin className="h-3 w-3" />
                      <span>{college.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No colleges found matching your search.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                setStateFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Colleges;
