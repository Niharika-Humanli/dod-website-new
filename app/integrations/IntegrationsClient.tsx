"use client";

import { useState } from "react";
import { Database, Cloud, Plug } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const logoMap: Record<string, string> = {
  redshift:
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  snowflake:
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg",
  bigquery:
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  postgres:
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  postgresql:
    "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  mongodb:
    "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  mysql:
    "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  tableau:
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
  databricks:
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png",
  redis:
    "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg",
  oracle:
    "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  "amazon ads":
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  aws:
    "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "microsoft advertising":
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "microsoft dynamics 365 crm":
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "microsoft dynamics 365 finance adls":
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "google ads":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google analytics":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google analytics 4":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google analytics 360":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google campaign manager 360":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google display & video 360":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google display and video 360":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google calendar":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google sheets":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "google cloud":
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "facebook ads":
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
  "facebook pages":
    "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg",
  "instagram business":
    "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
  "linkedin ad analytics":
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  "linkedin company pages":
    "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  "tiktok ads":
    "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
  "twitter ads":
    "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
  "twitter organic":
    "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
  "pinterest ads":
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
  "reddit ads":
    "https://upload.wikimedia.org/wikipedia/en/b/bd/Reddit_Logo_Icon.svg",
  shopify:
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  stripe:
    "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  paypal:
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  slack:
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  docker:
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  kubernetes:
    "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  salesforce:
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  "salesforce crm":
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  "salesforce commerce cloud":
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  "salesforce marketing cloud":
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  hubspot:
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
  "zendesk support":
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
  "zendesk chat":
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
  "zendesk sell":
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
  "zendesk sunshine":
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg",
  jira:
    "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg",
  trello:
    "https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg",
  asana:
    "https://upload.wikimedia.org/wikipedia/commons/2/27/Asana_logo_%282021%29.svg",
  notion:
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  github:
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  mailchimp:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Mailchimp_Logo-Horizontal_Black.png/320px-Mailchimp_Logo-Horizontal_Black.png",
  mixpanel:
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Mixpanel_logo.svg",
  amplitude:
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Amplitude_logo.svg",
  xero:
    "https://upload.wikimedia.org/wikipedia/en/6/6d/Xero_software_logo.svg",
  quickbooks:
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/QuickBooks_logo.svg",
  intercom:
    "https://upload.wikimedia.org/wikipedia/commons/9/97/Intercom_logo.svg",
  okta:
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Okta_logo.svg",
  pipedrive:
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Pipedrive_logo.svg",
  airtable:
    "https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg",
  discord:
    "https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg",
  "oracle fusion crm":
    "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  "oracle fusion fscm (erp & scm)":
    "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  "sap concur":
    "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "sap business bydesign":
    "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "workday hcm":
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Workday_logo.svg",
  "workday raas":
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Workday_logo.svg",
  servicenow:
    "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg",
  marketo:
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Marketo_Logo.png",
  klaviyo:
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Klaviyo_logo.svg",
  typeform:
    "https://upload.wikimedia.org/wikipedia/commons/f/f3/Typeform_logo.png",
  surveymonkey:
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/SurveyMonkey_Logo.png",
};

const fallbackColors = [
  "#2563eb",
  "#7c3aed",
  "#db2777",
  "#d97706",
  "#16a34a",
  "#0891b2",
  "#dc2626",
  "#9333ea",
  "#0284c7",
  "#65a30d",
  "#ea580c",
  "#4f46e5",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function getFallbackColor(name: string) {
  const index =
    Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0) %
    fallbackColors.length;

  return fallbackColors[index];
}

function getLogoUrl(name: string) {
  return logoMap[name.toLowerCase().trim()] || null;
}

