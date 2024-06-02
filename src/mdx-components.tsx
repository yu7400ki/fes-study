import type { MDXComponents } from "mdx/types";

// biome-ignore lint/style/useNamingConvention:
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
