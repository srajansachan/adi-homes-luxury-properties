import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Building2, Shield, TrendingUp, Users, MapPin, Phone,
  ChevronRight, Star, Award, Handshake, Clock, Home, BarChart3,
  CheckCircle, Quote, Facebook, Instagram, Linkedin, Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";
import heroBg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo.png";

const stats = [
  { number: "100+", label: "Happy Investors" },
  { number: "10+", label: "Premium Projects" },
  { number: "Since", label: "2005" },
  { number: "100%", label: "Transparency" },
];

const features = [
  {
    icon: Building2,
    title: "Curated Properties",
    desc: "Handpicked luxury residences and commercial spaces from RERA-registered developers in Greater Noida West's most premium locations.",
  },
  {
    icon: Shield,
    title: "Absolute Trust",
    desc: "Complete transparency at every step — from pricing to documentation to possession. No hidden charges, no surprises.",
  },
  {
    icon: TrendingUp,
    title: "Smart Investments",
    desc: "Strategic locations near expressways, metro & Jewar Airport ensuring exceptional capital appreciation and rental yields.",
  },
  {
    icon: Users,
    title: "White Glove Service",
    desc: "Dedicated relationship managers providing personalized guidance through your entire property journey from search to keys.",
  },
];

const processSteps = [
  { icon: Home, title: "Property Discovery", desc: "We understand your requirements, budget, and preferences to shortlist the perfect properties for you." },
  { icon: MapPin, title: "Site Visits", desc: "Our team arranges guided site visits with detailed walkthroughs of every shortlisted property." },
  { icon: BarChart3, title: "Investment Analysis", desc: "Get detailed ROI projections, price comparisons, and market trends analysis before you decide." },
  { icon: Handshake, title: "Seamless Closure", desc: "We handle negotiations, documentation, legal checks, and registration — so you don't have to worry." },
];

const testimonialsCol1 = [
  {
    name: "Rajesh Kumar",
    role: "Investor, Winsten Park",
    quote: "The ADI Homes made my first real estate investment incredibly simple. Their transparency and market knowledge gave me confidence to invest in Greater Noida West.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Homeowner, Saraswati Landmark",
    quote: "From the very first consultation to getting the keys, the team was with us at every step. We found our dream home thanks to The ADI Homes.",
    rating: 5,
  },
  {
    name: "Sunil Gupta",
    role: "Investor, Lucky Palm Valley",
    quote: "Excellent service and complete transparency throughout. The team helped me understand every detail of the investment and I'm very happy with the returns.",
    rating: 5,
  },
  {
    name: "Neha Agarwal",
    role: "Homeowner, Winsten Park",
    quote: "Professional, honest, and incredibly helpful. The ADI Homes made our home buying journey stress-free. Highly recommend their services to anyone looking in Noida Extension.",
    rating: 5,
  },
];

const testimonialsCol2 = [
  {
    name: "Amit Verma",
    role: "Investor, Lucky Palm Valley",
    quote: "I've invested in multiple properties through The ADI Homes. Their market insights and honest advice have helped me build a strong real estate portfolio.",
    rating: 5,
  },
  {
    name: "Deepak Malhotra",
    role: "Investor, Saraswati Landmark",
    quote: "What sets The ADI Homes apart is their deep knowledge of Greater Noida West. They guided me to the right property at the right price. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "Kavita Singh",
    role: "Homeowner, Winsten Park",
    quote: "The team's dedication is unmatched. They followed up even after possession to make sure everything was perfect. Truly a white-glove experience.",
    rating: 4,
  },
  {
    name: "Rahul Jain",
    role: "Investor",
    quote: "Best real estate consultants in Greater Noida West. They understand the market like no one else and their after-sales service is outstanding.",
    rating: 5,
  },
];

const featuredProjects = projects.slice(0, 6);

