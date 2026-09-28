import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import content from "@/data/manufacturing.json";

export const metadata = {
  title: "Manufacturing AI Analytics Platform | Data On Demand",
  description:
    "Predict downtime, track OEE, and improve quality with AI-powered manufacturing analytics and real-time dashboards.",
};

export default function ManufacturingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          {content.hero.title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          {content.hero.subtitle}
        </p>
        <Button asChild>
          <a href={content.hero.buttonLink}>{content.hero.buttonText}</a>
        </Button>
      </section>

      {/* Section 2: Cross-Functional Intelligence */}
      <section className="py-24 px-6 bg-[linear-gradient(135deg,#0540AD_0%,#0540ADcc_50%,#0540AD99_100%)] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Explore Data On Demand Across Business Functions
          </h2>
          <p className="text-lg mb-12 opacity-90">
            Empower every department with intelligent, data-driven
            decision-making.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Finance",
                description:
                  "Enhancing financial decision-making through intelligent data insights.",
                href: "/manufacturing/finance",
              },
              {
                title: "Manufacturing",
                description:
                  "Optimizing production and supply chain with real-time analytics.",
                href: "/manufacturing/manufacturing",
              },
              {
                title: "Operations",
                description:
                  "Streamlining operations and improving efficiency across workflows.",
                href: "/manufacturing/operations",
              },
              {
                title: "Marketing",
                description:
                  "Driving growth with targeted customer insights and campaign analytics.",
                href: "/manufacturing/marketing",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-transform flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm opacity-80 mb-6">
                    {card.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            {content.benefits.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {content.benefits.cards.map((card, i) => (
              <Card key={i} className="shadow-lg rounded-2xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Business Function Highlights */}
      <section className="py-24 bg-[#0540AD] text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            {content.section3.title}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-md aspect-square overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={content.section3.image}
                  alt="Manufacturing Intelligence"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {content.section3.subtitle}
              </h3>

              <p className="text-white/90 mb-6">
                {content.section3.description}
              </p>

              <ul className="list-disc list-inside space-y-2 mb-8 text-white/90">
                {content.section3.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid md:grid-cols-3 gap-10 text-center">
            {content.section3.stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                <p className="text-white/80">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Manufacturing Capabilities */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">
            {content.capabilities.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-10 justify-center">
            {content.capabilities.cards.map((card, i) => (
              <div
                key={i}
                className="bg-[#E3F0FF] rounded-3xl p-8 shadow-md text-left transition-transform hover:scale-105"
              >
                <div className="bg-[#7BB6FF] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">{card.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-600 mb-4">{card.description}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 italic mt-12 max-w-3xl mx-auto">
            "{content.capabilities.quote}"
          </p>

        </div>
      </section>

      {/* Section 5: Operational Efficiency */}
      <section className="py-20 bg-[#063970] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              {content.operations.title}
            </h2>

            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {content.operations.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-200 mb-4">
                {content.operations.description}
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {content.operations.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            <div>
              {content.operations.metrics.map((metric, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">{metric.label}</span>
                    <span className="font-semibold">{metric.value}%</span>
                  </div>

                  <div className="w-full bg-blue-900 h-4 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-400 to-blue-300 h-4 transition-all duration-1000"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>

                  <p className="text-sm text-gray-300 mt-1">
                    {metric.caption}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Marketing Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
            {content.marketing.title}
          </h2>

          <p className="text-lg text-gray-600 text-center mb-10">
            {content.marketing.subtitle}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {content.marketing.cards.map((card, i) => (
              <div
                key={i}
                className="border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center mb-10">
            {content.marketing.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="relative w-full bg-blue-100 h-3 rounded-full overflow-hidden mb-3">
                  <div
                    className="absolute top-0 left-0 h-3 bg-blue-400 rounded-full"
                    style={{ width: `${metric.value}%` }}
                  />
                </div>

                <span className="font-semibold text-blue-800">
                  {metric.value}%
                </span>

                <h4 className="text-lg font-semibold text-blue-900 mt-2">
                  {metric.label}
                </h4>

                <p className="text-gray-500 text-sm">{metric.caption}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            {content.useCases.title}
          </h2>

          <p className="text-gray-600 mb-10">
            {content.useCases.subtitle}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.useCases.items.map((useCase, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {useCase.heading}
                </h3>

                <p className="text-gray-600">{useCase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f8fc] text-center rounded-2xl shadow-sm">
        <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>

        <p className="text-lg mb-8">{content.cta.subtitle}</p>

        <Button
          asChild
          className="inline-flex items-center justify-center bg-[#0540AD] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#05389A] transition-transform hover:scale-105 duration-200"
        >
          <a href="https://dod.humanli.ai/login">
            {content.cta.buttonText}
          </a>
        </Button>
      </section>

      <Footer />
    </div>
  );
}