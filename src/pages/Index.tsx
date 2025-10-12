import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, MapPin, TrendingUp, Code, Trophy, Music, Palette, Music2, Theater, Camera, Gamepad2, BookOpen, Lightbulb, ChevronRight } from "lucide-react";
import { events, colleges, clubs, categories } from "@/data/mockData";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Split events for different sections
  const trendingEvents = events.slice(0, 3);
  const upcomingEvents = events.slice(3);
  
  // Show only top 8 colleges on home page
  const featuredColleges = colleges.slice(0, 8);
  
  // Get unique locations from events
  const locations = Array.from(new Set(colleges.map(c => {
    const parts = c.location.split(", ");
    return parts[parts.length - 1]; // Get state
  }))).sort();
  
  const handleSearch = () => {
    if (!searchQuery && selectedLocation === "all" && selectedCategory === "all") {
      toast.info("Please enter a search term or select filters");
      return;
    }
    
    // For now, navigate to categories page with filters
    // In a real app, you'd pass these as URL params or state
    navigate("/categories");
    toast.success("Search applied! Showing filtered results");
  };

  const categoryIcons: Record<string, any> = {
    Code, Trophy, Music, Palette, Music2, Theater, Camera, Gamepad2, BookOpen, Lightbulb
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[var(--gradient-hero)] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzQwRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djhoOHYtOGgtOHptMCAxNnY4aDh2LThoLTh6bS0xNi0xNnY4aDh2LThoLTh6bTAgMTZ2OGg4di04aC04em0tMTYtMTZ2OGg4di04SDR6bTAgMTZ2OGg4di04SDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">India's Premier College Events Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover Amazing
              <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                College Events
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your one-stop destination to explore, book, and experience the best college fests, workshops, and competitions across India.
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-3 p-2 bg-card/80 backdrop-blur-lg rounded-2xl shadow-[var(--shadow-card)]">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search events, colleges, or clubs..." 
                    className="pl-12 h-12 border-0 bg-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="h-12">
                        <MapPin className="h-4 w-4 mr-2" />
                        {selectedLocation === "all" ? "Location" : selectedLocation}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Select Location</h4>
                        <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            {locations.map((loc) => (
                              <SelectItem key={loc} value={loc}>
                                {loc}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </PopoverContent>
                  </Popover>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="h-12">
                        <Calendar className="h-4 w-4 mr-2" />
                        Category
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Select Category</h4>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.map((cat) => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </PopoverContent>
                  </Popover>
                  
                  <Button variant="hero" className="h-12 px-8" onClick={handleSearch}>
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Categories */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {categories.slice(0, 6).map((cat) => {
                const Icon = categoryIcons[cat.icon];
                return (
                  <Link key={cat.id} to={`/category/${cat.id}`}>
                    <Button variant="secondary" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {Icon && <Icon className="h-4 w-4 mr-2" />}
                      {cat.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Happening Now Section */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">🔥 Happening Now</h2>
              <p className="text-muted-foreground">Don't miss these trending events</p>
            </div>
            <Link to="/categories">
              <Button variant="ghost">
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
            <p className="text-muted-foreground">Find events that match your interests</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => {
              const Icon = categoryIcons[category.icon];
              return (
                <Link key={category.id} to={`/category/${category.id}`}>
                  <div className="group p-6 bg-card rounded-xl hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]">
                    <div className="flex flex-col items-center space-y-3 text-center">
                      {Icon && (
                        <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      )}
                      <span className="font-semibold group-hover:text-primary transition-colors">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Top Colleges Section */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">🎓 Top Colleges</h2>
              <p className="text-muted-foreground">Explore events from premier institutions</p>
            </div>
            <Link to="/colleges">
              <Button variant="ghost">
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredColleges.map((college) => (
              <Link key={college.id} to={`/college/${college.id}`}>
                <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition-all">
                      <img src={college.logo} alt={college.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {college.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{college.description}</p>
                      <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {college.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Clubs Section */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">⭐ Popular Clubs</h2>
              <p className="text-muted-foreground">Join vibrant student communities</p>
            </div>
            <Link to="/clubs">
              <Button variant="ghost">
                View All
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club) => (
              <Link key={club.id} to={`/club/${club.id}`}>
                <div className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition-all">
                      <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {club.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{club.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{club.college}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">📅 Upcoming Events</h2>
              <p className="text-muted-foreground">Mark your calendars for these amazing events</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
