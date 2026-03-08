import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getBlogs } from "@/data/blogs";

export default function Blog() {
  const blogs = getBlogs();

  return (
    <div>
      <section className="relative py-36 lg:py-44 bg-card">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="text-gold text-[12px] font-medium tracking-[0.3em] uppercase">Insights</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Our <span className="gold-text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Market trends, investment tips, and real estate insights from our experts
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          {blogs.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.1}>
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-card border border-border hover:border-gold/20 transition-all duration-500 h-full flex flex-col overflow-hidden">
                      <div className="aspect-video bg-secondary/50 flex items-center justify-center p-6">
                        <span className="text-gold font-display text-xl font-bold text-center leading-tight">{post.title}</span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-[11px] bg-gold/10 text-gold px-2 py-0.5 w-fit tracking-[0.15em] uppercase mb-3">
                          {post.category}
                        </span>
                        <h3 className="font-display text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{post.excerpt}</p>
                        <div className="luxury-divider my-4" />
                        <div className="flex items-center justify-between">
                          <span className="flex items-center text-xs text-muted-foreground tracking-wider">
                            <CalendarDays className="w-3.5 h-3.5 mr-1.5" />
                            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                          <span className="text-gold text-[12px] font-medium flex items-center gap-1 tracking-[0.1em] uppercase">
                            Read <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
