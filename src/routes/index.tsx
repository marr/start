import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "#/components/ui/alert";
import { Badge } from "#/components/ui/badge";
import { Button, buttonVariants } from "#/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import { Input } from "#/components/ui/input";
import { Separator } from "#/components/ui/separator";
import { shadcnCreatePresetUrl } from "#/lib/shadcn";
import { shellContentClass } from "#/lib/shell";
import { cn } from "#/lib/utils";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className={cn(shellContentClass, "flex-1 pb-8 pt-10 sm:pt-14")}>
      <Card className="rise-in relative overflow-hidden rounded-[2rem] border shadow-md">
        <CardContent className="relative px-6 py-10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-muted-foreground/10 blur-3xl" />
          <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            TanStack Start Base Template
          </p>
          <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-foreground sm:text-6xl">
            Start simple, ship quickly.
          </h1>
          <p className="mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
            This base starter intentionally keeps things light: two routes, clean structure, and the
            essentials you need to build from scratch.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about"
              className={cn(
                buttonVariants({ variant: "default" }),
                "rounded-full px-5 py-2.5 no-underline transition hover:-translate-y-0.5",
              )}
            >
              About This Starter
            </Link>
            <a
              href="https://tanstack.com/router"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full px-5 py-2.5 no-underline transition hover:-translate-y-0.5",
              )}
            >
              Router Guide
            </a>
          </div>
        </CardContent>
      </Card>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Type-Safe Routing", "Routes and links stay in sync across every page."],
          ["Server Functions", "Call server code from your UI without creating API boilerplate."],
          ["Streaming by Default", "Ship progressively rendered responses for faster experiences."],
          ["Tailwind Native", "Design quickly with utility-first styling and reusable tokens."],
        ].map(([title, desc], index) => (
          <Card
            key={title}
            className="rise-in rounded-2xl shadow-sm transition hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <CardContent className="p-5">
              <h2 className="mb-2 text-base font-semibold text-foreground">{title}</h2>
              <p className="m-0 text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-8">
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          shadcn / Base UI
        </p>
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">
          Component examples
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rise-in shadow-sm">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle>Card + badges</CardTitle>
                <Badge variant="secondary">New</Badge>
                <Badge variant="outline">Example</Badge>
              </div>
              <CardDescription>
                These primitives live in{" "}
                <code className="rounded bg-muted px-1 py-0.5">src/components/ui</code> and match{" "}
                <a
                  href={shadcnCreatePresetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline underline-offset-4"
                >
                  this project’s shadcn preset
                </a>{" "}
                (Base UI, Start template).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="demo-search" className="text-sm font-medium text-foreground">
                  Search
                </label>
                <Input
                  id="demo-search"
                  type="search"
                  placeholder="Filter components…"
                  autoComplete="off"
                />
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Button type="button">Primary</Button>
                <Button type="button" variant="secondary">
                  Secondary
                </Button>
                <Button type="button" variant="ghost">
                  Ghost
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t border-border/60 bg-transparent">
              <Link
                to="/about"
                className={cn(buttonVariants({ variant: "default" }), "no-underline")}
              >
                About route
              </Link>
              <a
                href={shadcnCreatePresetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "no-underline")}
              >
                Open in shadcn
              </a>
            </CardFooter>
          </Card>

          <div className="flex flex-col gap-4">
            <Alert className="rise-in border-border bg-card/80">
              <AlertCircleIcon aria-hidden />
              <AlertTitle>Alert</AlertTitle>
              <AlertDescription>
                Use alerts for inline feedback. This block uses the default variant from the
                registry.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive" className="rise-in">
              <AlertCircleIcon aria-hidden />
              <AlertTitle>Destructive</AlertTitle>
              <AlertDescription>
                Pair the destructive variant with validation or irreversible actions.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <Card className="mt-8 shadow-sm">
        <CardContent className="p-6">
          <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Quick Start
          </p>
          <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              Edit <code>src/routes/index.tsx</code> to customize the home page.
            </li>
            <li>
              Update <code>src/components/Header.tsx</code> and{" "}
              <code>src/components/Footer.tsx</code> for brand links.
            </li>
            <li>
              Add routes in <code>src/routes</code> and tweak visual tokens in{" "}
              <code>src/styles.css</code>.
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
