"use client";

import { useDashboardState } from "@/hooks/use-dashboard-state";

import { FanInsightsTab } from "./_components/fan-insights-tab";
import { GlobalPulseTab } from "./_components/global-pulse-tab";
import { OverviewTab } from "./_components/overview-tab";

export default function DashboardPage() {
  const { selectedTabId } = useDashboardState();

  if (selectedTabId === "overview") {
    return <OverviewTab />;
  }
  if (selectedTabId === "global-pulse") {
    return <GlobalPulseTab />;
  }
  if (selectedTabId === "fan-insights") {
    return <FanInsightsTab />;
  }

  // Placeholder for other tabs
  return (
    <div className="text-muted-foreground flex h-full w-full items-center justify-center text-2xl">
      {selectedTabId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} (Coming Soon)
    </div>
  );
}
