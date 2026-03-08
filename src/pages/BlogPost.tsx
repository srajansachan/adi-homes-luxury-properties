import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { getBlogs } from "@/data/blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogs().find((b) => b.slug === slug);

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
      <section className="relative py-36 lg:py-44">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="relative container mx-auto px-6">
          <AnimatedSection>
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-gold text-sm tracking-wider mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            <span className="inline-block text-[11px] bg-gold/20 text-gold px-3 py-1 tracking-[0.15em] uppercase mb-4">
              {post.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground text-sm tracking-wider">
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-gold/60" /> {post.author}</span>
              <span className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-gold/60" /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-10">
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
