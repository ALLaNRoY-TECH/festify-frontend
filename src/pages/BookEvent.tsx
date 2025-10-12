import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QRCodeSVG } from "qrcode.react";
import { Calendar, MapPin, Users, Ticket, Download } from "lucide-react";
import { events } from "@/data/mockData";
import { toast } from "sonner";

const BookEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);
  
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
  });
  
  const [isBooked, setIsBooked] = useState(false);
  const [bookingId, setBookingId] = useState("");

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link to="/categories">
            <Button>Browse Events</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.name || !bookingData.email || !bookingData.phone) {
      toast.error("Please fill all required fields");
      return;
    }

    // Generate unique booking ID
    const newBookingId = `FEST${Date.now().toString().slice(-8)}`;
    setBookingId(newBookingId);
    setIsBooked(true);
    
    toast.success("Event booked successfully! Your QR code ticket is ready.");
  };

  const totalAmount = event.price * bookingData.tickets;

  const downloadQRCode = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");

      const downloadLink = document.createElement("a");
      downloadLink.download = `${event.title}-ticket-${bookingId}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  if (isBooked) {
    // Success page with QR code
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Ticket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Booking Confirmed! 🎉</CardTitle>
                <CardDescription>Your ticket has been generated successfully</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Event Details */}
                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="font-semibold text-lg mb-4">{event.title}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date} | {event.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{bookingData.tickets} Ticket(s)</span>
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="p-6 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold mb-2">Booking Details</h4>
                  <div className="space-y-1 text-sm">
                    <p><strong>Name:</strong> {bookingData.name}</p>
                    <p><strong>Email:</strong> {bookingData.email}</p>
                    <p><strong>Phone:</strong> {bookingData.phone}</p>
                    <p><strong>Booking ID:</strong> {bookingId}</p>
                    <p className="text-lg font-bold text-primary mt-3">
                      Total: ₹{totalAmount}
                    </p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg">
                  <h4 className="font-semibold text-foreground">Your Ticket QR Code</h4>
                  <div className="p-4 bg-white rounded-lg border-4 border-primary/20">
                    <QRCodeSVG
                      id="qr-code"
                      value={JSON.stringify({
                        bookingId,
                        eventId: event.id,
                        eventTitle: event.title,
                        name: bookingData.name,
                        email: bookingData.email,
                        tickets: bookingData.tickets,
                        date: event.date,
                        venue: event.venue,
                      })}
                      size={200}
                      level="H"
                    />
                  </div>
                  <p className="text-xs text-center text-muted-foreground max-w-xs">
                    Present this QR code at the event entrance for verification
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={downloadQRCode} className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download Ticket
                  </Button>
                  <Button variant="outline" onClick={() => navigate("/categories")} className="flex-1">
                    Browse More Events
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Booking form
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Book Your Event</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Event Info */}
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="font-semibold text-xl">{event.title}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-lg font-bold text-primary">₹{event.price} per ticket</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
                <CardDescription>Fill in your details to book the event</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={bookingData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tickets">Number of Tickets</Label>
                    <Input
                      id="tickets"
                      name="tickets"
                      type="number"
                      min="1"
                      max="10"
                      value={bookingData.tickets}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total Amount:</span>
                      <span className="text-2xl font-bold text-primary">
                        ₹{totalAmount}
                      </span>
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Confirm Booking
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookEvent;
