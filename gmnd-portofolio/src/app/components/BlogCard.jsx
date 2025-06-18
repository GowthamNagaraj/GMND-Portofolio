'use client';
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-gray-500 text-sm">{post.date}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{post.summary}</p>
      <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-blue-600 hover:underline">
        Read More →
      </Link>
    </div>
  );
}
