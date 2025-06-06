export type Hike = {
  title: string;
  week: string;
  image: string;
  description: string;
};

export const hike: Hike = {
  title: "The Hike",
  week: "Week of 5/19/25",
  image: "/hike-placeholder.png",
  description:
    "Fans brought energetic pop vibes to the outdoors, with The Weeknd and Pharrell setting the rhythm for sun-soaked trails and scenic adventures.",
};

export type TopSong = { title: string; artist: string; submissions: number };
export type TopSongsByContinent = { continent: string; songs: TopSong[] }[];

export const topSongsByContinent: TopSongsByContinent = [
  {
    continent: "Europe",
    songs: [
      { title: "As it was", artist: "Harry styles", submissions: 454 },
      { title: "Tell me why", artist: "Taylor swift", submissions: 500 },
      { title: "Love story", artist: "Taylor swift", submissions: 567 },
      { title: "Looser", artist: "Charlie puth", submissions: 375 },
    ],
  },
];

export type RegionalTrend = {
  region: string;
  genres: { name: string; value: number }[];
};

export const regionalTrends: RegionalTrend[] = [
  {
    region: "Europe",
    genres: [
      { name: "EDM", value: 14 },
      { name: "Rock", value: 12 },
      { name: "Pop", value: 10 },
    ],
  },
  {
    region: "North America",
    genres: [
      { name: "Rock", value: 16 },
      { name: "Hip-Hop", value: 11 },
      { name: "R&B", value: 9 },
    ],
  },
  {
    region: "South America",
    genres: [
      { name: "Reggaeton", value: 30 },
      { name: "Latin Pop", value: 25 },
      { name: "Trap", value: 12 },
    ],
  },
];

export type CountrySubmission = { country: string; value: number };
export const topCountriesBySubmission: CountrySubmission[] = [
  { country: "US", value: 30000 },
  { country: "EU", value: 25000 },
  { country: "India", value: 20000 },
  { country: "China", value: 30000 },
  { country: "France", value: 10000 },
  { country: "Other", value: 20000 },
];

export type GlobalSong = { name: string; value: number; color: string };
export const topGlobalSongsThisWeek: GlobalSong[] = [
  { name: "Pop", value: 40, color: "#22d3ee" },
  { name: "Rock", value: 30, color: "#3b82f6" },
  { name: "Hip Hop", value: 20, color: "#a78bfa" },
  { name: "Country", value: 10, color: "#f472b6" },
];
export const topGlobalSongsSeason: GlobalSong[] = [
  { name: "Pop", value: 38, color: "#22d3ee" },
  { name: "Rock", value: 32, color: "#3b82f6" },
  { name: "Hip Hop", value: 18, color: "#a78bfa" },
  { name: "Country", value: 12, color: "#f472b6" },
];
