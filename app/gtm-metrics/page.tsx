import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import metricsData from "@/data/GTMMetricsData.json";

export const metadata: Metadata = {
  title: "GTM Metrics — Track What Matters | Data On Demand",
  description: "Monitor your go-to-market performance with AI-powered metrics. Pipeline, revenue, and conversion analytics unified in one platform.",
};

export default function GTMMetricsPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <Navigation />

      <section className="text-center py-24 bg-gradient-to-b from-[#F9FBFF] to-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">GTM Metrics Library</h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            A comprehensive library of key performance indicators to track, analyze, and optimize every stage of your go-to-market motion.
          </p>
          <a href="https://dod.humanli.ai/login" className="inline-block bg-[#0540AD] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#05389A] transition">
            Explore
          </a>
        </div>
      </section>

      <section id="metrics" className="py-24 bg-[#F9FBFF]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-blue-900 mb-16">Go-To-Market Strategy Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">GTM Launch Performance</h3>
              <p className="text-gray-700 leading-relaxed">Measure the success rate of new product launches. Assess GTM readiness, adoption velocity, and early revenue acceleration to validate launch impact.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Channel Effectiveness Index</h3>
              <p className="text-gray-700 leading-relaxed">Analyze conversion efficiency across your GTM channels. Identify top-performing touchpoints and optimize investment distribution for maximum ROI.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">Revenue Acceleration Metrics</h3>
              <p className="text-gray-700 leading-relaxed">Track velocity metrics from first contact to closed deal. Quantify how GTM alignment impacts sales cycle compression and growth predictability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image src="/g.jpeg" alt="Customer Journey Tracking" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#0540AD] mb-10">Customer Journey Analytics</h2>
            <div className="space-y-8">
              {[
                ["bi bi-graph-up", "Lead-to-Revenue Conversion", "Map every customer journey touchpoint to understand lead progression and conversion influence within your GTM funnel."],
                ["bi bi-search", "Engagement Depth Tracking", "Analyze user engagement signals across campaigns, demos, and product trials to reveal conversion opportunities."],
                ["bi bi-person-badge", "Retention & Expansion Signals", "Identify key behavioral triggers linked to renewal and upsell opportunities to strengthen GTM lifecycle performance."],
              ].map(([icon, title, description]) => (
                <div key={title} className="flex items-start bg-blue-50 rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-700 rounded-full p-3 mr-4"><i className={icon} /></div>
                  <div><h3 className="text-lg font-semibold text-blue-900 mb-1">{title}</h3><p className="text-gray-700 text-sm">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#EAF4FB]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image src="/g1.jpeg" alt="Product Launch Dashboard" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#0540AD] mb-4">GTM Launch Performance Dashboard</h2>
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Real-Time Market Activation Insights</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">Centralize product launch KPIs, sales activation metrics, and campaign impact analysis into one connected GTM dashboard for data-driven execution.</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Track launch performance across all GTM stages</li>
              <li>Correlate spend efficiency with conversion outcomes</li>
              <li>Visualize adoption and retention metrics post-launch</li>
              <li>Benchmark GTM success by product or region</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0540AD] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8">Customer Engagement Scoring Framework</h2>
            <h3 className="text-lg font-semibold mb-4">Engagement-Driven GTM Optimization</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">Leverage behavioral, intent, and usage data to score engagement quality and identify accounts with the highest GTM potential.</p>
            <p className="text-gray-300 mb-4 leading-relaxed">Combine sales velocity and marketing engagement data to guide retention and upsell efforts.</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Track lead-to-customer engagement trends</li>
              <li>Identify churn risks based on activity decline</li>
              <li>Score customer readiness for expansion</li>
              <li>Align GTM execution to engagement heat maps</li>
            </ul>
          </div>
          <div className="space-y-10">
            {[
              ["85%", "Active Engagement Score", "Percentage of customers actively engaging with GTM activities."],
              ["92%", "Adoption Index", "Measure of product engagement depth and activation rate."],
            ].map(([value, title, description]) => (
              <div key={title}>
                <div className="flex items-center mb-2">
                  <div className="flex-1 bg-gray-700 h-4 rounded-full overflow-hidden"><div className="h-4 bg-white rounded-full" style={{ width: value }} /></div>
                  <span className="ml-3 font-semibold">{value}</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">{title}</h4>
                <p className="text-gray-300 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image src="/g4.jpeg" alt="Declining Customer Engagement" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Detect Declining Engagement Using GTM Data</h2>
            <div className="space-y-8 border-l-2 border-[#0540ADaa] pl-6">
              {[
                ["1", "Initial Activation", "Track first-time interactions and GTM onboarding milestones to establish engagement baselines."],
                ["2", "Mid-Cycle Drop", "Identify decreasing activity signals in marketing touchpoints or sales responses."],
                ["3", "Predictive Alerts", "Combine engagement and usage data to trigger early churn warnings and retention actions."],
                ["4", "Re-Engagement Strategy", "Deploy targeted campaigns to restore customer interaction levels and boost GTM retention."],
              ].map(([number, title, description]) => (
                <div key={number}>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0540ADaa] text-white font-semibold mr-3">{number}</div>
                    <h4 className="text-lg font-semibold text-blue-900">{title}</h4>
                  </div>
                  <p className="text-gray-700 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9FBFF]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image src="/g3.jpeg" alt="GTM Strategy Meeting" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-10">GTM Strategy Foundations</h2>
            <div className="space-y-6">
              {[
                ["bi bi-bullseye", "The GTM Operating Framework", "A structured framework for defining market segmentation, positioning, and execution alignment. Measure efficiency from planning to activation using standardized GTM KPIs."],
                ["bi bi-rocket-takeoff", "Proven GTM Acceleration Model", "Benchmark your go-to-market initiatives against leading programs. Use performance ratios and readiness scores to measure launch success."],
              ].map(([icon, title, description]) => (
                <div key={title} className="flex items-start bg-blue-50 rounded-2xl p-6 shadow-sm">
                  <div className="flex-shrink-0 bg-blue-100 text-blue-700 rounded-full p-3 mr-4"><i className={icon} /></div>
                  <div><h3 className="text-lg font-semibold text-blue-900 mb-1">{title}</h3><p className="text-gray-700 text-sm">{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#1E2A3B] mb-12">GTM Consulting Funnel Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["Discovery & Needs Analysis", "Track consultation-to-proposal conversion rates to measure how effectively GTM advisory sessions convert into actionable strategies."],
              ["GTM Goal Definition", "Quantify alignment between client objectives and GTM benchmarks. Identify measurable KPIs for revenue, pipeline, and adoption goals."],
              ["Strategy Blueprint Development", "Evaluate time-to-strategy metrics and framework adoption rates. Ensure the GTM plan includes execution, enablement, and measurement phases."],
              ["Outcome & Impact Analysis", "Monitor consulting outcomes through lead-to-revenue acceleration, customer retention lift, and GTM maturity growth rates."],
            ].map(([title, description]) => (
              <div key={title} className="bg-[#E6F2FF] rounded-2xl p-6 text-left">
                <h3 className="text-lg font-semibold text-[#1E2A3B] mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F9FBFF]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">GTM Revenue Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              ["Pipeline Velocity", "Measure average time for opportunities to move through each GTM stage to forecast revenue acceleration or delays."],
              ["Customer Acquisition Cost Efficiency", "Compare cost-to-conversion ratios across marketing and sales channels to identify scalable GTM growth paths."],
              ["Revenue Retention Rate", "Analyze recurring revenue performance and customer lifetime value to ensure long-term GTM sustainability."],
            ].map(([title, description]) => (
              <div key={title}>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image src="/o.jpeg" alt="GTM Optimization" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">GTM Maturity & Optimization Metrics</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Evaluate GTM performance across strategy, execution, and feedback loops. Identify capability gaps and optimize operational excellence using continuous learning metrics.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Measure cross-functional GTM alignment index</li>
              <li>Track enablement adoption and content usage scores</li>
              <li>Analyze feedback-to-action implementation rate</li>
              <li>Monitor overall GTM maturity progression over time</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f7f9fb] text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-700 mb-6">Talk to our team to explore how these guides map to your business.</p>
        <a href="https://dod.humanli.ai/login" className="inline-block bg-[#0540AD] text-white px-6 py-3 rounded-lg hover:bg-[#05389A] transition">Contact us</a>
      </section>

      <Footer />
    </div>
  );
}