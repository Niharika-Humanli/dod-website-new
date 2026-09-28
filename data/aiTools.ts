export interface AITool {
  name: string;
  description: string;
  features: string[];
  useCases: string[];
  icon: string;
  useCaseDetails?: Record<string, string>;
}

export const aiTools: AITool[] = [
  {
    name: "Predict with 100% Accuracy",
    description: "Stay ahead of market shifts—know tomorrow, today.",
    features: [
      "AI Forecasting: Analyze 100M+ transactions monthly across market, customer & operations.",
      "Scenario Simulation: Test 20+ strategies instantly before execution.",
      "Benchmarking: Compare against top 10% industry performers for sharper insights.",
      "Risk Mitigation: Early warnings prevent up to $5M in potential losses per quarter."
    ],
    useCases: ["Retail Demand Forecasting – India, FMCG", "Financial Fraud Prediction – UK, Banking", "Energy Demand Forecasting – US, Utilities"],
    useCaseDetails: {
      "Retail Demand Forecasting – India, FMCG": `1. Client: Head of Supply Chain, Mumbai
2. Operational Impact: Optimized inventory across 120+ distribution centers, reducing stockouts by 35% and order fulfillment time by 22%.
3. Business/Financial Impact: Increased revenue by $15M in Q2; reduced holding costs by 18%.
4. Stakeholder Impact: Improved availability for urban and semi-urban customers; fewer stockouts enhanced customer satisfaction scores by 12%.
5. Outcome Summary: 35% faster decision cycles; $15M incremental revenue; 18% cost savings.`,
      "Energy Demand Forecasting – US, Utilities": `1. Client: Director of Clinical Analytics, Rochester, MN
2. Operational Impact: Connected patient care, billing, and lab analytics; reduced data silos, enabling cross-department triage decisions 50% faster.
3. Business/Financial Impact: Improved patient throughput, reducing operational costs by $2.5M annually; optimized resource allocation.
4. Stakeholder Impact: Patients received faster treatment; staff spent less time reconciling data; administrators had real-time oversight.
5. Outcome Summary: 50% faster triage decisions; $2.5M cost savings; improved patient satisfaction by 15%; platform adopted across 20+ departments in 3 months.`,
      "Financial Fraud Prediction – UK, Banking": `1. Client: VP of Risk & Strategy, London
2. Operational Impact: Real-time dashboards connected compliance, finance, and operations teams; reduced reporting conflicts by 40%.
3. Business/Financial Impact: Early detection of anomalies prevented £4M in potential losses; improved KPI alignment across global teams.
4. Stakeholder Impact: Regulators received accurate, timely reports; employees experienced smoother workflows; executives made faster decisions.
5. Outcome Summary: 40% faster reporting; £4M losses avoided; 50% reduction in manual cross-team coordination; global adoption within 2 months.`,
    },
    icon: " "
  },
  {
    name: "Optimize Every Function in Real Time",
    description: "Cut inefficiencies and boost performance instantly",
    features: [
      "Root Cause Analysis: Process 50M+ events/month to identify issues in <5 minutes.",
      "Dynamic Performance Benchmarks: Track 100+ KPIs across 50+ teams & regions.",
      "Real-Time Optimization: Adjust pricing, inventory, and operations live—impacting $200M+ in revenue.",
      "Resource Allocation Precision: Improve ROI by up to 25% across functions."
    ],
    useCases: ["E-commerce Fulfillment Optimization – India", "Airline Operations – Middle East", "Retail Pricing & Promotions – US, FMCG"],
    useCaseDetails: {
      "E-commerce Fulfillment Optimization – India": `1. Client: VP of Operations, Bengaluru
2. Operational Impact: Reduced warehouse processing time by 40% across 30 fulfillment centers; automated root-cause analysis cut issue resolution from 6 hours to 30 minutes.
3. Business/Financial Impact: Optimized inventory allocation increased sales by $25M; reduced operational costs by 18%.
4. Stakeholder Impact: Faster deliveries improved customer satisfaction scores by 15%; employees experienced 30% lower manual workload.
5. Outcome Summary: 40% faster processing; $25M incremental revenue; 18% cost reduction; 30% efficiency gain for staff.`,
      "Airline Operations – Middle East": `1. Client: Head of Network Operations, Dubai
2. Operational Impact: Real-time optimization of flight scheduling and crew allocation reduced delays by 22%.
3. Business/Financial Impact: Avoided $12M in delay-related costs; improved aircraft utilization by 8%.
4. Stakeholder Impact: Better on-time performance for 80M+ annual passengers; smoother workflows for operations teams.
5. Outcome Summary: 22% reduction in delays; $12M cost savings; 8% higher fleet utilization.`,
      "Retail Pricing & Promotions – US, FMCG": `1. Client: Director of Pricing Strategy, Cincinnati
2. Operational Impact: Dynamic pricing models adjusted product prices in real time across 5,000+ SKUs, improving promotional effectiveness.
3. Business/Financial Impact: Increased quarterly revenue by $35M; reduced margin leakage by 12%.
4. Stakeholder Impact: Enhanced customer satisfaction with optimal pricing; marketing and sales teams leveraged AI insights for faster campaign execution.
5. Outcome Summary: $35M revenue increase; 12% higher margin; 90% adoption of AI-driven pricing within 2 months.`,
    },
    icon: " "
  },
  {
    name: "One Source of Truth for All Data",
    description: "Eliminate silos—unify enterprise intelligence.",
    features: [
      "Seamless Integration: Connect 30+ ERP, CRM, finance, and marketing tools.",
      "Instant Setup: 100% ready-to-analyze data in under 1 hour.",
      "Unified Intelligence Hub: 500+ users collaborating across teams without friction.",
      "Faster Decisions: Cut reporting prep time by 70%, accelerating go-to-market cycles."
    ],
    useCases: ["Public Health Data Integration – India", "Retail Enterprise Reporting – UK, FMCG", "Financial Risk Management – US, Banking"],
    useCaseDetails: {
      "Public Health Data Integration – India": `1. Client: Data Analytics Director, New Delhi
2. Operational Impact: Integrated vaccination, hospital, and patient databases across 15 states, reducing data reconciliation time from 3 days to under 2 hours.
3. Business/Financial Impact: Optimized resource allocation saved $3.2M in logistics; improved vaccination coverage by 12%.
4. Stakeholder Impact: Faster, accurate reporting enabled health officials to respond quickly; citizens received timely updates and services.
5. Outcome Summary: 70% faster decision-making; $3.2M saved; 12% higher vaccination coverage; adoption across 15 state agencies in under 3 months.`,
      "Retail Enterprise Reporting – UK, FMCG": `1. Client: Head of Business Intelligence, London
2. Operational Impact: Consolidated data from 25+ ERPs and CRM systems; reporting cycles reduced from 10 days to 3 days.
3. Business/Financial Impact: Identified $8M in underperforming SKUs; reallocated marketing spend, increasing ROI by 18%.
4. Stakeholder Impact: Improved collaboration across marketing, sales, and supply chain teams; real-time insights for executives.
5. Outcome Summary: Reporting time cut by 70%; $8M revenue impact; 18% ROI uplift; platform adopted by 500+ users across functions.`,
      "Financial Risk Management – US, Banking": `1. Client: VP of Risk Analytics, New York
2. Operational Impact: Unified transaction, credit, and compliance data from 20+ internal systems; early detection of anomalies reduced investigation time by 60%.
3. Business/Financial Impact: Prevented potential regulatory penalties worth $4.5M; reduced fraud losses by 15%.
4. Stakeholder Impact: Customers experienced faster dispute resolution; compliance teams reduced manual workloads; regulators received accurate, real-time reports.
5. Outcome Summary: 60% faster investigations; $4.5M penalties avoided; 15% fraud reduction; 100% cross-team adoption in 2 months.`,
    },
    icon: " "
  },
  {
    name: "Scale Without Complexity",
    description: "Grow your data intelligence effortlessly.",
    features: [
      "Multi-Format Data Handling: Structured, semi-structured & unstructured datasets up to 10PB/month.",
      "Enterprise-Grade Security: 99.99% uptime, ISO-compliant cloud environment.",
      "Cross-Industry Flexibility: Used by 1000+ teams across retail, logistics, fintech & FMCG.",
      "Scalable Growth: Handles 10x data growth without additional infrastructure."
    ],
    useCases: ["Retail Expansion – India", "Logistics Network Optimization – US", "Fintech Data Scalability – UK"],
    useCaseDetails: {
      "Retail Expansion – India": `1. Client: Head of Data & Analytics, Mumbai
2. Operational Impact: Integrated sales, inventory, and customer data across 5,000+ stores; processing 2PB of structured and unstructured data monthly. Reduced data prep and reconciliation by 60%.
3. Business/Financial Impact: Enabled predictive stocking and promotional planning, increasing revenue by $30M and reducing stockouts by 25%.
4. Stakeholder Impact: Customers experienced better product availability; store managers had actionable insights in real-time.
5. Outcome Summary: 60% faster data operations; $30M revenue gain; 25% fewer stockouts; platform adopted across 5,000+ stores in 3 months.`,
      "Logistics Network Optimization – US": `1. Client: VP of Global Operations Analytics, Memphis, Tennessee
2. Operational Impact: Consolidated data from 150+ hubs and delivery systems (up to 5PB/month), enabling predictive routing and dynamic load balancing. Reduced delivery delays by 20%.
3. Business/Financial Impact: Avoided $10M in operational inefficiencies; improved fuel usage efficiency by 15%.
4. Stakeholder Impact: Faster deliveries for 50M+ customers; operational teams optimized routes with AI-driven insights.
5. Outcome Summary: 20% fewer delays; $10M cost savings; 15% fuel efficiency gain; network-wide adoption in 4 months.`,
      "Fintech Data Scalability – UK": `1. Client: Chief Data Officer, London
2. Operational Impact: Managed and analyzed multi-format transaction, customer, and compliance data (up to 10PB/month) without adding new infrastructure. Reduced system downtime by 99.99%.
3. Business/Financial Impact: Improved fraud detection and compliance reporting; prevented potential losses of £4.5M per quarter.
4. Stakeholder Impact: Safer banking for 15M+ customers; compliance teams reduced manual workload; regulators received timely reports.
5. Outcome Summary: 99.99% uptime; £4.5M losses prevented; 50% reduction in manual processing; full adoption in under 2 months.`,
    },
    icon: " "
  },
  {
    name: "Continuous Learning & Improvement",
    description: "AI that gets smarter with every interaction.",
    features: [
      "Self-learning models improve as more data flows in.",
      "Feedback loops refine predictions, reducing errors by up to 30%.",
      "Adaptive thresholds detect anomalies faster, preventing potential $2-3M losses.",
      "Benchmark evolution ensures strategies stay ahead of competitors."
    ],
    useCases: ["Predictive Maintenance – US, Manufacturing", "Banking Risk & Compliance – UK", "Logistics & Supply Chain – US, Retail"],
    useCaseDetails: {
      "Predictive Maintenance – US, Manufacturing": `1. Client: Head of Customer Experience & Analytics, Gurugram
2. Operational Impact: Automated churn campaigns triggered within 10 seconds of signal detection; reduced manual campaign setup time by 80%.
3. Business/Financial Impact: Retained 50,000+ high-value subscribers; increased quarterly revenue by $12M.
4. Stakeholder Impact: Customers received timely offers; marketing and operations teams saved 1,200+ work hours/month.
5. Outcome Summary: 80% faster campaign execution; $12M incremental revenue; 50,000 customers retained; 100% adoption across marketing and analytics teams.`,
      "Banking Risk & Compliance – UK": `1. Client: Director of Risk & Compliance Analytics, London
2. Operational Impact: Automated monitoring of 20M+ transactions/month; alerts triggered in <10 seconds, cutting investigation lag by 60%.
3. Business/Financial Impact: Prevented potential fraud losses of £5M; improved compliance reporting speed by 40%.
4. Stakeholder Impact: Customers experienced quicker dispute resolution; regulators received accurate, real-time reports; compliance teams reduced workload.
5. Outcome Summary: 60% faster investigation cycles; £5M fraud prevented; 40% faster regulatory reporting; platform adopted bank-wide in under 2 months.`,
      "Logistics & Supply Chain – US, Retail": `1. Client: VP of Supply Chain Analytics, Bentonville, Arkansas
2. Operational Impact: Real-time alerts triggered for inventory shortfalls and delivery delays; reduced response time by 50%.
3. Business/Financial Impact: Avoided $7M in lost sales; improved on-time delivery by 18%.
4. Stakeholder Impact: Better product availability for millions of customers; smoother operations for warehouse and logistics staff.
5. Outcome Summary: 50% faster response; $7M prevented revenue loss; 18% increase in delivery reliability; cross-team adoption in <3 months.`,
    },
    icon: " "
  },
  {
    name: "Insights That Drive Action",
    description: "Turn intelligence into measurable results.",
    features: [
      "Automated Workflows: Trigger campaigns, alerts, and operational actions in <10 seconds.",
      "AI-Driven Decisions: Scale decision-making for 100M+ events/month.",
      "Outcome Alignment: Link insights to KPIs, driving 15-20% higher business impact.",
      "Speed-to-Execution: Reduce action latency by up to 50%."
    ],
    useCases: ["Telecom Marketing Automation – India", "Banking Risk & Compliance – UK", "Logistics & Supply Chain – US, Retail"],
    useCaseDetails: {
      "Telecom Marketing Automation – India": `1. Client: Head of Customer Experience & Analytics, Gurugram
2. Operational Impact: Automated churn campaigns triggered within 10 seconds of signal detection; reduced manual campaign setup time by 80%.
3. Business/Financial Impact: Retained 50,000+ high-value subscribers; increased quarterly revenue by $12M.
4. Stakeholder Impact: Customers received timely offers; marketing and operations teams saved 1,200+ work hours/month.
5. Outcome Summary: 80% faster campaign execution; $12M incremental revenue; 50,000 customers retained; 100% adoption across marketing and analytics teams.`,
      "Banking Risk & Compliance – UK": `1. Client: Director of Risk & Compliance Analytics, London
2. Operational Impact: Automated monitoring of 20M+ transactions/month; alerts triggered in <10 seconds, cutting investigation lag by 60%.
3. Business/Financial Impact: Prevented potential fraud losses of £5M; improved compliance reporting speed by 40%.
4. Stakeholder Impact: Customers experienced quicker dispute resolution; regulators received accurate, real-time reports; compliance teams reduced workload.
5. Outcome Summary: 60% faster investigation cycles; £5M fraud prevented; 40% faster regulatory reporting; platform adopted bank-wide in under 2 months.`,
      "Logistics & Supply Chain – US, Retail": `1. Client: VP of Supply Chain Analytics, Bentonville, Arkansas
2. Operational Impact: Real-time alerts triggered for inventory shortfalls and delivery delays; reduced response time by 50%.
3. Business/Financial Impact: Avoided $7M in lost sales; improved on-time delivery by 18%.
4. Stakeholder Impact: Better product availability for millions of customers; smoother operations for warehouse and logistics staff.
5. Outcome Summary: 50% faster response; $7M prevented revenue loss; 18% increase in delivery reliability; cross-team adoption in <3 months.`,
    },
    icon: " "
  },
  {
    name: "End-to-End Data Governance",
    description: "Secure, compliant, and auditable by design.",
    features: [
      "Data Privacy Enforcement: Across ERP, CRM, and cloud systems.",
      "Automated Lineage Tracking: Full audit trails for regulators.",
      "Policy Compliance: 100% adherence across 50+ departments.",
      "Risk Reduction: Instant anomaly alerts prevent up to $5M in potential losses per quarter."
    ],
    useCases: ["Banking Compliance – UK", "Healthcare Data Governance – India", "Retail Data Privacy – US"],
    useCaseDetails: {
      "Banking Compliance – UK": `1. Client: Chief Compliance Officer, London
2. Operational Impact: Automated lineage tracking across 30+ internal systems; reduced manual compliance reporting by 70%.
3. Business/Financial Impact: Prevented potential regulatory fines of £4M; improved fraud detection accuracy by 15%.
4. Stakeholder Impact: Faster reporting for regulators; reduced workload for compliance teams; safer banking for customers.
5. Outcome Summary: 70% faster compliance reporting; £4M penalties avoided; 15% improvement in fraud detection; adoption across 50+ departments in 3 months.`,
      "Healthcare Data Governance – India": `1. Client: Director of Health Analytics, Chennai
2. Operational Impact: Enforced HIPAA-like data privacy across patient records in 10 hospitals; reduced data reconciliation errors by 50%.
3. Business/Financial Impact: Avoided potential $2.5M in compliance fines; improved operational efficiency in patient record management by 30%.
4. Stakeholder Impact: Patients experienced safer, more accurate record handling; staff had faster access to critical information; regulators received full audit logs on demand.
5. Outcome Summary: 50% fewer errors; $2.5M potential losses avoided; 30% faster operational workflows; adoption across 10 hospitals in 4 months.`,
      "Retail Data Privacy – US": `1. Client: VP of Data Governance, Minneapolis
2. Operational Impact: Unified customer, sales, and loyalty data across 1,900 stores; automated anomaly detection reduced privacy breaches by 60%.
3. Business/Financial Impact: Avoided potential $5M in penalties; strengthened customer trust and brand reputation.
4. Stakeholder Impact: Customers experienced secure transactions; legal and compliance teams spent 40% less time on manual audits.
5. Outcome Summary: 60% fewer breaches; $5M fines prevented; 40% lower manual audit effort; enterprise-wide adoption within 6 months.`,
    },
    icon: " "
  },
  {
    // ✅ FIXED LINE 299 — replaced curly quotes with straight quotes inside single-quoted string
    name: "Predictive & Prescriptive Insights",
    description: 'From "what happened" to "what should happen."',
    features: [
      "Forecast & Simulate: Predict performance and test alternative strategies.",
      "Prescriptive Recommendations: Reduce operational inefficiencies by 20-25%.",
      "Identify Growth Levers: Across departments and regions for actionable insights.",
      "Proactive Decision-Making: Empower teams to act before problems arise."
    ],
    useCases: ["FMCG Demand & Promotion Planning – India", "Airline Revenue Management – Middle East", "Energy Grid Optimization – Europe"],
    useCaseDetails: {
      "FMCG Demand & Promotion Planning – India": `1. Client: Director of Analytics, Mumbai
2. Operational Impact: Prescriptive insights optimized 1,500+ SKUs across 200+ distribution centers, reducing stockouts by 28% and excess inventory by 22%.
3. Business/Financial Impact: Boosted quarterly revenue by $18M; reduced operational costs by $3M.
4. Stakeholder Impact: Retail partners experienced improved product availability; supply chain teams reduced manual intervention by 35%.
5. Outcome Summary: 28% fewer stockouts; $18M revenue uplift; 35% faster operations; platform adopted across 200+ distribution centers in 3 months.`,
      "Airline Revenue Management – Middle East": `1. Client: Head of Revenue Analytics, Dubai
2. Operational Impact: Predictive models forecasted passenger demand and optimized pricing strategies across 3,500+ flights per month. Reduced revenue leakage by 15%.
3. Business/Financial Impact: Increased revenue by $22M quarterly; maximized load factor by 6%.
4. Stakeholder Impact: Customers benefited from fair dynamic pricing; finance and operations teams could plan resources proactively.
5. Outcome Summary: 15% higher revenue capture; $22M incremental revenue; 6% improvement in load factor; adoption across all routes within 2 months.`,
      "Energy Grid Optimization – Europe": `1. Client: Director of Smart Grid Analytics, Italy
2. Operational Impact: Forecasted demand for 5,000+ smart meters hourly; prescriptive scheduling reduced peak overload incidents by 20%.
3. Business/Financial Impact: Avoided €3M in grid penalties; optimized energy distribution saving €1.5M in operational costs.
4. Stakeholder Impact: Customers experienced fewer blackouts; energy operators planned maintenance efficiently; regulators received accurate load reporting.
5. Outcome Summary: 20% fewer peak incidents; €4.5M combined savings; 100% predictive model adoption in 6 months.`,
    },
    icon: " "
  },
  {
    name: "Cross-Functional Collaboration",
    description: "Break silos—align the entire organization.",
    features: [
      "Unified Dashboards: Connect finance, marketing, sales, and operations in real time.",
      "Accelerated Decision Cycles: Real-time sharing cuts decision latency by 50%.",
      "Seamless Team Collaboration: Work together on insights, KPIs, and strategies.",
      "Productivity Boost: Reduce redundant work by up to 30%."
    ],
    useCases: ["Retail Enterprise – India", "Healthcare Operations – US", "Banking & Risk Management – UK"],
    useCaseDetails: {
      "Retail Enterprise – India": `1. Client: Head of Business Intelligence, Mumbai
2. Operational Impact: Unified sales, marketing, and supply chain dashboards across 150+ stores; cross-team decisions reduced planning cycles by 45%.
3. Business/Financial Impact: Improved campaign ROI by 20%; avoided $3M in missed sales opportunities due to misaligned operations.
4. Stakeholder Impact: Store managers, marketing, and finance teams collaborated efficiently; customers saw better product availability.
5. Outcome Summary: 45% faster decision cycles; $3M revenue safeguarded; 30% reduction in redundant work; enterprise-wide adoption in 4 months.`,
      "Healthcare Operations – US": `1. Client: Director of Clinical Analytics, Rochester, MN
2. Operational Impact: Connected patient care, billing, and lab analytics; reduced data silos, enabling cross-department triage decisions 50% faster.
3. Business/Financial Impact: Improved patient throughput, reducing operational costs by $2.5M annually; optimized resource allocation.
4. Stakeholder Impact: Patients received faster treatment; staff spent less time reconciling data; administrators had real-time oversight.
5. Outcome Summary: 50% faster triage decisions; $2.5M cost savings; improved patient satisfaction by 15%; platform adopted across 20+ departments in 3 months.`,
      "Banking & Risk Management – UK": `1. Client: VP of Risk & Strategy, London
2. Operational Impact: Real-time dashboards connected compliance, finance, and operations teams; reduced reporting conflicts by 40%.
3. Business/Financial Impact: Early detection of anomalies prevented £4M in potential losses; improved KPI alignment across global teams.
4. Stakeholder Impact: Regulators received accurate, timely reports; employees experienced smoother workflows; executives made faster decisions.
5. Outcome Summary: 40% faster reporting; £4M losses avoided; 50% reduction in manual cross-team coordination; global adoption within 2 months.`,
    },
    icon: " "
  }
];