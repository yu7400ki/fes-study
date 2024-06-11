import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkBreaks from "remark-breaks";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

const entry = "./app/server.ts";
const basePlugins = [tsconfigPaths()];

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      build: {
        rollupOptions: {
          input: ["/app/index.css"],
        },
      },
      plugins: [...basePlugins, client()],
    };
  }
  return {
    build: {
      emptyOutDir: false,
    },
    plugins: [
      ...basePlugins,
      honox(),
      ssg({ entry }),
      mdx({
        elementAttributeNameCase: "html",
        jsxImportSource: "hono/jsx",
        providerImportSource: "./app/lib/mdx-components.tsx",
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkBreaks, remarkGfm],
        rehypePlugins: [
          [rehypeShiki, { theme: "github-dark" }],
          () => (tree) => {
            visit(tree, "element", (node) => {
              if (node?.type !== "element" || node?.tagName !== "pre") {
                return;
              }
              const [codeEl] = node.children;
              if (codeEl.tagName !== "code") {
                return;
              }
              codeEl.properties.class = [...(codeEl.properties.class || []), "code-block"];
            });
          },
        ],
      }),
    ],
  };
});
