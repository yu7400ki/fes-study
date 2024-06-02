"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "styled-system/css";

export type SidebarData = {
  title: string;
  pages: { name: string; path: string }[];
}[];

type Props = {
  data: SidebarData;
};

export default function Sidebar({ data }: Props) {
  const pathname = usePathname();

  return (
    <aside
      className={css({
        fontSize: "sm",
        width: 64,
        "& > * + *": {
          mt: 6,
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
    </aside>
  );
}
