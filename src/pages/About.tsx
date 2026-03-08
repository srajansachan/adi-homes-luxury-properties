import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, Target, Eye, Heart, Award, Building2, Users, Briefcase, MapPin, Shield, TrendingUp, Handshake } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import logoImg from "@/assets/logo.png";

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide transparent, reliable, and customer-centric real estate solutions that help families and investors make informed decisions and achieve their property goals in the NCR region." },
  { icon: Eye, title: "Our Vision", desc: "To become the most trusted real estate advisory firm in the NCR region, known for integrity, expertise, and an unwavering commitment to client satisfaction." },
  { icon: Heart, title: "Our Values", desc: "Transparency, trust, and tenacity form the pillars of everything we do. We believe in building lasting relationships that go beyond transactions." },
];

const whyUs = [
  "Deep expertise in Greater Noida West real estate market since 2005",
  "Partnerships with only RERA-registered, reputed developers",
  "End-to-end support from property selection to possession",
  "Transparent pricing with absolutely no hidden charges",
  "Dedicated relationship manager for every client",
  "Post-sale support, documentation & registration assistance",
  "Real-time market insights and investment advisory",
  "Proven track record with 100+ happy investors",
];

const milestones = [
  { year: "2005", title: "Founded", desc: "The ADI Homes was established with a vision to transform real estate advisory in the NCR." },
  { year: "2010", title: "50 Families", desc: "Crossed the milestone of helping 50 families find their dream homes in Greater Noida." },
  { year: "2018", title: "Commercial Expansion", desc: "Expanded our portfolio to include premium commercial properties and studio apartments." },
  { year: "2023", title: "100+ Investors", desc: "Surpassed 100+ happy investors and partnered with 10+ top developers in the region." },
  { year: "2026", title: "Digital Transformation", desc: "Launched our digital platform to serve clients across India with virtual tours and online consultations." },
];

const expertise = [
  { icon: Building2, title: "Residential Properties", desc: "1/2/3/4 BHK luxury apartments, builder floors, and independent houses across Greater Noida West." },
  { icon: Briefcase, title: "Commercial Spaces", desc: "Office spaces, retail shops, business suites, and IT villas in prime commercial hubs." },
  { icon: TrendingUp, title: "Investment Advisory", desc: "Data-driven investment recommendations based on market trends, ROI projections, and growth corridors." },
  { icon: Handshake, title: "Resale & Rental", desc: "Assistance with resale transactions and rental management for existing property owners." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-36 lg:py-44">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutBg})` }}>
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">About Us</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              The ADI <span className="gold-text-gradient">Homes</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Where Money Grows — Trusted Real Estate Advisory Since 2005
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Our Story</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Building Dreams, <span className="gold-text-gradient">One Home at a Time</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  The ADI Homes was founded in 2005 with a singular vision — to bridge the gap between home seekers and premium real estate opportunities in one of India's most dynamic property markets: Greater Noida West. What began as a passion for real estate has evolved into a trusted advisory firm that has helped over 100 families and investors find their ideal properties.
                </p>
                <p>
                  Our team comprises seasoned real estate professionals with deep knowledge of every micro-market in Greater Noida West — from Knowledge Park and Sector 1 to the Noida Expressway belt and the upcoming Jewar Airport influence zone. We understand that buying a property is one of the most significant financial decisions in a person's life, and we are committed to making that journey smooth, transparent, and rewarding.
                </p>
                <p>
                  We work exclusively with RERA-registered, reputed developers to ensure that every property we recommend meets the highest standards of quality, legal compliance, and investment potential. From affordable studio apartments starting at ₹13 Lakhs to luxury 4 BHK flats, our portfolio covers the full spectrum of real estate options.
                </p>
                <p>
                  At The ADI Homes, we don't just sell properties — we build relationships. Our post-sale support, market update services, and dedicated relationship managers ensure that your experience with us extends far beyond the transaction.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="bg-card p-8 border border-border hover:border-gold/20 transition-all duration-300 gold-border-glow"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 border border-gold/20 flex items-center justify-center">
                        <v.icon className="w-5 h-5 text-gold" />
                      </div>
                      <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Services</span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Our <span className="gold-text-gradient">Expertise</span>
              </h2>
              <p className="text-muted-foreground">
                Comprehensive real estate services tailored to meet every need — whether you're a first-time homebuyer, a seasoned investor, or a business looking for the perfect commercial space.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((e, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-background p-8 border border-border hover:border-gold/20 transition-all h-full">
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mb-5">
                    <e.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{e.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Our Journey</span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Milestones <span className="gold-text-gradient">& Growth</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 text-right">
                    <span className="font-display text-2xl font-bold text-gold">{m.year}</span>
                  </div>
                  <div className="w-px bg-gold/20 shrink-0 self-stretch" />
                  <div className="bg-card p-6 border border-border flex-1">
                    <h3 className="font-display text-lg font-semibold mb-2">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Trust</span>
                <div className="h-px w-8 bg-gold/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Why Clients <span className="gold-text-gradient">Trust Us</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-4 bg-background p-5 border border-border hover:border-gold/15 transition-all">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-charcoal to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <img src={logoImg} alt="The ADI Homes" className="h-20 w-20 mx-auto mb-6 opacity-50" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Build Your <span className="gold-text-gradient">Future Together</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you're looking for a home or an investment, our team is ready to help you make the right decision.
            </p>
            <a href="tel:9958004587">
              <button className="gradient-gold text-background hover:opacity-90 px-10 py-3 font-body font-semibold text-[13px] tracking-[0.15em] uppercase transition-all duration-300">
                Call +91 9958004587
              </button>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
