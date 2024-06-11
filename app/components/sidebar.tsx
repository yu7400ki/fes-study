import type { Child } from "hono/jsx";
import { css, cx } from "styled-system/css";

type RootProps = JSX.IntrinsicElements["aside"] & {
  children?: Child;
};

export function Root({ children, ...props }: RootProps) {
  return (
    <aside
      class={cx(
        css({
          display: { base: "none", md: "block" },
          top: 12,
          mt: 12,
          position: "sticky",
          fontSize: "sm",
          width: 64,
          placeSelf: "flex-start",
          flexShrink: 0,
          px: 4,
          transition: "width 0.2s",
          "&[data-open=false]": {
            width: 16,
          },
        }),
        "group",
      )}
      id="sidebar"
      {...props}
    >
      {children}
    </aside>
  );
}

type ContentProps = JSX.IntrinsicElements["div"] & {
  children?: Child;
};

export function Content({ children, ...props }: ContentProps) {
  return (
    <div
      class={css({
        pb: 6,
        height: "calc(100vh - {spacing.12} - {spacing.14})",
        overflowX: "hidden",
        ".group[data-open=false] &": {
          height: "calc(100vh - {spacing.12} - {spacing.20})",
          width: 0,
        },
      })}
      {...props}
    >
      {children}
    </div>
  );
}

type FooterProps = JSX.IntrinsicElements["footer"] & {
  children?: Child;
};

export function Footer({ children, ...props }: FooterProps) {
  return (
    <footer
      class={css({
        borderTop: "1px solid",
        borderColor: "border.muted",
        height: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ".group[data-open=false] &": {
          borderTop: "none",
          height: 20,
          flexDirection: "column",
          justifyContent: "center",
        },
      })}
      {...props}
    >
      {children}
    </footer>
  );
}
