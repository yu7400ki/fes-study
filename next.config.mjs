import createMdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkBreaks from "remark-breaks";
import rehypeShiki from "@shikijs/rehype";
import { visit } from "unist-util-visit";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMdx = createMdx({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkBreaks],
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
  },
});

export default withMdx(nextConfig);
