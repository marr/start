import { describe, expect, test } from "vite-plus/test";

import { cn } from "./utils";

describe("cn", () => {
  test("joins conditional classes", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
  });

  test("merges conflicting Tailwind utilities (last wins)", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
  });
});
