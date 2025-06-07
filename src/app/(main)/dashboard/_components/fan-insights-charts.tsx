import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ageOfSubmitters = [
  { age: "13-19", value: 80 },
  { age: "20-29", value: 100 },
  { age: "30+", value: 60 },
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
];

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
  const ageGroups = ["13-19", "20-29", "30+"];
  const genres = [
    { name: "Pop", color: "#22d3ee" },
    { name: "Rock", color: "#3b82f6" },
    { name: "Hip Hop", color: "#a78bfa" },
    { name: "Country", color: "#f472b6" },
  ];

  return (
    <Card className="bg-card h-80">
      <CardHeader className="flex-row items-center justify-between pt-4 pb-2">
        <CardTitle className="text-base font-semibold">Genre Breakdown By Age Group</CardTitle>
        <div className="flex items-center gap-3 text-xs">
          {genres.map((genre) => (
            <span key={genre.name} className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: genre.color }} />
              {genre.name}
            </span>
          ))}
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
            <span className="text-muted-foreground mt-2 text-xs">{ageGroups[i]}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export const charts = {
  AgeOfSubmitters,
  GenreBreakdownByAgeGroup,
};
