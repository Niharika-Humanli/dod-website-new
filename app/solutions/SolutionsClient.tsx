"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type SolutionContent = typeof import("@/data/solutionContent.json");

export default function SolutionsClient({ content }: { content: SolutionContent }) {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {content.hero.title}
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              {content.hero.subtitle}
            </p>
            <Link href={content.hero.buttonLink}>
              <Button size="lg">{content.hero.buttonText}</Button>
            </Link>
          </div>
        </section>

        {/* AI Decision Engine */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src={content.section2.image}
                alt="AI Decision Engine"
                width={500}
                height={500}
                className="w-full max-w-md aspect-square object-cover rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {content.section2.title}
              </h2>

              <div className="space-y-6">
                {content.section2.points.map((point) => (
                  <div key={point.heading}>
                    <h3 className="text-xl font-semibold mb-2">{point.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {content.section2.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="font-semibold text-sm mt-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.subtext}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Executive Dashboards */}
        <section
          className="py-24 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0540AD 0%, #0540ADcc 50%, #0540AD99 100%)",
          }}
        >
          <div className="container mx-auto px-4 relative z-10 text-white">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              {content.section3.title}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {content.section3.steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/80 leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          />
        </section>

        {/* Predictive AI Models */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.section4.title}</h2>
              <h3 className="text-xl text-primary font-semibold mb-4">{content.section4.subtitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{content.section4.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {content.section4.industries.map((industry) => (
                <Card key={industry.name}>
                  <CardContent className="p-6">
                    <i className={`${industry.icon} text-3xl text-primary mb-4 block`} />
                    <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">{content.section4.impactTitle}</h3>
              <div className="max-w-4xl mx-auto space-y-6">
                {content.section4.impacts.map((impact) => (
                  <div key={impact.label}>
                    <div className="flex justify-between gap-4 mb-2">
                      <span className="font-medium">{impact.label}</span>
                      <span className="font-bold text-primary">{impact.value}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${impact.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Logistics & Supply Chain */}
        <section
          className="py-24 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0540AD 0%, #0540ADcc 50%, #0540AD99 100%)",
          }}
        >
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {content.section4_5.title}
              </motion.h2>
              <p className="text-xl font-medium mb-4">{content.section4_5.subtitle}</p>
              <p className="text-white/80 leading-relaxed">{content.section4_5.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.section4_5.cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                >
                  <i className={`${card.icon} text-3xl mb-5 block`} />
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-white/80 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          />
        </section>

        {/* Why Data on Demand */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.section5.title}</h2>
              <p className="text-muted-foreground">{content.section5.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.section5.cards.map((card) => (
                <Card key={card.title}>
                  <CardContent className="p-6">
                    <i className={`${card.icon} text-3xl text-primary mb-5 block`} />
                    <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="max-w-3xl mx-auto text-center text-muted-foreground mt-10">
              {content.section5.footerText}
            </p>
          </div>
        </section>

        {/* ROI Tracker */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.section6.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.section6.subtitle}</p>
            </div>

            <div className="max-w-4xl mx-auto mb-14">
              <h3 className="text-2xl font-bold mb-6">{content.section6.metricsTitle}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {content.section6.metrics.map((metric) => (
                  <div key={metric} className="flex gap-3 items-start p-4 rounded-lg bg-muted/30">
                    <span className="text-primary font-bold">✓</span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-x-auto max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">{content.section6.tableTitle}</h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    {content.section6.table.columns.map((column) => (
                      <th key={column} className="text-left p-4 border font-semibold">{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {content.section6.table.rows.map((row) => (
                    <tr key={row.sector} className="border-b">
                      <td className="p-4 border">{row.sector}</td>
                      <td className="p-4 border font-semibold text-primary">{row.roi}</td>
                      <td className="p-4 border">{row.keyDriver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="max-w-4xl mx-auto mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">{content.section6.footer.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{content.section6.footer.text}</p>
              <p className="font-semibold text-primary">{content.section6.footer.highlight}</p>
            </div>
          </div>
        </section>

        {/* Cloud Security & Governance */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.section7.title}</h2>
              <h3 className="text-xl text-primary font-semibold mb-5">{content.section7.subtitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{content.section7.description}</p>

              <div className="space-y-6">
                {content.section7.features.map((feature) => (
                  <div key={feature.title}>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-5">{content.section7.outcomes.title}</h3>
                <ul className="space-y-3">
                  {content.section7.outcomes.points.map((point) => (
                    <li key={point} className="flex gap-3 items-start">
                      <span className="text-primary font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src={content.section7.image}
                alt="Security Framework Illustration"
                width={500}
                height={500}
                className="max-w-md w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F9FAFB] py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.callToAction.title}</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg mb-8">
              {content.callToAction.subtitle}
            </p>
            <Link href={content.callToAction.buttonLink}>
              <Button size="lg" className="bg-[#0540AD] hover:bg-[#04358f]">
                {content.callToAction.buttonText}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}