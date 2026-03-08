import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getBlogs } from "@/data/blogs";

export default function Blog() {
  const blogs = getBlogs();

  return (
    <div>
      <section className="relative py-32 lg:py-40 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
        <div className="relative container mx-auto px-4 text-center">
          <AnimatedSection>
            <span className="text-gold text-sm uppercase tracking-wider font-medium">Knowledge Hub</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mt-4 mb-4">
              Our Blog
            </h1>
            <p className="text-gold-light/60 text-lg max-w-2xl mx-auto">
              Real estate insights, market trends, and investment tips from our experts
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {blogs.length === 0 ? (
            <p className="text-center text-muted-foreground">No blog posts yet. Check back soon!</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post, i) => (
                <AnimatedSection key={post.id} delay={i * 0.1}>
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-gold/30 hover:shadow-xl transition-all h-full flex flex-col">
                      <div className="aspect-video bg-navy/10 flex items-center justify-center">
                        <span className="text-gold font-display text-xl font-bold px-4 text-center">{post.title}</span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded w-fit mb-3">
                          {post.category}
                        </span>
                        <h3 className="font-display text-lg font-bold mb-2 group-hover:text-gold transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 flex-1">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                          <span className="flex items-center text-xs text-muted-foreground">
                            <CalendarDays className="w-3.5 h-3.5 mr-1" />
                            {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                          <span className="text-gold text-sm font-medium flex items-center gap-1">
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
