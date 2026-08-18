export const HOTEL_INFO = {
  name: "Aura Grand Resort & Suites",
  tagline: "Where Bespoke Luxury Meets Timeless Elegance",
  phone: "+1 (800) 888-AURA",
  intlPhone: "+1 (555) 732-9000",
  email: "concierge@auragrandresort.com",
  reservationsEmail: "booking@auragrandresort.com",
  address: "777 Grand Horizon Boulevard, Paradise Bay, CA 90210",
  checkIn: "3:00 PM",
  checkOut: "12:00 PM",
  rating: 4.98,
  reviewCount: 2840,
  established: 1998,
};

export const ROOMS_DATA = [
  {
    id: "standard",
    slug: "standard",
    name: "Serene Standard Room",
    subtitle: "Refined comfort with serene garden or skyline views",
    price: 189,
    originalPrice: 229,
    rating: 4.88,
    reviews: 640,
    size: "38 m² / 410 sq.ft",
    capacity: "2 Adults + 1 Child",
    bed: "1 King Bed or 2 Twin Beds",
    view: "Lush Zen Garden / City Skyline",
    description:
      "Designed for the discerning traveler seeking peaceful respite. The Serene Standard Room combines warm oak finishes, 400-thread-count Egyptian cotton linens, a walk-in Italian marble rain shower, and state-of-the-art ambient lighting.",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Signature King Bed with memory-foam topper",
      "Walk-in Italian marble rain shower",
      "Smart tablet room automation (lights, climate & shades)",
      "55-inch 4K OLED TV with streaming",
      "Nespresso® gourmet espresso machine",
      "Organic artisanal bathroom amenities by Diptyque®",
      "Ultra-fast Gigabit Wi-Fi 6",
      "Soundproof floor-to-ceiling panoramic windows"
    ],
    badge: "Best Value",
    highlight: "Complimentary Artisan Breakfast Included"
  },
  {
    id: "deluxe",
    slug: "deluxe",
    name: "Grand Deluxe Ocean View",
    subtitle: "Spacious elegance featuring private terrace & sunset vistas",
    price: 320,
    originalPrice: 380,
    rating: 4.95,
    reviews: 890,
    size: "58 m² / 624 sq.ft",
    capacity: "3 Adults or 2 Adults + 2 Children",
    bed: "1 California King Bed",
    view: "Panoramic Oceanfront Sunset",
    description:
      "Unwind in boundless luxury. The Grand Deluxe Room boasts an expansive private balcony overlooking turquoise ocean waves, a deep freestanding soaking tub with panoramic vistas, a plush lounge area, and bespoke evening turndown service with champagne.",
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Private furnished oceanfront terrace with daybeds",
      "Freestanding deep soaking tub & dual vanity marble bath",
      "Complimentary bottle of Laurent-Perrier Champagne upon arrival",
      "65-inch Curved 4K Smart OLED TV",
      "Customized pillow menu (Feather, Silk, Ergonomic memory foam)",
      "Daily sunset cocktail hour vouchers at Azure Lounge",
      "Priority spa & dining reservations",
      "Complimentary high-speed airport chauffeur transfer (one-way)"
    ],
    badge: "Most Popular",
    highlight: "Private Oceanview Sun Terrace"
  },
  {
    id: "suite",
    slug: "suite",
    name: "Royal Presidential Penthouse Suite",
    subtitle: "The pinnacle of ultra-luxury with private heated jacuzzi & 24/7 butler",
    price: 750,
    originalPrice: 890,
    rating: 4.99,
    reviews: 412,
    size: "140 m² / 1,506 sq.ft",
    capacity: "4 Adults + 2 Children",
    bed: "2 Master Suites with California King Beds",
    view: "360° Unobstructed Ocean & Skyline Vistas",
    description:
      "An immaculate sanctuary created for royalty and celebrities. Featuring two palatial master suites, a formal dining salon, a private heated rooftop hydrotherapy jacuzzi, fully stocked sommelier wine cellar, and dedicated 24-hour private butler service.",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Dedicated 24/7 private certified English butler service",
      "Private open-air heated whirlpool jacuzzi on terrace",
      "Private VIP elevator access directly to penthouse",
      "Fully stocked premium bar and temperature-controlled wine cellar",
      "Designer walk-in dressing room with jewelry safe",
      "Bang & Olufsen® acoustic surround sound throughout",
      "Unlimited complimentary spa wellness treatments",
      "Complimentary roundtrip Rolls-Royce airport transfers"
    ],
    badge: "VIP Signature",
    highlight: "Private Rooftop Jacuzzi & 24/7 Butler"
  }
];

