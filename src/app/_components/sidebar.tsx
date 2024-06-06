"use client";

import { MoonIcon, PanelLeftClose, PanelLeftOpen, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { css, cx } from "styled-system/css";
import { iconButton } from "styled-system/recipes";

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
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={cx(
        css({
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
      data-open={open}
    >
      <nav
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: 6,
          pb: 6,
          height: "calc(100vh - {spacing.12} - {spacing.14})",
          overflowX: "hidden",
          ".group[data-open=false] &": {
            height: "calc(100vh - {spacing.12} - {spacing.20})",
            width: 0,
          },
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
      <div
        className={css({
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
      >
        <button
          type="button"
          className={cx(iconButton({ size: "xs", variant: "ghost" }), css({ color: "fg.muted" }))}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          type="button"
          className={cx(iconButton({ size: "xs", variant: "ghost" }), css({ color: "fg.muted" }))}
          onClick={() => setOpen(!open)}
        >
          {open ? <PanelLeftClose /> : <PanelLeftOpen />}
        </button>
      </div>
    </aside>
  );
}
