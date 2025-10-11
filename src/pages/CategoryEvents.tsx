import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { ArrowLeft } from "lucide-react";
import { events, categories } from "@/data/mockData";

const CategoryEvents = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const categoryEvents = events.filter(e => e.category.toLowerCase() === categoryId?.toLowerCase());

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link to="/categories" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Categories
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name} Events</h1>
          <p className="text-xl text-muted-foreground">
            Explore all {category.name.toLowerCase()} events and competitions
          </p>
        </div>

        {categoryEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No events found in this category yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryEvents;
