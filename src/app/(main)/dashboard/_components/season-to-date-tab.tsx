"use client";

import { useState } from "react";

import Image from "next/image";

import { ChevronDown } from "lucide-react";
import { Bar, BarChart, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  genreData,
  regionData,
  songsSubmissionData,
  topArtistsOfSeason,
  topSongsOfSeason,
} from "./season-to-date-mock-data";

function TopSongsOfSeason() {
  return (
    <Card className="relative flex h-80 flex-col overflow-hidden bg-[#1C1C1C]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">Top Songs Of The Season</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-2 text-left font-medium text-gray-400">Songs</th>
              <th className="px-6 py-2 text-left font-medium text-gray-400">Artist</th>
              <th className="px-6 py-2 text-left font-medium text-gray-400">Episode</th>
              <th className="px-6 py-2 text-left font-medium text-gray-400">Platform</th>
              <th className="px-6 py-2 text-left font-medium text-gray-400">Likes</th>
            </tr>
          </thead>
          <tbody>
            {topSongsOfSeason.map((song, i) => (
              <tr key={i} className="border-b border-gray-800 last:border-0">
                <td className="px-6 py-3 font-semibold whitespace-nowrap text-white">
                  {i + 1}. {song.title}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-white">{song.artist}</td>
                <td className="px-6 py-3 whitespace-nowrap text-white">{song.episode}</td>
                <td className="px-6 py-3 whitespace-nowrap text-white">{song.platform}</td>
                <td className="px-6 py-3 whitespace-nowrap text-white">{song.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      <div className="pointer-events-none absolute bottom-0 left-0 flex h-10 w-full items-end justify-center bg-gradient-to-t from-[#1C1C1C] to-transparent">
        <ChevronDown className="mb-1 text-gray-600" size={28} />
      </div>
    </Card>
  );
}

function TopArtistsOfSeason() {
  const [sortBy, setSortBy] = useState("likes");

  const sortedArtists = [...topArtistsOfSeason].sort((a, b) => {
    if (sortBy === "likes") {
      return b.likes - a.likes;
    }
    return a.genre.localeCompare(b.genre);
  });

  return (
    <Card className="relative flex h-80 flex-col overflow-hidden bg-[#1C1C1C]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-white">Top Artists Of The Seasons</CardTitle>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="h-8 w-28 border-gray-700 bg-transparent text-xs">
            <SelectValue>{sortBy === "likes" ? "Likes" : "Genre"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="likes">Likes</SelectItem>
            <SelectItem value="genre">Genre</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-2 text-left font-medium text-gray-400">Songs</th>
              <th className="px-6 py-2 text-right font-medium text-gray-400">Likes</th>
            </tr>
          </thead>
          <tbody>
            {sortedArtists.map((artist, i) => (
              <tr key={i} className="border-b border-gray-800 last:border-0">
                <td className="px-6 py-3 font-semibold whitespace-nowrap text-white">
                  {i + 1}. {artist.name}
                  <span className="mx-2 text-gray-600">{"- ".repeat(10)}</span>
                </td>
                <td className="px-6 py-3 text-right whitespace-nowrap text-white">{artist.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      <div className="pointer-events-none absolute bottom-0 left-0 flex h-10 w-full items-end justify-center bg-gradient-to-t from-[#1C1C1C] to-transparent">
        <ChevronDown className="mb-1 text-gray-600" size={28} />
      </div>
    </Card>
  );
}

function TopGenresOfSeason() {
  return (
    <Card className="bg-card h-80">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Genres Of The Season</CardTitle>
      </CardHeader>
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={genreData} barSize={40}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#4B5563" tick={{ fill: "#9CA3AF" }} />
            <YAxis
              axisLine={false}
              tickLine={false}
              stroke="#4B5563"
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {genreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

function SongsSubmission() {
  const [tab, setTab] = useState("fans-played");
  const tabs = [
    { id: "fans-played", label: "Fans Played" },
    { id: "interactions", label: "Interactions" },
    { id: "songs-submission", label: "Songs Submission" },
    { id: "artists-submission", label: "Artists Submission" },
    { id: "new-fans", label: "New fans played" },
  ];

  return (
    <Card className="bg-card h-80">
      <CardHeader>
        <div className="flex flex-col gap-4">
          <CardTitle className="text-lg font-semibold text-white">Songs submission</CardTitle>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`text-sm whitespace-nowrap ${
                  tab === t.id ? "text-blue-400" : "text-gray-400"
                } transition-colors hover:text-blue-400`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={songsSubmissionData}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} stroke="#4B5563" />
            <YAxis axisLine={false} tickLine={false} stroke="#4B5563" />
            <Line type="monotone" dataKey="thisEpisode" stroke="#9F9FF8" strokeWidth={2} dot={false} />
            <Line
              type="monotone"
              dataKey="previousEpisode"
              stroke="#4B5563"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
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

function RegionStatsTable() {
  return (
    <Card className="h-72 bg-[#1C1C1C]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">Region Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="min-w-full text-sm">
          <tbody>
            {regionData.map((region, i) => (
              <tr key={i} className="border-b border-gray-800 last:border-0">
                <td className="py-3 font-semibold text-white">{region.region}</td>
                <td className="py-3 text-right text-white">{region.percentage}</td>
                <td className="py-3 text-right text-white">{region.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export function SeasonToDateTab() {
  return (
    <div className="flex flex-col gap-4 bg-[#141414] p-6">
      {/* First row: Top Songs and Top Genres */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <TopSongsOfSeason />
        </div>
        <div className="col-span-5">
          <TopGenresOfSeason />
        </div>
      </div>
      {/* Second row: Top Artists and Map */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <SongsSubmission />
        </div>
        <div className="col-span-5">
          <TopArtistsOfSeason />
        </div>
      </div>
      {/* Third row: Songs Submission and Region Stats */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <HeatMapPlaceholder />
        </div>
      </div>
    </div>
  );
}
