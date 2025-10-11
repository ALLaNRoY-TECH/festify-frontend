import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, User, Building, IndianRupee, Share2, Heart, ArrowLeft } from "lucide-react";
import { events } from "@/data/mockData";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  const similarEvents = events.filter(e => e.id !== id && e.category === event?.category).slice(0, 3);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-2 rounded-full bg-primary/90 backdrop-blur-sm font-semibold">
                  {event.category}
                </span>
              </div>
            </div>

            {/* Event Info */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Date</p>
                    <p className="text-sm">{event.date}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Timing</p>
                    <p className="text-sm">{event.timing}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Venue</p>
                    <p className="text-sm">{event.venue}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Building className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-foreground">College</p>
                    <p className="text-sm">{event.college}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-muted-foreground">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Organiser</p>
                    <p className="text-sm">{event.organiser}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-muted-foreground">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Club</p>
                    <p className="text-sm">{event.club}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="text-xl font-semibold mb-3">About This Event</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-2">Entry Fee</p>
                <div className="flex items-center space-x-2">
                  <IndianRupee className="h-8 w-8 text-accent" />
                  <span className="text-4xl font-bold">
                    {event.price === 0 ? "Free" : event.price}
                  </span>
                </div>
              </div>

              <Button variant="cta" className="w-full h-12 text-base mb-3">
                Register Now
              </Button>

              <Button variant="outline" className="w-full">
                Add to Wishlist
              </Button>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Spots Left</span>
                  <span className="font-semibold text-accent">120</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Already Registered</span>
                  <span className="font-semibold">380</span>
                </div>
              </div>
            </div>

            {/* Contact Organiser */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-semibold mb-4">Contact Organiser</h3>
              <Button variant="outline" className="w-full mb-2">
                Send Message
              </Button>
              <Button variant="ghost" className="w-full">
                View Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Similar Events */}
        {similarEvents.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Similar Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default EventDetails;
