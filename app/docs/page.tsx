import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Documentation | Data On Demand Platform",
  description:
    "Explore Data On Demand's documentation. Setup guides, API references, integration tutorials, and best practices for your analytics platform.",
};

export default function DocsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-[60vh] bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
          <h1 className="text-4xl font-semibold tracking-tight text-blue-900">
            Documentation
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Documentation is coming soon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}