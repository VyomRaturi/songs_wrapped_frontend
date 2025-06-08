"use client";

import { ChevronDown } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { breakoutArtistsData, breakoutArtistsSongData, storySummaryPoints } from "./breakout-artists-mock-data";
import { hike } from "./global-pulse-mock-data";

function HikeCard() {
  return (
    <Card className="bg-card flex h-72 flex-col">
      <CardHeader className="items-center">
        <CardTitle className="text-lg font-semibold">The Hike</CardTitle>
        <CardDescription className="text-xs">Week of 5/19/25</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <img src="/sq.png" alt="The Hike" className="h-44 w-full rounded-lg object-contain" />
      </CardContent>
    </Card>
  );
}

function BreakoutArtistsTable() {
  return (
    <Card className="bg-card relative flex h-72 flex-col overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Breakout Artists (Season-to-Date)</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-3 text-left font-medium whitespace-nowrap">Rank</th>
                <th className="py-3 text-left font-medium whitespace-nowrap">Songs Synced</th>
                <th className="py-3 text-left font-medium whitespace-nowrap">Episode Featured</th>
                <th className="py-3 text-left font-medium whitespace-nowrap">First Appearance</th>
                <th className="py-3 text-left font-medium whitespace-nowrap">Popularity Score</th>
              </tr>
            </thead>
            <tbody>
              {breakoutArtistsData.map((artist) => (
                <tr key={artist.name} className="border-b border-gray-800 last:border-0">
                  <td className="py-3 font-semibold whitespace-nowrap">
                    {artist.rank}. {artist.name}
                  </td>
                  <td className="py-3 whitespace-nowrap">{artist.songsSync}</td>
                  <td className="py-3 whitespace-nowrap">{artist.episodeFeatured}</td>
                  <td className="py-3 whitespace-nowrap">{artist.firstAppearance}</td>
                  <td className="py-3 whitespace-nowrap">{artist.popularityScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
      <div className="from-background pointer-events-none absolute bottom-0 left-0 flex h-10 w-full items-end justify-center bg-gradient-to-t to-transparent">
        <ChevronDown className="text-muted-foreground mb-1" size={28} />
      </div>
    </Card>
  );
}

function BreakoutArtistsSongTable() {
  return (
    <Card className="bg-card relative flex h-72 flex-col overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Breakout Artists (Season-to-Date)</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-2 text-left font-medium">Artist</th>
              <th className="px-6 py-2 text-left font-medium">Song Title</th>
              <th className="px-6 py-2 text-right font-medium">Popularity Score</th>
              <th className="px-6 py-2 text-right font-medium">Likes on Post</th>
            </tr>
          </thead>
          <tbody>
            {breakoutArtistsSongData.map((item) => (
              <tr key={item.rank} className="border-b border-gray-800 last:border-0">
                <td className="px-6 py-3 font-semibold whitespace-nowrap">
                  {item.rank}. {item.artist}
                </td>
                <td className="px-6 py-3 whitespace-nowrap">{item.songTitle}</td>
                <td className="px-6 py-3 text-right whitespace-nowrap">{item.popularityScore}</td>
                <td className="px-6 py-3 text-right whitespace-nowrap">{item.likesOnPost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
      <div className="from-background pointer-events-none absolute bottom-0 left-0 flex h-10 w-full items-end justify-center bg-gradient-to-t to-transparent">
        <ChevronDown className="text-muted-foreground mb-1" size={28} />
      </div>
    </Card>
  );
}

function StorySummary() {
  return (
    <Card className="bg-card relative flex h-72 flex-col overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Story Summary</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800">
        <ul className="text-muted-foreground list-disc space-y-3 px-6 text-sm">
          {storySummaryPoints.map((point, index) => (
            <li key={index} className="pl-2">
              {point}
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="from-background pointer-events-none absolute bottom-0 left-0 flex h-10 w-full items-end justify-center bg-gradient-to-t to-transparent">
        <ChevronDown className="text-muted-foreground mb-1" size={28} />
      </div>
    </Card>
  );
}

export function BreakoutArtistsTab() {
  return (
    <div className="bg-background flex flex-col gap-4 p-6">
      <div className="grid grid-cols-12 gap-4">
        {/* First row */}
        <div className="col-span-2">
          <HikeCard />
        </div>
        <div className="col-span-10">
          <BreakoutArtistsTable />
        </div>
      </div>
      {/* Second row */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7">
          <BreakoutArtistsSongTable />
        </div>
        <div className="col-span-5">
          <StorySummary />
        </div>
      </div>
    </div>
  );
}
