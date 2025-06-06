import Image from "next/image";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

const hike = {
  title: "The Hike",
  week: "Week of 5/19/25",
  image: "/hike-placeholder.png",
  description:
    "Fans brought energetic pop vibes to the outdoors, with The Weeknd and Pharrell setting the rhythm for sun-soaked trails and scenic adventures.",
};

const fanLeaderboard = [
  { song: "As it was", artist: "Harry styles", likes: 454, fan: "@erob1231", platform: "Tiktok" },
  { song: "Tell me why", artist: "Taylor swift", likes: 500, fan: "@AP dhillon", platform: "Instagram" },
  { song: "Love story", artist: "Taylor swift", likes: 567, fan: "@Bad boy", platform: "YT Shorts" },
  { song: "Looser", artist: "Charlie puth", likes: 375, fan: "@ADHD Brain", platform: "PTSD" },
];

const storySummary = {
  summary: `Fans of all ages are submitting songs, with vibrant pop hits proving most popular with younger listeners\nUnderground india tracks are freiten-ding among our oldest crowd, while celebs are boosting dance hits Your top-liked tracks are getting lans ready to rack`,
  mostSubmissions: [
    { icon: "🔥", song: "Fire within", user: "@guitarhero994" },
    { icon: "🟣", song: "Fire within", user: "@guitarhero994" },
  ],
};

const celebritySubmissions = [
  { name: "@TaylorSwift", platform: "Instagram" },
  { name: "@EdSheeran", platform: "Shorts" },
  { name: "@Coldplay", platform: "TikTok" },
  { name: "@TaylorSwift", platform: "Shorts" },
  { name: "@EdSheeran", platform: "Instagram" },
];

const topSongsByAge = [
  { song: "As it was", artist: "Harry styles", age: "13-19" },
  { song: "Tell me why", artist: "Taylor swift", age: "20-29" },
  { song: "Love story", artist: "Taylor swift", age: "30-39" },
  { song: "Looser", artist: "Charlie puth", age: "40+" },
];

const ageOfSubmitters = [
  { age: "13-19", value: 80 },
  { age: "20-29", value: 100 },
  { age: "30-39", value: 60 },
  { age: "40+", value: 70 },
];

const genreBreakdownByAge = [
  [
    { name: "Pop", value: 40, color: "#22d3ee" },
    { name: "Rock", value: 30, color: "#3b82f6" },
    { name: "Hip Hop", value: 20, color: "#a78bfa" },
    { name: "Country", value: 10, color: "#f472b6" },
  ],
  [
    { name: "Pop", value: 38, color: "#22d3ee" },
    { name: "Rock", value: 32, color: "#3b82f6" },
    { name: "Hip Hop", value: 18, color: "#a78bfa" },
    { name: "Country", value: 12, color: "#f472b6" },
  ],
  [
    { name: "Pop", value: 35, color: "#22d3ee" },
    { name: "Rock", value: 35, color: "#3b82f6" },
    { name: "Hip Hop", value: 20, color: "#a78bfa" },
    { name: "Country", value: 10, color: "#f472b6" },
  ],
  [
    { name: "Pop", value: 30, color: "#22d3ee" },
    { name: "Rock", value: 40, color: "#3b82f6" },
    { name: "Hip Hop", value: 20, color: "#a78bfa" },
    { name: "Country", value: 10, color: "#f472b6" },
  ],
];

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

