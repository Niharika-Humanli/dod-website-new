"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Check,
  Compass,
  Gauge,
  Lightbulb,
  Zap, BarChart3, DollarSign, ShoppingCart, Truck
} from "lucide-react";
import {Navigation} from "@/components/Navigation";
import {Footer} from "@/components/Footer";
import { Button } from "@/components/ui/button";

type ProductContent = typeof import("@/data/product.json");

const icons: Record<string, React.ElementType> = {
  "lucide-brain": Brain,
  "lucide-bar-chart-3": BarChart3,
  "lucide-lightbulb": Lightbulb,
  "lucide-compass": Compass,
  "lucide-gauge": Gauge,
  "lucide-activity": Activity,
};

const industryIcons: Record<string, React.ElementType> = {
  "bi-bar-chart-line": BarChart3,
  "bi-currency-dollar": DollarSign,
  "bi-cart3": ShoppingCart,
  "bi-truck": Truck,
};

export default function ProductClient({ content }: { content: ProductContent }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[80vh] items-center overflow-hidden">
          <div className="container relative z-10 mx-auto px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                {content.hero.title}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                {content.hero.subtitle}
              </p>

              <Button asChild size="lg" className="mt-8">
                <a href={content.hero.buttonLink}>{content.hero.buttonText}</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold md:text-5xl">
                {content.section2.title}
              </h2>

              <h3 className="mt-8 text-xl font-semibold">
                {content.section2.challenge.title}
              </h3>

              <p className="mt-3 text-lg text-muted-foreground">
                {content.section2.challenge.text}
              </p>

              <h3 className="mt-8 text-xl font-semibold">
                {content.section2.solution.title}
              </h3>

              <p className="mt-3 text-lg text-muted-foreground">
                {content.section2.solution.text}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.section2.cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border p-6"
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-muted-foreground">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-5xl">
                  {content.section3.title}
                </h2>

                <div className="mt-8 space-y-6">
                  {content.section3.steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        {step.number}
                      </div>

                      <div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="mt-1 text-muted-foreground">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={content.section3.image}
                  alt={content.section3.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-5xl">
                {content.section4.title}
              </h2>

              <p className="mt-4 text-xl text-muted-foreground">
                {content.section4.subtitle}
              </p>

              <p className="mt-4 text-muted-foreground">
                {content.section4.description}
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-2xl border">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    {content.section4.columns.map((column) => (
                      <th key={column} className="p-5 text-left font-semibold">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {content.section4.rows.map((row, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="p-5 font-semibold">{row.agentType}</td>
                      <td className="p-5 text-muted-foreground">{row.trained}</td>
                      <td className="p-5 text-muted-foreground">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-5xl">
                {content.section5.title}
              </h2>

              <p className="mt-4 text-xl text-muted-foreground">
                {content.section5.subtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {content.section5.cards.map((card, index) => {
                    const Icon = industryIcons[card.icon];

                    return (
                    <div key={index} className="rounded-2xl border p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold">{card.title}</h3>
                        <p className="mt-3 text-sm text-muted-foreground">{card.description}</p>
                    </div>
                    );
                })}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
              {content.section5.footerText}
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-5xl">
                {content.section6.title}
              </h2>

              <p className="mt-4 text-xl text-muted-foreground">
                {content.section6.subtitle}
              </p>

              <p className="mt-4 text-muted-foreground">
                {content.section6.description}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.section6.cards.map((card, index) => (
                <div key={index} className="rounded-2xl border p-6">
                  <Check className="mb-4 h-6 w-6" />
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="mt-3 text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
              {content.section6.footerText}
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-5xl">
                {content.section7.title}
              </h2>

              <p className="mt-4 text-xl text-muted-foreground">
                {content.section7.subtitle}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {content.section7.cards.map((card, index) => {
                const Icon = icons[card.icon] || Zap;

                return (
                  <div key={index} className="rounded-2xl border p-6">
                    <Icon className="mb-4 h-7 w-7" />
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="mt-3 text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold md:text-5xl">
                  {content.section8.title}
                </h2>

                <div className="mt-8 space-y-8">
                  {content.section8.sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-semibold">
                        {section.heading}
                      </h3>

                      <ul className="mt-4 space-y-3">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-muted-foreground"
                          >
                            <Check className="mt-1 h-5 w-5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={content.section8.image}
                  alt={content.section8.title}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 9 */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold md:text-5xl">
                {content.section9.title}
              </h2>

              <p className="mt-4 text-lg text-muted-foreground">
                {content.section9.description}
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-2xl border">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="p-5 text-left font-semibold">Role</th>
                    <th className="p-5 text-left font-semibold">What They Gain</th>
                  </tr>
                </thead>

                <tbody>
                  {content.section9.table.map((row, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="p-5 font-semibold">{row.role}</td>
                      <td className="p-5 text-muted-foreground">{row.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {content.section9.metrics.map((metric, index) => (
                <div key={index} className="rounded-2xl border p-8 text-center">
                  <div className="text-4xl font-bold">{metric.value}</div>
                  <p className="mt-2 text-muted-foreground">{metric.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              {content.section10.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-xl text-muted-foreground">
              {content.section10.subtitle}
            </p>

            <Button asChild size="lg" className="mt-8">
              <a href={content.section10.buttonLink}>
                {content.section10.buttonText}
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}