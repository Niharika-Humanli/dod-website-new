import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
// import { blogs } from "@/data/blogData";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) {
    return {};
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDesc,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navigation />

      <main className="bg-white">
        <article className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
          <Link
            href="/blog"
            className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            ← Back to Blog
          </Link>

          <header className="mt-10 border-b border-slate-200 pb-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {blog.sectorLabel}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {blog.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {blog.subtitle}
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <span>Data on Demand Editorial</span>
              <span>·</span>
              <span>{blog.date}</span>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_220px]">
            <div
              className="prose prose-slate max-w-none
                prose-headings:font-semibold
                prose-headings:text-slate-900
                prose-h2:mt-12
                prose-h2:text-2xl
                prose-h3:mt-8
                prose-p:text-slate-600
                prose-p:leading-8
                prose-li:text-slate-600
                prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />

            {blog.toc.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    In this article
                  </p>

                  <nav className="space-y-3">
                    {blog.toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-sm leading-5 text-slate-600 transition-colors hover:text-blue-600"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>

          {blog.tags.length > 0 && (
            <div className="mt-14 border-t border-slate-200 pt-8">
              <p className="mb-4 text-sm font-semibold text-slate-900">
                Topics
              </p>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}