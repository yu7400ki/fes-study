import navigation from "@/navigation.json";
import { css, cx } from "styled-system/css";

type Props = {
  class?: string;
  pathname: string;
};

export default function Navigation(props: Props) {
  return (
    <nav
      class={cx(
        css({
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }),
        props.class,
      )}
    >
      {navigation.map((section) => (
        <section>
          <h2 class={css({ mb: 4 })}>{section.title}</h2>
          <ul
            class={css({
              "& > * + *": {
                mt: 2,
              },
            })}
          >
            {section.pages.map((page) => (
              <li>
                <a
                  href={page.path}
                  class={css({
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
                  aria-current={props.pathname === page.path ? "page" : undefined}
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}
