"use client";

import { useDashboardState } from "@/hooks/use-dashboard-state";

import { OverviewTab } from "./_components/overview-tab";

export default function DashboardPage() {
  const { selectedTabId } = useDashboardState();

  if (selectedTabId === "overview") {
    return <OverviewTab />;
  }

  // Placeholder for other tabs
  return (
    <div className="text-muted-foreground flex h-full w-full items-center justify-center text-2xl">
      {selectedTabId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} (Coming Soon)
    </div>
  );
}
