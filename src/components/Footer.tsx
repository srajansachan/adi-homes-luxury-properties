import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

const socials = [
  { label: "Fb", href: "https://www.facebook.com/spaceplanner13/" },
  { label: "Ig", href: "https://www.instagram.com/theadihomes/" },
  { label: "Li", href: "https://www.linkedin.com/company/the-adi-homes/" },
  { label: "Yt", href: "https://www.youtube.com/@theadihomes" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gold/10">
      {/* Gold accent line */}
      <div className="luxury-divider" />

      <div className="container mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoImg} alt="The ADI Homes" className="h-20 w-20 mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Where Money Grows. Premium real estate investments in Greater Noida West since 2005.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold/60 hover:bg-gold hover:text-background transition-all duration-300 text-xs font-semibold uppercase"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-6 tracking-wide">Navigation</h4>
            <div className="flex flex-col gap-3">
              {["Home|/", "About Us|/about", "Projects|/projects", "Blog|/blog", "Contact|/contact"].map((l) => {
                const [label, path] = l.split("|");
                return (
                  <Link key={path} to={path} className="text-muted-foreground text-sm hover:text-gold transition-colors tracking-wide">
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-6 tracking-wide">Projects</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Winsten Park", path: "/projects/winsten-park" },
                { label: "Saraswati Landmark", path: "/projects/saraswati-landmark" },
                { label: "Lucky Palm Valley", path: "/projects/lucky-palm-valley" },
              ].map((l) => (
                <Link key={l.path} to={l.path} className="text-muted-foreground text-sm hover:text-gold transition-colors tracking-wide">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-6 tracking-wide">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:9958004587" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-gold transition-colors">
                <Phone className="w-4 h-4 text-gold/60" /> +91 9958004587
              </a>
              <a href="mailto:info@theadihomes.co.in" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-gold transition-colors">
                <Mail className="w-4 h-4 text-gold/60" /> info@theadihomes.co.in
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-gold/60 mt-0.5 shrink-0" />
                Greater Noida West, UP, India
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="luxury-divider" />
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()} THE ADI HOMES. ALL RIGHTS RESERVED.
        </p>
        <p className="text-muted-foreground text-xs tracking-wider">
          WHERE MONEY GROWS — SINCE 2005
        </p>
      </div>
    </footer>
  );
}
