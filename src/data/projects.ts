export interface Project {
  id: string;
  name: string;
  slug: string;
  location: string;
  type: string;
  status: string;
  priceRange: string;
  sizeRange: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  amenities: string[];
  specifications: { label: string; value: string }[];
  locationAdvantages: string[];
  developer: string;
  possession: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Winsten Park",
    slug: "winsten-park",
    location: "Knowledge Park 5, Greater Noida West",
    type: "Commercial & Residential",
    status: "New Launch",
    priceRange: "₹13.32 Lakhs* Onwards",
    sizeRange: "300 - 1200 sq.ft.",
    image: "/project-winsten.jpg",
    shortDescription:
      "Premium smart studio apartments, retail shops, office spaces & business suites in the heart of Knowledge Park 5, Greater Noida West by VHR Group.",
    fullDescription: `Winsten Park in Knowledge Park 5 is a landmark mixed-use development by VHR Group (Vascoda Realtech), offering an exceptional blend of smart studio apartments, retail shops, office spaces, and business IT villas in Greater Noida West. Strategically located along a 130-meter wide road in Knowledge Park V, this project is designed for modern professionals, entrepreneurs, and investors seeking premium commercial and residential spaces in one of the fastest-growing corridors of the NCR.

The development features thoughtfully designed studio apartments that maximize every square foot with contemporary layouts, large windows for natural light, and smart home-ready infrastructure. The retail and office spaces are designed to cater to startups, established businesses, and retail brands looking for high-visibility locations with excellent footfall potential.

Winsten Park stands out for its prime connectivity — it is just minutes away from the Noida-Greater Noida Expressway, FNG Expressway, and upcoming Metro connectivity. The surrounding Knowledge Park area is rapidly developing as an IT and educational hub, making this an ideal investment destination. With world-class amenities, 24/7 security, ample parking, and green landscapes, Winsten Park promises a lifestyle that combines work, comfort, and convenience under one roof.`,
    highlights: [
      "Smart studio apartments with modern interiors",
      "High-street retail shops for maximum business visibility",
      "Premium office spaces for startups & corporates",
      "Business IT villas for tech companies",
      "Located on 130-meter wide road",
      "Developed by reputed VHR Group",
    ],
    amenities: [
      "24/7 Power Backup",
      "High-Speed Elevators",
      "Ample Car Parking",
      "Landscaped Gardens",
      "CCTV Surveillance",
      "Fire Safety Systems",
      "Rain Water Harvesting",
      "Wi-Fi Connectivity",
      "Food Court",
      "ATM Facility",
      "Visitor Parking",
      "Dedicated Maintenance Staff",
    ],
    specifications: [
      { label: "Project Type", value: "Commercial & Residential Mixed-Use" },
      { label: "Developer", value: "VHR Group (Vascoda Realtech)" },
      { label: "Location", value: "Knowledge Park 5, Greater Noida West" },
      { label: "Configuration", value: "Studio Apartments, Shops, Offices, Business Villas" },
      { label: "Size Range", value: "300 - 1200 sq.ft." },
      { label: "Price", value: "₹13.32 Lakhs* Onwards" },
      { label: "Status", value: "New Launch" },
      { label: "Possession", value: "2027" },
    ],
    locationAdvantages: [
      "On 130-meter wide road in Knowledge Park V",
      "5 mins from Noida-Greater Noida Expressway",
      "10 mins from FNG (Faridabad-Noida-Ghaziabad) Expressway",
      "Close to upcoming Metro station",
      "Surrounded by reputed educational institutions (Galgotias, NIET, etc.)",
      "Near Yatharth Super Speciality Hospital",
      "Adjacent to established residential townships",
      "15 mins from Botanical Garden Metro Station",
    ],
    developer: "VHR Group",
    possession: "2027",
  },
  {
    id: "2",
    name: "Saraswati Landmark",
    slug: "saraswati-landmark",
    location: "Sector 1, Noida Extension, Greater Noida West",
    type: "Residential",
    status: "Under Construction",
    priceRange: "₹42 Lakhs* Onwards",
    sizeRange: "650 - 1600 sq.ft.",
    image: "/project-saraswati.jpg",
    shortDescription:
      "Luxurious 1/2/3/4 BHK flats with 85% open space and lush greenery by Saraswati Group in Sector 1, Noida Extension.",
    fullDescription: `Saraswati Landmark is a prestigious residential project by Saraswati Group, located in the prime Sector 1 of Noida Extension (Greater Noida West), near Gaur Mulberry Mansions. This thoughtfully planned development offers spacious 1, 2, 3, and 4 BHK luxury flats designed for families who value space, greenery, and modern living.

What sets Saraswati Landmark apart is its commitment to open living — with 85% open space dedicated to landscaped gardens, jogging tracks, water features, and recreational zones. The project features approximately 350 units spread across well-designed towers, ensuring privacy and cross-ventilation for every apartment. The flat sizes range from 650 sq.ft. to 1600 sq.ft., catering to diverse family sizes and budgets.

Every apartment is crafted with premium fittings, spacious balconies, modular kitchen-ready spaces, and earthquake-resistant RCC structure. The project is surrounded by an ecosystem of educational institutions — with over 20 international schools within a 2 km radius — making it perfect for families with children. Additionally, it is Zero KM from Central Noida, offering seamless connectivity to Delhi, Noida, and the wider NCR via the Noida-Greater Noida Expressway.

The project also boasts proximity to Yatharth Super Speciality Hospital, major shopping centers, and the upcoming Metro line extension. With Saraswati Group's commitment to quality construction and timely delivery, Saraswati Landmark is an ideal choice for end-users and investors alike, offering a perfect combination of luxury, location, and value.`,
    highlights: [
      "85% open space with lush greenery",
      "1/2/3/4 BHK luxury configurations",
      "350+ well-designed residential units",
      "Near Gaur Mulberry Mansions, Sector 1",
      "Zero KM from Central Noida",
      "20+ international schools in 2 km radius",
    ],
    amenities: [
      "Swimming Pool",
      "Club House",
      "Children's Play Area",
      "Gymnasium",
      "Jogging Track",
      "Landscaped Gardens",
      "24/7 Security with CCTV",
      "Power Backup",
      "Rain Water Harvesting",
      "Indoor Games Room",
      "Multi-Purpose Hall",
      "Dedicated Parking",
      "Senior Citizen Area",
      "Yoga & Meditation Zone",
      "Cycling Track",
      "Open-Air Theatre",
    ],
    specifications: [
      { label: "Project Type", value: "Residential Apartments" },
      { label: "Developer", value: "Saraswati Group" },
      { label: "Location", value: "Sector 1, Near Gaur Mulberry Mansions, Noida Extension" },
      { label: "Configuration", value: "1/2/3/4 BHK Luxury Flats" },
      { label: "Size Range", value: "650 - 1600 sq.ft." },
      { label: "Total Units", value: "~350" },
      { label: "Price", value: "₹42 Lakhs* Onwards" },
      { label: "Possession", value: "December 2026" },
    ],
    locationAdvantages: [
      "Zero KM from Central Noida",
      "Near Gaur Mulberry Mansions",
      "2 mins from Noida-Greater Noida Expressway",
      "20+ international schools within 2 km",
      "Near Yatharth Super Speciality Hospital",
      "Close to Ace City Square Mall",
      "Near Noida Sector 81 Metro Station",
      "15 mins to Botanical Garden Metro Station",
      "Surrounded by luxury high-rise developments",
    ],
    developer: "Saraswati Group",
    possession: "December 2026",
  },
  {
    id: "3",
    name: "Lucky Palm Valley",
    slug: "lucky-palm-valley",
    location: "Sector 1, Greater Noida West",
    type: "Residential Township",
    status: "Ready to Move / New Phases Under Construction",
    priceRange: "₹35 Lakhs* Onwards",
    sizeRange: "1075 - 1810 sq.ft.",
    image: "/project-lucky.jpg",
    shortDescription:
      "Sprawling 80-acre residential township with 2/3 BHK apartments featuring world-class amenities by Lucky Homes in Sector 1, Greater Noida West.",
    fullDescription: `Lucky Palm Valley is a massive 80-acre integrated residential township developed by Lucky Homes Builder & Developers, located in Sector 1, Greater Noida West (behind Stellar Jeevan). This expansive development is designed as a self-contained community that offers everything a modern family needs — from spacious apartments to world-class amenities, all surrounded by abundant greenery and open spaces.

The township offers well-designed 2 BHK and 3 BHK apartments ranging from 1075 sq.ft. to 1810 sq.ft., each crafted to provide maximum natural light, ventilation, and functional living spaces. The apartments feature contemporary architecture with wide balconies, modular kitchen provisions, premium vitrified flooring, and high-quality CP fittings. The RCC frame structure ensures earthquake resistance and long-term durability.

What truly sets Lucky Palm Valley apart is its massive scale — spread across 80 acres, the township features a grand swimming pool, beautifully landscaped gardens, dedicated children's play areas, sports facilities, a gated community with 24/7 security, rain water harvesting systems, and much more. The development is designed to promote a healthy, active lifestyle with jogging tracks, cycling paths, and open green spaces.

Located in the rapidly developing Sector 1 of Greater Noida West, Lucky Palm Valley enjoys excellent connectivity. It is close to the Delhi-Mumbai Industrial Corridor influence zone, near multiple international schools including Delhi World Public School, and within easy reach of Yatharth Super Speciality Hospital. The Noida-Greater Noida Expressway is just minutes away, providing seamless access to Delhi, Noida, and the rest of the NCR.

With Lucky Homes' proven track record of delivering quality homes, Lucky Palm Valley represents an exceptional opportunity for families seeking spacious, affordable luxury in a thriving location.`,
    highlights: [
      "Massive 80-acre integrated township",
      "Spacious 2 & 3 BHK configurations",
      "Gated community with 24/7 security",
      "Abundant green spaces & landscaping",
      "Multiple phases — Ready to Move available",
      "Close to schools, hospitals & expressway",
    ],
    amenities: [
      "Grand Swimming Pool",
      "Landscape Gardens",
      "Children's Play Area",
      "Gated Community",
      "Rain Water Harvesting",
      "24/7 Security & CCTV",
      "Club House",
      "Gymnasium",
      "Sports Facilities",
      "Jogging & Cycling Tracks",
      "Community Hall",
      "Power Backup",
      "Ample Parking",
      "Commercial Complex",
      "Senior Citizen Park",
      "Amphitheatre",
    ],
    specifications: [
      { label: "Project Type", value: "Residential Township" },
      { label: "Developer", value: "Lucky Homes Builder & Developers" },
      { label: "Location", value: "Sector 1, Behind Stellar Jeevan, Greater Noida West" },
      { label: "Total Area", value: "80 Acres" },
      { label: "Configuration", value: "2 BHK & 3 BHK Apartments" },
      { label: "Size Range", value: "1075 - 1810 sq.ft." },
      { label: "Price", value: "₹35 Lakhs* Onwards" },
      { label: "Status", value: "Ready to Move / New Phases" },
    ],
    locationAdvantages: [
      "Behind Stellar Jeevan in Sector 1",
      "5 mins from Noida-Greater Noida Expressway",
      "Near Delhi World Public School (Noida Extension)",
      "Close to Yatharth Super Speciality Hospital",
      "Near Sanford Play School & DPS",
      "10 mins to Ace City Square Mall",
      "Upcoming Metro connectivity",
      "Near Delhi-Mumbai Industrial Corridor zone",
      "Excellent road connectivity to Delhi & NCR",
    ],
    developer: "Lucky Homes Builder & Developers",
    possession: "Ready to Move / Ongoing",
  },
];
