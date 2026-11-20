"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "COGNITIO: Real-Time Code Analyzer",
    description: "Real-time code inspection extension & Gemini-powered logical bug scoring engine.",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/drex-sayan",
    tag: "MAY 2026",
    ctaLabel: "CODE_REPO"
  },
  {
    id: 2,
    title: "AI-Based Air Quality Monitoring",
    description: "Hyper-local IoT hardware sensor array with predictive machine learning forecasting.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/drex-sayan",
    tag: "APRIL 2026",
    ctaLabel: "CODE_REPO"
  },
  {
    id: 3,
    title: "Multi-Agent Workspace",
    description: "Multi-agent runtime with 3 synchronized memory tiers for agentic reasoning workflows.",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/drex-sayan",
    tag: "NOVEMBER 2026",
    ctaLabel: "CODE_REPO"
  },
  {
    id: 4,
    title: "Disaster Preparedness & Risk Fusion",
    description: "Risk fusion engine with geographical zone prediction and live geofenced alerts.",
    imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    href: "https://github.com/drex-sayan",
    tag: "OCTOBER 2026",
    ctaLabel: "CODE_REPO"
  },
];

export default function CardStackDemoPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-5xl p-8">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={2800}
          pauseOnHover
          showDots
        />
      </div>
    </div>
  );
}
