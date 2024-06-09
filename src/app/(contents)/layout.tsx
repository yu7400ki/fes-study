import { css } from "styled-system/css";
import { Pager } from "./_components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={css({
        flexGrow: 1,
        py: 12,
        minW: 0,
        "& > * + *": {
          mt: 12,
        },
      })}
    >
      <article
        className={css({
          lineHeight: "relaxed",
          "& > * + *": {
            mt: "1.5em",
          },
        })}
      >
        {children}
      </article>
      <Pager />
    </main>
  );
}
