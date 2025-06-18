import blogPosts from "@/data/blogData";
import BlogCard from "@/app/components/BlogCard";

export default function BlogPage() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">📝 Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
