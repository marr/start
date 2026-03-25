import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "#/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "#/components/ui/chart";

const growthData = [
  { month: "Jan", builds: 12, deploys: 4 },
  { month: "Feb", builds: 18, deploys: 6 },
  { month: "Mar", builds: 22, deploys: 9 },
  { month: "Apr", builds: 28, deploys: 11 },
  { month: "May", builds: 34, deploys: 15 },
  { month: "Jun", builds: 41, deploys: 18 },
  { month: "Jul", builds: 44, deploys: 20 },
  { month: "Aug", builds: 48, deploys: 22 },
  { month: "Sep", builds: 52, deploys: 24 },
  { month: "Oct", builds: 56, deploys: 27 },
  { month: "Nov", builds: 61, deploys: 30 },
  { month: "Dec", builds: 68, deploys: 34 },
];

const growthChartConfig = {
  builds: {
    label: "Local builds",
    color: "var(--chart-1)",
  },
  deploys: {
    label: "Deploys",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartContainerDemo() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Example chart</CardTitle>
        <CardDescription>
          Recharts inside{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">ChartContainer</code> from shadcn.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full pt-0">
        <ChartContainer config={growthChartConfig} className="aspect-auto h-[280px] w-full min-w-0">
          <LineChart
            data={growthData}
            accessibilityLayer
            margin={{ left: 4, right: 12, top: 8, bottom: 4 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={8}
              tickFormatter={(value) => String(value).slice(0, 3)}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} width={36} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Line
              dataKey="builds"
              type="monotone"
              stroke="var(--color-builds)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="deploys"
              type="monotone"
              stroke="var(--color-deploys)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
