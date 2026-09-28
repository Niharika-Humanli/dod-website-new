export type FeatureItem = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  /** Optional per-bullet descriptions matching the `bullets` array */
  bulletDetails?: string[];
  image?: string;
  useCases?: string[];
  faqs?: { q: string; a: string }[];
  caseStudy?: string;
  implementation?: { step: string; detail?: string }[];
};

export const featuresData: FeatureItem[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "Harness machine learning for forecasting, anomaly detection, and decision optimization.",
    long:
      "DoD's AI Solutions bundle predictive models, explainability, and operational actions into production-ready tools. Use cases include demand forecasting, fraud detection, and prescriptive price optimisation. The platform supports model management, A/B experimentation, and human-in-the-loop workflows for rapid iteration.",
    bullets: [
      "Forecasting across products, regions and channels",
      "Real-time anomaly detection with alerting",
      "Prescriptive recommendations and scenario simulation",
      "Explainable AI for stakeholder trust",
      "Model monitoring & drift detection",
      "Automated feature engineering and data enrichment"
    ],
    bulletDetails: [
      "Scalable forecasting models that account for seasonality, promotions and product hierarchies.",
      "Continuous monitoring for anomalies with automated alerts and triage workflows.",
      "Actionable prescriptions and scenario simulations to test outcomes before execution.",
      "Built-in explainability to surface drivers behind model predictions for stakeholders.",
      "Detect model drift and set automated retraining triggers to maintain accuracy.",
      "Automatic feature pipelines that enrich data and reduce manual preprocessing."
    ],
    image: "/an.jpg",
    useCases: [
      "Demand forecasting for retail assortments",
      "Real-time fraud detection for payments",
      "Prescriptive pricing for promotions"
    ],
    faqs: [
      { q: "How quickly can we onboard models?", a: "Typical onboarding is 4–8 weeks depending on data readiness; early pilots can show value within 2–4 weeks." },
      { q: "Do you support custom model architectures?", a: "Yes — DoD supports custom models alongside our managed options; we provide deployment, monitoring, and rollout tooling." },
      { q: "What data quality is required?", a: "We need at least 3–12 months of cleaned transactional data depending on the use case; our ingestion tools include validation checks to speed this up." },
      { q: "Can we export model predictions?", a: "Yes — predictions can be exported to S3, pushed to downstream systems via connectors, or served through an API for real-time scoring." }
    ],
    caseStudy: "Reduced stockouts by 35% and improved fill rates across 120+ centers in Q2.",
    implementation: [
      { step: "Data ingestion", detail: "Connect ERP, POS and inventory feeds; validate schema and freshness." },
      { step: "Model configuration", detail: "Select forecast horizon and tuning parameters; map KPIs to business definitions." },
      { step: "Pilot & validate", detail: "Run a 4-week pilot with holdout testing and measure accuracy & business impact." },
      { step: "Rollout", detail: "Gradual rollout with monitoring and rollback flags." },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics",
    short: "Ask questions in plain English and receive instant charts and predictive trends.",
    long:
      "A single pane of glass for data discovery, transformation, and visualization. Connect to ERP, CRM and data lakes to create reusable dashboards and ad-hoc notebooks. Powerful SQL and no-code builders let analysts and business users collaborate on metrics and reports.",
    bullets: [
      "Self-serve reporting and dashboards",
      "Semantic layer & shared metrics",
      "Ad-hoc notebooks with reproducible queries",
      "Data lineage and freshness checks",
      "Prebuilt analytics templates",
      "Automatic anomaly detection in metrics"
    ],
    bulletDetails: [
      "Point-and-click dashboards that business users can consume and customize without SQL.",
      "A centralized metrics layer to ensure teams use consistent definitions across reports.",
      "Notebook support for analysts with reproducible queries and versioning.",
      "Automated lineage tracking and freshness alerts so you trust your metrics.",
      "Starter templates for common analytics use cases to accelerate time-to-insight.",
      "Metric-level anomaly detection to proactively surface data issues and business shifts."
    ],
    useCases: ["Executive dashboards", "Ad-hoc analytics for product & growth", "Automated reporting"],
    faqs: [
      { q: "Can business users edit dashboards?", a: "Yes — the platform supports role-based edit permissions and templates for non-technical users." },
      { q: "How do you handle data freshness?", a: "We provide scheduling and monitoring for pipeline freshness with alerts on lagging sources." },
      { q: "Do you support row-level security?", a: "Yes — policies can be applied in the semantic layer to enforce user-level access controls." }
    ],
    implementation: [
      { step: "Connect data sources", detail: "Map tables and metrics from finance, sales, and marketing feeds." },
      { step: "Define semantic layer", detail: "Create shared metrics and dimensions for consistent reporting." },
      { step: "Create dashboards", detail: "Build executive & operational dashboards with templates." },
    ],
  },
  {
    slug: "digital-innovation",
    title: "Digital Innovation",
    short: "Turn traditional processes into intelligent workflows.",
    long:
      "Automate manual processes by converting insights into orchestrated actions. Integrate with third-party systems to trigger campaigns, update inventory, or start workflows—closing the loop from insight to execution.",
    bullets: [
      "Workflow orchestration",
      "Low-code connectors to common systems",
      "Safe rollout & feature flags",
      "Monitoring and observability",
      "Human-in-the-loop approvals",
      "Retry & compensation patterns"
    ],
    bulletDetails: [
      "Orchestrate multi-step processes and handoffs across teams with retries and error handling.",
      "Quickly connect CRMs, ERPs and marketing platforms via low-code connectors.",
      "Deploy changes safely with feature flags and staged rollouts to minimize risk.",
      "End-to-end monitoring and observability for workflow health and performance.",
      "Include human approvals in the loop for high-risk steps or regulatory checks.",
      "Built-in retry and compensation patterns to ensure eventual consistency."
    ],
    useCases: ["Campaign automation", "Inventory reconciliation workflows"],
    faqs: [
      { q: "Do you provide connectors?", a: "We ship a growing catalog of connectors and support custom webhooks and API integrations." },
      { q: "Can we create custom actions?", a: "Yes — orchestration supports custom scripts, webhooks, and pre-built integrations for common platforms." },
      { q: "How do you handle failures?", a: "Workflows include retry logic, alerting, and manual remediation steps via runbooks." }
    ],
    implementation: [
      { step: "Identify workflows", detail: "Catalog manual processes to automate and define triggers." },
      { step: "Configure connectors", detail: "Install connectors for CRM, marketing, and order systems." },
      { step: "Test & iterate", detail: "Run end-to-end tests and deploy with monitoring." },
    ],
  },
  {
    slug: "strategy-intelligence",
    title: "Strategy Intelligence",
    short: "Simulate market scenarios and test business hypotheses.",
    long:
      "Run counterfactuals and scenario analyses to evaluate strategic decisions before execution. Compare alternate pricing, assortment, and channel strategies using historical data and forward simulations.",
    bullets: [
      "Scenario simulation engine",
      "What-if analysis",
      "Cohort-based impact evaluation",
      "Executive-ready summaries",
      "Sensitivity testing",
      "Benchmark comparisons"
    ],
    bulletDetails: [
      "Run large-scale scenario simulations to project outcomes under different assumptions.",
      "Interactive what-if tools to see the impact of pricing, assortment, or channel changes.",
      "Evaluate impact by cohorts to understand who benefits most from a strategy.",
      "Summarized outputs tailored for executive decision-making and board presentations.",
      "Sensitivity testing to understand which inputs most influence outcomes.",
      "Compare against industry benchmarks to contextualize simulation results."
    ],
    useCases: ["Pricing scenario evaluation", "Go-to-market planning"],
    faqs: [
      { q: "How are scenarios validated?", a: "We use historical backtests and holdout experiments; simulation assumptions are documented for governance." },
      { q: "Can we adjust assumptions post-run?", a: "Yes — scenario parameters are editable and runs can be re-executed to compare outcomes." },
      { q: "Do you support Monte Carlo simulations?", a: "Yes — probabilistic simulations are available for risk-sensitive decisions." }
    ],
    implementation: [
      { step: "Gather historical data", detail: "Collect past performance and campaign metadata for simulation." },
      { step: "Define scenarios", detail: "Specify alternative market, price, and assortment scenarios." },
      { step: "Run simulations", detail: "Execute forward simulations and review expected impacts." },
    ],
  },
  {
    slug: "operations-optimization",
    title: "Operations Optimization",
    short: "Monitor operational KPIs and prevent performance drifts.",
    long:
      "Optimize fulfillment, routing, and resource allocation with near-real-time signals. The platform detects root causes, recommends fixes, and measures post-action impact to close the improvement loop.",
    bullets: [
      "Real-time KPI monitoring",
      "Root-cause analysis tools",
      "Prescriptive actions for ops teams",
      "Operational playbooks and runbooks",
      "Auto-remediation hooks",
      "Edge-device telemetry support"
    ],
    bulletDetails: [
      "Live dashboards that surface KPIs with latency targets for operational visibility.",
      "Automated root-cause tooling to surface probable drivers behind KPI shifts.",
      "Recommended prescriptive actions operators can execute directly from the UI.",
      "Prebuilt playbooks and runbooks for common incidents and recovery steps.",
      "Auto-remediation hooks to run corrective scripts when known issues occur.",
      "Support for ingesting edge-device telemetry for low-level operational signals."
    ],
    useCases: ["Fulfillment optimization", "Dispatch routing improvements"],
    faqs: [
      { q: "Can we integrate with WMS/TMS?", a: "Yes — we integrate with common WMS/TMS providers and surface recommendations directly in operator dashboards." },
      { q: "What latency can we expect?", a: "Typical near-real-time latency is under 30 seconds for streaming telemetry; batch analyses follow configured windows." },
      { q: "Do you support mobile operator alerts?", a: "Yes — alerts can be routed to mobile apps, SMS, or integrated operator dashboards." }
    ],
    implementation: [
      { step: "Instrument operations", detail: "Connect sensors, WMS, and telemetry for live KPIs." },
      { step: "Configure playbooks", detail: "Define automated playbooks for common operational incidents." },
      { step: "Monitor & improve", detail: "Run post-action analysis and refine rules." },
    ],
  },
  {
    slug: "performance-management",
    title: "Performance Management",
    short: "Create live dashboards that measure what matters most.",
    long:
      "Align teams around a single set of KPIs with scorecards, alerts, and drilldowns. Link outcomes to revenue and cost impact so leaders can prioritize high-value initiatives.",
    bullets: [
      "Scorecards & targets",
      "Drilldown exploration",
      "KPI ownership and alerts",
      "Impact tracking",
      "Custom timelines & snapshots",
      "Cross-team playbooks"
    ],
    bulletDetails: [
      "Scorecards tied to targets so teams can measure progress against goals.",
      "Drilldown capabilities to explore underlying data and root causes.",
      "Assign KPI owners and get notifications when targets slip or improve.",
      "Track impact of initiatives by linking actions to observed KPI changes.",
      "Capture custom snapshots and timelines for retrospective comparisons.",
      "Cross-team playbooks to operationalize improvements uncovered in scorecards."
    ],
    useCases: ["Quarterly business reviews", "Performance scorecards"],
    faqs: [
      { q: "How do you attribute impact?", a: "We link actions to observed KPI deltas using causal attribution methods and experiment tracking." },
      { q: "Can we connect finance data for ROI?", a: "Yes — ROI models can be linked to general ledger or revenue systems for dollarized impact." },
      { q: "Do you provide automated alerts?", a: "Yes — set thresholds on scorecards and receive notifications when KPIs drift." }
    ],
    implementation: [
      { step: "Set targets", detail: "Agree on KPIs and targets with stakeholders." },
      { step: "Build scorecards", detail: "Create dashboards with ownership and alerting." },
      { step: "Operationalize", detail: "Embed scorecards into meeting cadences and action trackers." },
    ],
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    short: "Built with enterprise-grade governance and audit trails.",
    long:
      "Data access controls, automated lineage, and retention policies protect sensitive information while allowing analysts to do their work. Compliance reports can be generated on demand for audits and regulators.",
    bullets: [
      "Role-based access control",
      "Data lineage and auditing",
      "Encryption at rest and in transit",
      "Compliance reporting templates",
      "Policy-as-code enforcement",
      "Fine-grained masking rules"
    ],
    bulletDetails: [
      "Fine-grained RBAC to control who can view, query, or export sensitive data.",
      "Automated lineage and audit trails for every dataset and transformation.",
      "Industry-standard encryption practices for data in transit and at rest.",
      "Prebuilt templates that simplify common compliance reporting workflows.",
      "Policy-as-code to enforce governance consistently across environments.",
      "Field-level masking and tokenization rules for sensitive attributes."
    ],
    useCases: ["Regulatory audits", "Data access reviews"],
    image: "/ri.png",
    caseStudy: "Passed SOC2 readiness audit and automated monthly compliance reports, reducing manual audit preparation hours by 70%.",
    faqs: [
      { q: "Is data encrypted?", a: "All data is encrypted in transit and at rest; role-based access controls are enforced." },
      { q: "How do you manage keys?", a: "We support customer-managed keys (CMK) for encryption where required by policy." },
      { q: "Can we audit access?", a: "Yes — full audit logs are available for review and export to SIEMs." },
      { q: "Do you support data masking and tokenization?", a: "Yes — sensitive fields can be masked or tokenized at ingest and when queried, satisfying many compliance requirements." },
      { q: "How do you handle data residency requirements?", a: "Deployments can be provisioned in region-specific accounts to meet residency and sovereignty policies; exports are configurable." }
    ],
    implementation: [
      { step: "Define policies", detail: "Set retention, masking, and access policies." },
      { step: "Configure roles", detail: "Map roles to least-privilege access controls." },
      { step: "Audit & report", detail: "Schedule automated compliance reports and audits." },
      { step: "Continuous monitoring", detail: "Deploy automated checks for drift, policy violations, and retention adherence with alerting." },
    ],
  },
  {
    slug: "cloud-scale",
    title: "Cloud Scale",
    short: "Deployed across public clouds with elastic scaling.",
    long:
      "Architected to scale from a single team to enterprise usage. Supports multi-cloud deployments, autoscaling pipelines, and cost-aware compute policies to keep TCO predictable.",
    bullets: [
      "Autoscaling compute & storage",
      "Multi-cloud compatibility",
      "Cost-aware scheduling",
      "SLA-driven operations",
      "Data locality controls",
      "Predictive scaling based on traffic patterns"
    ],
    bulletDetails: [
      "Automatic scaling rules that increase capacity during peak and shrink during idle windows.",
      "Deployable across major cloud providers with consistent operational tooling.",
      "Job scheduling that optimizes for cost using spot instances and windowing strategies.",
      "Operational SLAs and runbooks to maintain availability and reliability.",
      "Controls to keep data and compute within required localities.",
      "Predictive scaling driven by historical and forecasted traffic patterns."
    ],
    useCases: ["Large-scale batch processing", "Multi-tenant deployments"],
    image: "/pre.png",
    caseStudy: "Scaled ETL pipelines to process 100M+ daily events with 99.99% uptime while reducing compute spend by ~40% through cost-aware scheduling.",
    faqs: [
      { q: "Can we host in our cloud account?", a: "Yes — we support deployment into customer cloud accounts for data residency and compliance." },
      { q: "What about multi-region support?", a: "We support multi-region deployment patterns for low-latency and redundancy." },
      { q: "How is billing handled?", a: "We provide transparent cost breakdowns and can integrate with cloud billing for chargeback." },
      { q: "Can you optimize for cost with autoscaling policies?", a: "Yes — cost-aware autoscaling and scheduling policies help optimize spend, including policies for spot/interruptible instances where appropriate." },
      { q: "Do you support hybrid or on-prem connectors?", a: "We support secure connectors and private networking options to integrate with on-prem systems and hybrid clouds." }
    ],
    implementation: [
      { step: "Plan architecture", detail: "Choose VPC, storage, and networking with compliance in mind." },
      { step: "Provision resources", detail: "Set up buckets, clusters, and IAM in the customer account." },
      { step: "Scale and monitor", detail: "Enable autoscaling policies and cost alerts." },
      { step: "Cost optimization", detail: "Apply spot/interruptible instances and scheduling windows to reduce baseline spend while maintaining SLAs." },
    ],
  },
  {
    slug: "growth-analytics",
    title: "Growth Analytics",
    short: "Discover untapped opportunities by connecting sales and customer data.",
    long:
      "Identify growth levers across acquisition, retention, and monetization. Use attribution models, funnel analysis, and experiment tracking to accelerate sustainable growth.",
    bullets: [
      "Attribution & funnel analysis",
      "Experimentation & A/B testing",
      "Cohort & LTV modeling",
      "Playbooks for growth teams",
      "Ad spend optimization",
      "Channel mix modeling"
    ],
    bulletDetails: [
      "Unified attribution and funnel tools to connect marketing touchpoints to outcomes.",
      "Experimentation pipelines with tracking and statistical analysis built-in.",
      "Cohort-level lifetime value models to prioritize retention initiatives.",
      "Actionable playbooks to translate insights into repeatable growth experiments.",
      "Integrated ad spend optimization to shift budgets toward high-performing channels.",
      "Channel mix models to evaluate cross-channel effects and budget allocation."
    ],
    useCases: ["Experimentation pipelines", "Cohort LTV analysis"],
    image: "/aip.jpg",
    caseStudy: "Accelerated experiment velocity and improved conversion by ~8% by centralizing attribution and shortening measurement cycles.",
    faqs: [
      { q: "Do you support experimentation?", a: "Yes — integrated experiment tracking and measurement is included." },
      { q: "How are experiment metrics defined?", a: "Metrics are defined in the semantic layer and tracked consistently across experiments." },
      { q: "Can we run multi-armed bandits?", a: "Yes — advanced experimentation methods including multi-armed bandits are supported." },
      { q: "How quickly can experiments be instrumented?", a: "With templates and SDKs, basic experiments can be instrumented within days; complex funnels take longer depending on event coverage." },
      { q: "Does Growth Analytics integrate with ad and marketing platforms?", a: "Yes — we provide connectors to common ad platforms and marketing systems to attribute performance and optimize spend." }
    ],
    implementation: [
      { step: "Instrument experiments", detail: "Configure tracking and metrics for experiments." },
      { step: "Run tests", detail: "Launch A/B tests and monitor treatment effects." },
      { step: "Measure & iterate", detail: "Analyze results and implement winning variations." },
      { step: "Operationalize insights", detail: "Embed winning treatments into pipelines and dashboards for continuous optimization." },
    ],
  },
];

export default featuresData;
