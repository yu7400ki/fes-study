"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, cx } from "styled-system/css";
import { button } from "styled-system/recipes";

export type SidebarData = {
  title: string;
  pages: { name: string; path: string }[];
}[];

type Props = {
  data: SidebarData;
};

export default function Sidebar({ data }: Props) {
  const pathname = usePathname();
  const { theme = "light", setTheme } = useTheme();

  return (
    <aside
      className={css({
        top: 12,
        mt: 12,
        position: "sticky",
        fontSize: "sm",
        width: 64,
        placeSelf: "flex-start",
        flexShrink: 0,
        px: 4,
      })}
    >
      <nav
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: 6,
          pb: 6,
          height: "calc(100vh - {spacing.12} - {spacing.14})",
        })}
      >
        {data.map((section) => (
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
      <div
        className={css({
          borderTop: "1px solid",
          borderColor: "border.muted",
          height: 14,
          display: "flex",
          alignItems: "center",
        })}
      >
        <button
          type="button"
          className={cx(button({ size: "sm", variant: "ghost" }), css({ color: "fg.muted" }))}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <SunIcon size="1em" /> : <MoonIcon size="1em" />}
          {theme}
        </button>
      </div>
    </aside>
  );
}
