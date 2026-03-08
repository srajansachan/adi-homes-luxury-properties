import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:9958004587"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 text-background" />
    </a>
  );
}
