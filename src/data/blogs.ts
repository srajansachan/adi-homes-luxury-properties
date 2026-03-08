export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

// In-memory blog store (persisted via localStorage)
const STORAGE_KEY = "adi_homes_blogs";

const defaultBlogs: BlogPost[] = [
  {
    id: "1",
    title: "Why Greater Noida West is the Next Big Real Estate Hotspot",
    slug: "greater-noida-west-real-estate-hotspot",
    excerpt: "Discover why investors and homebuyers are flocking to Greater Noida West for premium real estate opportunities.",
    content: `<h2>The Rise of Greater Noida West</h2>
<p>Greater Noida West, commonly known as Noida Extension, has emerged as one of the most sought-after real estate destinations in the National Capital Region (NCR). With rapid infrastructure development, excellent connectivity, and affordable pricing compared to Noida and Delhi, this region is attracting both end-users and investors in large numbers.</p>
<h3>Key Factors Driving Growth</h3>
<ul>
<li><strong>Expressway Connectivity:</strong> The Noida-Greater Noida Expressway provides seamless access to Delhi, Noida, and the wider NCR.</li>
<li><strong>Metro Expansion:</strong> The upcoming Aqua Line extension will further boost connectivity and property values.</li>
<li><strong>Educational Hub:</strong> Home to premier institutions like Galgotias University, NIET, and numerous international schools.</li>
<li><strong>Healthcare Infrastructure:</strong> World-class hospitals like Yatharth Super Speciality are already operational.</li>
<li><strong>Affordable Luxury:</strong> Premium apartments at prices 30-40% lower than comparable properties in Noida.</li>
</ul>
<h3>Investment Potential</h3>
<p>Property prices in Greater Noida West have shown consistent appreciation of 8-12% annually over the past few years. With the upcoming Jewar International Airport just 30 minutes away, experts predict even stronger growth in the coming years.</p>
<p>Whether you're looking for your dream home or a smart investment, Greater Noida West offers unmatched value in today's market.</p>`,
    author: "The ADI Homes",
    date: "2026-03-01",
    image: "",
    category: "Market Insights",
  },
  {
    id: "2",
    title: "Studio Apartments: The Smart Investment Choice for Young Professionals",
    slug: "studio-apartments-smart-investment",
    excerpt: "Learn why studio apartments in Knowledge Park are becoming the preferred choice for young professionals and investors.",
    content: `<h2>The Studio Apartment Revolution</h2>
<p>The concept of studio apartments has gained tremendous popularity in India, especially in commercial hubs like Knowledge Park, Greater Noida. These compact yet functional living spaces offer the perfect blend of affordability, convenience, and investment potential.</p>
<h3>Why Choose Studio Apartments?</h3>
<ul>
<li><strong>Affordable Entry Point:</strong> Starting from just ₹13 Lakhs, studio apartments offer an accessible entry into real estate investment.</li>
<li><strong>High Rental Yield:</strong> With growing demand from IT professionals and students, rental yields can reach 6-8% annually.</li>
<li><strong>Low Maintenance:</strong> Compact spaces mean lower maintenance costs and easier management.</li>
<li><strong>Location Premium:</strong> Projects like Winsten Park in Knowledge Park 5 offer prime commercial locations.</li>
</ul>
<h3>Ideal For</h3>
<p>Studio apartments are perfect for young professionals working in the Noida-Greater Noida IT corridor, students attending nearby universities, and investors looking for steady rental income with capital appreciation potential.</p>`,
    author: "The ADI Homes",
    date: "2026-02-15",
    image: "",
    category: "Investment Tips",
  },
];

export function getBlogs(): BlogPost[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultBlogs;
}

export function saveBlog(blog: BlogPost): void {
  const blogs = getBlogs();
  const index = blogs.findIndex((b) => b.id === blog.id);
  if (index >= 0) {
    blogs[index] = blog;
  } else {
    blogs.unshift(blog);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}

export function deleteBlog(id: string): void {
  const blogs = getBlogs().filter((b) => b.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}
