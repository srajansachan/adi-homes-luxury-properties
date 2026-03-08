import { useParams, Link } from "react-router-dom";
import { MapPin, CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
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
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
          <div className="absolute inset-0 bg-navy-dark/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <AnimatedSection>
            <Link to="/projects" className="inline-flex items-center text-gold-light/60 hover:text-gold text-sm mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Projects
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium bg-gold/20 text-gold px-3 py-1 rounded-full">{project.status}</span>
              <span className="text-xs text-gold-light/50">{project.type}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mb-3">
              {project.name}
            </h1>
            <p className="flex items-center gap-1 text-gold-light/60 text-lg">
              <MapPin className="w-5 h-5" /> {project.location}
            </p>
            <div className="font-display text-2xl font-bold text-gold mt-4">{project.priceRange}</div>
          </AnimatedSection>
        </div>
      </section>

      <div className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold mb-4">Project Overview</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </div>
              </AnimatedSection>

              {/* Specifications */}
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold mb-4">Specifications</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.specifications.map((s, i) => (
                    <div key={i} className="bg-muted rounded-lg p-4 border border-border">
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                      <div className="font-semibold text-sm mt-1">{s.value}</div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Highlights */}
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold mb-4">Key Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Amenities */}
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-2 bg-muted rounded-lg p-3 text-sm">
                      <div className="w-2 h-2 bg-gold rounded-full shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Location Advantages */}
              <AnimatedSection>
                <h2 className="font-display text-2xl font-bold mb-4">Location Advantages</h2>
                <div className="space-y-2">
                  {project.locationAdvantages.map((l, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{l}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar - Lead Form */}
            <div>
              <div className="sticky top-24 space-y-6">
                <div className="bg-card rounded-lg p-6 border border-border shadow-lg">
                  <h3 className="font-display text-xl font-bold mb-2">Interested in {project.name}?</h3>
                  <p className="text-muted-foreground text-sm mb-6">Get exclusive pricing and offers</p>
                  <LeadForm selectedProject={project.name} />
                </div>

                <div className="bg-navy rounded-lg p-6 text-center">
                  <p className="text-gold-light/70 text-sm mb-3">Speak to our property expert</p>
                  <a href="tel:9958004587">
                    <Button className="bg-gold text-navy hover:bg-gold-dark w-full h-12 font-semibold">
                      <Phone className="w-5 h-5 mr-2" /> +91 9958004587
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
