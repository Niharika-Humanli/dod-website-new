import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import content from "@/data/fmcg.json";

export const metadata = {
  title: "FMCG Analytics & Demand Intelligence | Data On Demand",
  description:
    "Data On Demand empowers FMCG brands with AI-driven demand forecasting, distribution analytics, and market intelligence at scale.",
};

export default function FMCGPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="py-20 text-center">
          <h1 className="mb-4 text-5xl font-bold text-blue-900">
            {content.hero.title}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            {content.hero.subtitle}
          </p>
          <Button asChild>
            <a href={content.hero.buttonLink}>
              {content.hero.buttonText}
            </a>
          </Button>
        </section>

        {/* Business Functions */}
        <section className="bg-[linear-gradient(135deg,#0540AD_0%,#0540ADcc_50%,#0540AD99_100%)] px-6 py-24 text-white">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Explore Data On Demand Across Business Functions
            </h2>

            <p className="mb-12 text-lg opacity-90">
              Empower every department with intelligent, data-driven
              decision-making.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold">Finance</h3>
                  <p className="mb-6 text-sm opacity-80">
                    Enhancing financial decision-making through intelligent
                    data insights.
                  </p>
                </div>

              </div>

              <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold">
                    Manufacturing
                  </h3>
                  <p className="mb-6 text-sm opacity-80">
                    Optimizing production and supply chain with real-time
                    analytics.
                  </p>
                </div>

              </div>

              <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold">Operations</h3>
                  <p className="mb-6 text-sm opacity-80">
                    Streamlining operations and improving efficiency across
                    workflows.
                  </p>
                </div>

              </div>

              <div className="flex flex-col justify-between rounded-2xl bg-white/10 p-6 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
                <div>
                  <h3 className="mb-3 text-2xl font-semibold">Marketing</h3>
                  <p className="mb-6 text-sm opacity-80">
                    Driving growth with targeted customer insights and
                    campaign analytics.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-10 text-center text-3xl font-bold">
              {content.benefits.title}
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {content.benefits.cards.map((card) => (
                <Card key={card.title} className="rounded-2xl shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="mb-3 text-xl font-semibold text-blue-800">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-[#0540AD] py-24 text-white">
          <div className="container mx-auto px-6">
            <h2 className="mb-16 text-center text-4xl font-bold">
              {content.section3.title}
            </h2>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex justify-center">
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={content.section3.image}
                    alt="FMCG Intelligence"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold">
                  {content.section3.subtitle}
                </h3>

                <p className="mb-6 text-white/90">
                  {content.section3.description}
                </p>

                <ul className="mb-8 list-inside list-disc space-y-2 text-white/90">
                  {content.section3.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

              </div>
            </div>

            <div className="mt-20 grid gap-10 text-center md:grid-cols-3">
              {content.section3.stats.map((stat) => (
                <div key={stat.title}>
                  <h3 className="mb-2 text-5xl font-bold">{stat.value}</h3>
                  <h4 className="mb-2 text-xl font-semibold">
                    {stat.title}
                  </h4>
                  <p className="text-white/80">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 text-4xl font-bold text-blue-900">
              {content.capabilities.title}
            </h2>

            <div className="grid justify-center gap-10 md:grid-cols-3">
              {content.capabilities.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl bg-[#E3F0FF] p-8 text-left shadow-md transition-transform hover:scale-105"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7BB6FF]">
                    <span className="text-2xl text-white">{card.icon}</span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    {card.title}
                  </h3>

                  <p className="mb-4 text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-3xl italic text-gray-700">
              "{content.capabilities.quote}"
            </p>

          </div>
        </section>

        {/* Operations */}
        <section className="bg-[#063970] py-20 text-white">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-4xl font-extrabold text-transparent">
                {content.operations.title}
              </h2>

              <p className="mx-auto max-w-2xl text-lg text-blue-100">
                {content.operations.subtitle}
              </p>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="mb-4 text-gray-200">
                  {content.operations.description}
                </p>

                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  {content.operations.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                {content.operations.metrics.map((metric) => (
                  <div key={metric.label} className="mb-6">
                    <div className="mb-1 flex justify-between">
                      <span className="font-semibold">{metric.label}</span>
                      <span className="font-semibold">
                        {metric.value}%
                      </span>
                    </div>

                    <div className="h-4 w-full overflow-hidden rounded-full bg-blue-900">
                      <div
                        className="h-4 bg-gradient-to-r from-blue-400 to-blue-300"
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>

                    <p className="mt-1 text-sm text-gray-300">
                      {metric.caption}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>

        {/* Marketing */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-4 text-center text-4xl font-bold text-blue-900">
              {content.marketing.title}
            </h2>

            <p className="mb-10 text-center text-lg text-gray-600">
              {content.marketing.subtitle}
            </p>

            <div className="mb-10 grid gap-8 md:grid-cols-2">
              {content.marketing.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-blue-200 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <h3 className="mb-2 text-xl font-semibold text-blue-800">
                    {card.title}
                  </h3>

                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-10 grid items-center gap-8 md:grid-cols-3">
              {content.marketing.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="relative mb-3 h-3 w-full overflow-hidden rounded-full bg-blue-100">
                    <div
                      className="absolute left-0 top-0 h-3 rounded-full bg-blue-400"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>

                  <span className="font-semibold text-blue-800">
                    {metric.value}%
                  </span>

                  <h4 className="mt-2 text-lg font-semibold text-blue-900">
                    {metric.label}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {metric.caption}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold text-blue-900">
              {content.useCases.title}
            </h2>

            <p className="mb-10 text-gray-600">
              {content.useCases.subtitle}
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {content.useCases.items.map((useCase) => (
                <div
                  key={useCase.heading}
                  className="rounded-xl bg-white p-6 shadow-md"
                >
                  <h3 className="mb-2 text-lg font-semibold text-blue-800">
                    {useCase.heading}
                  </h3>

                  <p className="text-gray-600">{useCase.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-[#f5f8fc] py-20 text-center shadow-sm">
          <h2 className="mb-4 text-3xl font-bold">{content.cta.title}</h2>

          <p className="mb-8 text-lg">{content.cta.subtitle}</p>

          <Button
            asChild
            className="bg-[#0540AD] px-6 py-3 font-medium text-white hover:bg-[#05389A]"
          >
            <a href={content.cta.buttonLink}>
              {content.cta.buttonText}
            </a>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}