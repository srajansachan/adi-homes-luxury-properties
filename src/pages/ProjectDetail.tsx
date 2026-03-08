import { useParams, Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-gold hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-36 lg:py-44">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>
        <div className="relative container mx-auto px-6">
          <AnimatedSection>
            <Link to="/projects" className="inline-flex items-center text-muted-foreground hover:text-gold text-sm tracking-wider mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-medium gradient-gold text-background px-3 py-1 tracking-[0.15em] uppercase">{project.status}</span>
              <span className="text-xs text-muted-foreground tracking-wider uppercase">{project.type}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-3">{project.name}</h1>
            <p className="flex items-center gap-2 text-muted-foreground text-lg">
              <MapPin className="w-5 h-5 text-gold/60" /> {project.location}
            </p>
            <div className="font-display text-3xl font-bold text-gold mt-6">{project.priceRange}</div>
          </AnimatedSection>
        </div>
      </section>

      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-16">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold/40" />
                  <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Overview</span>
                </div>
                <div className="text-muted-foreground leading-[1.8] whitespace-pre-line text-[15px]">
                  {project.fullDescription}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold/40" />
                  <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Specifications</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.specifications.map((s, i) => (
                    <div key={i} className="bg-card p-5 border border-border">
                      <div className="text-xs text-muted-foreground tracking-wider uppercase">{s.label}</div>
                      <div className="font-semibold text-sm mt-1">{s.value}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold/40" />
                  <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Key Highlights</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold/40" />
                  <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Amenities</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-3 bg-card p-4 border border-border text-sm">
                      <div className="w-1.5 h-1.5 bg-gold shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold/40" />
                  <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Location Advantages</span>
                </div>
                <div className="space-y-3">
                  {project.locationAdvantages.map((l, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold/60 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{l}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 space-y-6">
                <div className="bg-card p-8 border border-border gold-border-glow">
                  <h3 className="font-display text-2xl font-semibold mb-1">Interested?</h3>
                  <p className="text-muted-foreground text-sm mb-6">Get exclusive pricing & offers</p>
                  <LeadForm selectedProject={project.name} />
                </div>

                <div className="bg-card p-6 border border-gold/10 text-center">
                  <p className="text-muted-foreground text-sm mb-4">Speak to our property expert</p>
                  <a href="tel:9958004587">
                    <Button className="gradient-gold text-background hover:opacity-90 w-full h-12 font-body font-semibold text-[13px] tracking-[0.15em] uppercase rounded-none">
                      <Phone className="w-4 h-4 mr-3" /> +91 9958004587
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
