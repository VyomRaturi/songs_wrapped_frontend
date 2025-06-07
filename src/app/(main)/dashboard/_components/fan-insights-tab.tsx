// React imports
import { useState } from "react";

// External imports
import Image from "next/image";

import { ChevronDown } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";

// UI components
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Local imports
import { charts } from "./fan-insights-charts";

// Data
const hike = { title: "The Hike", week: "Week of 5/19/25", image: "/hike-placeholder.png" };

const fanLeaderboard = [
  { song: "As it was", artist: "Harry styles", likes: 454, fan: "@erob1231", platform: "Tiktok" },
  { song: "Tell me why", artist: "Taylor swift", likes: 500, fan: "@AP dhillon", platform: "Instagram" },
  { song: "Love story", artist: "Taylor swift", likes: 567, fan: "@Bad boy", platform: "YT Shorts" },
  { song: "Looser", artist: "Charlie puth", likes: 375, fan: "@ADHD Brain", platform: "PTSD" },
  { song: "Blinding Lights", artist: "The Weeknd", likes: 425, fan: "@musiclover42", platform: "Instagram" },
  { song: "Bad Guy", artist: "Billie Eilish", likes: 390, fan: "@eilish_fan", platform: "TikTok" },
  { song: "Shape of You", artist: "Ed Sheeran", likes: 510, fan: "@guitar_ed", platform: "YouTube" },
];

const storySummary = [
  "Taylor Swift dominates fan activity, appearing repeatedly in both fan and celebrity submissions.",
  "Instagram and TikTok are the top platforms driving song likes and influencer engagement.",
  "Age group 13-19 has the highest rate of fan song submissions.",
  "Pop is the most favored genre among all age groups, followed by hip hop and rock.",
];

const celebritySubmissions = [
  { celebrity: "Taylor", song: "As it was", artist: "Harry styles", platform: "Instagram", likes: 571 },
  { celebrity: "Ed Sheeran", song: "Tell me why", artist: "Taylor swift", platform: "TikTok", likes: 456 },
  { celebrity: "Charlie", song: "Mine", artist: "Taylor swift", platform: "Shorts", likes: 362 },
  { celebrity: "Ariana", song: "Positions", artist: "Ariana Grande", platform: "Instagram", likes: 420 },
  { celebrity: "Justin", song: "Stay", artist: "The Kid LAROI", platform: "TikTok", likes: 385 },
  { celebrity: "Selena", song: "Lose You To Love Me", artist: "Selena Gomez", platform: "Instagram", likes: 510 },
];

const topSongsByAgeNew = [
  { song: "As it was", artist: "Harry styles", age: "13-19" },
  { song: "Tell me why", artist: "Taylor swift", age: "20-29" },
  { song: "Love story", artist: "Taylor swift", age: "30-39" },
  { song: "Looser", artist: "Charlie puth", age: "40+" },
];

const topSongsByAgeOld = [
  { song: "Bohemian Rhapsody", artist: "Queen", age: "13-19" },
  { song: "Sweet Child O' Mine", artist: "Guns N' Roses", age: "20-29" },
  { song: "Billie Jean", artist: "Michael Jackson", age: "30-39" },
  { song: "Hotel California", artist: "Eagles", age: "40+" },
];

// Component definitions
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

// Types for the ScrollableTable component
interface ScrollableTableProps {
  title: string;
  description?: string;
  columns: string[];
  data: any[];
  renderRow: (row: any, i: number) => React.ReactNode;
}

// Scrollable table component with common styling pattern
const ScrollableTable: React.FC<ScrollableTableProps> = ({ title, description, columns, data, renderRow }) => (
  <Card className="bg-card relative flex h-72 flex-col overflow-hidden">
    <CardHeader>
      <CardTitle className="text-base font-semibold">{title}</CardTitle>
      {description && <CardDescription className="text-muted-foreground text-xs">{description}</CardDescription>}
    </CardHeader>
    <CardContent className="flex-1 overflow-y-auto px-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-700">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-muted-foreground border-muted border-b">
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map(renderRow)}</tbody>
      </table>
    </CardContent>
    <div className="from-background pointer-events-none absolute bottom-0 left-0 flex h-10 w-full items-end justify-center bg-gradient-to-t to-transparent">
      <ChevronDown className="text-muted-foreground mb-1" size={28} />
    </div>
  </Card>
);

function FanLeaderboard() {
  return (
    <ScrollableTable
      title="Fan Leaderboard"
      description="Fans and Artists That Got The Most Likes"
      columns={["Songs", "Likes", "Fans", "Platform"]}
      data={fanLeaderboard}
      renderRow={(row, i) => (
        <tr key={i} className="border-muted border-b last:border-0">
          <td className="px-4 py-2">
            <span className="font-semibold">
              {i + 1}. {row.song}
            </span>
            <div className="text-muted-foreground text-xs">{row.artist}</div>
          </td>
          <td className="px-4 py-2">{row.likes}</td>
          <td className="px-4 py-2">{row.fan}</td>
          <td className="px-4 py-2">{row.platform}</td>
        </tr>
      )}
    />
  );
}

function StorySummary() {
  return (
    <Card className="bg-card flex h-72 flex-col">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Story Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between gap-4">
        <ul className="space-y-4 text-sm leading-snug text-white">
          {storySummary.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-muted-foreground">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function CelebritySubmissions() {
  return (
    <ScrollableTable
      title="Celebrity/Influencer submissions"
      columns={["Celebrity", "Songs", "Artist", "Platform", "Likes"]}
      data={celebritySubmissions}
      renderRow={(row, i) => (
        <tr key={i} className="border-muted border-b last:border-0">
          <td className="px-4 py-2">
            <span className="font-semibold">
              {i + 1}. {row.celebrity}
            </span>
          </td>
          <td className="px-4 py-2">{row.song}</td>
          <td className="px-4 py-2">{row.artist}</td>
          <td className="px-4 py-2">{row.platform}</td>
          <td className="px-4 py-2">{row.likes}</td>
        </tr>
      )}
    />
  );
}

function TopSongsByAge() {
  const [songType, setSongType] = useState("new");
  const songs = songType === "new" ? topSongsByAgeNew : topSongsByAgeOld;

  return (
    <Card className="bg-card h-72">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">Top Songs By Age</CardTitle>
        <Select value={songType} onValueChange={setSongType}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="new">New Songs</SelectItem>
            <SelectItem value="old">Old Songs</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-center gap-2">
        <ol className="space-y-4 text-sm text-white">
          {songs.map((item, i) => (
            <li key={i} className="flex items-center justify-between">
              <div>
                <span className="font-semibold">
                  {i + 1}. {item.song}
                </span>
                <span className="text-muted-foreground ml-1 text-xs">{item.artist}</span>
              </div>
              <span className="text-muted-foreground text-xs font-semibold">{item.age}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

export function FanInsightsTab() {
  return (
    <div className="bg-background flex flex-col gap-4 p-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <HikeCard />
        </div>
        <div className="col-span-5">
          <FanLeaderboard />
        </div>
        <div className="col-span-5">
          <StorySummary />
        </div>
        <div className="col-span-7">
          <CelebritySubmissions />
        </div>
        <div className="col-span-5">
          <TopSongsByAge />
        </div>
        <div className="col-span-5">
          <charts.AgeOfSubmitters />
        </div>
        <div className="col-span-7">
          <charts.GenreBreakdownByAgeGroup />
        </div>
      </div>
    </div>
  );
}
