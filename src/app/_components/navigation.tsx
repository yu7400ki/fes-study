"use client";

import navigation from "@/navigation.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, cx } from "styled-system/css";

type Props = {
  className?: string;
};

export default function Navigation({ className }: Props) {
  const pathname = usePathname();

  return (
    <nav
      className={cx(
        css({
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }),
        className,
      )}
    >
      {navigation.map((section) => (
        <section key={section.title}>
          <h2 className={css({ mb: 4 })}>{section.title}</h2>
          <ul
            className={css({
              "& > * + *": {
                mt: 1,
              },
            })}
          >
            {section.pages.map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className={css({
                    whiteSpace: "nowrap",
                    color: {
                      base: "fg.muted",
                      _currentPage: "accent.default",
                    },
                    textDecoration: {
                      base: "none",
                      _hover: "underline",
                    },
                  })}
                  aria-current={pathname === page.path ? "page" : undefined}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}
