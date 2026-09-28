import type { Metadata } from "next";
import content from "@/data/product.json";
import ProductClient from "./ProductClient";

export const metadata: Metadata = {
  title: "Data on Demand | Enterprise AI Data Platform",
  description: content.hero.subtitle,
  keywords: ["Data on Demand", "enterprise AI", "data analytics", "AI platform", "business intelligence"],
  alternates: { canonical: "/product" },
  openGraph: {
    title: content.hero.title,
    description: content.hero.subtitle,
    url: "/product",
    type: "website",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Data on Demand",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: content.hero.subtitle,
};

export default function ProductPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <ProductClient content={content} />
    </>
  );
}