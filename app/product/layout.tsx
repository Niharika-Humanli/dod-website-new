import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data on Demand — AI Analytics Tool for CXOs | Humanli",
  description: "Data on Demand (DoD) by Humanli connects to your ERP and delivers real-time forecasts, simulations, and insights through a simple conversation — no code required.",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}