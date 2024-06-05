import { css } from "styled-system/css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={css({
        lineHeight: "relaxed",
        "& > * + *": {
          mt: "1.5em",
        },
      })}
    >
      {children}
    </main>
  );
}
