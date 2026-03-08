import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getBlogs, saveBlog, deleteBlog, BlogPost } from "@/data/blogs";
import { Trash2, Edit, Plus, LogOut } from "lucide-react";

const ADMIN_PASSWORD = "Sprint@2026";

export default function BlogAdmin() {
  const { toast } = useToast();
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    author: "The ADI Homes",
  });

  useEffect(() => {
    if (authed) setBlogs(getBlogs());
  }, [authed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      toast({ title: "Wrong password", variant: "destructive" });
    }
  };

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const handleSave = () => {
    if (!form.title || !form.content || !form.category) {
      toast({ title: "Fill title, content, and category", variant: "destructive" });
      return;
    }
    const post: BlogPost = {
      id: editing?.id || Date.now().toString(),
      title: form.title,
      slug: form.slug || generateSlug(form.title),
      excerpt: form.excerpt || form.content.replace(/<[^>]*>/g, "").slice(0, 160),
      content: form.content,
      author: form.author,
      date: editing?.date || new Date().toISOString().split("T")[0],
      image: "",
      category: form.category,
    };
    saveBlog(post);
    setBlogs(getBlogs());
    resetForm();
    toast({ title: editing ? "Blog updated!" : "Blog published!" });
  };

  const handleEdit = (post: BlogPost) => {
    setEditing(post);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      author: post.author,
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this blog post?")) {
      deleteBlog(id);
      setBlogs(getBlogs());
      toast({ title: "Blog deleted" });
    }
  };

  const resetForm = () => {
    setEditing(null);
    setForm({ title: "", slug: "", excerpt: "", content: "", category: "", author: "The ADI Homes" });
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy pt-20">
        <form onSubmit={handleLogin} className="bg-card rounded-lg p-8 w-full max-w-md shadow-2xl border border-border">
          <h1 className="font-display text-2xl font-bold mb-2">Blog Admin</h1>
          <p className="text-muted-foreground text-sm mb-6">Enter admin password to continue</p>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" className="w-full bg-gold text-navy hover:bg-gold-dark font-semibold">
            Login
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold">Blog Admin</h1>
          <div className="flex gap-2">
            <Button onClick={resetForm} className="bg-gold text-navy hover:bg-gold-dark">
              <Plus className="w-4 h-4 mr-1" /> New Post
            </Button>
            <Button variant="outline" onClick={() => setAuthed(false)}>
              <LogOut className="w-4 h-4 mr-1" /> Logout
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h2 className="font-display text-xl font-bold mb-4">
              {editing ? "Edit Post" : "Create New Post"}
            </h2>
            <div className="space-y-4">
              <Input
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })}
              />
              <Input placeholder="Slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
              <Input
                placeholder="Category (e.g., Market Insights, Investment Tips)"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
              <Input
                placeholder="Author"
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
              />
              <Textarea
                placeholder="Short excerpt (optional)"
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                className="min-h-[80px]"
              />
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Content (HTML/CSS supported)
                </label>
                <Textarea
                  placeholder="Write your blog content in HTML format. Example: <h2>Title</h2><p>Content here</p>"
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="min-h-[300px] font-mono text-sm"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSave} className="bg-gold text-navy hover:bg-gold-dark font-semibold flex-1">
                  {editing ? "Update Post" : "Publish Post"}
                </Button>
                {editing && (
                  <Button variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                )}
              </div>
            </div>

            {/* Preview */}
            {form.content && (
              <div className="mt-6 border-t pt-6">
                <h3 className="font-display text-lg font-bold mb-3">Preview</h3>
                <div
                  className="prose prose-sm max-w-none prose-headings:font-display"
                  dangerouslySetInnerHTML={{ __html: form.content }}
                />
              </div>
            )}
          </div>

          {/* Posts List */}
          <div>
            <h2 className="font-display text-xl font-bold mb-4">Published Posts ({blogs.length})</h2>
            <div className="space-y-3">
              {blogs.map((post) => (
                <div key={post.id} className="bg-card rounded-lg p-4 border border-border flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{post.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{post.category} • {post.date}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button size="icon" variant="ghost" onClick={() => handleEdit(post)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
