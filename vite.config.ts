import { defineConfig } from "vite-plus";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  lint: { options: { typeAware: true, typeCheck: true } },
  plugins: [devtools(), tailwindcss(), tanstackStart(), viteReact()],
  run: {
    tasks: {
      deploy: {
        command: "wrangler deploy --env production",
        cache: false,
        dependsOn: ["build", "test"],
      },
    },
  },
});

export default config;
