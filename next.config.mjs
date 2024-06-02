import createMdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkBreaks from "remark-breaks";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMdx = createMdx({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkBreaks],
    rehypePlugins: [],
  },
});

export default withMdx(nextConfig);
