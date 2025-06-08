"use client";

import { useDashboardState } from "@/hooks/use-dashboard-state";

import { BreakoutArtistsTab } from "./_components/breakout-artists-tab";
import { FanInsightsTab } from "./_components/fan-insights-tab";
import { GlobalPulseTab } from "./_components/global-pulse-tab";
import { OverviewTab } from "./_components/overview-tab";
import { SeasonToDateTab } from "./_components/season-to-date-tab";

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
  if (selectedTabId === "season-to-date") {
    return <SeasonToDateTab />;
  }
  if (selectedTabId === "breakout-artists") {
    return <BreakoutArtistsTab />;
  }

  // Placeholder for other tabs
  return (
    <div className="text-muted-foreground flex h-full w-full items-center justify-center text-2xl">
      {selectedTabId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} (Coming Soon)
    </div>
  );
}
