import { create } from "zustand";

// Mock data for episodes and dashboard tabs
const mockEpisodes = [
  { id: "ep1", name: "The Hike", week: "5/19/25" },
  { id: "ep2", name: "3 AM", week: "5/12/25" },
  { id: "ep3", name: "Fashion Gala", week: "5/5/25" },
];

const dashboardTabs = [
  { id: "overview", label: "Overview" },
  { id: "global-pulse", label: "Global Pulse" },
  { id: "fan-insights", label: "Fan Insights" },
  { id: "breakout-artists", label: "Breakout Artists" },
  { id: "season-to-date", label: "Season-To-Date" },
];

export type Episode = (typeof mockEpisodes)[number];
export type DashboardTab = (typeof dashboardTabs)[number];

interface DashboardState {
  selectedEpisodeId: string;
  setSelectedEpisodeId: (id: string) => void;
  selectedTabId: string;
  setSelectedTabId: (id: string) => void;
  episodes: Episode[];
  dashboardTabs: DashboardTab[];
}

export const useDashboardState = create<DashboardState>((set) => ({
  selectedEpisodeId: mockEpisodes[0].id,
  setSelectedEpisodeId: (id) => set({ selectedEpisodeId: id }),
  selectedTabId: dashboardTabs[0].id,
  setSelectedTabId: (id) => set({ selectedTabId: id }),
  episodes: mockEpisodes,
  dashboardTabs,
}));
