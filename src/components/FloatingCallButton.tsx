import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:9958004587"
      className="fixed bottom-6 left-6 z-50 w-11 h-11 rounded-full glass-gold flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-all duration-300 shadow-md"
      aria-label="Call Now"
    >
      <Phone className="w-4 h-4" />
    </a>
  );
}