export const SERVICES_DATA = [
  {
    id: "restaurant",
    slug: "restaurant",
    title: "Le Mirador Fine Dining Restaurant",
    subtitle: "Michelin-inspired culinary alchemy with oceanfront views",
    hours: "Breakfast: 7am - 10:30am | Lunch: 12pm - 3pm | Dinner: 6:30pm - 11pm",
    dressCode: "Smart Elegant",
    cuisine: "Modern French-Mediterranean Fusion",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    description:
      "Guided by world-renowned Executive Chef Antoine Dubois, Le Mirador presents an enchanting gastronomic voyage. Experience multi-course degustation menus crafted from hand-harvested organic ingredients, paired with rare vintages selected by our master sommelier.",
    highlights: [
      "3-Star Michelin inspired multi-course tasting menus",
      "Wine cellar with over 2,500 rare international vintages",
      "Private romantic overwater dining pavilions",
      "Live acoustic jazz performances every Thursday through Saturday"
    ],
    menuPreview: [
      {
        category: "Signature Starters",
        items: [
          { name: "Foie Gras Poêlé", desc: "Seared duck liver, caramelized mission figs, brioche croutons & 25-yr balsamic glaze", price: "$38" },
          { name: "Bluefin Tuna Tartare", desc: "Avocado emulsion, black truffle pearls, yuzu ponzu & golden oscietra caviar", price: "$42" },
          { name: "Heirloom Burrata Artisanal", desc: "Heritage smoked heirloom tomatoes, basil pesto drizzle, pine nut tuile", price: "$28" }
        ]
      },
      {
        category: "Principal Entrées",
        items: [
          { name: "A5 Miyazaki Wagyu Tenderloin", desc: "Smoked potato mousseline, chanterelle mushrooms, black winter truffle jus", price: "$98" },
          { name: "Chilean Sea Bass en Papillote", desc: "Saffron lemongrass bouillon, baby fennel, sea asparagus & fingerling potatoes", price: "$64" },
          { name: "Brittany Blue Lobster Thermidor", desc: "Cognac cream glaze, gruyère gratinée, wilted baby spinach & saffron rice", price: "$85" }
        ]
      },
      {
        category: "Decadent Desserts",
        items: [
          { name: "Grand Cru Valrhona Sphere", desc: "72% dark chocolate sphere, warm salted caramel pour, Tahitian vanilla bean gelato", price: "$24" },
          { name: "Caramelized Mille-Feuille", desc: "Puff pastry crisp, bourbon vanilla crème diplomate, raspberry coulis", price: "$22" }
        ]
      }
    ]
  },
  {
    id: "swimming-pool",
    slug: "swimming-pool",
    title: "Azure Horizon Infinity Pool & Cabanas",
    subtitle: "Heated architectural saltwater oasis merging with the sea horizon",
    hours: "Daily 6:00 AM – 10:00 PM",
    temperature: "Constant 28°C / 82.4°F",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Perched seamlessly above the golden shoreline, our cantilevered heated infinity pool offers an ethereal aquatic escape. Enjoy submerged chaise lounges, personalized poolside concierge towel service, and ice-cold artisan mocktails and champagne served directly to your private curtained cabana.",
    highlights: [
      "90-meter heated saltwater infinity edge with sunset panorama",
      "12 VIP shaded cabanas equipped with mini-bars and sound systems",
      "Swim-up poolside mixology bar with tropical cocktails",
      "Underwater acoustic chillout audio system",
      "Dedicated sun-care & misting concierge"
    ],
    cabanaOptions: [
      { name: "Standard Sunset Lounger", capacity: "2 Persons", includes: "Fresh towel service, chilled infused water, fruit skewer platter", price: "Complimentary for guests" },
      { name: "VIP Royal Overwater Cabana", capacity: "Up to 6 Persons", includes: "Bottle of Moët & Chandon, fruit fondue, private waitstaff & sunscreen kit", price: "$220 / Half Day" }
    ]
  },
  {
    id: "spa",
    slug: "spa",
    title: "Elysium Wellness & Thermal Spa",
    subtitle: "Holistic rejuvenation, hydrotherapy baths, and bespoke phytotherapy",
    hours: "Daily 8:00 AM – 9:00 PM",
    facilities: "Hammam, Finnish Sauna, Himalayan Salt Cave, Vitality Pools",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    description:
      "Surrender your senses to Elysium Spa, a haven of tranquility inspired by ancient Eastern traditions and modern European aesthetics. Rebalance body and spirit with organic botanical scrubs, therapeutic deep-tissue massages, and hydro-thermal rejuvenation rituals.",
    highlights: [
      "14 private treatment suites including couple's massage retreats",
      "Authentic Moroccan Hammam & Turkish thermal steam bath",
      "Himalayan Pink Salt meditation & relaxation lounge",
      "Custom anti-aging biological facials using Biologique Recherche®"
    ],
    treatments: [
      { name: "Aura Signature 24k Gold Body Glow", duration: "90 min", price: "$260", desc: "Full-body diamond exfoliation, 24k gold leaf oil wrap, and therapeutic hot stone massage." },
      { name: "Deep Tissue Oceanic Mineral Release", duration: "75 min", price: "$195", desc: "Targeted myofascial release with warm volcanic basalt stones and marine kelp extracts." },
      { name: "Radiance Cellular Caviar Facial", duration: "60 min", price: "$210", desc: "Intense cellular rejuvenation and peptide infusion for an instant youthful glow." },
      { name: "Couples Harmony Sunset Ritual", duration: "120 min", price: "$480", desc: "Side-by-side aromatherapy massage, private floral bath soaking, and vintage champagne toast." }
    ]
  },
  {
    id: "conference-hall",
    slug: "conference-hall",
    title: "The Grand Monarch Conference & Banquet Hall",
    subtitle: "State-of-the-art corporate assemblies, executive summits, and grand galas",
    capacity: "Up to 600 Guests",
    size: "850 m² / 9,150 sq.ft",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    description:
      "Setting the benchmark for high-level diplomatic assemblies, corporate conventions, and celebratory banquets. The Grand Monarch Hall offers column-free expansive architecture, motorized acoustic partitions, 4K multi-screen laser projection, and gourmet banquet catering.",
    highlights: [
      "850 sqm flexible column-free hall configurable into 4 distinct breakout salons",
      "Dual 220-inch 4K HDR motorized LED video walls & Dante audio matrix",
      "Simultaneous multilingual interpretation booths",
      "Dedicated executive conference planners and on-site AV technicians",
      "Custom gala banquet menus with private chef stations"
    ],
    configurations: [
      { type: "Theater Setup", capacity: "600 Attendees", idealFor: "Keynote addresses & global summits" },
      { type: "Banquet Gala", capacity: "420 Guests", idealFor: "Formal dinners, awards & wedding receptions" },
      { type: "Classroom / Workshop", capacity: "280 Delegates", idealFor: "Training seminars & interactive symposiums" },
      { type: "U-Shape Executive", capacity: "80 Leaders", idealFor: "Board meetings & diplomacy summits" }
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    id: "general-manager",
    slug: "general-manager",
    name: "Marcus Vance",
    role: "General Manager",
    department: "Executive Leadership",
    experience: "24+ Years Experience",
    quote: "Hospitality is not just an industry; it is the art of anticipating unexpressed desires and orchestrating moments of pure enchantment.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    bio: "Marcus Vance brings over two decades of premier 5-star international hotel leadership across Paris, Tokyo, and Zurich. Former managing director at The Ritz-Carlton and Four Seasons properties, Marcus oversees all resort operations ensuring unmatched standards of excellence and bespoke guest journeys.",
    credentials: [
      "École Hôtelière de Lausanne Graduate",
      "Forbes Travel Guide 5-Star Leadership Award (2022, 2024)",
      "Member of International Hospitality Advisory Board"
    ]
  },
  {
    id: "front-office-manager",
    slug: "front-office-manager",
    name: "Elena Rostova",
    role: "Front Office Manager & Chief Concierge",
    department: "Guest Experience",
    experience: "14+ Years Experience",
    quote: "From the very second you step onto our marble driveway, you are family. Our mission is to make every stay feel like coming home to paradise.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "A certified Les Clefs d'Or gold-key concierge, Elena leads our front desk, concierge, and VIP guest relations teams. Having managed front-of-house operations for elite boutique resorts, Elena ensures seamless arrivals, private jet transfers, and curated itineraries.",
    credentials: [
      "Union Internationale des Concierges d'Hôtels (Les Clefs d'Or)",
      "Master in Hospitality Operations (Cornell University)",
      "Fluent in English, French, Russian, and Italian"
    ]
  },
  {
    id: "hr-manager",
    slug: "hr-manager",
    name: "David Chen",
    role: "Human Resources Director",
    department: "Talent & Culture",
    experience: "16+ Years Experience",
    quote: "Great service comes from empowered people. We cultivate a culture of empathy, passion, and continuous growth so our staff can shine their brightest.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "David leads talent acquisition, staff empowerment, and leadership development for over 450 hospitality professionals at Aura Grand. His innovative wellness and diversity programs have earned Aura Grand the 'Best Luxury Employer of the Year' award three years running.",
    credentials: [
      "SHRM-SCP Senior Certified Professional",
      "Master of Science in Organizational Psychology (Columbia University)",
      "Keynote Speaker on Modern Hospitality Leadership"
    ]
  },
  {
    id: "executive-chef",
    slug: "executive-chef",
    name: "Antoine Dubois",
    role: "Executive Culinary Director",
    department: "Food & Beverage",
    experience: "21+ Years Experience",
    quote: "Cooking is an emotional language. Every ingredient tells a story of the soil, the sea, and the passion of the artisans who cultivated it.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    bio: "Trained under culinary legends in Lyon and Bordeaux, Chef Antoine earned two Michelin stars before taking the helm at Aura Grand. He curates the gastronomic identity across all 5 restaurants and banqueting, blending classical French techniques with vibrant coastal ingredients.",
    credentials: [
      "Grand Diplôme from Le Cordon Bleu Paris",
      "2-Star Michelin Head Chef (2018 - 2023)",
      "Author of 'Gastronomie Pure: Modern Coastal Harvests'"
    ]
  },
  {
    id: "housekeeping-manager",
    slug: "housekeeping-manager",
    name: "Maria Santos",
    role: "Executive Housekeeping Manager",
    department: "Housekeeping & Facility Care",
    experience: "18+ Years Experience",
    quote: "Pristine perfection is invisible until you touch it. We take immense pride in creating spotless, peaceful sanctuaries for restful rejuvenation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    bio: "Maria ensures every suite, public salon, and wellness area exceeds the highest international hygiene and luxury presentation standards. She pioneered our zero-plastic eco-luxury linen sanitization program and oversees a dedicated team of 120 housekeeping artisans.",
    credentials: [
      "Certified Executive Housekeeper (CEH - IEHA)",
      "Pioneer of Green Globe Eco-Luxury Cleaning Initiative",
      "100% 5-Star Cleanliness Audit Record for 6 Consecutive Years"
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Presidential Penthouse Living Suite",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    desc: "Panoramic skyline salon with floor-to-ceiling windows and Italian leather appointments."
  },
  {
    id: 2,
    title: "Le Mirador Oceanfront Dining",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    desc: "Candlelit sunset degustation tables overlooking the Pacific coastline."
  },
  {
    id: 3,
    title: "Azure Heated Infinity Pool at Sunset",
    category: "Pool & Spa",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    desc: "Seamless 90m saltwater pool reflecting vibrant twilight hues."
  },
  {
    id: 4,
    title: "Grand Deluxe Ocean Balcony Room",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    desc: "Spacious private balcony terrace with direct ocean breeze."
  },
  {
    id: 5,
    title: "Elysium Hydrothermal Thermal Spa",
    category: "Pool & Spa",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    desc: "Calming botanical herbal infusion pool and private treatment enclave."
  },
  {
    id: 6,
    title: "Grand Monarch Gala Ballroom",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    desc: "Crystal chandelier banquet hall configured for gala awards dinner."
  },
  {
    id: 7,
    title: "Serene Standard Garden Room",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    desc: "Modern understated luxury with warm wood and marble elements."
  },
  {
    id: 8,
    title: "Michelin Sommelier Cellar Reserve",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    desc: "Temperature-controlled vault containing rare vintage champagnes and premier crus."
  },
  {
    id: 9,
    title: "Rooftop Private Jacuzzi Terrace",
    category: "Rooms",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    desc: "Private penthouse open-air jacuzzi overlooking the horizon."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Victoria & Alexander Sterling",
    role: "Verified Honeymoon Guests",
    location: "London, United Kingdom",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    room: "Presidential Penthouse Suite",
    date: "July 2026",
    comment:
      "A transcendent experience from start to finish. The 24/7 butler service exceeded all expectations, and watching the sunset from our private rooftop jacuzzi was pure magic. Chef Antoine's degustation menu was simply world-class."
  },
  {
    id: 2,
    name: "Jonathan H. Montgomery",
    role: "Global Executive & Repeat Guest",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    room: "Grand Deluxe Ocean View",
    date: "August 2026",
    comment:
      "I host our annual leadership summit at The Grand Monarch Hall, and stay in the Deluxe Ocean suites. The seamless AV technology, flawless banqueting, and serene spa make Aura Grand the unrivaled choice for both business and leisure."
  },
  {
    id: 3,
    name: "Dr. Sophie Moreau",
    role: "Wellness Traveler",
    location: "Geneva, Switzerland",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    room: "Serene Standard Room",
    date: "May 2026",
    comment:
      "Elysium Spa is a true sanctuary. The 24k Gold ritual and the Himalayan salt cave melted away all stress. Even the Standard room feels grand, ultra-comfortable, and immaculately clean. I cannot wait to return!"
  }
];

export const FAQS = [
  {
    question: "What are the standard check-in and check-out times?",
    answer: "Standard check-in begins at 3:00 PM, and check-out is at 12:00 PM (noon). Early check-in and complimentary late check-out up to 2:00 PM are available upon request for Deluxe and Penthouse Suite guests subject to availability."
  },
  {
    question: "Do you offer airport transfer services?",
    answer: "Yes, we provide luxury Mercedes-Maybach and Rolls-Royce airport transfers. Transfers are complimentary for Presidential Penthouse Suite reservations and available as an add-on for all other room types."
  },
  {
    question: "Are non-hotel guests allowed to book the restaurant and spa?",
    answer: "Yes, both Le Mirador Restaurant and Elysium Spa welcome non-resident guests by advance reservation. We recommend booking at least 48 hours in advance for peak weekend dining and spa sessions."
  },
  {
    question: "What is the cancellation and refund policy?",
    answer: "We offer full refunds for cancellations made up to 48 hours prior to the scheduled check-in date. Flexible rates allow date modifications with zero change fees."
  },
  {
    question: "Is there high-speed Wi-Fi throughout the entire resort?",
    answer: "Yes, ultra-high-speed Wi-Fi 6 (1 Gbps symmetric) is complimentary and seamlessly accessible across all rooms, suites, pools, gardens, and conference halls."
  }
];
