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
  // Delhi
  { id: "1", name: "IIT Delhi", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "New Delhi, Delhi" },
  { id: "2", name: "Delhi University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "University of Delhi", location: "Delhi, Delhi" },
  { id: "3", name: "JNU", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "Jawaharlal Nehru University", location: "New Delhi, Delhi" },
  { id: "4", name: "DTU", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "Delhi Technological University", location: "Delhi, Delhi" },
  { id: "5", name: "NSUT", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Netaji Subhas University of Technology", location: "Delhi, Delhi" },
  { id: "6", name: "Jamia Millia Islamia", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Central University", location: "New Delhi, Delhi" },
  { id: "7", name: "IGDTUW", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Indira Gandhi Delhi Technical University", location: "Delhi, Delhi" },
  { id: "8", name: "Ambedkar University", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "Ambedkar University Delhi", location: "Delhi, Delhi" },
  { id: "9", name: "IP University", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Guru Gobind Singh Indraprastha University", location: "Delhi, Delhi" },
  { id: "10", name: "St. Stephen's College", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "Delhi University College", location: "Delhi, Delhi" },

  // Maharashtra
  { id: "11", name: "IIT Bombay", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Mumbai, Maharashtra" },
  { id: "12", name: "Mumbai University", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "University of Mumbai", location: "Mumbai, Maharashtra" },
  { id: "13", name: "VJTI", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "Veermata Jijabai Technological Institute", location: "Mumbai, Maharashtra" },
  { id: "14", name: "COEP", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "College of Engineering Pune", location: "Pune, Maharashtra" },
  { id: "15", name: "Symbiosis", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Symbiosis International University", location: "Pune, Maharashtra" },
  { id: "16", name: "VNIT Nagpur", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Visvesvaraya National Institute of Technology", location: "Nagpur, Maharashtra" },
  { id: "17", name: "ICT Mumbai", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Institute of Chemical Technology", location: "Mumbai, Maharashtra" },
  { id: "18", name: "SPIT Mumbai", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "Sardar Patel Institute of Technology", location: "Mumbai, Maharashtra" },
  { id: "19", name: "DJ Sanghvi", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Dwarkadas J. Sanghvi College", location: "Mumbai, Maharashtra" },
  { id: "20", name: "PICT Pune", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "Pune Institute of Computer Technology", location: "Pune, Maharashtra" },

  // Karnataka
  { id: "21", name: "IISc Bangalore", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Science", location: "Bangalore, Karnataka" },
  { id: "22", name: "IIT Bangalore", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Bangalore, Karnataka" },
  { id: "23", name: "NITK Surathkal", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "National Institute of Technology Karnataka", location: "Surathkal, Karnataka" },
  { id: "24", name: "PES University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "PES University", location: "Bangalore, Karnataka" },
  { id: "25", name: "RV College", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "RV College of Engineering", location: "Bangalore, Karnataka" },
  { id: "26", name: "BMS College", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "BMS College of Engineering", location: "Bangalore, Karnataka" },
  { id: "27", name: "Manipal Institute", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Manipal Institute of Technology", location: "Manipal, Karnataka" },
  { id: "28", name: "MSRIT", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "MS Ramaiah Institute of Technology", location: "Bangalore, Karnataka" },
  { id: "29", name: "Christ University", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Christ University", location: "Bangalore, Karnataka" },
  { id: "30", name: "SJCE Mysore", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "Sri Jayachamarajendra College", location: "Mysore, Karnataka" },

  // Tamil Nadu
  { id: "31", name: "IIT Madras", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Chennai, Tamil Nadu" },
  { id: "32", name: "Anna University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "Anna University", location: "Chennai, Tamil Nadu" },
  { id: "33", name: "NIT Trichy", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "National Institute of Technology", location: "Trichy, Tamil Nadu" },
  { id: "34", name: "PSG Tech", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "PSG College of Technology", location: "Coimbatore, Tamil Nadu" },
  { id: "35", name: "VIT Vellore", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Vellore Institute of Technology", location: "Vellore, Tamil Nadu" },
  { id: "36", name: "SRM University", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "SRM Institute of Science and Technology", location: "Chennai, Tamil Nadu" },
  { id: "37", name: "Amrita Vishwa", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Amrita Vishwa Vidyapeetham", location: "Coimbatore, Tamil Nadu" },
  { id: "38", name: "CEG Chennai", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "College of Engineering Guindy", location: "Chennai, Tamil Nadu" },
  { id: "39", name: "Thiagarajar College", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Thiagarajar College of Engineering", location: "Madurai, Tamil Nadu" },
  { id: "40", name: "SSN College", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "Sri Sivasubramaniya Nadar College", location: "Chennai, Tamil Nadu" },

  // West Bengal
  { id: "41", name: "IIT Kharagpur", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Kharagpur, West Bengal" },
  { id: "42", name: "Jadavpur University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "Jadavpur University", location: "Kolkata, West Bengal" },
  { id: "43", name: "Presidency University", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "Presidency University", location: "Kolkata, West Bengal" },
  { id: "44", name: "Calcutta University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "University of Calcutta", location: "Kolkata, West Bengal" },
  { id: "45", name: "NIT Durgapur", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "National Institute of Technology", location: "Durgapur, West Bengal" },
  { id: "46", name: "Heritage Institute", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Heritage Institute of Technology", location: "Kolkata, West Bengal" },
  { id: "47", name: "St. Xavier's Kolkata", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "St. Xavier's College", location: "Kolkata, West Bengal" },
  { id: "48", name: "IIEST Shibpur", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "Indian Institute of Engineering", location: "Shibpur, West Bengal" },
  { id: "49", name: "Techno India", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Techno India University", location: "Kolkata, West Bengal" },
  { id: "50", name: "Kalyani University", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "University of Kalyani", location: "Kalyani, West Bengal" },

  // Uttar Pradesh
  { id: "51", name: "IIT Kanpur", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Kanpur, Uttar Pradesh" },
  { id: "52", name: "IIT BHU", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "IIT Banaras Hindu University", location: "Varanasi, Uttar Pradesh" },
  { id: "53", name: "Aligarh Muslim University", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "AMU", location: "Aligarh, Uttar Pradesh" },
  { id: "54", name: "Lucknow University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "University of Lucknow", location: "Lucknow, Uttar Pradesh" },
  { id: "55", name: "MNNIT Allahabad", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Motilal Nehru NIT", location: "Allahabad, Uttar Pradesh" },
  { id: "56", name: "IIIT Allahabad", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Indian Institute of Information Technology", location: "Allahabad, Uttar Pradesh" },
  { id: "57", name: "HBTI Kanpur", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Harcourt Butler Technical Institute", location: "Kanpur, Uttar Pradesh" },
  { id: "58", name: "Allahabad University", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "University of Allahabad", location: "Allahabad, Uttar Pradesh" },
  { id: "59", name: "KNIT Sultanpur", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Kamla Nehru Institute", location: "Sultanpur, Uttar Pradesh" },
  { id: "60", name: "JSS Noida", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "JSS Academy of Technical Education", location: "Noida, Uttar Pradesh" },

  // Rajasthan
  { id: "61", name: "BITS Pilani", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Birla Institute of Technology and Science", location: "Pilani, Rajasthan" },
  { id: "62", name: "IIT Jodhpur", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Jodhpur, Rajasthan" },
  { id: "63", name: "NIT Jaipur", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "Malaviya National Institute", location: "Jaipur, Rajasthan" },
  { id: "64", name: "Rajasthan University", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "University of Rajasthan", location: "Jaipur, Rajasthan" },
  { id: "65", name: "MNIT Jaipur", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Malaviya National Institute of Technology", location: "Jaipur, Rajasthan" },
  { id: "66", name: "Poornima University", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Poornima University", location: "Jaipur, Rajasthan" },
  { id: "67", name: "JNU Jaipur", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Jai Narain Vyas University", location: "Jodhpur, Rajasthan" },
  { id: "68", name: "RTU Kota", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "Rajasthan Technical University", location: "Kota, Rajasthan" },
  { id: "69", name: "Manipal Jaipur", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Manipal University Jaipur", location: "Jaipur, Rajasthan" },
  { id: "70", name: "Arya College", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "Arya College of Engineering", location: "Jaipur, Rajasthan" },

  // Gujarat
  { id: "71", name: "IIT Gandhinagar", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Gandhinagar, Gujarat" },
  { id: "72", name: "NIT Surat", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "Sardar Vallabhbhai NIT", location: "Surat, Gujarat" },
  { id: "73", name: "DA-IICT", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "Dhirubhai Ambani Institute", location: "Gandhinagar, Gujarat" },
  { id: "74", name: "PDPU", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "Pandit Deendayal Energy University", location: "Gandhinagar, Gujarat" },
  { id: "75", name: "SVNIT Surat", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Sardar Vallabhbhai NIT", location: "Surat, Gujarat" },
  { id: "76", name: "LD College", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "LD College of Engineering", location: "Ahmedabad, Gujarat" },
  { id: "77", name: "Gujarat University", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Gujarat University", location: "Ahmedabad, Gujarat" },
  { id: "78", name: "Nirma University", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "Nirma University", location: "Ahmedabad, Gujarat" },
  { id: "79", name: "CEPT University", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Centre for Environmental Planning", location: "Ahmedabad, Gujarat" },
  { id: "80", name: "MSU Baroda", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "Maharaja Sayajirao University", location: "Vadodara, Gujarat" },

  // Telangana
  { id: "81", name: "IIT Hyderabad", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Hyderabad, Telangana" },
  { id: "82", name: "BITS Hyderabad", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "BITS Pilani Hyderabad Campus", location: "Hyderabad, Telangana" },
  { id: "83", name: "IIIT Hyderabad", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "International Institute of Information Technology", location: "Hyderabad, Telangana" },
  { id: "84", name: "NIT Warangal", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "National Institute of Technology", location: "Warangal, Telangana" },
  { id: "85", name: "JNTU Hyderabad", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Jawaharlal Nehru Technological University", location: "Hyderabad, Telangana" },
  { id: "86", name: "Osmania University", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Osmania University", location: "Hyderabad, Telangana" },
  { id: "87", name: "CBIT Hyderabad", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Chaitanya Bharathi Institute", location: "Hyderabad, Telangana" },
  { id: "88", name: "Vasavi College", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "Vasavi College of Engineering", location: "Hyderabad, Telangana" },
  { id: "89", name: "GRIET", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Gokaraju Rangaraju Institute", location: "Hyderabad, Telangana" },
  { id: "90", name: "CVR College", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "CVR College of Engineering", location: "Hyderabad, Telangana" },

  // Andhra Pradesh
  { id: "91", name: "IIT Tirupati", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Tirupati, Andhra Pradesh" },
  { id: "92", name: "Andhra University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "Andhra University", location: "Visakhapatnam, Andhra Pradesh" },
  { id: "93", name: "NIT Andhra", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "National Institute of Technology", location: "Tadepalligudem, Andhra Pradesh" },
  { id: "94", name: "JNTU Kakinada", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "Jawaharlal Nehru Technological University", location: "Kakinada, Andhra Pradesh" },
  { id: "95", name: "SV University", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Sri Venkateswara University", location: "Tirupati, Andhra Pradesh" },
  { id: "96", name: "GITAM University", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Gandhi Institute of Technology", location: "Visakhapatnam, Andhra Pradesh" },
  { id: "97", name: "VIT AP", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "VIT-AP University", location: "Amaravati, Andhra Pradesh" },
  { id: "98", name: "KL University", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "KL University", location: "Guntur, Andhra Pradesh" },
  { id: "99", name: "ANITS", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Anil Neerukonda Institute", location: "Visakhapatnam, Andhra Pradesh" },
  { id: "100", name: "GMR Institute", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "GMR Institute of Technology", location: "Rajam, Andhra Pradesh" },

  // Kerala
  { id: "101", name: "IIT Palakkad", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Palakkad, Kerala" },
  { id: "102", name: "NIT Calicut", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "National Institute of Technology", location: "Calicut, Kerala" },
  { id: "103", name: "CUSAT", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "Cochin University of Science and Technology", location: "Kochi, Kerala" },
  { id: "104", name: "CET Trivandrum", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "College of Engineering Trivandrum", location: "Trivandrum, Kerala" },
  { id: "105", name: "TKM College", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "TKM College of Engineering", location: "Kollam, Kerala" },
  { id: "106", name: "MG University", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Mahatma Gandhi University", location: "Kottayam, Kerala" },
  { id: "107", name: "Rajagiri", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Rajagiri School of Engineering", location: "Kochi, Kerala" },
  { id: "108", name: "Amrita Amritapuri", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "Amrita School of Engineering", location: "Kollam, Kerala" },
  { id: "109", name: "LBS College", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "LBS College of Engineering", location: "Kasaragod, Kerala" },
  { id: "110", name: "GEC Thrissur", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "Government Engineering College", location: "Thrissur, Kerala" },

  // Punjab & Haryana & Chandigarh
  { id: "111", name: "IIT Ropar", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=200&fit=crop", description: "Indian Institute of Technology", location: "Rupnagar, Punjab" },
  { id: "112", name: "Thapar University", logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop", description: "Thapar Institute of Engineering", location: "Patiala, Punjab" },
  { id: "113", name: "PEC Chandigarh", logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&h=200&fit=crop", description: "Punjab Engineering College", location: "Chandigarh" },
  { id: "114", name: "NIT Kurukshetra", logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=200&fit=crop", description: "National Institute of Technology", location: "Kurukshetra, Haryana" },
  { id: "115", name: "Panjab University", logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=200&h=200&fit=crop", description: "Panjab University", location: "Chandigarh" },
  { id: "116", name: "Chitkara University", logo: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=200&h=200&fit=crop", description: "Chitkara University", location: "Rajpura, Punjab" },
  { id: "117", name: "LPU", logo: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=200&h=200&fit=crop", description: "Lovely Professional University", location: "Phagwara, Punjab" },
  { id: "118", name: "GNDU", logo: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=200&h=200&fit=crop", description: "Guru Nanak Dev University", location: "Amritsar, Punjab" },
  { id: "119", name: "DCRUST", logo: "https://images.unsplash.com/photo-1581726707445-75cbe67eab37?w=200&h=200&fit=crop", description: "Deenbandhu Chhotu Ram University", location: "Murthal, Haryana" },
  { id: "120", name: "Amity Noida", logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=200&h=200&fit=crop", description: "Amity University", location: "Noida, Uttar Pradesh" },
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
  // Tech Events
  { id: "1", title: "TechFest 2025 - Hackathon", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", date: "15-17 March 2025", venue: "IIT Delhi Main Campus", price: 500, category: "Tech", college: "IIT Delhi", club: "Coding Club", description: "India's largest student-run tech festival featuring 48-hour hackathon, coding competitions, tech talks, and workshops.", timing: "9:00 AM - 6:00 PM", organiser: "TechFest Team" },
  { id: "2", title: "Code Sprint Championship", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop", date: "20-21 March 2025", venue: "IIT Bombay", price: 400, category: "Tech", college: "IIT Bombay", club: "Tech Club", description: "Competitive programming marathon with industry experts.", timing: "10:00 AM - 8:00 PM", organiser: "CodeSprint Team" },
  { id: "3", title: "AI & ML Summit", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop", date: "25-26 March 2025", venue: "IISc Bangalore", price: 600, category: "Tech", college: "IISc Bangalore", club: "AI Research Club", description: "Explore cutting-edge AI research and machine learning applications.", timing: "9:00 AM - 5:00 PM", organiser: "AI Summit Team" },
  { id: "4", title: "Cybersecurity Workshop", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop", date: "28-29 March 2025", venue: "BITS Pilani", price: 0, category: "Tech", college: "BITS Pilani", club: "Cyber Security Club", description: "Learn ethical hacking and cybersecurity fundamentals.", timing: "2:00 PM - 6:00 PM", organiser: "Security Team" },
  { id: "5", title: "Web Dev Bootcamp", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", date: "1-3 April 2025", venue: "NIT Trichy", price: 300, category: "Tech", college: "NIT Trichy", club: "Web Dev Society", description: "Intensive web development training with React and Node.js.", timing: "10:00 AM - 6:00 PM", organiser: "WebDev Team" },
  { id: "6", title: "Blockchain Summit", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop", date: "5-6 April 2025", venue: "IIT Madras", price: 500, category: "Tech", college: "IIT Madras", club: "Blockchain Club", description: "Discover blockchain technology and cryptocurrency innovations.", timing: "9:00 AM - 5:00 PM", organiser: "Blockchain Team" },
  { id: "7", title: "RoboWars 2025", image: "https://images.unsplash.com/photo-1563968743333-044cef800494?w=600&h=400&fit=crop", date: "10-12 April 2025", venue: "IIT Kharagpur", price: 800, category: "Tech", college: "IIT Kharagpur", club: "Robotics Club", description: "Epic robot battles with prize pool of 5 lakhs.", timing: "10:00 AM - 8:00 PM", organiser: "Robotics Society" },
  { id: "8", title: "DevOps Workshop", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=600&h=400&fit=crop", date: "15-16 April 2025", venue: "IIIT Hyderabad", price: 400, category: "Tech", college: "IIIT Hyderabad", club: "DevOps Club", description: "Learn CI/CD pipelines and cloud deployment.", timing: "11:00 AM - 5:00 PM", organiser: "DevOps Team" },
  { id: "9", title: "IoT Innovation Challenge", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop", date: "20-22 April 2025", venue: "NIT Surathkal", price: 350, category: "Tech", college: "NITK Surathkal", club: "IoT Club", description: "Build smart IoT solutions for real-world problems.", timing: "9:00 AM - 6:00 PM", organiser: "IoT Team" },
  { id: "10", title: "Open Source Summit", image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop", date: "25-26 April 2025", venue: "IIT Kanpur", price: 0, category: "Tech", college: "IIT Kanpur", club: "FOSS Club", description: "Contribute to open source projects with industry mentors.", timing: "10:00 AM - 6:00 PM", organiser: "FOSS Society" },

  // Dance Events
  { id: "11", title: "Rhythmica - Dance Championship", image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=400&fit=crop", date: "22-23 March 2025", venue: "IIT Bombay Auditorium", price: 300, category: "Dance", college: "IIT Bombay", club: "Dance Society", description: "Annual inter-college dance competition showcasing various dance forms including hip-hop, contemporary, classical, and folk.", timing: "5:00 PM - 10:00 PM", organiser: "Dance Society" },
  { id: "12", title: "Street Dance Battle", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop", date: "28-29 March 2025", venue: "Delhi University", price: 200, category: "Dance", college: "Delhi University", club: "Street Dance Crew", description: "Unleash your street dance moves in this epic battle.", timing: "6:00 PM - 10:00 PM", organiser: "Street Crew" },
  { id: "13", title: "Classical Fusion Night", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=400&fit=crop", date: "1-2 April 2025", venue: "Jadavpur University", price: 250, category: "Dance", college: "Jadavpur University", club: "Classical Dance Society", description: "Experience the beauty of Bharatanatyam, Kathak, and Odissi.", timing: "7:00 PM - 10:00 PM", organiser: "Classical Society" },
  { id: "14", title: "Hip-Hop Championship", image: "https://images.unsplash.com/photo-1547153760-18fc86932e14?w=600&h=400&fit=crop", date: "5-6 April 2025", venue: "PES University", price: 350, category: "Dance", college: "PES University", club: "Hip-Hop Club", description: "Show your urban dance skills in this high-energy competition.", timing: "5:00 PM - 11:00 PM", organiser: "Hip-Hop Society" },
  { id: "15", title: "Folk Dance Festival", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=400&fit=crop", date: "10-11 April 2025", venue: "Rajasthan University", price: 0, category: "Dance", college: "Rajasthan University", club: "Folk Arts Society", description: "Celebrate India's diverse folk dance traditions.", timing: "6:00 PM - 10:00 PM", organiser: "Folk Arts Team" },

  // Music Events
  { id: "16", title: "MelodyFest - Music Extravaganza", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", date: "5-7 April 2025", venue: "NIT Trichy Open Air Theatre", price: 400, category: "Music", college: "NIT Trichy", club: "Music Society", description: "Annual music festival featuring band performances, solo competitions, DJ nights, and workshops by renowned artists.", timing: "4:00 PM - 11:00 PM", organiser: "Music Society" },
  { id: "17", title: "Battle of Bands", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop", date: "12-13 April 2025", venue: "IIT Delhi", price: 500, category: "Music", college: "IIT Delhi", club: "Rock Society", description: "College bands compete for glory and cash prizes.", timing: "5:00 PM - 11:00 PM", organiser: "Rock Society" },
  { id: "18", title: "Classical Music Night", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&h=400&fit=crop", date: "18-19 April 2025", venue: "IIT Madras", price: 0, category: "Music", college: "IIT Madras", club: "Classical Music Club", description: "An evening of classical Indian music performances.", timing: "7:00 PM - 10:00 PM", organiser: "Classical Club" },
  { id: "19", title: "EDM Night", image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop", date: "22-23 April 2025", venue: "VIT Vellore", price: 600, category: "Music", college: "VIT Vellore", club: "EDM Society", description: "Dance the night away with top DJs.", timing: "8:00 PM - 2:00 AM", organiser: "EDM Team" },
  { id: "20", title: "Acoustic Sessions", image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=600&h=400&fit=crop", date: "26-27 April 2025", venue: "Christ University", price: 200, category: "Music", college: "Christ University", club: "Acoustic Club", description: "Intimate unplugged performances by talented musicians.", timing: "6:00 PM - 9:00 PM", organiser: "Acoustic Society" },

  // Sports Events
  { id: "21", title: "Inter-College Sports Meet", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop", date: "1-3 April 2025", venue: "IIT Kanpur Sports Complex", price: 0, category: "Sports", college: "IIT Kanpur", club: "Sports Committee", description: "Multi-sport championship including cricket, football, basketball, and athletics.", timing: "8:00 AM - 6:00 PM", organiser: "Sports Council" },
  { id: "22", title: "Marathon 2025", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&h=400&fit=crop", date: "8 April 2025", venue: "Mumbai University", price: 100, category: "Sports", college: "Mumbai University", club: "Running Club", description: "10K marathon for fitness enthusiasts.", timing: "6:00 AM - 10:00 AM", organiser: "Running Society" },
  { id: "23", title: "Cricket Tournament", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop", date: "12-15 April 2025", venue: "NIT Warangal", price: 500, category: "Sports", college: "NIT Warangal", club: "Cricket Club", description: "T20 cricket championship with exciting prizes.", timing: "9:00 AM - 6:00 PM", organiser: "Cricket Team" },
  { id: "24", title: "Football League", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop", date: "18-22 April 2025", venue: "Jadavpur University", price: 300, category: "Sports", college: "Jadavpur University", club: "Football Club", description: "Inter-college football tournament.", timing: "10:00 AM - 7:00 PM", organiser: "Football Society" },
  { id: "25", title: "Basketball Championship", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop", date: "25-28 April 2025", venue: "IIT Ropar", price: 250, category: "Sports", college: "IIT Ropar", club: "Basketball Club", description: "Slam dunk your way to victory.", timing: "9:00 AM - 6:00 PM", organiser: "Basketball Team" },

  // Art Events
  { id: "26", title: "Art Fiesta - Exhibition & Workshop", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop", date: "28-30 March 2025", venue: "BITS Pilani Art Gallery", price: 0, category: "Art", college: "BITS Pilani", club: "Fine Arts Club", description: "Three-day art festival with exhibitions, live painting, sculpting workshops, and art competitions.", timing: "10:00 AM - 8:00 PM", organiser: "Fine Arts Club" },
  { id: "27", title: "Painting Competition", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop", date: "5-6 April 2025", venue: "NIT Calicut", price: 100, category: "Art", college: "NIT Calicut", club: "Art Society", description: "Express yourself through colors and canvas.", timing: "11:00 AM - 5:00 PM", organiser: "Art Club" },
  { id: "28", title: "Graffiti Workshop", image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600&h=400&fit=crop", date: "10-11 April 2025", venue: "IIT Gandhinagar", price: 200, category: "Art", college: "IIT Gandhinagar", club: "Street Art Club", description: "Learn urban art techniques from professionals.", timing: "2:00 PM - 7:00 PM", organiser: "Street Art Team" },
  { id: "29", title: "Sketching Championship", image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=600&h=400&fit=crop", date: "15-16 April 2025", venue: "Anna University", price: 50, category: "Art", college: "Anna University", club: "Sketch Club", description: "Showcase your sketching skills in various categories.", timing: "10:00 AM - 4:00 PM", organiser: "Sketch Society" },
  { id: "30", title: "Digital Art Contest", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", date: "20-21 April 2025", venue: "DA-IICT", price: 150, category: "Art", college: "DA-IICT", club: "Digital Arts Club", description: "Create stunning digital artwork and win exciting prizes.", timing: "11:00 AM - 6:00 PM", organiser: "Digital Arts Team" },

  // Gaming Events
  { id: "31", title: "GameCon 2025 - eSports Tournament", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop", date: "12-14 April 2025", venue: "IIT Delhi Sports Complex", price: 600, category: "Gaming", college: "IIT Delhi", club: "Gaming Club", description: "Premier gaming event with tournaments in BGMI, Valorant, FIFA, and more with exciting prize pools.", timing: "9:00 AM - 9:00 PM", organiser: "Gaming Club" },
  { id: "32", title: "BGMI Championship", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop", date: "18-20 April 2025", venue: "BITS Hyderabad", price: 500, category: "Gaming", college: "BITS Hyderabad", club: "Mobile Gaming Club", description: "Battle royale tournament with 50K prize pool.", timing: "10:00 AM - 8:00 PM", organiser: "Mobile Gaming Team" },
  { id: "33", title: "Valorant Masters", image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600&h=400&fit=crop", date: "22-24 April 2025", venue: "VIT Vellore", price: 700, category: "Gaming", college: "VIT Vellore", club: "FPS Gaming Club", description: "Tactical shooter championship for pro teams.", timing: "9:00 AM - 10:00 PM", organiser: "FPS Team" },
  { id: "34", title: "FIFA Tournament", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop", date: "26-27 April 2025", venue: "NIT Surathkal", price: 300, category: "Gaming", college: "NITK Surathkal", club: "Sports Gaming Club", description: "Virtual football championship.", timing: "11:00 AM - 7:00 PM", organiser: "Sports Gaming Society" },
  { id: "35", title: "Dota 2 Championship", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop", date: "28-30 April 2025", venue: "IIT Kharagpur", price: 800, category: "Gaming", college: "IIT Kharagpur", club: "MOBA Club", description: "Epic MOBA battles with 1 lakh prize pool.", timing: "9:00 AM - 9:00 PM", organiser: "MOBA Society" },

  // Drama Events
  { id: "36", title: "Theatre Festival", image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop", date: "1-3 April 2025", venue: "Presidency University", price: 150, category: "Drama", college: "Presidency University", club: "Drama Society", description: "Three days of gripping theatrical performances.", timing: "6:00 PM - 9:00 PM", organiser: "Drama Club" },
  { id: "37", title: "Street Play Competition", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop", date: "8-9 April 2025", venue: "JNU", price: 0, category: "Drama", college: "JNU", club: "Street Theatre Group", description: "Social awareness through powerful street plays.", timing: "5:00 PM - 8:00 PM", organiser: "Theatre Group" },
  { id: "38", title: "Shakespeare Festival", image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&h=400&fit=crop", date: "15-17 April 2025", venue: "St. Stephen's College", price: 200, category: "Drama", college: "St. Stephen's College", club: "English Drama Society", description: "Classic Shakespeare plays performed by college students.", timing: "7:00 PM - 10:00 PM", organiser: "English Society" },
  { id: "39", title: "Improv Night", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop", date: "22-23 April 2025", venue: "Christ University", price: 100, category: "Drama", college: "Christ University", club: "Improv Club", description: "Spontaneous comedy and drama performances.", timing: "7:00 PM - 9:00 PM", organiser: "Improv Society" },
  { id: "40", title: "Musical Theatre", image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=600&h=400&fit=crop", date: "26-28 April 2025", venue: "Symbiosis", price: 300, category: "Drama", college: "Symbiosis", club: "Musical Theatre Club", description: "Broadway-style musical performances.", timing: "6:00 PM - 9:00 PM", organiser: "Musical Society" },

  // Photography Events
  { id: "41", title: "Photo Walk 2025", image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop", date: "5-6 April 2025", venue: "IISc Bangalore Campus", price: 0, category: "Photography", college: "IISc Bangalore", club: "Photography Club", description: "Explore campus beauty through your lens.", timing: "6:00 AM - 10:00 AM", organiser: "Photo Club" },
  { id: "42", title: "Wildlife Photography Workshop", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop", date: "12-14 April 2025", venue: "Manipal Institute", price: 500, category: "Photography", college: "Manipal Institute", club: "Nature Photography Club", description: "Learn wildlife photography from experts.", timing: "5:00 AM - 6:00 PM", organiser: "Nature Club" },
  { id: "43", title: "Portrait Photography Contest", image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=600&h=400&fit=crop", date: "18-19 April 2025", venue: "NIT Jaipur", price: 150, category: "Photography", college: "NIT Jaipur", club: "Portrait Club", description: "Capture emotions through portrait photography.", timing: "10:00 AM - 5:00 PM", organiser: "Portrait Society" },
  { id: "44", title: "Street Photography Challenge", image: "https://images.unsplash.com/photo-1495837174058-628aafc7d610?w=600&h=400&fit=crop", date: "22-23 April 2025", venue: "Delhi University", price: 100, category: "Photography", college: "Delhi University", club: "Street Photo Club", description: "Document life on the streets of Delhi.", timing: "8:00 AM - 6:00 PM", organiser: "Street Photo Team" },
  { id: "45", title: "Night Photography Workshop", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=400&fit=crop", date: "26-27 April 2025", venue: "IIT Madras", price: 200, category: "Photography", college: "IIT Madras", club: "Night Photo Club", description: "Master the art of night and astrophotography.", timing: "8:00 PM - 2:00 AM", organiser: "Night Photo Society" },

  // Literary Events
  { id: "46", title: "LitFest - Literary Carnival", image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop", date: "20-21 April 2025", venue: "BITS Pilani Amphitheatre", price: 0, category: "Literary", college: "BITS Pilani", club: "Literary Society", description: "Celebration of literature with author meet-ups, poetry slams, debates, and creative writing workshops.", timing: "2:00 PM - 7:00 PM", organiser: "Literary Society" },
  { id: "47", title: "Poetry Slam", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop", date: "8-9 April 2025", venue: "JNU", price: 50, category: "Literary", college: "JNU", club: "Poetry Club", description: "Express yourself through the power of poetry.", timing: "6:00 PM - 9:00 PM", organiser: "Poetry Society" },
  { id: "48", title: "Debate Championship", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", date: "15-17 April 2025", venue: "St. Stephen's College", price: 100, category: "Literary", college: "St. Stephen's College", club: "Debating Society", description: "Battle of wits and words in parliamentary debate format.", timing: "9:00 AM - 6:00 PM", organiser: "Debate Team" },
  { id: "49", title: "Creative Writing Workshop", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop", date: "22-23 April 2025", venue: "Presidency University", price: 150, category: "Literary", college: "Presidency University", club: "Writers Club", description: "Learn storytelling from published authors.", timing: "11:00 AM - 5:00 PM", organiser: "Writers Society" },
  { id: "50", title: "Book Fair 2025", image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop", date: "26-28 April 2025", venue: "Calcutta University", price: 0, category: "Literary", college: "Calcutta University", club: "Book Club", description: "Explore thousands of books and meet authors.", timing: "10:00 AM - 8:00 PM", organiser: "Book Society" },

  // Workshop Events
  { id: "51", title: "Entrepreneurship Bootcamp", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop", date: "1-3 April 2025", venue: "IIT Bombay", price: 500, category: "Workshops", college: "IIT Bombay", club: "E-Cell", description: "Learn to build and scale startups from successful entrepreneurs.", timing: "9:00 AM - 6:00 PM", organiser: "E-Cell Team" },
  { id: "52", title: "Design Thinking Workshop", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop", date: "8-10 April 2025", venue: "NID Ahmedabad", price: 700, category: "Workshops", college: "NIT Surat", club: "Design Club", description: "Master human-centered design methodology.", timing: "10:00 AM - 5:00 PM", organiser: "Design Society" },
  { id: "53", title: "Public Speaking Masterclass", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", date: "12-13 April 2025", venue: "IIM Bangalore", price: 400, category: "Workshops", college: "IISc Bangalore", club: "Toastmasters", description: "Overcome stage fear and become a confident speaker.", timing: "2:00 PM - 6:00 PM", organiser: "Toastmasters Club" },
  { id: "54", title: "Financial Literacy Workshop", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop", date: "18-19 April 2025", venue: "NMIMS Mumbai", price: 300, category: "Workshops", college: "Mumbai University", club: "Finance Club", description: "Learn investment and personal finance management.", timing: "11:00 AM - 4:00 PM", organiser: "Finance Society" },
  { id: "55", title: "Video Editing Bootcamp", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop", date: "22-24 April 2025", venue: "FTII Pune", price: 600, category: "Workshops", college: "COEP", club: "Film Society", description: "Professional video editing with industry tools.", timing: "10:00 AM - 6:00 PM", organiser: "Film Club" },
  { id: "56", title: "Leadership Development Program", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop", date: "26-28 April 2025", venue: "IIM Ahmedabad", price: 800, category: "Workshops", college: "Gujarat University", club: "Leadership Club", description: "Build leadership skills for tomorrow's challenges.", timing: "9:00 AM - 5:00 PM", organiser: "Leadership Team" },
];
