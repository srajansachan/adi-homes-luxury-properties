import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoImg} alt="The ADI Homes" className="h-14 w-14 object-contain" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-body text-[13px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-foreground/60 hover:text-gold"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9958004587"
              className="flex items-center gap-2 border border-gold/40 text-gold px-6 py-2.5 font-body text-[13px] font-medium tracking-wider uppercase hover:bg-gold hover:text-background transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gold p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-gold/10"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-body text-sm font-medium tracking-[0.15em] uppercase py-3 border-b border-border transition-colors ${
                    location.pathname === item.path ? "text-gold" : "text-foreground/50 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:9958004587"
                className="flex items-center justify-center gap-2 border border-gold text-gold px-5 py-3 font-body font-medium tracking-wider uppercase mt-4 hover:bg-gold hover:text-background transition-all"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
