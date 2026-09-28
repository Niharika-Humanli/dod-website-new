"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { AIToolModal } from "../components/AIToolModal";
import {
  ArrowRight,
  BarChart,
  Brain,
  Database,
  GitBranch,
  Layers,
  Zap,
  Lock,
  Cloud,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { aiTools } from "@/data/aiTools";

const integrationLogos = [
  ["AWS", "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"],
  ["Salesforce", "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"],
  ["Snowflake", "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg"],
  ["Google", "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"],
  ["Microsoft", "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"],
  ["Shopify", "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"],
  ["MongoDB", "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"],
  ["PostgreSQL", "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"],
  ["Docker", "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg"],
  ["Stripe", "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"],
  ["Slack", "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"],
  ["HubSpot", "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg"],
  ["LinkedIn", "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"],
  ["PayPal", "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"],
  ["Kubernetes", "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg"],
  ["Oracle", "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"],
  ["Databricks", "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png"],
  ["Tableau", "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png"],
];

type Pillar = [LucideIcon, string, string];
type HowItWorksStep = [string, string, string];
type NotebookItem = [string, string, string[]];
type NotebookSectionData = {
  title: string;
  description: string;
  image: string;
  items: NotebookItem[];
};

const pillars: Pillar[] = [
  [Brain, "AI Solutions", "Harness machine learning for forecasting, anomaly detection, and decision optimization. DoD automates repetitive analysis, helping you focus on insights instead of spreadsheets."],
  [Database, "Data Analytics", 'Ask questions in plain English — "What was our cost per unit in Q3?" — and receive instant charts, comparisons, and predictive trends from live datasets.'],
  [Zap, "Digital Innovation", "Turn traditional processes into intelligent workflows. DoD integrates AI modules that predict, prescribe, and automate decision loops."],
  [Layers, "Strategy Intelligence", "Simulate market scenarios, test business hypotheses, and measure impact across timeframes — empowering leaders to move from gut-based to evidence-based decisions."],
  [GitBranch, "Operations Optimization", "Monitor every operational variable — throughput, cost, utilization, delay, downtime — and detect performance drifts before they become losses."],
  [BarChart, "Performance Management", "Create live dashboards that measure what matters most: ROI, productivity, and outcome metrics — unified across departments."],
  [Lock, "Security & Compliance", "Built with enterprise-grade governance, DoD ensures compliance with data regulations, access control, and encryption standards."],
  [Cloud, "Cloud Scale", "Deployed securely across any cloud — AWS, Azure, or private servers — with elastic scaling, redundancy, and zero downtime."],
  [TrendingUp, "Growth Analytics", "Discover untapped opportunities by connecting sales, market, and customer data into one AI-driven growth engine."],
];

const howItWorks: HowItWorksStep[] = [
  ["01", "Integrate", "Connect: Plug Data on Demand into your existing ERP, database, or cloud data source. No data migration required."],
  ["02", "Interact", "Ask: Type your question in plain English — 'What's our sales trend this quarter?' or 'Which SKU has the highest stockout risk?' — and get an instant answer"],
  ["03", "Interpret", "Act: Receive visualizations, forecasts, and recommendations you can share with your team or export directly into your workflow"],
  ["04", "Impact", "Each response ties to outcomes—cost saved, hours reduced, margin improved, compliance risk mitigated."],
];

const notebookSections: NotebookSectionData[] = [
  {
    title: "Deep Dive",
    description: "Go beyond dashboards with an intelligent workspace that unifies SQL, no-code, and AI for advanced analysis. Designed for CXOs and teams who demand clarity, speed, and foresight in every decision.",
    image: "/1.jpeg",
    items: [
      ["Unified Analysis", "Bring data from ERP, CRM, finance, and ops into one intelligent notebook—no silos, no delays.", ["Connect ERP, CRM, finance, and operations into a single analysis workspace.", "Remove data silos and enable consistent, auditable metrics across teams.", "Run ad-hoc analysis, scheduled jobs, and collaborative notebooks from the same platform.", "Automatic schema mapping and transformation templates to skip repetitive ETL work.", "Versioned notebooks and experiment tracking for reproducible analytics.", "Fine-grained access controls, lineage, and audit logs for trusted outputs.", "Low-latency aggregations and cached rollups for fast interactive exploration."]],
      ["AI + Human Intelligence", "Run predictive models, uncover root causes, and benchmark performance with AI-powered precision.", ["Blend AI predictions with human validation to increase trust and accuracy.", "Human-in-the-loop workflows for model tuning, labeling, and contextual decisions.", "Explainable outputs with feature attribution and confidence scores.", "Continuous feedback loops that retrain models from user corrections.", "Approval queues and role-based review for high-impact recommendations.", "Model versioning and audit trails to meet governance and compliance needs."]],
      ["From Insight to Action", "From Insight to Action", ["Turn insights into action by triggering workflows and integrations directly from analysis.", "Automate handoffs to ops, marketing, or engineering with audit-safe triggers.", "Prebuilt connectors and webhook templates to reduce integration time.", "A/B testing and outcome measurement to validate which actions improve KPIs.", "Monitoring dashboards that track outcome KPIs after actions run.", "Reusable playbooks and runbooks so teams can scale proven interventions across orgs."]],
    ],
  },
  {
    title: "Insight Beyond Dashboards",
    description: "Step into an intelligent workspace where AI, no-code, and data science converge to deliver clarity with purpose. Data on Demand empowers CXOs and decision-makers with a unified environment that transforms fragmented enterprise data into foresight-driven intelligence.",
    image: "/2.jpeg",
    items: [
      ["Integrated Intelligence", "Harmonize insights across ERP, CRM, and operational ecosystems to reveal the complete business narrative in real time.", ["Harmonize master data and canonical schemas across sources for consistent reporting.", "Provide a unified semantic layer so metrics mean the same thing across teams.", "Support federated queries and cross-source joins without heavy ETL pipelines.", "Enrich datasets with third-party signals and clean transformations for better models.", "Governed catalogs and lineage so users discover and trust datasets quickly.", "Self-service dataset discovery and sharing to speed analytic productivity."]],
      ["Augmented Decision-Making", "Fuse AI-driven analytics with human expertise to illuminate opportunities, risks, and performance levers.", ["What-if simulations and scenario planning to compare outcomes before execution.", "Ranked recommendations with expected impact and confidence scores to guide choices.", "Decision support widgets embedded where teams already work (dashboards, tickets, runbooks).", "Escalation and approval workflows for high-risk decisions with auditability.", "Continuous learning loops that update recommendations from real outcome data.", "Contextual explanations so humans understand why a recommendation was made."]],
      ["Actionable Foresight", "Move from analysis to execution effortlessly, converting intelligence into measurable business outcomes.", ["Automated orchestration of multi-step workflows tied directly to insights.", "Templated playbooks and runbooks with built-in rollback and safety checks.", "Integration with CRM, ERP, CDPs and downstream systems for closed-loop automation.", "Real-time KPI monitoring and alerts when outcomes deviate from expectations.", "Traceability from action to outcome so teams can measure business impact.", "Compliance-ready reporting that ties actions to approvals and audit logs."]],
    ],
  },
];

const featureCards: Array<[LucideIcon, string, string, string]> = [
  [BarChart, "Analyze Deeper", "Combine SQL, notebooks and AI to uncover signals faster.", "Realtime"],
  [Brain, "AI-Powered Alerts", "Detect anomalies and prioritize issues automatically.", "Auto"],
  [Zap, "Action Orchestration", "Trigger workflows and integrations directly from insights.", "Low-Latency"],
  [Database, "Unified Data", "Connect & normalize sources for one source of truth.", "1 View"],
];

function NotebookSection({ section, reverse = false }: { section: NotebookSectionData; reverse?: boolean }) {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-4 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <h3 className="text-3xl lg:text-4xl font-bold">{section.title}</h3>
            <p className="text-lg text-muted-foreground">{section.description}</p>
            <ul className="space-y-3">
              {section.items.map(([label, desc, bullets]) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><div className="w-2 h-2 bg-primary rounded-full" /></div>
                  <Dialog>
                    <DialogTrigger asChild><button className="bg-primary/10 text-primary font-semibold rounded-lg px-6 py-3 shadow-md hover:bg-primary/20 transition-colors text-lg md:text-xl w-full md:w-auto">{label}</button></DialogTrigger>
                    <DialogContent>
                      <DialogHeader><DialogTitle>{label}</DialogTitle><DialogDescription>{desc}</DialogDescription></DialogHeader>
                      <ul className="list-disc list-inside mt-4 text-sm text-muted-foreground">
                        {bullets.map((b: string) => <li key={b}>{b}</li>)}
                      </ul>
                    </DialogContent>
                  </Dialog>
                </li>
              ))}
            </ul>
          </div>
          <div className={`hidden lg:flex items-center justify-center ${reverse ? "lg:order-1" : "lg:order-2"}`}>
            <div className="w-full max-w-[520px] aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image src={section.image} alt="Analytics Notebook Interface" width={520} height={520} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeClient() {
  const [selectedTool, setSelectedTool] = useState<(typeof aiTools)[number] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                From BI to AI:
                <div><span className="text-primary">Stop Waiting for Reports.</span></div>
                <div><span className="text-primary">Ask Your Data Anything.</span></div>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">DoD (Data on Demand) is an AI-powered analytics that converts your ERP data into instant conversational insights — so CXOs can lead with confidence, not guesswork.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg bg-primary" asChild><a href="https://dod.humanli.ai/login">Get a Free Demo</a></Button>
                <Button size="lg" variant="outline" className="text-lg" asChild><Link href="/contact">Talk to us</Link></Button>
              </div>
              <p className="text-sm text-muted-foreground mt-8">powered by Humanli.ai</p>
            </div>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden border shadow-2xl">
              <video src="/video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Product Pillars */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">AI Analytics Platform — Core Product Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions powered by cutting-edge technology</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map(([Icon, title, description], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full border-border hover:border-foreground transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 mb-4 text-accent group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground mb-4">{description}</p>
                    <Button variant="ghost" className="group-hover:translate-x-2 transition-transform" asChild>
                      <Link href={`/features/${title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full flex justify-center items-center bg-[#EEF4FB] py-16">
        <div className="w-[95%] sm:w-[85%] max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map(([num, title, desc]) => (
              <div key={num} className="flex flex-col items-start gap-3">
                <span className="text-5xl font-extrabold text-primary leading-none">{num}</span>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="w-full flex justify-center items-center bg-background py-8">
        <div className="relative w-[95%] sm:w-[85%] aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl shadow-lg border border-black max-h-[720px]">
          <video src="/banner.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" poster="/placeholder.svg" />
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-white rounded-xl mx-4 lg:mx-0">
        <div className="container">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Integrations — Connect 30+ Data Sources</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-2">Connect with popular tools and platforms — built for fast onboarding and reliable sync.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {Array.from({ length: 19 }).map((_, i) => {
                const [name, src] = integrationLogos[i % integrationLogos.length];
                return (
                  <div key={i} className="flex items-center justify-center border border-gray-200 rounded-md p-4 bg-gray-50 hover:shadow-lg hover:scale-105 transition-transform">
                    <img src={src} alt={name} title={name} loading="lazy" className="max-h-12 max-w-full object-contain" />
                  </div>
                );
              })}
              <Link href="/integrations" className="flex items-center justify-center bg-black text-white px-4 py-3 rounded-md font-semibold">See All Integrations →</Link>
            </div>
          </div>
        </div>
      </section>

      <NotebookSection section={notebookSections[0]} />
      <NotebookSection section={notebookSections[1]} reverse />

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Benefits of AI-Powered Business Intelligence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Click any tool to explore detailed features and capabilities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <Card key={index} className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1" onClick={() => { setSelectedTool(tool); setModalOpen(true); }}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto hover:bg-transparent">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-extrabold leading-tight mb-4">Everything You Need to Act with Confidence</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">Data On Demand brings together analytics, automation, and AI into one polished workspace so teams can discover insights, validate actions, and move to execution without context switching. Designed for speed, clarity, and enterprise readiness.</p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                {["Enterprise-grade security & governance", "Real-time insights & alerts", "One-click workflows into production", "Collaborative workspaces"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700"><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">✓</span>{item}</li>
                ))}
              </ul>
              <Button size="lg" className="text-lg bg-primary" asChild><a href="https://dod.humanli.ai/login">Book a Free Demo</a></Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {featureCards.map(([Icon, title, desc, metric]) => (
                <motion.div key={title} whileHover={{ scale: 1.03, y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm">
                  <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center shadow-md mb-4"><Icon className="h-6 w-6 text-white" /></div>
                  <div className="text-lg font-semibold">{title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{desc}</div>
                  <div className="text-xs text-muted-foreground mt-3">{metric}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-light mb-6">Ready to Lead with Data — Not Gut Feel?</h2>
            <p className="text-muted-foreground mb-8 text-lg">Join forward-thinking CXOs who use Data on Demand to make faster, smarter, and more profitable decisions every day.</p>
            <Button size="lg" className="group" asChild><a href="https://dod.humanli.ai/login">Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" /></a></Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <AIToolModal tool={selectedTool} open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}