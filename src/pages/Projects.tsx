import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="text-gold text-sm uppercase tracking-wider font-medium">Our Portfolio</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mt-4 mb-4">
              Our Projects
            </h1>
            <p className="text-gold-light/60 text-lg max-w-2xl mx-auto">
              Explore premium residential and commercial properties in Greater Noida West
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <Link to={`/projects/${project.slug}`}>
                      <div className="aspect-[4/3] rounded-lg overflow-hidden group">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full">{project.status}</span>
                      <span className="text-xs text-muted-foreground">{project.type}</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold mb-2">{project.name}</h2>
                    <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" /> {project.location}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">{project.shortDescription}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-muted rounded-lg p-3">
                        <div className="text-xs text-muted-foreground">Price</div>
                        <div className="font-display font-bold text-gold text-sm">{project.priceRange}</div>
                      </div>
                      <div className="bg-muted rounded-lg p-3">
                        <div className="text-xs text-muted-foreground">Size</div>
                        <div className="font-display font-bold text-sm">{project.sizeRange}</div>
                      </div>
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-gold font-semibold hover:gap-2 transition-all"
                    >
                      View Full Details <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
