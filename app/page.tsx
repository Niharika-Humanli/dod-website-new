import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Data On Demand",
  url: "https://dataondemand.humanli.ai",
  logo: "https://dataondemand.humanli.ai/logo.png",
  description:
    "AI-powered analytics and business intelligence platform by Humanli AI. Turn scattered data into on-demand intelligence with 100% business accuracy.",
  sameAs: ["https://x.com/dataondemand"],
  parentOrganization: {
    "@type": "Organization",
    name: "Humanli AI",
    url: "https://humanli.ai",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Data On Demand",
  url: "https://dataondemand.humanli.ai",
  description:
    "Turn scattered data into on-demand intelligence with AI analytics, real-time optimization, and business intelligence.",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Data On Demand",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://dataondemand.humanli.ai",
  description:
    "AI-powered data analytics platform for enterprise teams. Predict outcomes, optimize operations, and benchmark performance with 100% business accuracy.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free trial available",
  },
};

export const metadata: Metadata = {
  title: "Data on Demand | AI-Powered Analytics for CXOs | Humanli",
  description:
    "Turn your ERP data into instant, conversational insights. Data on Demand by Humanli helps CXOs make faster decisions — no code, no waiting for reports.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <HomeClient />
    </>
  );
}