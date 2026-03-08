import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Shield, TrendingUp, Users, MapPin, Phone, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import LeadForm from "@/components/LeadForm";
import { projects } from "@/data/projects";
import heroBg from "@/assets/hero-bg.jpg";
import logoImg from "@/assets/logo.png";

const stats = [
  { number: "50+", label: "Happy Families" },
  { number: "3+", label: "Premium Projects" },
  { number: "Since", label: "2005" },
  { number: "100%", label: "Transparency" },
];

const features = [
  {
    icon: Building2,
    title: "Curated Properties",
    desc: "Handpicked luxury residences and commercial spaces from RERA-registered developers in Greater Noida West.",
  },
  {
    icon: Shield,
    title: "Absolute Trust",
    desc: "Complete transparency at every step — from pricing to documentation to possession.",
  },
  {
    icon: TrendingUp,
    title: "Smart Investments",
    desc: "Strategic locations near expressways, metro & Jewar Airport ensuring exceptional capital appreciation.",
  },
  {
    icon: Users,
    title: "White Glove Service",
    desc: "Dedicated relationship managers providing personalized guidance through your entire property journey.",
  },
];

export default function Index() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="relative container mx-auto px-6 lg:px-10 pt-24">
          <div className="grid lg:grid-cols-5 gap-16 items-center min-h-[85vh]">
            {/* Left — 3 cols */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-12 bg-gold/50" />
                <span className="font-body text-gold text-[13px] font-medium tracking-[0.3em] uppercase">
                  Where Money Grows
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
                <span className="gold-text-gradient">Redefined</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
              >
                Discover premium apartments, studios & investment opportunities in Greater Noida West's most coveted addresses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-5"
              >
                <Link to="/projects">
                  <Button className="bg-gold text-background hover:bg-gold-dark h-13 px-10 font-body font-semibold text-[13px] tracking-[0.15em] uppercase rounded-none transition-all duration-300">
                    Explore Projects <ArrowRight className="w-4 h-4 ml-3" />
                  </Button>
                </Link>
                <a href="tel:9958004587">
                  <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/5 h-13 px-10 font-body text-[13px] tracking-[0.15em] uppercase rounded-none">
                    <Phone className="w-4 h-4 mr-3" /> +91 9958004587
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Right — Lead Form — 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-card/90 backdrop-blur-xl p-8 border border-gold/10 gold-border-glow">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">Free Consultation</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  Book Your Visit
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Our experts will call you within 30 minutes
                </p>
                <LeadForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-6">
        <div className="luxury-divider" />
        <div className="container mx-auto px-6 lg:px-10 py-10">
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

      {/* WHY CHOOSE US */}
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
              <p className="text-muted-foreground text-base">
                Two decades of trust, transparency, and unmatched expertise in real estate.
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

      {/* PROJECTS */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Portfolio</span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="gold-text-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground">
                Carefully selected premium properties in Greater Noida West's prime locations.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.15} direction="up">
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="bg-background border border-border hover:border-gold/20 transition-all duration-500 overflow-hidden luxury-shadow">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[11px] font-medium bg-gold text-background px-3 py-1 tracking-[0.15em] uppercase">
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
        </div>
      </section>

      {/* CTA */}
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
                <Button className="bg-gold text-background hover:bg-gold-dark h-13 px-10 font-body font-semibold text-[13px] tracking-[0.15em] uppercase rounded-none">
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
