import { Link } from "react-router-dom";
import { Calendar, MapPin, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  date: string;
  venue: string;
  price: number;
  category: string;
  college?: string;
}

const EventCard = ({ id, title, image, date, venue, price, category, college }: EventCardProps) => {
  return (
    <Link to={`/event/${id}`}>
      <div className="group relative bg-card rounded-xl overflow-hidden hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full bg-primary/90 text-xs font-semibold backdrop-blur-sm">
              {category}
            </span>
          </div>
          {college && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full bg-secondary/90 text-xs font-medium backdrop-blur-sm">
                {college}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="line-clamp-1">{venue}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center space-x-1">
              <IndianRupee className="h-5 w-5 text-accent" />
              <span className="text-lg font-bold">{price === 0 ? "Free" : price}</span>
            </div>
            <Button variant="cta" size="sm">
              Register
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
