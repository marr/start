import { createFileRoute } from "@tanstack/react-router";
import { shellContentClass } from "#/lib/shell";
import { cn } from "#/lib/utils";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "#/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "#/components/ui/chart";

export const Route = createFileRoute("/about")({
  component: About,
});

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

function About() {
  return (
    <main className={cn(shellContentClass, "flex-1 py-10 sm:py-12")}>
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          About
        </p>
        <h1 className="display-title mb-3 text-4xl font-bold text-foreground sm:text-5xl">
          A small starter with room to grow.
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-muted-foreground">
          TanStack Start gives you type-safe routing, server functions, and modern SSR defaults. Use
          this as a clean foundation, then layer in your own routes, styling, and add-ons.
        </p>
      </section>

      <section className="mt-8">
        <Card className="island-shell border-0 bg-transparent ring-1 ring-border">
          <CardHeader>
            <CardTitle>Example chart</CardTitle>
            <CardDescription>
              Sample data rendered with Recharts and the shadcn chart wrapper (
              <code className="rounded bg-muted px-1 py-0.5 text-xs">
                src/components/ui/chart.tsx
              </code>
              ).
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full pt-0">
            <ChartContainer
              config={growthChartConfig}
              className="aspect-auto h-[280px] w-full min-w-0"
            >
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
      </section>
    </main>
  );
}
