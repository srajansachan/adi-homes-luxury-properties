import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects } from "@/data/projects";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  className?: string;
  selectedProject?: string;
}

export default function LeadForm({ className = "", selectedProject }: LeadFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: selectedProject || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.project) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    setLoading(true);

    const subject = encodeURIComponent(`New Lead — The ADI Homes`);
    const body = encodeURIComponent(
      `New Lead:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProject: ${form.project}\n\nDate: ${new Date().toLocaleString()}`
    );
    window.open(`mailto:info@theadihomes.com?subject=${subject}&body=${body}`, "_blank");

    toast({
      title: "Thank You!",
      description: "Our team will contact you within 24 hours.",
    });
    setForm({ name: "", phone: "", email: "", project: selectedProject || "" });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <Input
        placeholder="Full Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-secondary/50 border-gold/10 focus:border-gold/40 h-12 text-foreground placeholder:text-muted-foreground tracking-wide"
      />
      <Input
        placeholder="Mobile Number *"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="bg-secondary/50 border-gold/10 focus:border-gold/40 h-12 text-foreground placeholder:text-muted-foreground tracking-wide"
      />
      <Input
        placeholder="Email Address *"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-secondary/50 border-gold/10 focus:border-gold/40 h-12 text-foreground placeholder:text-muted-foreground tracking-wide"
      />
      <select
        value={form.project}
        onChange={(e) => setForm({ ...form, project: e.target.value })}
        className="w-full h-12 bg-secondary/50 border border-gold/10 px-3 text-sm text-foreground focus:border-gold/40 focus:outline-none tracking-wide"
      >
        <option value="">Select Project *</option>
        {projects.map((p) => (
          <option key={p.id} value={p.name}>{p.name}</option>
        ))}
      </select>
      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 gradient-gold text-background font-body font-semibold hover:opacity-90 text-sm tracking-[0.15em] uppercase transition-all duration-300"
      >
        {loading ? "Submitting..." : "Schedule Consultation"}
      </Button>
    </form>
  );
}