function FanLeaderboard() {
  return (
    <Card className="bg-card h-72">
      <CardHeader>
        <CardTitle className="mb-[-15px] text-base font-semibold">Fan Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-muted-foreground border-muted border-b">
              <th className="py-1 font-medium">Songs</th>
              <th className="py-1 font-medium">Likes</th>
              <th className="py-1 font-medium">Fans</th>
              <th className="py-1 font-medium">Platform</th>
            </tr>
          </thead>
          <tbody>
            {fanLeaderboard.map((row, i) => (
              <tr key={row.song} className="border-muted border-b last:border-0">
                <td className="py-1">
                  <span className="font-semibold">
                    {i + 1}. {row.song}
                  </span>
                  <div className="text-muted-foreground text-xs">{row.artist}</div>
                </td>
                <td className="py-1">{row.likes}</td>
                <td className="py-1">{row.fan}</td>
                <td className="py-1">{row.platform}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

function StorySummary() {
  return (
    <Card className="bg-card flex h-72 flex-col">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Story Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-between gap-4">
        <div className="text-sm leading-snug whitespace-pre-line text-white">{storySummary.summary}</div>
        <div>
          <div className="mb-1 text-xs font-semibold">Most Submissions</div>
          <div className="flex gap-4">
            {storySummary.mostSubmissions.map((item, i) => (
              <div key={i} className="flex items-center gap-1 text-xs">
                <span>{item.icon}</span>
                <span className="font-semibold">{item.song}</span>
                <span className="text-muted-foreground">{item.user}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CelebritySubmissions() {
  return (
    <Card className="bg-card h-64">
      <CardHeader>
        <CardTitle className="mb-[-10px] text-base font-semibold">Celebrity/Influencer submissions</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-center gap-2">
        <ul className="text-sm">
          {celebritySubmissions.map((item, i) => (
            <li key={i} className="flex items-center justify-between py-1">
              <span className="flex items-center gap-2">
                <Badge className="bg-muted-foreground/10 rounded-full px-2 py-1 font-semibold text-white">
                  {item.name}
                </Badge>
              </span>
              <span className="text-muted-foreground text-xs font-medium">{item.platform}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function TopSongsByAge() {
  return (
    <Card className="bg-card h-64">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Top Songs By Age</CardTitle>
      </CardHeader>
      <CardContent className="flex h-full flex-col justify-center gap-2">
        <ol className="space-y-1 text-sm text-white">
          {topSongsByAge.map((item, i) => (
            <li key={item.song} className="flex items-center justify-between">
              <span>
                {i + 1}. {item.song}
                <span className="text-muted-foreground ml-1 text-xs">{item.artist}</span>
              </span>
              <span className="text-muted-foreground text-xs font-semibold">{item.age}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

function AgeOfSubmitters() {
  return (
    <Card className="bg-card h-80">
      <CardHeader>
        <CardTitle className="text-base font-semibold">Age Of Submitters</CardTitle>
      </CardHeader>
      <CardContent className="flex h-60 items-end">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ageOfSubmitters} barCategoryGap={32}>
            <XAxis dataKey="age" axisLine={false} tickLine={false} stroke="#a1a7bb" />
            <YAxis axisLine={false} tickLine={false} stroke="#a1a7bb" domain={[0, 120]} />
            <Bar dataKey="value" fill="#9F9FF8" radius={8} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

function GenreBreakdownByAgeGroup() {
  const ageGroups = ["13-19", "20-29", "30-39", "40+"];
  return (
    <Card className="bg-card h-80">
      <CardHeader className="flex-row items-center justify-between pt-4 pb-2">
        <CardTitle className="text-base font-semibold">Genre Breakdown By Age Group</CardTitle>
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
        {genreBreakdownByAge.map((pie, i) => (
          <div key={i} className="flex flex-col items-center">
            <ResponsiveContainer width={110} height={110}>
              <PieChart>
                <Pie
                  data={pie}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={36}
                  outerRadius={52}
                  strokeWidth={0}
                  paddingAngle={1}
                >
                  {pie.map((entry, idx) => (
                    <Cell key={`cell-${i}-${idx}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            {/* eslint-disable-next-line security/detect-object-injection */}
            <span className="text-muted-foreground mt-2 text-xs">{ageGroups[i]}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function FanInsightsTab() {
  return (
    <div className="bg-background flex flex-col gap-4 p-6">
      <div className="grid grid-cols-12 gap-4">
        {/* Top row */}
        <div className="col-span-2">
          <HikeCard />
        </div>
        <div className="col-span-5">
          <FanLeaderboard />
        </div>
        <div className="col-span-5">
          <StorySummary />
        </div>
        {/* Second row */}
        <div className="col-span-4">
          <CelebritySubmissions />
        </div>
        <div className="col-span-4">
          <TopSongsByAge />
        </div>
        <div className="col-span-4">{/* Empty for alignment or add another widget if needed */}</div>
        {/* Third row */}
        <div className="col-span-6">
          <AgeOfSubmitters />
        </div>
        <div className="col-span-6">
          <GenreBreakdownByAgeGroup />
        </div>
      </div>
    </div>
  );
}
