import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import IntegrationsClient from "./IntegrationsClient";

export const metadata = {
  title: "Integrations — Connect Your Tools | Data On Demand",
  description:
    "Connect Data On Demand with 30+ platforms — Salesforce, Snowflake, AWS, Oracle, HubSpot and more. Fast setup, reliable sync, zero friction.",
};

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navigation />
      <IntegrationsClient />
      <Footer />
    </div>
  );
}