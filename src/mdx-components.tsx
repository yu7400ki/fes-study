import type { MDXComponents } from "mdx/types";
import { cx } from "styled-system/css";
import { text } from "styled-system/recipes";

// biome-ignore lint/style/useNamingConvention:
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className={cx(props?.className, text({ size: "4xl" }))} />,
    h2: (props) => <h2 {...props} className={cx(props?.className, text({ size: "3xl" }))} />,
    h3: (props) => <h3 {...props} className={cx(props?.className, text({ size: "2xl" }))} />,
    h4: (props) => <h4 {...props} className={cx(props?.className, text({ size: "xl" }))} />,
    h5: (props) => <h5 {...props} className={cx(props?.className, text({ size: "lg" }))} />,
    h6: (props) => <h6 {...props} className={cx(props?.className, text({ size: "md" }))} />,
    ...components,
  };
}
