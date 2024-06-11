import { ExternalLinkIcon } from "@/components/icon";
import asyncCx from "@/utils/async-cx";
import type { MDXComponents } from "mdx/types";
import { css, cva } from "styled-system/css";
import { code, link, table, text } from "styled-system/recipes";

const tableStyle = table({ variant: "outline" });

// biome-ignore lint/style/useNamingConvention:
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} class={asyncCx(props?.class, text({ size: "4xl" }))} />,
    h2: (props) => <h2 {...props} class={asyncCx(props?.class, text({ size: "3xl" }))} />,
    h3: (props) => <h3 {...props} class={asyncCx(props?.class, text({ size: "2xl" }))} />,
    h4: (props) => <h4 {...props} class={asyncCx(props?.class, text({ size: "xl" }))} />,
    h5: (props) => <h5 {...props} class={asyncCx(props?.class, text({ size: "lg" }))} />,
    h6: (props) => <h6 {...props} class={asyncCx(props?.class, text({ size: "md" }))} />,
    code: (props) => <code {...props} class={props?.class ?? asyncCx(code(), css({ mx: 0.5 }))} />,
    pre: (props) => (
      <pre
        {...props}
        class={asyncCx(props?.class, css({ p: 4, rounded: "md", overflowX: "auto" }))}
      />
    ),
    table: (props) => <table {...props} class={asyncCx(props?.class, tableStyle.root)} />,
    thead: (props) => <thead {...props} class={asyncCx(props?.class, tableStyle.head)} />,
    tr: (props) => <tr {...props} class={asyncCx(props?.class, tableStyle.row)} />,
    th: (props) => <th {...props} class={asyncCx(props?.class, tableStyle.header)} />,
    tbody: (props) => <tbody {...props} class={asyncCx(props?.class, tableStyle.body)} />,
    td: (props) => <td {...props} class={asyncCx(props?.class, tableStyle.cell)} />,
    ul: (props) => <ul {...props} class={asyncCx(props?.class, listRecipe({ style: "disc" }))} />,
    ol: (props) => (
      <ol {...props} class={asyncCx(props?.class, listRecipe({ style: "decimal" }))} />
    ),
    a: (_props) => {
      const props = { ..._props };
      const { href } = props;
      const isInternal = href?.startsWith("/");
      if (!isInternal) {
        props.target = "_blank";
        props.rel = "noopener noreferrer";
      }
      return (
        <a {...props} class={asyncCx(props?.className, link())}>
          {props.children}
          {!isInternal && <ExternalLinkIcon />}
        </a>
      );
    },
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
