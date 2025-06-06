"use client";

import { useState } from "react";

import Image from "next/image";

import {
  ResponsiveContainer,
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  hike,
  topSongsByContinent,
  regionalTrends,
  topCountriesBySubmission,
  topGlobalSongsThisWeek,
  topGlobalSongsSeason,
} from "./global-pulse-mock-data";

function HikeCard() {
  return (
    <Card className="bg-card flex h-72 flex-col">
      <CardHeader className="items-center">
        <CardTitle className="text-primary text-lg font-semibold">{hike.title}</CardTitle>
        <CardDescription className="text-muted-foreground text-xs">{hike.week}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Image
          src="/sq.png"
          width={100}
          height={100}
          alt="The Hike"
          className="h-44 w-full rounded-lg object-contain"
        />
      </CardContent>
    </Card>
  );
}

function HeatMapPlaceholder() {
  const [tab, setTab] = useState("fan");
  return (
    <Card className="bg-card col-span-7 flex h-72 flex-col">
      <CardHeader className="flex-row items-center gap-4 pt-4 pb-2">
        <Tabs value={tab} onValueChange={setTab} className="w-auto">
          <TabsList className="gap-2 bg-transparent p-0">
            <TabsTrigger value="fan" className="text-sm font-semibold text-green-400">
              Heat Map Of Fan Submission
            </TabsTrigger>
            <span className="mx-2 text-white/60">•</span>
            <TabsTrigger value="artist" className="text-sm font-semibold text-white">
              Artists Heat Map
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center">
        <span className="text-muted-foreground">[Heat Map Placeholder]</span>
      </CardContent>
    </Card>
  );
}

function TopSongsByContinent() {
  return (
    <Card className="bg-card h-72">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Top Songs By Continent</CardTitle>
      </CardHeader>
      <CardContent>
        {topSongsByContinent.map((c) => (
          <div key={c.continent}>
            <div className="mb-1 text-sm font-semibold">{c.continent}</div>
            <ol className="text-muted-foreground space-y-1 text-sm">
              {c.songs.map((song, i) => (
                <li key={song.title} className="flex items-center justify-between">
                  <span>
                    {i + 1}. {song.title}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {song.artist} ({song.submissions})
                  </span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function RegionalTrends() {
  // Use the regionalTrends mock data
  return (
    <Card className="bg-card h-72">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Regional Trends</CardTitle>
      </CardHeader>
      <CardContent className="flex h-56 items-center">
        <div className="flex h-full w-full justify-between gap-8">
          {regionalTrends.map((region) => (
            <div key={region.region} className="min-w-0 flex-1">
              <div className="mb-2 text-base font-semibold text-white">{region.region}</div>
              <div className="flex flex-col gap-3">
                {region.genres.map((g) => (
                  <div key={g.name} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">{g.name}</span>
                      <span className="text-sm font-semibold text-white">{g.value}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded bg-white/20">
                      <div
                        className="h-2 rounded bg-fuchsia-400"
                        style={{ width: `${g.value > 35 ? 35 : g.value * 2.5}%`, minWidth: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function TopCountriesBySubmission() {
  return (
    <Card className="bg-card h-72">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Top Countries by Submission</CardTitle>
      </CardHeader>
      <CardContent className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <ReBarChart data={topCountriesBySubmission}>
            <XAxis dataKey="country" axisLine={false} tickLine={false} stroke="#a1a7bb" />
            <YAxis axisLine={false} tickLine={false} stroke="#a1a7bb" />
            <Bar dataKey="value" fill="#9F9FF8" radius={5} />
          </ReBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

function TopGlobalSongs() {
  return (
    <Card className="bg-card flex h-72 flex-col">
      <CardHeader className="flex-row items-center justify-between pt-4 pb-2">
        <CardTitle className="text-base font-semibold">Top global songs</CardTitle>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#22d3ee" }} />
            Pop
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#3b82f6" }} />
            Rock
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#a78bfa" }} />
            Hip Hop
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#f472b6" }} />
            Country
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-row items-center justify-evenly">
        <div className="flex flex-col items-center">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie data={topGlobalSongsThisWeek} dataKey="value" nameKey="name" innerRadius={40} outerRadius={60}>
                {topGlobalSongsThisWeek.map((entry, index) => (
                  <Cell key={`cell-thisweek-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <span className="text-muted-foreground mt-2 text-xs">This Week</span>
        </div>
        <div className="flex flex-col items-center">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie data={topGlobalSongsSeason} dataKey="value" nameKey="name" innerRadius={40} outerRadius={60}>
                {topGlobalSongsSeason.map((entry, index) => (
                  <Cell key={`cell-season-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <span className="text-muted-foreground mt-2 text-xs">Season To Date</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function GlobalPulseTab() {
  return (
    <div className="bg-background flex flex-col gap-4 p-6">
      <div className="grid grid-cols-12 gap-4">
        {/* Top row: HikeCard and HeatMap */}
        <div className="col-span-2">
          <HikeCard />
        </div>
        <div className="col-span-7">
          <HeatMapPlaceholder />
        </div>
        {/* Empty for spacing/alignment */}
        <div className="col-span-3" />

        {/* Second row: Top Songs By Continent and Regional Trends */}
        <div className="col-span-4">
          <TopSongsByContinent />
        </div>
        <div className="col-span-8">
          <RegionalTrends />
        </div>

        {/* Third row: Top Countries by Submission and Top Global Songs */}
        <div className="col-span-7">
          <TopCountriesBySubmission />
        </div>
        <div className="col-span-5">
          <TopGlobalSongs />
        </div>
      </div>
    </div>
  );
}
