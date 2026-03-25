import { createFileRoute } from "@tanstack/react-router";
import { ChartContainerDemo } from "#/components/ChartDemo";
import { Card, CardContent } from "#/components/ui/card";
import { shellContentClass } from "#/lib/shell";
import { cn } from "#/lib/utils";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className={cn(shellContentClass, "flex-1 py-10 sm:py-12")}>
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-6 sm:p-8">
          <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            About
          </p>
          <h1 className="display-title mb-3 text-4xl font-bold text-foreground sm:text-5xl">
            A small starter with room to grow.
          </h1>
          <p className="m-0 max-w-3xl text-base leading-8 text-muted-foreground">
            TanStack Start gives you type-safe routing, server functions, and modern SSR defaults.
            Use this as a clean foundation, then layer in your own routes, styling, and add-ons.
          </p>
        </CardContent>
      </Card>

      <section className="mt-8">
        <ChartContainerDemo />
      </section>
    </main>
  );
}
