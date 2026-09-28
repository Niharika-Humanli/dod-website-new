import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
// import { blogs } from "@/data/blogData";
import { getAllBlogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog | Data on Demand",
  description:
    "Insights on data, AI, analytics, and modern business intelligence from Data on Demand.",
};

export default function BlogPage() {
  const sortedBlogs = getAllBlogs();

  const featuredBlog = sortedBlogs[0];
  const remainingBlogs = sortedBlogs.slice(1);

  return (
    <>
      <Navigation />

      <main className="bg-white">
        <section className="border-b bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Data on Demand Blog
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Insights on data, AI and business intelligence.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Practical perspectives on using data and AI to improve
                operations, decision-making, and business performance.
              </p>
            </div>
          </div>
        </section>

        {featuredBlog && (
          <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Featured article
            </p>

            <Link
              href={`/blog/${featuredBlog.id}`}
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >
              <div className="p-8 sm:p-10 lg:p-14">
                <span className="text-sm font-medium text-blue-600">
                  {featuredBlog.sectorLabel}
                </span>

                <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                  {featuredBlog.title}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
                  {featuredBlog.excerpt}
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
                  <span>{featuredBlog.date}</span>
                  <span>·</span>
                  <span>{featuredBlog.readTime}</span>
                </div>

                <span className="mt-8 inline-block text-sm font-semibold text-blue-600">
                  Read article →
                </span>
              </div>
            </Link>
          </section>
        )}

        {remainingBlogs.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
            <div className="mb-8 border-b border-slate-200 pb-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Latest
              </p>

              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                Latest articles
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {remainingBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.id}`}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {blog.sectorLabel}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                    {blog.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-6 text-xs text-slate-500">
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}