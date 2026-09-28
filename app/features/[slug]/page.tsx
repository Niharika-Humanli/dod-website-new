import Image from "next/image";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import featuresData from "@/data/featuresData";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuresData.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const feature = featuresData.find((item) => item.slug === slug);

  if (!feature) {
    return {};
  }

  return {
    title: `${feature.title} | Data On Demand`,
    description: feature.short,
  };
}

export default async function FeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = featuresData.find((item) => item.slug === slug);

  if (!feature) {
    notFound();
  }

  return (
    <>
      <Navigation />

      <main>
        <section className="bg-gradient-to-b from-background to-muted/20 py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
                Data On Demand
              </p>

              <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                {feature.title}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">
                {feature.short}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              {feature.image && (
                <div className="relative mb-16 overflow-hidden rounded-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1200}
                    height={700}
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}

              <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
                <div>
                  <h2 className="mb-6 text-3xl font-bold">
                    {feature.title}
                  </h2>

                  <p className="text-lg leading-8 text-muted-foreground">
                    {feature.long}
                  </p>

                  <div className="mt-10">
                    <h2 className="mb-6 text-2xl font-bold">
                      Key capabilities
                    </h2>

                    <div className="space-y-6">
                      {feature.bullets.map((bullet, index) => (
                        <div key={bullet} className="flex gap-4">
                          <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                            {index + 1}
                          </div>

                          <div>
                            <h3 className="font-semibold">{bullet}</h3>

                            {feature.bulletDetails?.[index] && (
                              <p className="mt-1 text-muted-foreground">
                                {feature.bulletDetails[index]}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {feature.useCases && feature.useCases.length > 0 && (
                    <div className="mt-12">
                      <h2 className="mb-6 text-2xl font-bold">Use cases</h2>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {feature.useCases.map((useCase) => (
                          <div
                            key={useCase}
                            className="rounded-xl border p-5"
                          >
                            <p className="font-medium">{useCase}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {feature.caseStudy && (
                    <div className="mt-12 rounded-2xl bg-muted p-8">
                      <h2 className="mb-3 text-2xl font-bold">Case study</h2>
                      <p className="text-muted-foreground">
                        {feature.caseStudy}
                      </p>
                    </div>
                  )}

                  {feature.implementation &&
                    feature.implementation.length > 0 && (
                      <div className="mt-12">
                        <h2 className="mb-6 text-2xl font-bold">
                          Implementation
                        </h2>

                        <div className="space-y-6">
                          {feature.implementation.map((step, index) => (
                            <div key={step.step} className="flex gap-4">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-semibold">
                                {index + 1}
                              </div>

                              <div>
                                <h3 className="font-semibold">
                                  {step.step}
                                </h3>

                                {step.detail && (
                                  <p className="mt-1 text-muted-foreground">
                                    {step.detail}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {feature.faqs && feature.faqs.length > 0 && (
                    <div className="mt-12">
                      <h2 className="mb-6 text-2xl font-bold">
                        Frequently asked questions
                      </h2>

                      <div className="space-y-6">
                        {feature.faqs.map((faq) => (
                          <div key={faq.q} className="border-b pb-6">
                            <h3 className="font-semibold">{faq.q}</h3>
                            <p className="mt-2 text-muted-foreground">
                              {faq.a}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <aside className="lg:sticky lg:top-24 lg:self-start">
                  <div className="rounded-2xl border p-6">
                    <h2 className="text-xl font-bold">
                      Ready to explore?
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                      See how Data On Demand can help turn your data into
                      actionable business intelligence.
                    </p>

                    <Button asChild className="mt-6 w-full">
                      <a
                        href="https://dod.humanli.ai/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore Data On Demand
                      </a>
                    </Button>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}