function TestimonialCard({ testimonial }: { testimonial: { name: string; role: string; quote: string; rating: number } }) {
  return (
    <div className="bg-background p-5 md:p-6 border border-border hover:border-gold/15 transition-all flex flex-col shrink-0">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-1 italic mb-4">"{testimonial.quote}"</p>
      <div className="luxury-divider mb-3" />
      <div>
        <div className="font-display text-base md:text-lg font-semibold">{testimonial.name}</div>
        <div className="text-gold/70 text-[10px] md:text-xs tracking-wider uppercase mt-0.5">{testimonial.role}</div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="overflow-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="relative container mx-auto px-6 lg:px-10 pt-24">
          <div className="max-w-3xl min-h-[85vh] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-gold/50" />
              <span className="font-body text-gold text-[13px] font-medium tracking-[0.3em] uppercase">
                Where Money Grows — Since 2005
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8"
            >
              <span className="text-foreground">Luxury</span>
              <br />
              <span className="gold-text-gradient">Redefined.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Discover premium apartments, studios & investment opportunities in Greater Noida West's most coveted addresses. Trusted by 100+ investors across the NCR.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-5"
            >
              <Link to="/projects">
                <Button className="gradient-gold text-background hover:opacity-90 h-13 px-10 font-body font-semibold text-[13px] tracking-[0.15em] uppercase rounded-none transition-all duration-300">
                  Explore Projects <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
              </Link>
              <a href="tel:9958004587">
                <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/5 h-13 px-10 font-body text-[13px] tracking-[0.15em] uppercase rounded-none">
                  <Phone className="w-4 h-4 mr-3" /> +91 9958004587
                </Button>
              </a>
            </motion.div>

            {/* Social icons in hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center gap-4 mt-12"
            >
              <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase">Follow Us</span>
              <div className="h-px w-6 bg-gold/30" />
              {[
                { icon: Facebook, href: "https://www.facebook.com/spaceplanner13/" },
                { icon: Instagram, href: "https://www.instagram.com/theadihomes/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/the-adi-homes/" },
                { icon: Youtube, href: "https://www.youtube.com/@theadihomes" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="relative py-6">
        <div className="luxury-divider" />
        <div className="container mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold gold-text-gradient">{s.number}</div>
                  <div className="text-muted-foreground font-body text-sm tracking-[0.15em] uppercase mt-2">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="luxury-divider" />
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">The ADI Difference</span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="gold-text-gradient">The ADI Homes</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                With over two decades of experience in the NCR real estate market, we've helped hundreds of families and investors find their perfect property. Our commitment to transparency, quality, and customer satisfaction sets us apart.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.12} direction="up">
                <div className="group bg-card p-8 border border-border hover:border-gold/20 transition-all duration-500 h-full gold-border-glow">
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-all duration-300">
                    <f.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURED PROJECTS — GRID ═══════════════ */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Portfolio</span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="gold-text-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground">
                Carefully selected premium properties in Greater Noida West's prime locations — residential townships, luxury apartments, and smart commercial spaces.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1} direction="up">
                <Link to={`/projects/${project.slug}`} className="group block h-full">
                  <div className="bg-background border border-border hover:border-gold/20 transition-all duration-500 overflow-hidden luxury-shadow h-full">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[11px] font-medium gradient-gold text-background px-3 py-1 tracking-[0.15em] uppercase">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground text-xs tracking-[0.15em] uppercase mb-2">{project.type}</p>
                      <h3 className="font-display text-2xl font-bold group-hover:text-gold transition-colors duration-300 mb-2">
                        {project.name}
                      </h3>
                      <p className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                        <MapPin className="w-3.5 h-3.5 text-gold/60" /> {project.location}
                      </p>
                      <div className="luxury-divider mb-4" />
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xl font-bold text-gold">{project.priceRange}</span>
                        <span className="flex items-center text-gold text-xs font-medium tracking-[0.15em] uppercase group-hover:translate-x-1 transition-transform">
                          Details <ChevronRight className="w-3.5 h-3.5 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects">
              <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/5 h-13 px-10 font-body text-[13px] tracking-[0.15em] uppercase rounded-none">
                View All Projects <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW WE WORK ═══════════════ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Our Process</span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                How We <span className="gold-text-gradient">Work</span>
              </h2>
              <p className="text-muted-foreground">
                A seamless four-step journey from your first enquiry to the keys of your new property. We handle everything so you can focus on what matters.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.12} direction="up">
                <div className="relative bg-card p-8 border border-border hover:border-gold/20 transition-all duration-500 h-full">
                  <div className="font-display text-6xl font-bold text-gold/10 absolute top-4 right-6">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-6">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS — TWO COLUMN SCROLL ═══════════════ */}
      <section className="py-24 lg:py-32 bg-card overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Testimonials</span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                What Our <span className="gold-text-gradient">Clients Say</span>
              </h2>
              <p className="text-muted-foreground">
                Hear from the investors and homeowners who trusted us with their biggest decisions.
              </p>
            </div>
          </AnimatedSection>

          {/* Google Verified Badge */}
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-16">
              <div className="flex items-center gap-2 bg-background border border-border px-5 py-2.5 rounded-full">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-foreground text-sm font-semibold ml-1">4.9</span>
                <span className="text-muted-foreground text-xs">Google Verified</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Two-column infinite scroll */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-[500px] md:h-[600px] overflow-hidden relative">
            {/* Fade overlays */}
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />

            {/* Column 1 — scrolls UP */}
            <div className="overflow-hidden relative">
              <motion.div
                className="flex flex-col gap-4 md:gap-6"
                animate={{ y: [0, -(testimonialsCol1.length * 220)] }}
                transition={{ y: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}
              >
                {[...testimonialsCol1, ...testimonialsCol1, ...testimonialsCol1].map((t, i) => (
                  <TestimonialCard key={`c1-${i}`} testimonial={t} />
                ))}
              </motion.div>
            </div>

            {/* Column 2 — scrolls DOWN */}
            <div className="overflow-hidden relative">
              <motion.div
                className="flex flex-col gap-4 md:gap-6"
                animate={{ y: [-(testimonialsCol2.length * 220), 0] }}
                transition={{ y: { repeat: Infinity, repeatType: "loop", duration: 22, ease: "linear" } }}
              >
                {[...testimonialsCol2, ...testimonialsCol2, ...testimonialsCol2].map((t, i) => (
                  <TestimonialCard key={`c2-${i}`} testimonial={t} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ AREA EXPERTISE ═══════════════ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Expertise</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Greater Noida West <span className="gold-text-gradient">Specialists</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Greater Noida West is one of the fastest-growing real estate corridors in the NCR. With the upcoming Jewar International Airport just 30 minutes away, new metro lines, and world-class infrastructure development, property values here are set to appreciate significantly in the coming years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As specialists in this market since 2005, we have an unmatched understanding of micro-locations, developer track records, pricing trends, and investment potential. Whether you're buying your first home, upgrading, or building an investment portfolio — we have the knowledge and network to find you the best deal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Knowledge Park 5",
                  "Sector 1 Noida Ext.",
                  "Noida Expressway Belt",
                  "Tech Zone IV",
                  "Jewar Airport Zone",
                  "Greater Noida West"
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-8 border border-border gold-border-glow">
                  <Award className="w-8 h-8 text-gold mb-4" />
                  <div className="font-display text-3xl font-bold gold-text-gradient">20+</div>
                  <div className="text-muted-foreground text-sm mt-1">Years in Real Estate</div>
                </div>
                <div className="bg-card p-8 border border-border gold-border-glow">
                  <Building2 className="w-8 h-8 text-gold mb-4" />
                  <div className="font-display text-3xl font-bold gold-text-gradient">10+</div>
                  <div className="text-muted-foreground text-sm mt-1">Partner Developers</div>
                </div>
                <div className="bg-card p-8 border border-border gold-border-glow">
                  <Users className="w-8 h-8 text-gold mb-4" />
                  <div className="font-display text-3xl font-bold gold-text-gradient">100+</div>
                  <div className="text-muted-foreground text-sm mt-1">Happy Investors</div>
                </div>
                <div className="bg-card p-8 border border-border gold-border-glow">
                  <Clock className="w-8 h-8 text-gold mb-4" />
                  <div className="font-display text-3xl font-bold gold-text-gradient">24hr</div>
                  <div className="text-muted-foreground text-sm mt-1">Response Time</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-charcoal to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="relative container mx-auto px-6 lg:px-10 text-center">
          <AnimatedSection>
            <img src={logoImg} alt="The ADI Homes" className="h-24 w-24 mx-auto mb-8 opacity-60" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to <span className="gold-text-gradient">Invest</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Let our experts guide you to the perfect property. Your dream home is one call away.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="tel:9958004587">
                <Button className="gradient-gold text-background hover:opacity-90 h-13 px-10 font-body font-semibold text-[13px] tracking-[0.15em] uppercase rounded-none">
                  <Phone className="w-4 h-4 mr-3" /> +91 9958004587
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/5 h-13 px-10 font-body text-[13px] tracking-[0.15em] uppercase rounded-none">
                  Send Enquiry <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
