# TanStack Start starter

This app is built with **[TanStack Start](https://tanstack.com/start)** and **[TanStack Router](https://tanstack.com/router)** for routing and server APIs, **[shadcn/ui](https://ui.shadcn.com/docs)** (Base UI primitives) for components, and **[Vite Plus](https://viteplus.dev)** as the Vite-based dev and build toolchain. Day-to-day tasks use the **`vp`** CLI (for example `vp dev`, `vp build`, `vp test`).

## Links

- **Repository:** [github.com/marr/start](https://github.com/marr/start)
- **Vite Plus:** [viteplus.dev](https://viteplus.dev) — dev server, build, and test runner used by this template
- **TanStack:** [Start — docs](https://tanstack.com/start/latest/docs/framework/react/overview) · [Router](https://tanstack.com/router)
- **shadcn:** [Documentation](https://ui.shadcn.com/docs) · [Create (this preset)](https://ui.shadcn.com/create?command=init&base=base&template=start&preset=b11gxg4yrQ)

# Getting Started

Install dependencies, then start the dev server:

```bash
npm install
vp dev --port 3000
```

# Building For Production

```bash
vp build
```

Preview the production build locally:

```bash
vp preview
```

## Testing

Tests run through Vite Plus (Vitest under the hood):

```bash
vp test
```

After install, `vp config` also runs via the `prepare` script to sync Vite Plus configuration when needed.

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### Removing Tailwind CSS

If you prefer not to use Tailwind CSS:

1. Remove the demo pages in `src/routes/demo/`
2. Replace the Tailwind import in `src/styles.css` with your own styles
3. Remove `tailwindcss()` from the plugins array in `vite.config.ts`
4. Remove the Tailwind packages from your project (for example `npm remove @tailwindcss/vite tailwindcss`).

## Shadcn

Components follow [this project’s saved preset](https://ui.shadcn.com/create?command=init&base=base&template=start&preset=b11gxg4yrQ) on the shadcn create flow (Base UI + TanStack Start). Add more with:

```bash
npx shadcn@latest add button
```

See also the main [shadcn/ui docs](https://ui.shadcn.com/docs).

## Routing

This project uses [TanStack Router](https://tanstack.com/router) with file-based routing. Routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you render `{children}` in the `shellComponent`.

Here is an example layout that includes a header:

```tsx
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "My App" },
    ],
  }),
  shellComponent: ({ children }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        {children}
        <Scripts />
      </body>
    </html>
  ),
});
```

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Server Functions

TanStack Start provides server functions that allow you to write server-side code that seamlessly integrates with your client components.

```tsx
import { createServerFn } from "@tanstack/react-start";

const getServerTime = createServerFn({
  method: "GET",
}).handler(async () => {
  return new Date().toISOString();
});

// Use in a component
function MyComponent() {
  const [time, setTime] = useState("");

  useEffect(() => {
    getServerTime().then(setTime);
  }, []);

  return <div>Server time: {time}</div>;
}
```

## API Routes

You can create API routes by using the `server` property in your route definitions:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";

export const Route = createFileRoute("/api/hello")({
  server: {
    handlers: {
      GET: () => json({ message: "Hello, World!" }),
    },
  },
});
```

## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/people")({
  loader: async () => {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json();
  },
  component: PeopleComponent,
});

function PeopleComponent() {
  const data = Route.useLoaderData();
  return (
    <ul>
      {data.results.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ul>
  );
}
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).

For TanStack Start specific documentation, visit [TanStack Start](https://tanstack.com/start).
