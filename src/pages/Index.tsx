import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Shield, TrendingUp, Users, MapPin, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import LeadForm from "@/components/LeadForm";
import { projects } from "@/data/projects";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { number: "50+", label: "Happy Families" },
  { number: "3+", label: "Premium Projects" },
  { number: "10+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

const features = [
  {
    icon: Building2,
    title: "Premium Properties",
    desc: "Handpicked luxury apartments and commercial spaces in Greater Noida West's finest locations.",
  },
  {
    icon: Shield,
    title: "Trusted Partners",
    desc: "We work only with RERA-registered, reputed developers ensuring complete transparency and safety.",
  },
  {
    icon: TrendingUp,
    title: "Investment Growth",
    desc: "Strategic locations with proven appreciation potential near expressways, metro, and Jewar Airport.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    desc: "Dedicated relationship managers guide you through every step from selection to possession.",
  },
];

export default function Index() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy-dark/60" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium tracking-wider uppercase mb-6">
                  Premium Real Estate Investments
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light leading-tight mb-6"
              >
                Your Dream Home
                <br />
                <span className="text-gold">Awaits You</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-gold-light/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              >
                Discover premium apartments, studio spaces, and investment opportunities in Greater Noida West with The ADI Homes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects">
                  <Button className="bg-gold text-navy hover:bg-gold-dark h-12 px-8 font-semibold text-base">
                    Explore Projects <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:9958004587">
                  <Button variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 h-12 px-8 text-base">
                    <Phone className="w-5 h-5 mr-2" /> Call Us
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Lead Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-card/95 backdrop-blur-md rounded-lg p-8 shadow-2xl border border-gold/10"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Get Free Consultation
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill the form below and our experts will call you back
              </p>
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gold py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-navy">{s.number}</div>
                  <div className="text-navy/70 font-medium text-sm mt-1">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Building Trust, Delivering Dreams
              </h2>
              <p className="text-muted-foreground">
                At The ADI Homes, we are committed to making your real estate journey seamless, transparent, and rewarding.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="scale">
                <div className="bg-card rounded-lg p-6 border border-border hover:border-gold/30 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <f.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Portfolio</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-light mt-3 mb-4">
                Featured Projects
              </h2>
              <p className="text-gold-light/60">
                Explore our carefully curated selection of premium properties in Greater Noida West.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.15} direction="up">
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="bg-navy-light/50 rounded-lg overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/5">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium bg-gold/20 text-gold px-2 py-0.5 rounded">
                          {project.status}
                        </span>
                        <span className="text-xs text-gold-light/50">{project.type}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-gold-light group-hover:text-gold transition-colors mb-1">
                        {project.name}
                      </h3>
                      <p className="flex items-center gap-1 text-gold-light/50 text-sm mb-3">
                        <MapPin className="w-3.5 h-3.5" /> {project.location}
                      </p>
                      <p className="text-gold-light/60 text-sm line-clamp-2 mb-4">
                        {project.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg font-bold text-gold">
                          {project.priceRange}
                        </span>
                        <span className="flex items-center text-gold text-sm font-medium group-hover:translate-x-1 transition-transform">
                          View Details <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/projects">
              <Button className="bg-gold text-navy hover:bg-gold-dark h-12 px-8 font-semibold">
                View All Projects <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold via-gold-dark to-gold">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Invest in Your Future?
            </h2>
            <p className="text-navy/70 text-lg max-w-2xl mx-auto mb-8">
              Get expert guidance from The ADI Homes team. We'll help you find the perfect property that matches your budget and aspirations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:9958004587">
                <Button className="bg-navy text-gold hover:bg-navy-dark h-12 px-8 font-semibold text-base">
                  <Phone className="w-5 h-5 mr-2" /> +91 9958004587
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-navy text-navy hover:bg-navy/10 h-12 px-8 text-base font-semibold">
                  Send Enquiry <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
