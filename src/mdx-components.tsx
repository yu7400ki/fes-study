import { Table } from "@/components/ui";
import type { MDXComponents } from "mdx/types";
import { css, cva, cx } from "styled-system/css";
import { code, text } from "styled-system/recipes";

// biome-ignore lint/style/useNamingConvention:
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className={cx(props?.className, text({ size: "4xl" }))} />,
    h2: (props) => <h2 {...props} className={cx(props?.className, text({ size: "3xl" }))} />,
    h3: (props) => <h3 {...props} className={cx(props?.className, text({ size: "2xl" }))} />,
    h4: (props) => <h4 {...props} className={cx(props?.className, text({ size: "xl" }))} />,
    h5: (props) => <h5 {...props} className={cx(props?.className, text({ size: "lg" }))} />,
    h6: (props) => <h6 {...props} className={cx(props?.className, text({ size: "md" }))} />,
    code: (props) => (
      <code {...props} className={props?.className ?? cx(code(), css({ mx: 0.5 }))} />
    ),
    pre: (props) => (
      <pre {...props} className={cx(props?.className, css({ p: 4, rounded: "md" }))} />
    ),
    table: (props) => <Table.Root {...props} variant="outline" />,
    thead: (props) => <Table.Head {...props} />,
    tr: (props) => <Table.Row {...props} />,
    th: (props) => <Table.Header {...props} />,
    tbody: (props) => <Table.Body {...props} />,
    td: (props) => <Table.Cell {...props} />,
    ul: (props) => (
      <ul {...props} className={cx(props?.className, listRecipe({ style: "disc" }))} />
    ),
    ol: (props) => (
      <ol {...props} className={cx(props?.className, listRecipe({ style: "decimal" }))} />
    ),
    ...components,
  };
}

const listRecipe = cva({
  base: {
    ml: "6",
    "& > li::marker": {
      color: "fg.muted",
    },
    "& > li + li": {
      mt: "2",
    },
  },
  variants: {
    style: {
      disc: {
        listStyleType: "disc",
      },
      decimal: {
        listStyleType: "decimal",
      },
    },
  },
});
