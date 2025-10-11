export interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  venue: string;
  price: number;
  category: string;
  college: string;
  club: string;
  description: string;
  timing: string;
  organiser: string;
}

export interface College {
  id: string;
  name: string;
  logo: string;
  description: string;
  location: string;
}

export interface Club {
  id: string;
  name: string;
  logo: string;
  description: string;
  college: string;
}

export const categories = [
  { id: "tech", name: "Tech", icon: "Code" },
  { id: "sports", name: "Sports", icon: "Trophy" },
  { id: "dance", name: "Dance", icon: "Music" },
  { id: "art", name: "Art", icon: "Palette" },
  { id: "music", name: "Music", icon: "Music2" },
  { id: "drama", name: "Drama", icon: "Theater" },
  { id: "photography", name: "Photography", icon: "Camera" },
  { id: "gaming", name: "Gaming", icon: "Gamepad2" },
  { id: "literary", name: "Literary", icon: "BookOpen" },
  { id: "workshops", name: "Workshops", icon: "Lightbulb" },
];

export const colleges: College[] = [
  {
    id: "1",
    name: "IIT Delhi",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop",
    description: "Indian Institute of Technology Delhi",
    location: "New Delhi",
  },
  {
    id: "2",
    name: "IIT Bombay",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop",
    description: "Indian Institute of Technology Bombay",
    location: "Mumbai",
  },
  {
    id: "3",
    name: "BITS Pilani",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop",
    description: "Birla Institute of Technology and Science",
    location: "Pilani",
  },
  {
    id: "4",
    name: "NIT Trichy",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop",
    description: "National Institute of Technology",
    location: "Trichy",
  },
];

export const clubs: Club[] = [
  {
    id: "1",
    name: "Coding Club",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=200&fit=crop",
    description: "Building the future through code",
    college: "IIT Delhi",
  },
  {
    id: "2",
    name: "Dance Society",
    logo: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop",
    description: "Express yourself through movement",
    college: "IIT Bombay",
  },
  {
    id: "3",
    name: "Photography Club",
    logo: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=200&h=200&fit=crop",
    description: "Capturing moments, creating memories",
    college: "BITS Pilani",
  },
  {
    id: "4",
    name: "Music Society",
    logo: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop",
    description: "Where melody meets harmony",
    college: "NIT Trichy",
  },
];

export const events: Event[] = [
  {
    id: "1",
    title: "TechFest 2025 - Hackathon",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    date: "15-17 March 2025",
    venue: "IIT Delhi Main Campus",
    price: 500,
    category: "Tech",
    college: "IIT Delhi",
    club: "Coding Club",
    description: "India's largest student-run tech festival featuring 48-hour hackathon, coding competitions, tech talks, and workshops.",
    timing: "9:00 AM - 6:00 PM",
    organiser: "TechFest Team",
  },
  {
    id: "2",
    title: "Rhythmica - Dance Championship",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop",
    date: "22-23 March 2025",
    venue: "IIT Bombay Auditorium",
    price: 300,
    category: "Dance",
    college: "IIT Bombay",
    club: "Dance Society",
    description: "Annual inter-college dance competition showcasing various dance forms including hip-hop, contemporary, classical, and folk.",
    timing: "5:00 PM - 10:00 PM",
    organiser: "Dance Society",
  },
  {
    id: "3",
    title: "Art Fiesta - Exhibition & Workshop",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    date: "28-30 March 2025",
    venue: "BITS Pilani Art Gallery",
    price: 0,
    category: "Art",
    college: "BITS Pilani",
    club: "Fine Arts Club",
    description: "Three-day art festival with exhibitions, live painting, sculpting workshops, and art competitions.",
    timing: "10:00 AM - 8:00 PM",
    organiser: "Fine Arts Club",
  },
  {
    id: "4",
    title: "MelodyFest - Music Extravaganza",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    date: "5-7 April 2025",
    venue: "NIT Trichy Open Air Theatre",
    price: 400,
    category: "Music",
    college: "NIT Trichy",
    club: "Music Society",
    description: "Annual music festival featuring band performances, solo competitions, DJ nights, and workshops by renowned artists.",
    timing: "4:00 PM - 11:00 PM",
    organiser: "Music Society",
  },
  {
    id: "5",
    title: "GameCon 2025 - eSports Tournament",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    date: "12-14 April 2025",
    venue: "IIT Delhi Sports Complex",
    price: 600,
    category: "Gaming",
    college: "IIT Delhi",
    club: "Gaming Club",
    description: "Premier gaming event with tournaments in BGMI, Valorant, FIFA, and more with exciting prize pools.",
    timing: "9:00 AM - 9:00 PM",
    organiser: "Gaming Club",
  },
  {
    id: "6",
    title: "LitFest - Literary Carnival",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop",
    date: "20-21 April 2025",
    venue: "BITS Pilani Amphitheatre",
    price: 0,
    category: "Literary",
    college: "BITS Pilani",
    club: "Literary Society",
    description: "Celebration of literature with author meet-ups, poetry slams, debates, and creative writing workshops.",
    timing: "2:00 PM - 7:00 PM",
    organiser: "Literary Society",
  },
];
