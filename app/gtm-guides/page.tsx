import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import guideData from "@/data/GuideData.json";

export const metadata: Metadata = {
  title: "GTM Strategy Guides & Go-To-Market Analytics | Data On Demand",
  description:
    "Explore AI-powered GTM strategy guides, go-to-market analytics, customer journey tracking, funnel metrics, and revenue optimization frameworks to scale faster.",
};

export default function GTMGuidePage() {
  const guide = guideData.guides[0];
  const { section2, section3, section4, section5, section6, section7, section8, section9 } = guide;

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F9FBFF] to-white py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="mb-6 text-5xl font-bold text-blue-900">GTM Strategy Guides & Analytics Frameworks</h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            Learn how to design, execute, and optimize your go-to-market strategy using data-driven frameworks, customer analytics, and real-time performance tracking.
          </p>
          <a href="https://dod.humanli.ai/login" className="inline-block rounded-lg bg-[#0540AD] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#05389A]">
            Explore
          </a>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-24" style={{ backgroundColor: section2.background }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-lg">
            <Image src={section2.image.src} alt={section2.image.alt} fill className="object-cover" />
          </div>

          <div>
            <h2 className="mb-10 text-4xl font-bold text-blue-900">{section2.title}</h2>
            <div className="space-y-6">
              {section2.cards.map((card) => (
                <div key={card.title} className="flex items-start rounded-2xl bg-blue-50 p-6 shadow-sm">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-blue-100 p-3 text-blue-700">
                    <i className={card.icon} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-blue-900">{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-24" style={{ backgroundColor: section3.background }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-lg">
            <Image src={section3.image.src} alt={section3.image.alt} fill className="object-cover" />
          </div>

          <div>
            <h2 className="mb-4 text-4xl font-bold text-[#0540AD]">{section3.title}</h2>
            <h3 className="mb-4 text-lg font-semibold text-blue-800">{section3.subtitle}</h3>
            <p className="mb-6 leading-relaxed text-gray-700">{section3.description}</p>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              {section3.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-24" style={{ backgroundColor: section4.background }}>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-16 text-5xl font-bold text-blue-900">{section4.title}</h2>
          <div className="grid grid-cols-1 gap-12 text-left md:grid-cols-3">
            {section4.cards.map((card) => (
              <div key={card.title}>
                <h3 className="mb-3 text-2xl font-semibold text-blue-900">{card.title}</h3>
                <p className="leading-relaxed text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-24" style={{ backgroundColor: section5.background }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-lg">
            <Image src={section5.image.src} alt={section5.image.alt} fill className="object-cover" />
          </div>

          <div>
            <h2 className="mb-10 text-4xl font-bold text-[#0540AD]">{section5.title}</h2>
            <div className="space-y-8">
              {section5.cards.map((card) => (
                <div key={card.title} className="flex items-start rounded-2xl bg-blue-50 p-6 shadow-sm">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-blue-100 p-3 text-blue-700">
                    <i className={card.icon} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-blue-900">{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      {/* <section className="py-24" style={{ backgroundColor: section6.background, color: section6.colors.text }}>
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-16 text-5xl font-bold">{section6.title}</h2>

          <div className="grid grid-cols-1 gap-12 text-left md:grid-cols-3">
            {section6.steps.map((step) => (
              <div key={step.title}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: section6.colors.iconBg }}>
                  <i className={`${step.icon} text-xl`} />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">{step.title}</h3>
                <p className="leading-relaxed text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section 7 */}
      <section className="py-24" style={{ backgroundColor: section7.background, color: section7.color }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-bold">{section7.title}</h2>
            <h3 className="mb-4 text-lg font-semibold">{section7.subtitle}</h3>

            <div className="mb-6 space-y-4">
              {section7.description.map((text) => <p key={text} className="leading-relaxed text-gray-300">{text}</p>)}
            </div>

            <ul className="list-inside list-disc space-y-2 text-gray-300">
              {section7.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>

          <div className="space-y-10">
            {section7.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="mb-2 flex items-center">
                  <div className="h-4 flex-1 overflow-hidden rounded-full bg-gray-700">
                    <div className="h-4 rounded-full bg-white" style={{ width: `${metric.value}%` }} />
                  </div>
                  <span className="ml-3 font-semibold">{metric.value}%</span>
                </div>
                <h4 className="mb-1 text-lg font-semibold">{metric.label}</h4>
                <p className="text-sm text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section className="py-24" style={{ backgroundColor: section8.background }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-lg">
            <Image src={section8.image.src} alt={section8.image.alt} fill className="object-cover" />
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-bold text-blue-900">{section8.title}</h2>

            <div className="space-y-8 border-l-2 pl-6" style={{ borderColor: section8.color }}>
              {section8.steps.map((step) => (
                <div key={step.number}>
                  <div className="mb-2 flex items-center">
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full font-semibold text-white" style={{ backgroundColor: section8.color }}>
                      {step.number}
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900">{step.title}</h4>
                  </div>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 */}
      <section className="py-24" style={{ backgroundColor: section9.background }}>
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-12 text-4xl font-bold" style={{ color: section9.textColor }}>{section9.title}</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {section9.cards.map((card) => (
              <div key={card.title} className="rounded-2xl p-6 text-left" style={{ backgroundColor: section9.cardBackground }}>
                <h3 className="mb-2 text-lg font-semibold" style={{ color: section9.textColor }}>{card.title}</h3>
                <p className="text-sm text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      {guide.guides?.length > 0 && (
        <section className="bg-[#F9FBFF] py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="mb-12 text-4xl font-bold text-blue-900">GTM Guides</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {guide.guides.map((item) => (
                <div key={item.id} className="rounded-2xl bg-white p-8 text-left shadow-sm">
                  <h3 className="mb-3 text-xl font-semibold text-blue-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#f7f9fb] py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-4 text-4xl font-semibold text-gray-900">Scale Your Go-To-Market Strategy with Data</h2>
          <p className="mb-6 text-gray-700">
            Use AI-powered GTM analytics, customer insights, and performance tracking to accelerate growth and improve revenue outcomes.
          </p>
          <a href="https://dod.humanli.ai/login" className="inline-block rounded-lg bg-[#0540AD] px-6 py-3 text-white transition hover:bg-[#05389A]">
            Contact us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}