import { Link } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <section className="relative py-36 lg:py-44 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Portfolio</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Our <span className="gold-text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Premium residential and commercial properties in Greater Noida West
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="space-y-24">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <Link to={`/projects/${project.slug}`}>
                      <div className="aspect-[4/3] overflow-hidden group relative">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                      </div>
                    </Link>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] font-medium bg-gold text-background px-3 py-1 tracking-[0.15em] uppercase">
                        {project.status}
                      </span>
                      <span className="text-xs text-muted-foreground tracking-wider uppercase">{project.type}</span>
                    </div>
                    <h2 className="font-display text-4xl font-bold mb-3">{project.name}</h2>
                    <p className="flex items-center gap-2 text-muted-foreground text-sm mb-5">
                      <MapPin className="w-4 h-4 text-gold/60" /> {project.location}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{project.shortDescription}</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-card p-4 border border-border">
                        <div className="text-xs text-muted-foreground tracking-wider uppercase">Starting Price</div>
                        <div className="font-display font-bold text-gold text-lg mt-1">{project.priceRange}</div>
                      </div>
                      <div className="bg-card p-4 border border-border">
                        <div className="text-xs text-muted-foreground tracking-wider uppercase">Size Range</div>
                        <div className="font-display font-bold text-lg mt-1">{project.sizeRange}</div>
                      </div>
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-gold font-body font-semibold text-[13px] tracking-[0.15em] uppercase hover:gap-3 transition-all border-b border-gold/30 pb-1"
                    >
                      View Details <ChevronRight className="w-4 h-4" />
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
