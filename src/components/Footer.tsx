import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/adi-homes-logo.png";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gold-light/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="The ADI Homes" className="h-12 w-12 rounded" />
              <span className="font-display text-xl font-bold text-gold">The ADI Homes</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner in premium real estate investments in Greater Noida West. We help you find the perfect home and investment opportunities.
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://www.facebook.com/spaceplanner13/", icon: "facebook" },
                { href: "https://www.instagram.com/theadihomes/", icon: "instagram" },
                { href: "https://www.linkedin.com/company/the-adi-homes/", icon: "linkedin" },
                { href: "https://www.youtube.com/@theadihomes", icon: "youtube" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold/70 hover:bg-gold hover:text-navy transition-all text-xs font-semibold uppercase"
                >
                  {s.icon[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Projects", path: "/projects" },
                { label: "Blog", path: "/blog" },
                { label: "Contact Us", path: "/contact" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-sm hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Our Projects</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Winsten Park", path: "/projects/winsten-park" },
                { label: "Saraswati Landmark", path: "/projects/saraswati-landmark" },
                { label: "Lucky Palm Valley", path: "/projects/lucky-palm-valley" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-sm hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:9958004587" className="flex items-center gap-2 text-sm hover:text-gold">
                <Phone className="w-4 h-4 text-gold" /> +91 9958004587
              </a>
              <a href="mailto:info@theadihomes.co.in" className="flex items-center gap-2 text-sm hover:text-gold">
                <Mail className="w-4 h-4 text-gold" /> info@theadihomes.co.in
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                Greater Noida West, Uttar Pradesh, India
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-gold-light/50">
          © {new Date().getFullYear()} The ADI Homes. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
