"use client";

import navigation from "@/navigation.json";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, cx } from "styled-system/css";
import { Box } from "styled-system/jsx";
import { button, text } from "styled-system/recipes";

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

export default function Pager() {
  const pathname = usePathname();
  const previous = retrievePage(pathname, -1);
  const next = retrievePage(pathname, 1);
  if (!previous && !next) {
    return null;
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" gap="3" flexWrap="wrap">
      {previous && (
        <Box display="flex" flexDirection="column" gap="2">
          <p
            className={cx(
              text({ size: "sm" }),
              css({ fontWeight: "semibold", color: "fg.subtle" }),
            )}
          >
            Previous
          </p>
          <Link
            href={previous.path}
            className={button({ variant: "link", size: "lg" })}
            aria-label="Previous"
          >
            <ArrowLeftIcon />
            {previous.name}
          </Link>
        </Box>
      )}
      {next && (
        <Box marginLeft="auto" display="flex" flexDirection="column" gap="2">
          <p
            className={cx(
              text({ size: "sm" }),
              css({ fontWeight: "semibold", color: "fg.subtle", textAlign: "right" }),
            )}
          >
            Next
          </p>
          <Link
            href={next.path}
            className={button({ variant: "link", size: "lg" })}
            aria-label="Next"
          >
            {next.name}
            <ArrowRightIcon />
          </Link>
        </Box>
      )}
    </Box>
  );
}
