# Dashboard Overview Build Plan

## Objective

Build the "Overview" dashboard screen as shown in the provided UI image, using shadcn/ui components, with a dark theme and modular structure. Ensure the selected episode's ID is globally available for all dashboard tabs. Use mock data for now.

---

## Implementation Plan

### 1. Theme & Global Styles

- Update the global CSS to match the dark theme and accent colors from the UI image (background, card, text, accent, etc.).

### 2. Sidebar

- Refactor the sidebar to:
  - List Dashboard tabs under "Dashboards" (Overview, Global Pulse, Fan Insights, etc.).
  - List all episodes under "Episode" (fetched from mock API for now).
  - By default, select the first dashboard and first episode.
  - On episode/dashboard change, update the selected state and propagate the selected episode id to all dashboard tabs.

### 3. Dashboard Layout

- Create a main dashboard layout component that:
  - Receives the selected episode id and dashboard tab.
  - Renders the correct dashboard tab content.

### 4. Overview Tab Components

Break down the UI into the following components:

- **Story Snapshot Cards** (Fans Played, Min. of music shared, etc.)
- **The Hike Card** (with image, week, and description)
- **Top Story Lines** (list of story lines)
- **Top 5 Songs** (list)
- **Mood Averages Chart** (bar chart, use shadcn/ui charts)
- **Genre Breakdown** (donut chart, use shadcn/ui charts)
- **Songs Submission Line Chart** (use shadcn/ui charts)

### 5. State Management

- Use Zustand or React context to manage the selected episode and dashboard tab globally.

### 6. Mock Data

- Use mock data for episodes, dashboard stats, and chart data.

---

## Next Steps

1. Update global CSS for theme colors.
2. Refactor Sidebar for new structure and selection logic.
3. Set up state management for selected episode/tab.
4. Scaffold the Overview tab with the above components using mock data.

---

**Notes:**

- Use shadcn/ui components for all UI elements and charts.
- Ensure the code is modular, concise, and follows project conventions.
- Selected episode id must be accessible to all dashboard tabs for API calls.
