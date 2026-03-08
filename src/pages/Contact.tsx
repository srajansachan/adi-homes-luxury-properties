import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
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
      <section className="relative py-32 lg:py-40 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="text-gold text-sm uppercase tracking-wider font-medium">Get In Touch</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mt-4 mb-4">
              Contact Us
            </h1>
            <p className="text-gold-light/60 text-lg max-w-2xl mx-auto">
              Have a question? Our team is here to help you find your perfect property.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection direction="left">
              <h2 className="font-display text-3xl font-bold mb-6">Let's Talk</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for your dream home, a smart investment, or just have questions about the Greater Noida West real estate market — we're here to help. Reach out to us through any channel below.
              </p>
              <div className="space-y-4 mb-8">
                {contactInfo.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border hover:border-gold/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                      <c.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="font-medium text-sm">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social */}
              <h3 className="font-display text-lg font-semibold mb-3">Follow Us</h3>
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
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-gold/30 hover:text-gold transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            {/* Lead Form */}
            <AnimatedSection direction="right">
              <div className="bg-card rounded-lg p-8 border border-border shadow-lg">
                <h2 className="font-display text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Fill in the details below and we'll get back to you within 24 hours
                </p>
                <LeadForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
