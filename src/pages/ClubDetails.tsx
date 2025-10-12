import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Building2, Calendar } from "lucide-react";
import { clubs, events } from "@/data/mockData";

const ClubDetails = () => {
  const { id } = useParams();
  const club = clubs.find((c) => c.id === id);
  
  if (!club) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Club Not Found</h1>
          <Link to="/clubs">
            <Button>Browse All Clubs</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get events from this club
  const clubEvents = events.filter((event) => event.club === club.name);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Club Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-card rounded-2xl border border-border">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
              <img src={club.logo} alt={club.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-3">{club.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{club.description}</p>
              <div className="flex items-center justify-center md:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>{club.college}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{clubEvents.length} Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        {clubEvents.length > 0 ? (
          <section>
            <h2 className="text-3xl font-bold mb-8">Events by {club.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No events available yet.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ClubDetails;
