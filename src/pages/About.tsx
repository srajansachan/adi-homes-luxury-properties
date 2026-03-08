import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide transparent, reliable, and customer-centric real estate solutions that help families and investors make informed decisions and achieve their property goals." },
  { icon: Eye, title: "Our Vision", desc: "To become the most trusted real estate advisory firm in the NCR region, known for integrity, expertise, and an unwavering commitment to client satisfaction." },
  { icon: Heart, title: "Our Values", desc: "Transparency, trust, and tenacity form the pillars of everything we do. We believe in building lasting relationships that go beyond transactions." },
];

const whyUs = [
  "Deep expertise in Greater Noida West real estate market",
  "Partnerships with only RERA-registered, reputed developers",
  "End-to-end support from property selection to possession",
  "Transparent pricing with no hidden charges",
  "Dedicated relationship manager for every client",
  "Post-sale support and documentation assistance",
  "Market insights and investment advisory",
  "Proven track record of happy homeowners",
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutBg})` }}>
          <div className="absolute inset-0 bg-navy-dark/85" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="text-gold text-sm uppercase tracking-wider font-medium">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mt-4 mb-4">
              The ADI Homes
            </h1>
            <p className="text-gold-light/60 text-lg max-w-2xl mx-auto">
              Your Trusted Partner in Premium Real Estate
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-gold text-sm uppercase tracking-wider font-medium">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
                Building Dreams, <span className="text-gold">One Home at a Time</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The ADI Homes was founded with a singular vision — to bridge the gap between home seekers and premium real estate opportunities in one of India's most dynamic property markets: Greater Noida West. What started as a passion for real estate has evolved into a trusted advisory firm that has helped numerous families find their dream homes.
                </p>
                <p>
                  Our team comprises seasoned real estate professionals with deep knowledge of the Greater Noida West market, including Knowledge Park, Sector 1, and the wider Noida Extension area. We understand that buying a home is one of the most significant decisions in a person's life, and we are committed to making that journey as smooth, transparent, and rewarding as possible.
                </p>
                <p>
                  We work exclusively with RERA-registered, reputed developers to ensure that every property we recommend meets the highest standards of quality, legal compliance, and investment potential. From studio apartments and luxury flats to commercial spaces, our portfolio covers a wide spectrum of real estate options to suit every budget and requirement.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className={`bg-card rounded-lg p-6 border border-border hover:border-gold/30 transition-all ${
                      i === 2 ? "col-span-2" : ""
                    }`}
                  >
                    <v.icon className="w-8 h-8 text-gold mb-3" />
                    <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-gold text-sm uppercase tracking-wider font-medium">Why The ADI Homes</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-light mt-3">
                Why Clients Trust Us
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3 bg-navy-light/30 rounded-lg p-4 border border-gold/10">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-gold-light/80 text-sm">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
