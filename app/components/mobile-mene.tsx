import type { Child } from "hono/jsx";
import { css } from "styled-system/css";

type Props = {
  children?: Child;
};

export default function MobileMenu(props: Props) {
  return (
    <header
      class={css({
        display: { base: "flex", md: "none" },
        height: 16,
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      {props.children}
    </header>
  );
}
