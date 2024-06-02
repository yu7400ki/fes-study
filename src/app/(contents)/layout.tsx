import { css } from "styled-system/css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={css({
        "& * + *": {
          mt: "1em",
        },
      })}
    >
      {children}
    </main>
  );
}