function IntegrationLogo({ name }: { name: string }) {
  const [errored, setErrored] = useState(false);
  const url = getLogoUrl(name);

  if (url && !errored) {
    return (
      <img
        src={url}
        alt={name}
        className="mx-auto mb-3 h-10 w-auto max-w-[80px] object-contain"
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <div
      className="h-12 w-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm"
      style={{ background: getFallbackColor(name) }}
    >
      {getInitials(name)}
    </div>
  );
}

const integrationCategories = [
  {
    name: "Databases",
    icon: Database,
    integrations: [
      "Redshift",
      "Snowflake",
      "BigQuery",
      "MotherDuck",
      "Postgres",
      "MySQL",
      "AlloyDB",
      "Supabase",
      "dbt Cloud",
      "Snowplow",
      "Tableau",
    ],
  },
  {
    name: "Cloud Platforms",
    icon: Cloud,
    integrations: [
      "Amazon Ads",
      "Microsoft Advertising",
      "Google Ads",
      "Google Analytics",
      "Google Analytics 4",
      "Google Analytics 360",
      "Google Campaign Manager 360",
      "Google Display & Video 360",
      "Google Calendar",
      "Google Sheets",
      "Facebook Ads",
      "Facebook Pages",
      "Instagram Business",
      "LinkedIn Ad Analytics",
      "LinkedIn Company Pages",
      "TikTok Ads",
      "Twitter Ads",
      "Twitter Organic",
      "Pinterest Ads",
      "Reddit Ads",
      "The Trade Desk",
      "Taboola",
      "Outbrain",
      "Salesforce CRM",
      "Salesforce Commerce Cloud",
      "Salesforce Marketing Cloud",
      "ServiceNow",
      "Workday HCM",
      "Workday RaaS",
      "Oracle Fusion CRM",
      "Oracle Fusion FSCM (ERP & SCM)",
      "Microsoft Dynamics 365 CRM",
      "Microsoft Dynamics 365 Finance ADLS",
      "SAP Concur",
      "SAP Business ByDesign",
      "Anaplan",
      "NetSuite SuiteAnalytics",
      "Coupa",
      "DEAR",
      "Xero",
      "Sage Intacct",
      "Zoho Books",
      "Zuora",
      "Brex",
      "Chargebee",
      "Recurly",
      "Stripe",
      "Square",
      "Paypal",
      "GoCardless",
      "ShipStation",
      "EasyPost",
      "ChannelAdvisor",
      "Shopify",
      "WooCommerce",
      "Lightspeed Retail",
      "SkuVault",
      "Samsara",
      "Talkdesk",
      "Zendesk Sunshine",
      "Zendesk Support",
      "Zendesk Chat",
      "Zendesk Sell",
      "Zoho CRM",
      "Zoho Desk",
      "RingCentral",
    ],
  },
  {
    name: "Business Tools",
    icon: Plug,
    integrations: [
      "AdRoll",
      "Airtable",
      "Amplitude",
      "ActiveCampaign",
      "Ada",
      "Adjust",
      "Alchemer",
      "Asana",
      "Birdeye",
      "Branch",
      "Braze",
      "Brevo",
      "Braintree",
      "Campaign Monitor",
      "Chameleon",
      "ChargeDesk",
      "Chorus",
      "Churnkey",
      "ChurnZero",
      "Clari",
      "ClickUp",
      "Close",
      "Crossbeam",
      "Customer.io",
      "Delighted",
      "Dixa",
      "Docebo",
      "Drift",
      "Drip",
      "Eloqua",
      "Freshdesk",
      "Freshchat",
      "FreshTeam",
      "Front",
      "FullStory",
      "Gainsight Customer Success",
      "Gladly",
      "Gong",
      "Gorgias",
      "Greenhouse",
      "Harvest",
      "Heap",
      "Height",
      "HiBob",
      "Intercom",
      "Ironclad",
      "Jira",
      "Klaviyo",
      "Khoros Care",
      "Kissmetrics",
      "Kustomer",
      "Lattice",
      "Lever",
      "LiveChat",
      "Mailchimp",
      "Mailgun",
      "Marketo",
      "Mavenlink",
      "Medallia",
      "Mixpanel",
      "Notion",
      "Okta",
      "Optimizely",
      "Orbit",
      "Pendo",
      "Pipedrive",
      "PostHog",
      "Productboard",
      "Qualaroo",
      "Qualtrics",
      "QuickBooks",
      "Recharge",
      "RetailNext",
      "Retently",
      "Rocketlane",
      "Rootly",
      "Opsgenie",
      "Salesloft",
      "Sailthru",
      "Split",
      "Subscript",
      "Survicate",
      "SurveyMonkey",
      "Teamwork",
      "Tempo",
      "Trello",
      "Typeform",
      "UserVoice",
      "When I Work",
      "Workable",
      "Wrike",
      "Zoho Campaigns",
    ],
  },
];

export default function IntegrationsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>(
    Object.fromEntries(integrationCategories.map((category) => [category.name, 11]))
  );

  const query = searchQuery.trim().toLowerCase();

  const filteredCategories = integrationCategories
    .map((category) => ({
      ...category,
      integrations: category.integrations.filter((integration) =>
        integration.toLowerCase().includes(query)
      ),
    }))
    .filter(
      (category) => query === "" || category.integrations.length > 0
    );

  const loadMore = (categoryName: string, total: number) => {
    setVisibleCounts((previous) => ({
      ...previous,
      [categoryName]: total,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Integrations</h1>

            <p className="text-xl text-muted-foreground mb-8">
              Bring your data from anywhere and build insights across them
            </p>

            <div className="max-w-md mx-auto">
              <Input
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container space-y-16">
          {query !== "" && filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No integrations found for &ldquo;{searchQuery}&rdquo;
              </p>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const total = category.integrations.length;
              const visible = visibleCounts[category.name] ?? 11;
              const itemsToShow = category.integrations.slice(0, visible);
              const hasMore = total > visible;

              return (
                <div key={category.name}>
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">{category.name}</h2>
                  </div>

                  <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {itemsToShow.map((integration, index) => (
                      <Card
                        key={`${integration}-${index}`}
                        className="hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <CardContent className="p-6 text-center">
                          <IntegrationLogo name={integration} />
                          <p className="font-medium text-sm">
                            {integration}
                          </p>
                        </CardContent>
                      </Card>
                    ))}

                    {hasMore && (
                      <Card
                        className="hover:shadow-md transition-shadow cursor-pointer flex items-center justify-center"
                        onClick={() => loadMore(category.name, total)}
                      >
                        <CardContent className="p-6 text-center">
                          <div className="flex flex-col items-center justify-center">
                            <div className="text-2xl font-bold">→</div>
                            <p className="mt-2 text-sm text-muted-foreground">
                              Show more
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Request CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t see your integration?
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            We&apos;re constantly adding new integrations. Let us know what
            you need.
          </p>

          <Button asChild size="lg">
            <a href="/contact">Request an integration</a>
          </Button>
        </div>
      </section>
    </>
  );
}