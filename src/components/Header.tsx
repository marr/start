import { Link } from "@tanstack/react-router";
import { shellContentClass } from "#/lib/shell";
import { cn } from "#/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav
        className={cn(shellContentClass, "flex items-center justify-between gap-3 py-4 lg:py-5")}
      >
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-6">
          <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground no-underline shadow-sm sm:px-4 sm:py-2"
            >
              <span className="h-2 w-2 rounded-full bg-linear-to-r from-primary to-primary/70" />
              TanStack Start
            </Link>
          </h2>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold">
            <Link to="/" className="nav-link" activeProps={{ className: "nav-link is-active" }}>
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeProps={{ className: "nav-link is-active" }}
            >
              About
            </Link>
            <a
              href="https://tanstack.com/start/latest/docs/framework/react/overview"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
