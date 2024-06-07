import { css } from "styled-system/css";

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
