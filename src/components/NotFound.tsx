import { Link, type NotFoundRouteProps } from "@tanstack/react-router";

import { buttonVariants } from "#/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import { shellContentClass } from "#/lib/shell";
import { cn } from "#/lib/utils";

export function NotFoundPage(_props: NotFoundRouteProps) {
  return (
    <main className={cn(shellContentClass, "flex-1 py-10 sm:py-12")}>
      <Card className="island-shell mx-auto max-w-lg border-0 bg-transparent ring-1 ring-border">
        <CardHeader>
          <CardTitle className="text-2xl">Page not found</CardTitle>
          <CardDescription>
            We couldn’t find a route for this URL. Check the address or go back home.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p className="m-0">
            If you followed a link here, it may be outdated or the page may have moved.
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 border-t border-border/60 bg-transparent">
          <Link to="/" className={cn(buttonVariants(), "no-underline")}>
            Back to home
          </Link>
          <Link to="/about" className={cn(buttonVariants({ variant: "outline" }), "no-underline")}>
            About
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
