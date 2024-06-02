import type { MDXComponents } from "mdx/types";
import { Text } from "@/components/ui";

// biome-ignore lint/style/useNamingConvention:
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Text size="4xl">{children}</Text>,
    h2: ({ children }) => <Text size="3xl">{children}</Text>,
    h3: ({ children }) => <Text size="2xl">{children}</Text>,
    h4: ({ children }) => <Text size="xl">{children}</Text>,
    h5: ({ children }) => <Text size="md">{children}</Text>,
    h6: ({ children }) => <Text size="sm">{children}</Text>,
    ...components,
  };
}
