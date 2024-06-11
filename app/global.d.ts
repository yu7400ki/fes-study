import {} from "hono";
import type { JSX as Hono } from "hono/jsx";
import type { Meta } from "./types";

declare module "hono" {
  interface ContextRenderer {
    // biome-ignore lint/style/useShorthandFunctionType:
    (
      content: string | Promise<string>,
      meta?: Meta & { frontmatter: Meta },
    ): Response | Promise<Response>;
  }
}

declare global {
  // biome-ignore lint/style/noNamespace lint/style/useNamingConvention:
  namespace JSX {
    interface IntrinsicElements extends Hono.IntrinsicElements {}
  }
}
