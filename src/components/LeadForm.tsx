import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects } from "@/data/projects";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  className?: string;
  selectedProject?: string;
  compact?: boolean;
}

export default function LeadForm({ className = "", selectedProject, compact }: LeadFormProps) {
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

    // Send email notification via mailto (fallback without backend)
    const subject = encodeURIComponent(`New Lead from The ADI Homes Website`);
    const body = encodeURIComponent(
      `New Lead Details:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProject: ${form.project}\n\nSubmitted at: ${new Date().toLocaleString()}`
    );

    // Open mailto as fallback
    window.open(`mailto:info@theadihomes.com?subject=${subject}&body=${body}`, "_blank");

    toast({
      title: "Thank You!",
      description: "Your enquiry has been submitted. Our team will contact you shortly.",
    });
    setForm({ name: "", phone: "", email: "", project: selectedProject || "" });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <Input
        placeholder="Your Name *"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-card/80 border-gold/20 focus:border-gold h-12"
      />
      <Input
        placeholder="Mobile Number *"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="bg-card/80 border-gold/20 focus:border-gold h-12"
      />
      <Input
        placeholder="Email Address *"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-card/80 border-gold/20 focus:border-gold h-12"
      />
      <select
        value={form.project}
        onChange={(e) => setForm({ ...form, project: e.target.value })}
        className="w-full h-12 rounded-md border border-gold/20 bg-card/80 px-3 text-sm text-foreground focus:border-gold focus:outline-none"
      >
        <option value="">Select Project *</option>
        {projects.map((p) => (
          <option key={p.id} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>
      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-gold text-navy font-semibold hover:bg-gold-dark text-base"
      >
        {loading ? "Submitting..." : "Get Callback"}
      </Button>
    </form>
  );
}
