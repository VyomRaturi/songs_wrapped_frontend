"use client";

import Image from "next/image";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Cell,
  Line,
  LineChart,
  Tooltip,
} from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data
const storySnapshot = [
  { label: "Fans Played", value: 7265, change: "+11.0%", positive: true },
  { label: "Min. of music shared", value: 3671, change: "-3.40%", positive: false },
  { label: "Artists Shared", value: 156, change: "+15.03%", positive: true },
  { label: "Total Views", value: 2318, change: "+6.08%", positive: true },
  { label: "Unique Songs", value: 2318, change: "+6.08%", positive: true },
];

const hike = {
  title: "The Hike",
  week: "Week of 5/19/25",
  image: "/hike-placeholder.png", // Replace with actual image if available
  description:
    "Fans brought energetic pop vibes to the outdoors, with The Weeknd and Pharrell setting the rhythm for sun-soaked trails and scenic adventures.",
};

const topStoryLines = [
  "Fans brought energetic pop vibes to the outdoors, with The Weeknd and Pharrell setting the rhythm for sun-soaked trails and scenic adventures.",
  "Breezy walks met throwback tracks as TLC and Arctic Monkeys fueled a wave of reflective hikes. Every view came with a memory.",
  "From basecamp to peak, fans curated the perfect playlist for elevation. The Weeknd's emotional highs matched every breathtaking overlook.",
];

const topSongs = [
  { title: "As it was", artist: "Harry styles" },
  { title: "Tell me why", artist: "Taylor swift" },
  { title: "Love story", artist: "Taylor swift" },
  { title: "Looser", artist: "Charlie puth" },
  { title: "Attention", artist: "Charlie puth" },
];

const moodAverages = [
  { mood: "Valence", value: 20000 },
  { mood: "Energy", value: 30000 },
  { mood: "Danceability", value: 25000 },
  { mood: "Karaoke", value: 18000 },
  { mood: "Vibing", value: 12000 },
  { mood: "Other", value: 8000 },
];

const genreBreakdown = [
  { name: "Pop", value: 52.1, color: "#22d3ee" },
  { name: "Rock", value: 22.8, color: "#3b82f6" },
  { name: "Hip-Hop", value: 13.9, color: "#a78bfa" },
  { name: "Country", value: 11.2, color: "#f472b6" },
];

const songsSubmission = [
  { day: "Monday", thisWeek: 12000, lastWeek: 10000 },
  { day: "Tuesday", thisWeek: 15000, lastWeek: 12000 },
  { day: "Wednesday", thisWeek: 18000, lastWeek: 14000 },
  { day: "Thursday", thisWeek: 22000, lastWeek: 17000 },
  { day: "Friday", thisWeek: 25000, lastWeek: 20000 },
  { day: "Saturday", thisWeek: 20000, lastWeek: 18000 },
  { day: "Sunday", thisWeek: 23000, lastWeek: 21000 },
];

function StorySnapshot() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {storySnapshot.map((item) => (
        <Card key={item.label} className="bg-card">
          <CardHeader>
            <CardDescription className="text-muted-foreground text-xs font-medium">{item.label}</CardDescription>
            <CardTitle className="text-2xl font-bold">{item.value.toLocaleString()}</CardTitle>
            <span className={`text-xs font-semibold ${item.positive ? "text-green-400" : "text-red-400"}`}>
              {item.change}
            </span>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

function HikeCard() {
  return (
    <Card className="bg-card flex h-72 flex-col">
      <CardHeader className="items-center">
        <CardTitle className="text-lg font-semibold">{hike.title}</CardTitle>
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

function TopStoryLines() {
  return (
    <Card className="bg-card col-span-2 h-72">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Top Story lines</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="text-muted-foreground list-decimal space-y-2 pl-4 text-sm">
          {topStoryLines.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

function TopSongs() {
  return (
    <Card className="bg-card h-72">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Top 5 Songs</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="text-muted-foreground space-y-1 text-sm">
          {topSongs.map((song, i) => (
            <li key={i} className="flex items-center justify-between">
              <span>
                {i + 1}. {song.title}
              </span>
              <span className="text-muted-foreground text-xs">{song.artist}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

function MoodAveragesChart() {
  return (
    <Card className="bg-card h-96 pb-0">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Mood Averages</CardTitle>
      </CardHeader>
      <CardContent className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart accessibilityLayer data={moodAverages}>
            <XAxis
              dataKey="mood"
              axisLine={false}
              tickLine={false}
              stroke="#a1a7bb"
              tickFormatter={(value) => value.slice(0, 4) + "..."}
            />
            <YAxis axisLine={false} tickLine={false} stroke="#a1a7bb" />
            <Bar dataKey="value" fill="#9F9FF8" radius={5} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

function GenreBreakdownChart() {
  return (
    <Card className="bg-card h-full">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Genre Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full items-center justify-between">
        <ResponsiveContainer width="80%" height="100%">
          <ChartContainer config={{}} className="mx-auto aspect-square max-h-[250px]">
            <PieChart>
              <Pie data={genreBreakdown} dataKey="value" nameKey="name" innerRadius={60} fill="#22d3ee">
                {genreBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            </PieChart>
          </ChartContainer>
        </ResponsiveContainer>
        <ul className="text-muted-foreground w-72 space-y-3 space-x-6">
          {genreBreakdown.map((g) => (
            <li key={g.name} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: g.color }} />
              {g.name} {g.value}%
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function SongsSubmissionChart() {
  return (
    <Card className="bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Songs submission</CardTitle>
          <Tabs defaultValue="this-week" className="w-auto">
            <TabsList>
              <TabsTrigger value="this-week">This Week</TabsTrigger>
              <TabsTrigger value="last-week">Last Week</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <ChartContainer config={{}}>
            <LineChart data={songsSubmission}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#a1a7bb" />
              <YAxis axisLine={false} tickLine={false} stroke="#a1a7bb" />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="thisWeek" stroke="#22d3ee" strokeWidth={2} dot={false} />
              <Line
                type="monotone"
                dataKey="lastWeek"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                strokeDasharray="4 2"
              />
            </LineChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function OverviewTab() {
  return (
    <div className="bg-background flex flex-col gap-4 p-6">
      <StorySnapshot />
      <div className="grid grid-cols-12 gap-4">
        {/* First row */}
        <div className="col-span-2">
          <HikeCard />
        </div>
        <div className="col-span-3">
          <TopSongs />
        </div>
        <div className="col-span-7">
          <TopStoryLines />
        </div>

        {/* Second row */}
        <div className="col-span-6">
          <MoodAveragesChart />
        </div>
        <div className="col-span-6">
          <GenreBreakdownChart />
        </div>

        {/* Third row */}
        <div className="col-span-12">
          <SongsSubmissionChart />
        </div>
      </div>
    </div>
  );
}
