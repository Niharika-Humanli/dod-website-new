import { blogs, BlogPost } from "@/data/blogData";

export function getAllBlogs(): BlogPost[] {
  return [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.id === slug);
}