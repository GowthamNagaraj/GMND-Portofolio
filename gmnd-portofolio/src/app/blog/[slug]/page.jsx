import blogPosts from "@/data/blogData";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-10">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <Markdown>{post.content}</Markdown>
    </article>
  );
}
