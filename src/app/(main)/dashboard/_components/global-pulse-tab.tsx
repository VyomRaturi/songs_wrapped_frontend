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
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  hike,
  topSongsByContinent,
  regionalTrends,
  topCountriesBySubmission,
  regionalArtistTrends,
  mostSubmittedSongsByRegion,
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

function MostLikedSongForEachRegion() {
  // Use topSongsByContinent mock data for now
  return (
    <Card className="bg-card h-72">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Most Liked Song For Each Region</CardTitle>
      </CardHeader>
      <CardContent className="h-full overflow-auto px-0">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-muted-foreground border-muted border-b">
              <th className="py-1 pl-6 font-medium">Songs</th>
              <th className="py-1 font-medium">Artists</th>
              <th className="py-1 font-medium">Likes</th>
              <th className="py-1 font-medium">Region</th>
            </tr>
          </thead>
          <tbody>
            {topSongsByContinent.flatMap((c) =>
              c.songs.map((song, i) => (
                <tr key={song.title + c.continent} className="border-muted border-b last:border-0">
                  <td className="py-1 pl-6 font-semibold">
                    {i + 1}. {song.title}
                  </td>
                  <td className="py-1">{song.artist}</td>
                  <td className="py-1">{song.submissions}</td>
                  <td className="py-1">{c.continent}</td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

function RegionalTrends() {
  const [mode, setMode] = useState<"genres" | "artists">("genres");
  const data = mode === "genres" ? regionalTrends : regionalArtistTrends;
  function getItems(region: (typeof data)[number]) {
    if ("genres" in region) return region.genres;
    if ("artists" in region) return region.artists;
    return [];
  }
  return (
    <Card className="bg-card h-72">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Regional Trends</CardTitle>
          <Select value={mode} onValueChange={(v) => setMode(v as "genres" | "artists")}>
            <SelectTrigger className="h-8 w-28 text-xs">
              <SelectValue>{mode === "genres" ? "Genres" : "Artists"}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="genres">Genres</SelectItem>
              <SelectItem value="artists">Artists</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex h-56 items-center">
        <div className="mt-[-20px] flex h-full w-full justify-between gap-8">
          {data.map((region) => (
            <div key={region.region} className="min-w-0 flex-1">
              <div className="mb-2 text-base font-semibold text-white">{region.region}</div>
              <div className="flex flex-col gap-3">
                {getItems(region).map((g: { name: string; value: number }) => (
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

function MoodSubmissionByRegion() {
  // Example genres/colors, you can adjust as needed
  const genres = [
    { label: "High energy", color: "#9F9FF8" },
    { label: "High valance", color: "#A7F8C1" },
    { label: "Low danceability", color: "#7DD3FC" },
  ];
  const [region, setRegion] = useState("Europe");
  // Use the pie chart data from mostSubmittedSongsByRegion or similar mock data
  const regionData = mostSubmittedSongsByRegion.find((r) => r.region === region) ?? mostSubmittedSongsByRegion[0];
  return (
    <Card className="bg-card flex h-72 flex-col">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Mood Submission By Region</CardTitle>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="ml-2 h-8 w-28 text-xs">
              <SelectValue>{region}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {mostSubmittedSongsByRegion.map((r) => (
                <SelectItem key={r.region} value={r.region}>
                  {r.region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mt-2 flex gap-2">
          {genres.map((g) => (
            <div key={g.label} className="flex items-center gap-2 text-xs">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: g.color }} />
              <span className="text-muted-foreground">{g.label}</span>
            </div>
          ))}
        </div>
      </CardHeader>

      <div className="flex flex-row items-center gap-4 px-6">
        <div className="flex flex-1 justify-center">
          <ResponsiveContainer width={140} height={140}>
            <PieChart>
              <Pie data={regionData.songs} dataKey="value" nameKey="title" innerRadius={45} outerRadius={65}>
                {regionData.songs.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}

export function GlobalPulseTab() {
  return (
    <div className="bg-background flex flex-col gap-4 p-6">
      <div className="grid grid-cols-12 gap-4">
        {/* First row: Hike Card and Heat Map Placeholder */}
        <div className="col-span-2">
          <HikeCard />
        </div>
        <div className="col-span-10">
          <HeatMapPlaceholder />
        </div>
        {/* Second row: Mood Submission and Regional Trends */}
        <div className="col-span-4">
          <MoodSubmissionByRegion />
        </div>
        <div className="col-span-8">
          <RegionalTrends />
        </div>
        {/* Third row: Top Countries by Submission and Most Liked Song For Each Region */}
        <div className="col-span-5">
          <TopCountriesBySubmission />
        </div>
        <div className="col-span-7">
          <MostLikedSongForEachRegion />
        </div>
      </div>
    </div>
  );
}
