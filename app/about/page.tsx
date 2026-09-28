import Image from "next/image";
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Data on Demand | AI-Powered Analytics Platform",
  description:
    "Learn how Data On Demand by Humanli AI is redefining business intelligence — from real-time insights of ERP to predictive analytics for enterprise teams worldwide.",
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Data on Demand",
  url: "https://dod.humanli.ai/about",
  description:
    "Learn how Humanli AI is building Data on Demand to transform enterprise analytics with AI.",
  mainEntity: {
    "@type": "Organization",
    name: "Humanli AI",
    url: "https://humanli.ai",
    logo: "https://dod.humanli.ai/humanli.png",
    founder: [
      {
        "@type": "Person",
        name: "Rishabh Nag",
        jobTitle: "Founder & CEO",
      },
      {
        "@type": "Person",
        name: "Kapil Nag",
        jobTitle: "Co-Founder & CTO",
      },
    ],
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <Navigation />

      <main className="flex-1 w-full">
        <div className="max-w-5xl mx-auto px-6 py-20">

          {/* Header */}
          <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-2xl bg-white flex items-center justify-center shadow-xl overflow-hidden">
                <Image
                  src="/humanli.png"
                  alt="Humanli logo"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h1 className="text-4xl font-extrabold leading-tight text-slate-900">
                  HUMANLI.AI
                </h1>

                <p className="mt-1 text-sm text-slate-600">
                  Bringing practical AI to healthcare, education, and business
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm font-semibold shadow-md"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </header>

          {/* About / Vision / Mission */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* About Us */}
            <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                  ABOUT US
                </div>

                <p className="mt-4 text-slate-700 text-sm leading-relaxed">
                  At Humanli.AI, we combine imagination with innovation to offer
                  AI solutions that simplify and improve everyday life. Our goal
                  is to seamlessly integrate Artificial Intelligence into
                  healthcare, education, and business sectors to make operations
                  more efficient, accessible, and innovative.
                </p>
              </div>
            </article>

            {/* Our Vision */}
            <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                  OUR VISION
                </div>

                <div className="mt-4 text-slate-700 text-sm leading-relaxed space-y-3">
                  <p>
                    Fueled by passion and innovation, our core mission involves
                    driving sustainable growth, enhancing operational
                    efficiency, and delivering unparalleled customer
                    satisfaction through innovative AI-powered products.
                  </p>

                  <p>
                    We aim to ensure that the impact of AI positively shapes the
                    future of industries and individuals alike. To effortlessly
                    embed AI into industries, streamlining tasks, enhancing
                    decision-making, and fostering efficiency for a better
                    future.
                  </p>
                </div>
              </div>
            </article>

            {/* Our Mission */}
            <article className="bg-white rounded-2xl border border-slate-100 p-6 shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                  OUR MISSION
                </div>

                <p className="mt-4 text-slate-700 text-sm leading-relaxed">
                  We dedicate ourselves to promoting sustainable growth,
                  increasing efficiency, and providing impactful AI solutions
                  across various sectors such as education, healthcare, and
                  corporate enterprises.
                </p>
              </div>
            </article>

          </section>

          {/* Founders */}
          <section className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                About Founders
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Leadership combining product, policy and deep technical
                expertise.
              </p>
            </div>

            <div className="space-y-10">

              {/* Rishabh */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center p-8">

                  <div className="lg:col-span-2">
                    <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-sm">
                      Founder - Rishabh Nag
                    </div>

                    <div className="mt-6 text-sm text-slate-700 leading-relaxed space-y-4">
                      <p>
                        Rishabh Nag is the Founder & CEO of Humanli.ai, a
                        pioneering applied AI company developing transformational
                        products across education, healthcare, and enterprise
                        analytics. With a strong foundation in finance and
                        strategy, Rishabh previously served as the CFO of two
                        billion-dollar enterprises and worked with McKinsey,
                        advising clients on large-scale transformations and
                        policy-driven innovation. His journey reflects a deep
                        commitment to using technology not just for scale, but
                        for solving problems that matter to society.
                      </p>

                      <p>
                        An alumnus of IIM Calcutta, Rishabh combines boardroom
                        experience with grassroots insight. He currently serves
                        as a Member of the Department of National Language
                        Committee in the Indian Parliament, where he works on
                        advancing the role of Indian languages and AI in
                        education, governance, and citizen access. His
                        contributions straddle both private-sector innovation
                        and public policy, making him a rare blend of
                        strategist, technologist, and nation-builder.
                      </p>

                      <p>
                        At Humanli, he has led the creation of Pragyan AI, the
                        only Indian AI learning tool to help students prepare
                        for NEET and JEE, and Swasth, a pneumonia and TB
                        detection platform with 95.7% diagnostic precision. He
                        has also architected Humanli’s Data On Demand platform,
                        which is being piloted across sectors like energy,
                        manufacturing, and governance. Under his leadership,
                        Humanli has filed multiple patents and is delivering AI
                        products that are both globally benchmarked and locally
                        impactful.
                      </p>

                      <p>
                        Rishabh is driven by the belief that India can lead the
                        world in applied AI—if its products are built for the
                        last mile, aligned with national priorities, and
                        financially sustainable from Day One. Through Humanli,
                        he continues to champion AI that is explainable,
                        trusted, and designed to make a real difference—not
                        just in data centers, but in classrooms, clinics, and
                        communities.
                      </p>

                      <div className="mt-4">
                        <a
                          href="https://www.linkedin.com/in/rishabh-nag-founder03?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm font-medium shadow-sm"
                        >
                          View Rishabh on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-end lg:col-span-1">
                    <div className="w-full lg:w-64 ring-1 ring-primary/20 shadow-lg transform transition-transform hover:scale-105">
                      <Image
                        src="/ri.png"
                        alt="Rishabh Nag"
                        width={256}
                        height={256}
                        className="w-full h-auto object-contain rounded-md"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Kapil */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center p-8">

                  <div className="lg:col-span-2">
                    <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-sm">
                      Co-Founder - Kapil Nag
                    </div>

                    <div className="mt-6 text-sm text-slate-700 leading-relaxed space-y-4">
                      <p>
                        Kapil Nag serves as the Chief Technology Officer (CTO)
                        and the driving force behind Humanli, a rapidly
                        advancing startup transforming the landscape of
                        Generative AI and Medical Image Diagnostics. With over
                        two decades of expertise in Artificial Intelligence,
                        Machine Learning, Deep Learning, Robotics, and
                        Conversational AI, Kapil has consistently demonstrated
                        the ability to merge technological innovation with
                        strategic vision, positioning Humanli at the forefront
                        of healthcare-focused AI transformation.
                      </p>

                      <p>
                        A distinguished graduate of IIM Bangalore with a
                        specialized focus on Data Science from ISB Hyderabad,
                        Kapil’s academic foundation complements his deep
                        technical insight and leadership acumen. His career is
                        defined by a passion for translating complex data-driven
                        technologies into scalable, real-world solutions that
                        deliver measurable value. This unique blend of business
                        strategy and scientific expertise underpins his
                        leadership approach and continues to shape Humanli’s
                        innovation roadmap.
                      </p>

                      <p>
                        Prior to joining Humanli, Kapil held influential roles
                        at global technology leaders Hewlett-Packard (HP) and
                        IBM, where he led high-impact AI and analytics
                        initiatives. As Vertical Head (Global) for Analytics &
                        Data Science, he was instrumental in designing
                        enterprise-scale AI systems that enhanced business
                        intelligence, operational efficiency, and data
                        governance across multiple industries. His extensive
                        experience in managing global analytics teams and
                        implementing data-driven strategies has provided him
                        with a deep understanding of how AI can transform
                        complex ecosystems.
                      </p>

                      <p>
                        Kapil’s early involvement in BOT and automation projects
                        laid the groundwork for his pioneering efforts at
                        Humanli. Today, he leads the company’s mission to
                        harness Generative AI for medical imaging
                        innovation—advancing diagnostic precision, accelerating
                        interpretation, and improving accessibility for
                        healthcare professionals and patients worldwide. His
                        vision centers on using AI to empower the medical
                        community with smarter, faster, and more accurate
                        diagnostic tools.
                      </p>

                      <p>
                        Under Kapil’s strategic leadership, Humanli is redefining
                        the intersection of technology and healthcare. His
                        commitment to building intelligent, human-centric AI
                        solutions reflects a broader vision—to revolutionize
                        medical diagnostics through innovation, ethics, and
                        empathy. By combining cutting-edge AI research with
                        real-world clinical applications, Kapil Nag continues
                        to position Humanli as a leader in the next era of
                        AI-driven healthcare transformation.
                      </p>

                      <div className="mt-4">
                        <a
                          href="https://www.linkedin.com/in/kapnag?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white text-sm font-medium shadow-sm"
                        >
                          View Kapil on LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center lg:justify-end lg:col-span-1">
                    <div className="w-full lg:w-64 ring-1 ring-primary/20 shadow-lg transform transition-transform hover:scale-105">
                      <Image
                        src="/kp.png"
                        alt="Kapil Nag"
                        width={256}
                        height={256}
                        className="w-full h-auto object-contain rounded-md"
                      />
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}