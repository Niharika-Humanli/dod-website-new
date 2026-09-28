import type { Metadata } from "next";
import solutionContent from "@/data/solutionContent.json";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions — AI Data Intelligence for Every Industry",
  description:
    "Data On Demand delivers AI-powered solutions for retail, fintech, logistics, manufacturing, and more. Turn data into decisions at scale.",
};

export default function SolutionsPage() {
  return <SolutionsClient content={solutionContent} />;
}