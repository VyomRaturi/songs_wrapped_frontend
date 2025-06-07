"use client";

import Image from "next/image";

import { ChevronDown } from "lucide-react";
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

const topLikedSongs = [
  { title: "As it was", artist: "Harry styles", likes: 454, fan: "@erob1231", platform: "Tiktok" },
  { title: "Tell me why", artist: "Taylor swift", likes: 500, fan: "@AP dhillon", platform: "Instagram" },
  { title: "Love story", artist: "Taylor swift", likes: 547, fan: "@Red boy", platform: "YT Shorts" },
  { title: "Looser", artist: "Charlie puth", likes: 432, fan: "@user2", platform: "Spotify" },
  { title: "Attention", artist: "Charlie puth", likes: 399, fan: "@user3", platform: "Apple Music" },
  // Add more if needed for scroll
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

function TopLikedSongs() {
  return (
    <Card className="bg-card relative flex h-80 flex-col overflow-hidden">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Top Liked Songs</CardTitle>
        <CardDescription className="text-muted-foreground text-xs">
          Fans and Artists That Got The Most Likes
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-700">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-muted border-b">
              <th className="px-4 py-2 text-left font-medium">Songs</th>
              <th className="px-4 py-2 text-left font-medium">Artists</th>
              <th className="px-4 py-2 text-left font-medium">Likes</th>
              <th className="px-4 py-2 text-left font-medium">Fans</th>
              <th className="px-4 py-2 text-left font-medium">Platform</th>
            </tr>
          </thead>
          <tbody>
            {topLikedSongs.map((song, i) => (
              <tr key={i} className="border-muted border-b last:border-0">
                <td className="px-4 py-2 font-semibold whitespace-nowrap">
                  <span className="font-bold">
                    {i + 1}. {song.title}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{song.artist}</td>
                <td className="px-4 py-2 whitespace-nowrap">{song.likes}</td>
                <td className="px-4 py-2 whitespace-nowrap">{song.fan}</td>
                <td className="px-4 py-2 whitespace-nowrap">{song.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      {/* Bottom shadow and chevron for scroll indicator */}
      <div className="from-background pointer-events-none absolute bottom-0 left-0 flex h-10 w-full items-end justify-center bg-gradient-to-t to-transparent">
        <ChevronDown className="text-muted-foreground mb-1" size={28} />
      </div>
    </Card>
  );
}

function MoodAveragesChart() {
  return (
    <Card className="bg-card h-72 pb-0">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Mood Averages</CardTitle>
      </CardHeader>
      <CardContent className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart accessibilityLayer data={moodAverages}>
            <XAxis
              dataKey="mood"
              axisLine={false}
              tickLine={false}
              stroke="#a1a7bb"
              tickFormatter={(value) => value.slice(0, 4) + "..."}
              className="text-xs"
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
    <Card className="bg-card h-80">
      <CardHeader>
        <div className="flex flex-col">
          <CardTitle className="text-base font-semibold">Genre Breakdown</CardTitle>
          <ul className="mt-2 mb-4 flex flex-row flex-wrap gap-6">
            {genreBreakdown.map((g) => (
              <li key={g.name} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: g.color }} />
                <span className="text-xs font-medium">{g.name}</span>
                <span className="text-muted-foreground text-xs">{g.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-[-50px] flex items-center">
          <ResponsiveContainer width="100%" height={250}>
            <ChartContainer config={{}} className="aspect-square max-h-[250px]">
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
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="text-muted-foreground text-7xl font-bold">245</div>
            <div className="text-sm">Total number of submissions</div>
          </div>
        </div>
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
      {/* Top row: StorySnapshot */}
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5">
          <StorySnapshot />
        </div>
        <div className="col-span-1 flex h-full flex-col">
          <HikeCard />
        </div>
        <div className="col-span-2">
          <TopStoryLines />
        </div>
        <div className="col-span-2 flex h-full flex-col">
          <MoodAveragesChart />
        </div>
      </div>
      {/* Middle row: Genre Breakdown & Top Liked Songs */}
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-3">
          <GenreBreakdownChart />
        </div>
        <div className="col-span-4">
          <TopLikedSongs />
        </div>
      </div>
      {/* Bottom row: Songs Submission Chart */}
      <div className="">
        <SongsSubmissionChart />
      </div>
    </div>
  );
}
