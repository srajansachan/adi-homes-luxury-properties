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
  "Proven track record since 2005",
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
            <p className="text-muted-foreground text-lg">
              Where Money Grows — Since 2005
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
                  The ADI Homes was founded with a singular vision — to bridge the gap between home seekers and premium real estate opportunities in one of India's most dynamic property markets: Greater Noida West.
                </p>
                <p>
                  Our team comprises seasoned real estate professionals with deep knowledge of the Greater Noida West market. We understand that buying a home is one of the most significant decisions in a person's life, and we are committed to making that journey seamless, transparent, and rewarding.
                </p>
                <p>
                  We work exclusively with RERA-registered, reputed developers to ensure that every property we recommend meets the highest standards of quality, legal compliance, and investment potential.
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
    </div>
  );
}
