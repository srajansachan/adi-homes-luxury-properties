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
    type: "Commercial & Studio Apartments",
    status: "New Launch",
    priceRange: "₹42 Lakhs* Onwards",
    sizeRange: "300 - 1200 sq.ft.",
    image: "/project-winsten.jpg",
    shortDescription:
      "Premium studio apartments, lockable office spaces & high-street retail shops at Knowledge Park 5, Greater Noida West by VHR Group / SKV Infotech Pvt. Ltd.",
    fullDescription: `Winsten Park is a modern mixed-use commercial project strategically located in Knowledge Park 5, Greater Noida West (Pin Code: 201307). Developed by VHR Group / SKV Infotech Pvt. Ltd., this landmark project offers a curated mix of studio apartments, lockable office spaces, and high-street retail shops — designed for investors, entrepreneurs, and working professionals looking for a premium commercial address in the NCR.

Knowledge Park 5 is rapidly emerging as a commercial and educational hub in Greater Noida West, home to leading universities like Galgotias University, NIET, and several IT companies. Winsten Park leverages this strategic location by offering spaces that cater to the growing demand from students, professionals, and businesses in the area.

The studio apartments are thoughtfully designed for maximum utility — ideal for working professionals, students, or as Airbnb-style rental investments. The lockable office spaces are perfect for startups, consultants, and small businesses looking for a professional environment with excellent visibility. The retail shops on the lower floors benefit from high footfall, making them ideal for cafes, convenience stores, salons, and branded outlets.

Winsten Park enjoys excellent road connectivity — it is situated near the FNG (Faridabad-Noida-Ghaziabad) Expressway and is well-connected to the Noida-Greater Noida Expressway. The upcoming Metro extension and the proximity to Jewar International Airport (approximately 30 km) further enhance the investment potential of this project. With modern architecture, ample parking, 24/7 security, and power backup, Winsten Park is positioned as one of the most promising commercial investments in Greater Noida West.`,
    highlights: [
      "Prime commercial location in Knowledge Park 5",
      "Studio apartments ideal for rental income & working professionals",
      "Lockable office spaces for startups & businesses",
      "High-street retail shops with excellent footfall potential",
      "Close to Galgotias University, NIET & IT hubs",
      "Near FNG Expressway with excellent NCR connectivity",
      "Developed by VHR Group / SKV Infotech Pvt. Ltd.",
    ],
    amenities: [
      "24/7 Power Backup",
      "High-Speed Elevators",
      "Ample Car Parking",
      "CCTV Surveillance",
      "Fire Safety Systems",
      "Rain Water Harvesting",
      "Wi-Fi Ready Infrastructure",
      "Food Court",
      "ATM Facility",
      "Visitor Parking",
      "Dedicated Maintenance Staff",
      "Landscaped Common Areas",
    ],
    specifications: [
      { label: "Project Type", value: "Studio Apartments, Office Spaces & Retail Shops" },
      { label: "Developer", value: "VHR Group / SKV Infotech Pvt. Ltd." },
      { label: "Location", value: "Knowledge Park 5, Greater Noida West, UP - 201307" },
      { label: "Configuration", value: "Studio Apartments, Lockable Offices, Retail Shops" },
      { label: "Size Range", value: "300 - 1200 sq.ft." },
      { label: "Starting Price", value: "₹42 Lakhs* Onwards" },
      { label: "Status", value: "New Launch" },
      { label: "Possession", value: "2027 (Expected)" },
    ],
    locationAdvantages: [
      "Located in Knowledge Park 5 — educational & IT hub",
      "Near Galgotias University, NIET & other institutions",
      "5 mins from Noida-Greater Noida Expressway",
      "Close to FNG (Faridabad-Noida-Ghaziabad) Expressway",
      "Upcoming Metro connectivity in vicinity",
      "~30 km from Jewar International Airport (upcoming)",
      "Surrounded by established residential townships",
      "Near Yatharth Super Speciality Hospital",
      "Well-connected to Delhi, Noida & Greater Noida",
    ],
    developer: "VHR Group / SKV Infotech Pvt. Ltd.",
    possession: "2027 (Expected)",
  },
  {
    id: "2",
    name: "Saraswati Landmark",
    slug: "saraswati-landmark",
    location: "Sector 1, Greater Noida West (Noida Extension)",
    type: "Residential Apartments",
    status: "Under Construction",
    priceRange: "₹45 Lakhs – ₹80 Lakhs*",
    sizeRange: "900 - 1800 sq.ft.",
    image: "/project-saraswati.jpg",
    shortDescription:
      "Premium 2/3/4 BHK residential apartments with 80% open green spaces on approx. 4 acres by Saraswati Group in Sector 1, Greater Noida West.",
    fullDescription: `Saraswati Landmark is a premium residential project by the renowned Saraswati Group, located in the sought-after Sector 1, Greater Noida West (Noida Extension), Uttar Pradesh. Spread across approximately 4 acres, this thoughtfully planned development offers spacious 2 BHK, 3 BHK, and 4 BHK apartments designed to provide a comfortable, modern, and peaceful lifestyle for families.

What truly sets Saraswati Landmark apart is its extraordinary commitment to open living — with 80% of the total area dedicated to open green spaces, landscaped gardens, jogging tracks, water features, and recreational zones. This is one of the highest green-to-built ratios in the Greater Noida West market, ensuring residents enjoy fresh air, natural light, and a serene environment away from the urban hustle.

Every apartment at Saraswati Landmark is crafted with premium specifications — spacious balconies for panoramic views, modular kitchen-ready layouts, earthquake-resistant RCC frame structure, premium vitrified tile flooring, and high-quality CP & sanitary fittings. The project features well-designed towers that ensure privacy, cross-ventilation, and Vastu-compliant layouts for every unit.

As a gated residential community, Saraswati Landmark offers a comprehensive suite of lifestyle amenities including a swimming pool, fully equipped gymnasium, children's play area, clubhouse, yoga & meditation zone, senior citizen area, cycling track, and an open-air theatre. The 24/7 security with CCTV surveillance, power backup, and rain water harvesting systems ensure a safe, sustainable, and worry-free living experience.

Sector 1, Greater Noida West is one of the most well-connected residential zones in the NCR. Saraswati Landmark is close to the Noida-Greater Noida Expressway (just 2-3 minutes), surrounded by reputed schools including Delhi Public School and Ryan International, and within easy reach of Yatharth Super Speciality Hospital, major shopping centers, and the upcoming Metro line extension. The proximity to the upcoming Jewar International Airport adds significant long-term investment value.`,
    highlights: [
      "80% open green spaces — among the highest in Greater Noida West",
      "Spacious 2 BHK, 3 BHK & 4 BHK configurations",
      "Spread across approx. 4 acres",
      "Gated residential community with premium amenities",
      "Vastu-compliant layouts with cross-ventilation",
      "Developed by trusted Saraswati Group",
      "Close to expressway, schools & hospitals",
    ],
    amenities: [
      "Swimming Pool",
      "Club House",
      "Children's Play Area",
      "Fully Equipped Gymnasium",
      "Jogging Track",
      "Landscaped Gardens",
      "24/7 Security with CCTV",
      "Power Backup",
      "Rain Water Harvesting",
      "Indoor Games Room",
      "Multi-Purpose Hall",
      "Dedicated Car Parking",
      "Senior Citizen Area",
      "Yoga & Meditation Zone",
      "Cycling Track",
      "Open-Air Theatre",
    ],
    specifications: [
      { label: "Project Type", value: "Residential Apartments" },
      { label: "Developer", value: "Saraswati Group" },
      { label: "Location", value: "Sector 1, Greater Noida West (Noida Extension), UP" },
      { label: "Project Size", value: "Approx. 4 Acres" },
      { label: "Configuration", value: "2 BHK, 3 BHK & 4 BHK Apartments" },
      { label: "Size Range", value: "900 - 1800 sq.ft. (approx)" },
      { label: "Price Range", value: "₹45 Lakhs – ₹80 Lakhs*" },
      { label: "Open Space", value: "80% Green & Open Area" },
      { label: "Possession", value: "December 2026 (Expected)" },
    ],
    locationAdvantages: [
      "Sector 1, Greater Noida West — prime residential zone",
      "2-3 mins from Noida-Greater Noida Expressway",
      "Near reputed schools — DPS, Ryan International, NIET",
      "Close to Yatharth Super Speciality Hospital",
      "Near Ace City Square Mall & retail hubs",
      "Upcoming Metro connectivity in the area",
      "15 mins from Botanical Garden Metro Station",
      "~35 km from Jewar International Airport (upcoming)",
      "Surrounded by established residential developments",
    ],
    developer: "Saraswati Group",
    possession: "December 2026 (Expected)",
  },
  {
    id: "3",
    name: "Saraswati Executive Homes",
    slug: "saraswati-executive-homes",
    location: "Greater Noida West (Noida Extension)",
    type: "Residential Builder Floors",
    status: "Under Construction",
    priceRange: "₹30 Lakhs* Onwards",
    sizeRange: "650 - 1200 sq.ft.",
    image: "/project-saraswati-executive.jpg",
    shortDescription:
      "Affordable 2 & 3 BHK builder floors and apartments by Saraswati Group — modern living at budget-friendly prices in Greater Noida West.",
    fullDescription: `Saraswati Executive Homes is an affordable yet modern residential housing project by Saraswati Group, located in the heart of Greater Noida West (Noida Extension), Uttar Pradesh. This project is specifically designed for first-time home buyers, young families, and investors looking for quality housing at accessible price points in one of the NCR's fastest-growing residential corridors.

The project offers well-designed 2 BHK and 3 BHK builder floors that combine functional layouts with modern aesthetics. Each unit is planned to maximize natural light and ventilation, with spacious rooms, dedicated balconies, modular kitchen-ready spaces, and premium flooring. The low-rise development ensures a more intimate community feel compared to high-rise towers, with fewer families per floor and greater privacy.

Saraswati Executive Homes is situated in a well-connected area of Greater Noida West, surrounded by essential social infrastructure — reputed schools including Delhi World Public School and Sanford International, hospitals including Yatharth Super Speciality Hospital, markets, and daily convenience stores. The project is easily accessible via the Noida-Greater Noida Expressway and benefits from the rapidly improving road network in the region.

For budget-conscious buyers, Saraswati Executive Homes represents exceptional value — offering a Saraswati Group quality product with modern amenities at a starting price of just ₹30 Lakhs. The project includes essential community amenities like landscaped green areas, children's play zone, 24/7 security, power backup, and rain water harvesting. With the upcoming Jewar Airport and Metro extensions set to boost property values in Greater Noida West, this project offers strong appreciation potential alongside comfortable day-to-day living.`,
    highlights: [
      "Affordable 2 BHK & 3 BHK builder floors",
      "Low-rise residential development for greater privacy",
      "Starting at just ₹30 Lakhs — excellent entry price",
      "Modern layouts with natural light & ventilation",
      "Developed by trusted Saraswati Group",
      "Surrounded by schools, hospitals & markets",
      "Strong future appreciation near Jewar Airport zone",
    ],
    amenities: [
      "Landscaped Green Areas",
      "Children's Play Zone",
      "24/7 Security",
      "Power Backup",
      "Rain Water Harvesting",
      "Dedicated Parking",
      "CCTV Surveillance",
      "Community Hall",
      "Fire Safety Systems",
      "Maintenance Staff",
    ],
    specifications: [
      { label: "Project Type", value: "Residential Builder Floors / Apartments" },
      { label: "Developer", value: "Saraswati Group" },
      { label: "Location", value: "Greater Noida West (Noida Extension), UP" },
      { label: "Configuration", value: "2 BHK & 3 BHK Builder Floors" },
      { label: "Size Range", value: "650 - 1200 sq.ft. (approx)" },
      { label: "Starting Price", value: "₹30 Lakhs* Onwards" },
      { label: "Structure", value: "Low-Rise Development" },
      { label: "Status", value: "Under Construction" },
    ],
    locationAdvantages: [
      "Located in Greater Noida West — high-growth residential zone",
      "Near Noida-Greater Noida Expressway",
      "Close to Delhi World Public School & Sanford International",
      "Near Yatharth Super Speciality Hospital",
      "Surrounded by daily convenience markets & retail",
      "Good connectivity to Noida, Delhi & NCR",
      "Near upcoming Metro line extension",
      "~35 km from Jewar International Airport (upcoming)",
    ],
    developer: "Saraswati Group",
    possession: "2026 (Expected)",
  },
  {
    id: "4",
    name: "Saraswati Embassy",
    slug: "saraswati-embassy",
    location: "Greater Noida West (Noida Extension)",
    type: "Residential Apartments",
    status: "Under Construction",
    priceRange: "₹35 Lakhs* Onwards",
    sizeRange: "800 - 1400 sq.ft.",
    image: "/project-saraswati-embassy.jpg",
    shortDescription:
      "Well-designed 2 & 3 BHK apartments in a gated complex with landscaped green areas by Saraswati Group in Greater Noida West.",
    fullDescription: `Saraswati Embassy is a thoughtfully planned residential project by Saraswati Group, located in Greater Noida West (Noida Extension), Uttar Pradesh. The project offers well-designed 2 BHK and 3 BHK apartments aimed at families seeking a peaceful, secure, and well-connected living environment with essential lifestyle amenities for comfortable urban living.

The apartments at Saraswati Embassy are designed with a focus on spacious interiors, ample natural light, and cross-ventilation. Each unit features dedicated balconies, modular kitchen-ready spaces, quality vitrified tile flooring, and ISI-certified electrical and plumbing fittings. The gated residential complex ensures security and privacy for all residents, with controlled entry-exit points and round-the-clock surveillance.

One of the standout features of Saraswati Embassy is its beautifully landscaped green areas — manicured gardens, tree-lined pathways, and open lawns that create a refreshing environment for residents. The project includes essential amenities such as a children's play area, community hall, gymnasium, power backup, rain water harvesting, and dedicated parking spaces.

Greater Noida West continues to attract homebuyers due to its affordability, improving infrastructure, and proximity to employment hubs. Saraswati Embassy benefits from excellent connectivity to Noida and Delhi via the Noida-Greater Noida Expressway, and is surrounded by reputed educational institutions, healthcare facilities including Yatharth Hospital, and shopping destinations. The upcoming Jewar International Airport and Metro extension are set to further elevate the area's real estate prospects, making Saraswati Embassy a smart choice for both end-users and investors.`,
    highlights: [
      "Spacious 2 BHK & 3 BHK apartments",
      "Gated residential complex with 24/7 security",
      "Beautifully landscaped green areas & gardens",
      "Cross-ventilated layouts with ample natural light",
      "Developed by trusted Saraswati Group",
      "Close to schools, hospitals & shopping centers",
      "Easy connectivity to Noida and Delhi",
    ],
    amenities: [
      "Gated Community",
      "Landscaped Gardens",
      "Children's Play Area",
      "Community Hall",
      "Gymnasium",
      "24/7 Security & CCTV",
      "Power Backup",
      "Rain Water Harvesting",
      "Dedicated Parking",
      "Fire Safety Systems",
      "Jogging Track",
      "Senior Citizen Seating",
    ],
    specifications: [
      { label: "Project Type", value: "Residential Apartments" },
      { label: "Developer", value: "Saraswati Group" },
      { label: "Location", value: "Greater Noida West (Noida Extension), UP" },
      { label: "Configuration", value: "2 BHK & 3 BHK Apartments" },
      { label: "Size Range", value: "800 - 1400 sq.ft. (approx)" },
      { label: "Starting Price", value: "₹35 Lakhs* Onwards" },
      { label: "Status", value: "Under Construction" },
      { label: "Possession", value: "2026 (Expected)" },
    ],
    locationAdvantages: [
      "Located in Greater Noida West (Noida Extension)",
      "Near Noida-Greater Noida Expressway",
      "Close to reputed schools & colleges",
      "Near Yatharth Super Speciality Hospital",
      "Surrounded by shopping centers & retail markets",
      "Good road connectivity to Delhi & NCR",
      "Near upcoming Metro extension",
      "~35 km from Jewar International Airport (upcoming)",
    ],
    developer: "Saraswati Group",
    possession: "2026 (Expected)",
  },
  {
    id: "5",
    name: "Saraswati Galleria",
    slug: "saraswati-galleria",
    location: "Greater Noida West (Noida Extension)",
    type: "Commercial Retail & Office Spaces",
    status: "New Launch",
    priceRange: "₹25 Lakhs* Onwards",
    sizeRange: "150 - 800 sq.ft.",
    image: "/project-saraswati-galleria.jpg",
    shortDescription:
      "High-footfall commercial retail shops & office spaces by Saraswati Group — surrounded by residential societies in Greater Noida West.",
    fullDescription: `Saraswati Galleria is a premium commercial retail project developed by Saraswati Group, strategically located in Greater Noida West (Noida Extension), Uttar Pradesh. Designed for businesses, retailers, and investors, the project offers well-planned retail shops and office spaces in one of the most rapidly developing areas of the NCR.

The project's prime advantage lies in its location — surrounded by multiple large residential societies and housing thousands of families, Saraswati Galleria is positioned to attract consistent high footfall from the very first day of operations. This makes it an ideal destination for grocery stores, pharmacies, salons, fashion outlets, cafes, coaching centers, medical clinics, and professional offices.

Each retail and office unit at Saraswati Galleria is designed with modern infrastructure, wide corridors, attractive frontage, and efficient layouts that maximize usable space. The project features ample parking for customers and visitors, power backup, fire safety systems, and 24/7 security — all essential for a successful commercial establishment.

Greater Noida West has witnessed explosive residential growth over the past decade, with thousands of families moving into the area. However, the commercial infrastructure has not kept pace with this residential boom, creating a massive demand-supply gap for quality retail and office spaces. Saraswati Galleria fills this gap perfectly, offering investors an opportunity to capitalize on the growing commercial demand.

With a starting price of just ₹25 Lakhs, Saraswati Galleria offers one of the most accessible entry points into commercial real estate in the NCR. The strong rental income potential, combined with capital appreciation driven by the upcoming Jewar Airport, Metro expansion, and continued residential development, makes this project a compelling investment opportunity.`,
    highlights: [
      "Commercial hub in Greater Noida West",
      "High footfall potential — surrounded by residential societies",
      "Retail shops & office spaces from ₹25 Lakhs",
      "Modern infrastructure with wide corridors & attractive frontage",
      "Fills demand-supply gap for commercial spaces in the area",
      "Developed by trusted Saraswati Group",
      "Excellent rental income & appreciation potential",
    ],
    amenities: [
      "Ample Customer Parking",
      "24/7 Security & CCTV",
      "Power Backup",
      "Fire Safety Systems",
      "High-Speed Elevators",
      "Wide Corridors",
      "Modern Facade & Signage",
      "Loading/Unloading Area",
      "Maintenance Staff",
      "Water Supply",
    ],
    specifications: [
      { label: "Project Type", value: "Commercial Retail Shops & Office Spaces" },
      { label: "Developer", value: "Saraswati Group" },
      { label: "Location", value: "Greater Noida West (Noida Extension), UP" },
      { label: "Configuration", value: "Retail Shops & Office Spaces" },
      { label: "Size Range", value: "150 - 800 sq.ft. (approx)" },
      { label: "Starting Price", value: "₹25 Lakhs* Onwards" },
      { label: "Status", value: "New Launch" },
      { label: "Possession", value: "2026 (Expected)" },
    ],
    locationAdvantages: [
      "Surrounded by major residential societies — guaranteed footfall",
      "Located in Greater Noida West's high-growth commercial belt",
      "Good road connectivity to Noida & Delhi NCR",
      "Near Noida-Greater Noida Expressway",
      "Close to schools, hospitals & residential townships",
      "Growing demand for retail & commercial spaces in the area",
      "~35 km from Jewar International Airport (upcoming)",
    ],
    developer: "Saraswati Group",
    possession: "2026 (Expected)",
  },
  {
    id: "6",
    name: "Wow Monk",
    slug: "wow-monk",
    location: "Greater Noida West (Noida Extension)",
    type: "Food & Entertainment Hub",
    status: "New Launch",
    priceRange: "₹20 Lakhs* Onwards",
    sizeRange: "100 - 600 sq.ft.",
    image: "/project-wow-monk.jpg",
    shortDescription:
      "A vibrant food, retail & entertainment commercial hub designed for brands, restaurateurs & investors in Greater Noida West.",
    fullDescription: `Wow Monk is a vibrant and modern commercial hub conceptualized as a food, retail, and entertainment destination in Greater Noida West (Noida Extension), Uttar Pradesh. Developed by a leading private commercial developer, this project is designed to become the go-to hangout and lifestyle destination for the thousands of families and young professionals residing in the surrounding residential townships.

The concept behind Wow Monk is unique — unlike traditional commercial projects that offer generic retail spaces, Wow Monk is specifically designed around the food and entertainment ecosystem. The project features dedicated food court spaces, restaurant units, cafe spots, retail shops, and entertainment zones — all designed with modern interiors, vibrant aesthetics, and customer-friendly layouts that encourage footfall and dwell time.

Greater Noida West is home to an estimated 2-3 lakh residents, predominantly young families and working professionals, but the area currently lacks a dedicated food and entertainment hub. Wow Monk addresses this gap head-on, offering investors and business owners an opportunity to establish their brands in a captive market with minimal competition and maximum demand.

Each commercial unit at Wow Monk features modern infrastructure — wide frontage for visibility, efficient layouts for restaurant and retail operations, plumbing and electrical provisions for food businesses, ample parking, and 24/7 security. The project's vibrant architecture and signage-friendly facade are designed to attract walk-in customers and create a buzzing commercial environment.

Starting at just ₹20 Lakhs, Wow Monk offers an exceptionally affordable entry into commercial real estate with strong rental yield potential. Whether you're an investor looking for high returns, a restaurateur seeking a prime location, or a brand looking to establish presence in Greater Noida West — Wow Monk is the perfect opportunity.`,
    highlights: [
      "Unique food & entertainment hub concept",
      "High footfall — surrounded by residential societies",
      "Retail shops, food court spaces & commercial units",
      "Starting from just ₹20 Lakhs — affordable commercial investment",
      "Designed for restaurants, cafes, brands & entertainment",
      "Modern infrastructure with vibrant architecture",
      "Fills the gap for lifestyle destinations in Greater Noida West",
    ],
    amenities: [
      "Dedicated Food Court Zones",
      "Ample Customer Parking",
      "24/7 Security & CCTV",
      "Power Backup",
      "Fire Safety Systems",
      "Modern Facade with Signage Options",
      "Plumbing & Electrical for F&B Units",
      "Loading/Unloading Area",
      "Wide Corridors & Open Spaces",
      "Entertainment Zone Infrastructure",
    ],
    specifications: [
      { label: "Project Type", value: "Commercial – Food & Entertainment Hub" },
      { label: "Developer", value: "Private Commercial Developer" },
      { label: "Location", value: "Greater Noida West (Noida Extension), UP" },
      { label: "Configuration", value: "Retail Shops, Food Court Spaces, Commercial Units" },
      { label: "Size Range", value: "100 - 600 sq.ft. (approx)" },
      { label: "Starting Price", value: "₹20 Lakhs* Onwards" },
      { label: "Status", value: "New Launch" },
      { label: "Possession", value: "2026 (Expected)" },
    ],
    locationAdvantages: [
      "Surrounded by large residential societies with 2-3 lakh residents",
      "No competing food & entertainment hub in the vicinity",
      "Located in Greater Noida West's high-density residential zone",
      "Good road connectivity to Noida & Delhi",
      "Near Noida-Greater Noida Expressway",
      "Young demographic — high demand for F&B and entertainment",
      "~35 km from Jewar International Airport (upcoming)",
    ],
    developer: "Private Commercial Developer",
    possession: "2026 (Expected)",
  },
  {
    id: "7",
    name: "Astor Square",
    slug: "astor-square",
    location: "Greater Noida West, Uttar Pradesh",
    type: "Commercial Retail & Office Spaces",
    status: "New Launch",
    priceRange: "₹22 Lakhs* Onwards",
    sizeRange: "150 - 700 sq.ft.",
    image: "/project-astor-square.jpg",
    shortDescription:
      "Premium commercial retail shops & office spaces with modern architecture by Astor Group in a strategic Greater Noida West location.",
    fullDescription: `Astor Square is a premium commercial development by Astor Group, offering thoughtfully designed retail shops and office spaces in a strategic location within Greater Noida West, Uttar Pradesh. The project is designed for businesses, entrepreneurs, and investors seeking quality commercial real estate in one of the NCR's fastest-growing markets.

The project stands out for its modern architecture and contemporary infrastructure — featuring a striking glass-and-steel facade, spacious lobbies, high-speed elevators, and well-planned floor plates that maximize usable area for every commercial unit. Whether you're opening a retail store, setting up a professional office, or investing for rental income, Astor Square provides the right environment for business success.

Greater Noida West's commercial real estate market is experiencing a significant upswing, driven by the explosive growth in residential population and the improvement in road and metro connectivity. Astor Square capitalizes on this trend by offering commercial spaces in a location with strong existing and projected demand. The surrounding area hosts thousands of residential units, educational institutions, and healthcare facilities — all contributing to consistent footfall and customer traffic.

Each unit at Astor Square is designed with business owners in mind — efficient layouts, attractive frontage for brand visibility, adequate parking for customers, power backup, fire safety, and 24/7 security. The project also benefits from excellent road connectivity, being well-connected to the Noida-Greater Noida Expressway and major arterial roads in the region.

At a starting price of ₹22 Lakhs, Astor Square offers a compelling combination of premium quality, strategic location, and accessible pricing — making it an excellent choice for first-time commercial investors and established business owners alike.`,
    highlights: [
      "Prime commercial location in Greater Noida West",
      "Modern glass-and-steel architecture",
      "Retail shops & office spaces from ₹22 Lakhs",
      "Developed by reputed Astor Group",
      "Strong investment potential with growing demand",
      "Good road connectivity to expressways",
      "Ideal for retail brands, offices & professional services",
    ],
    amenities: [
      "High-Speed Elevators",
      "Ample Customer Parking",
      "24/7 Security & CCTV",
      "Power Backup",
      "Fire Safety Systems",
      "Modern Lobby & Common Areas",
      "Wide Corridors",
      "Loading/Unloading Provisions",
      "Signage-Friendly Facade",
      "Maintenance Staff",
    ],
    specifications: [
      { label: "Project Type", value: "Commercial Retail Shops & Office Spaces" },
      { label: "Developer", value: "Astor Group" },
      { label: "Location", value: "Greater Noida West, Uttar Pradesh" },
      { label: "Configuration", value: "Retail Shops & Office Spaces" },
      { label: "Size Range", value: "150 - 700 sq.ft. (approx)" },
      { label: "Starting Price", value: "₹22 Lakhs* Onwards" },
      { label: "Status", value: "New Launch" },
      { label: "Possession", value: "2027 (Expected)" },
    ],
    locationAdvantages: [
      "Strategic location in Greater Noida West",
      "Surrounded by residential townships & institutions",
      "Good road connectivity to Noida-Greater Noida Expressway",
      "Near schools, hospitals & shopping centers",
      "Growing commercial demand in the area",
      "Well-connected to Delhi & NCR",
      "~35 km from Jewar International Airport (upcoming)",
    ],
    developer: "Astor Group",
    possession: "2027 (Expected)",
  },
  {
    id: "8",
    name: "Palm Valley",
    slug: "palm-valley",
    location: "Greater Noida West / NCR Region",
    type: "Residential Township",
    status: "Ready to Move / Ongoing Phases",
    priceRange: "₹30 Lakhs* Onwards",
    sizeRange: "1000 - 2500 sq.ft.",
    image: "/project-palm-valley.jpg",
    shortDescription:
      "A serene residential township offering plots, villas & apartments amidst lush green surroundings — ideal for families and long-term investors.",
    fullDescription: `Palm Valley is a sprawling residential development project offering a peaceful, green, and family-friendly living environment in Greater Noida West / NCR Region, Uttar Pradesh. The project is designed for families seeking a tranquil escape from the urban chaos while remaining well-connected to the major employment and lifestyle hubs of the NCR.

The development includes a diverse range of residential options — residential plots for those who wish to build their dream home from scratch, ready-to-move villas for families seeking immediate possession, and modern apartments for buyers looking for maintenance-free living. This variety ensures that Palm Valley caters to a wide range of budgets, preferences, and lifestyle needs.

Palm Valley's most striking feature is its lush green environment — the development is planned around mature palm-lined avenues, landscaped gardens, parks, and open recreational spaces that create a resort-like ambiance. The township includes essential community infrastructure such as internal roads, street lighting, underground drainage, water supply, electricity connections, and dedicated security.

The villas at Palm Valley offer spacious living with private gardens, while the apartments feature modern layouts with balconies and quality fittings. The residential plots come in various sizes, giving buyers the flexibility to design their homes according to their individual tastes and requirements.

Located in the Greater Noida West / NCR Region, Palm Valley benefits from good road connectivity to Noida, Delhi, and the wider NCR. The area is witnessing rapid infrastructure development, and the proximity to the upcoming Jewar International Airport is expected to drive significant appreciation in property values over the coming years. For families seeking peaceful, green living with strong investment fundamentals, Palm Valley is an excellent choice.`,
    highlights: [
      "Peaceful residential township with green surroundings",
      "Residential plots, villas & apartments available",
      "Palm-lined avenues & landscaped gardens",
      "Starting from ₹30 Lakhs — multiple budget options",
      "Ready to Move units available",
      "Good connectivity to NCR cities",
      "Ideal for families and long-term investors",
    ],
    amenities: [
      "Landscaped Gardens & Parks",
      "Internal Roads & Street Lighting",
      "Underground Drainage System",
      "24/7 Security",
      "Water Supply & Electricity",
      "Children's Play Area",
      "Community Center",
      "Jogging & Walking Tracks",
      "Dedicated Parking",
      "Green Open Spaces",
      "Senior Citizen Area",
      "Sports Facilities",
    ],
    specifications: [
      { label: "Project Type", value: "Residential Plots, Villas & Apartments" },
      { label: "Developer", value: "Private Developer" },
      { label: "Location", value: "Greater Noida West / NCR Region, UP" },
      { label: "Configuration", value: "Plots, Villas & Apartments" },
      { label: "Size Range", value: "1000 - 2500 sq.ft. (approx)" },
      { label: "Starting Price", value: "₹30 Lakhs* Onwards" },
      { label: "Status", value: "Ready to Move / Ongoing Phases" },
      { label: "Possession", value: "Ready to Move / 2026" },
    ],
    locationAdvantages: [
      "Located in Greater Noida West / NCR Region",
      "Good road connectivity to Noida & Delhi",
      "Near Noida-Greater Noida Expressway",
      "Surrounded by developing infrastructure",
      "Close to schools, hospitals & markets",
      "Near upcoming Jewar International Airport zone",
      "Rapidly appreciating real estate corridor",
      "Well-connected to employment hubs of NCR",
    ],
    developer: "Private Developer",
    possession: "Ready to Move / Ongoing",
  },
];
