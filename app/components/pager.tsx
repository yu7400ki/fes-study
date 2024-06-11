import navigation from "@/navigation.json";
import { Fragment } from "hono/jsx/jsx-runtime";
import { css, cx } from "styled-system/css";
import { button, text } from "styled-system/recipes";
import { ArrowLeftIcon, ArrowRightIcon } from "./icon";

type Page = (typeof navigation)[number]["pages"][number];

function retrievePage(path: string, offset: number): Page | undefined {
  for (const section of navigation) {
    const idx = section.pages.findIndex((page) => page.path === path);
    if (idx === -1) {
      continue;
    }
    if (idx + offset < 0 || idx + offset >= section.pages.length) {
      return undefined;
    }
    return section.pages[idx + offset];
  }
}

type Props = {
  pathname: string;
};

export default function Pager({ pathname }: Props) {
  const previous = retrievePage(pathname, -1);
  const next = retrievePage(pathname, 1);
  if (!previous && !next) {
    return <Fragment />;
  }

  return (
    <div
      class={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        flexWrap: "wrap",
      })}
    >
      {previous && (
        <div class={css({ display: "flex", flexDirection: "column", gap: 2 })}>
          <p class={cx(text({ size: "sm" }), css({ fontWeight: "semibold", color: "fg.subtle" }))}>
            Previous
          </p>
          <a
            href={previous.path}
            class={button({ variant: "link", size: "lg" })}
            aria-label="Previous"
          >
            <ArrowLeftIcon />
            {previous.name}
          </a>
        </div>
      )}
      {next && (
        <div class={css({ ml: "auto", display: "flex", flexDirection: "column", gap: 2 })}>
          <p
            class={cx(
              text({ size: "sm" }),
              css({
                fontWeight: "semibold",
                color: "fg.subtle",
                textAlign: "right",
              }),
            )}
          >
            Next
          </p>
          <a href={next.path} class={button({ variant: "link", size: "lg" })} aria-label="Next">
            {next.name}
            <ArrowRightIcon />
          </a>
        </div>
      )}
    </div>
  );
}
