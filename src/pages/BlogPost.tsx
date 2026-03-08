import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getBlogs } from "@/data/blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const blogs = getBlogs();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-gold hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative py-32 lg:py-40 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy" />
        <div className="relative container mx-auto px-4">
          <AnimatedSection>
            <Link to="/blog" className="inline-flex items-center text-gold-light/60 hover:text-gold text-sm mb-6">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
            <span className="inline-block text-xs bg-gold/20 text-gold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gold-light mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gold-light/50 text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
              <span className="flex items-center gap-1"><CalendarDays className="w-4 h-4" /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-gold prose-strong:text-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
