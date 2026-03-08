import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9958004587", href: "tel:9958004587" },
  { icon: Mail, label: "Email", value: "info@theadihomes.co.in", href: "mailto:info@theadihomes.co.in" },
  { icon: MapPin, label: "Office", value: "Greater Noida West, Uttar Pradesh, India", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon - Sat: 10 AM - 7 PM", href: "#" },
];

export default function Contact() {
  return (
    <div>
      <SEOHead
        title="Contact The ADI Homes | Property Consultation Greater Noida West | Call +91 9958004587"
        description="Contact The ADI Homes for free property consultation in Greater Noida West. Get expert advice on flats, apartments & commercial properties in Noida Extension. Call +91 9958004587 or visit our office."
        canonical="https://theadihomes.co.in/contact"
        keywords="contact The ADI Homes, property consultation Greater Noida West, real estate enquiry Noida Extension, book site visit Greater Noida, property dealer contact number, free property consultation NCR"
      />
      <section className="relative py-36 lg:py-44 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Contact</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Get in <span className="gold-text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our team is ready to help you find your perfect property
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/40" />
                <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Reach Out</span>
              </div>
              <h2 className="font-display text-4xl font-bold mb-6">Let's Talk</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Whether you're looking for your dream home, a smart investment, or simply need market insights — we're here for you.
              </p>
              <div className="space-y-4 mb-10">
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-center gap-5 bg-card p-5 border border-border hover:border-gold/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 border border-gold/20 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground tracking-wider uppercase">{c.label}</div>
                      <div className="font-medium text-sm mt-0.5">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <h3 className="font-display text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { label: "Facebook", href: "https://www.facebook.com/spaceplanner13/" },
                  { label: "Instagram", href: "https://www.instagram.com/theadihomes/" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/the-adi-homes/" },
                  { label: "YouTube", href: "https://www.youtube.com/@theadihomes" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-border text-sm font-medium tracking-wider hover:border-gold/30 hover:text-gold transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-card p-10 border border-border gold-border-glow">
                <h2 className="font-display text-2xl font-semibold mb-2">Send Enquiry</h2>
                <p className="text-muted-foreground text-sm mb-8">We'll respond within 24 hours</p>
                <LeadForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
