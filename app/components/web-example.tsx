import type { Child } from "hono/jsx";
import { css } from "styled-system/css";
import ShadowDom from "../islands/shadow-dom";

type Props = {
  children?: Child;
};

export default function WebExample({ children }: Props) {
  // biome-ignore lint/complexity/noUselessFragments:
  const html = (<>{children}</>)?.toString() ?? "";

  return (
    <div
      class={css({
        border: "1px solid",
        borderColor: "border.default",
        borderRadius: "md",
        p: 4,
      })}
    >
      <ShadowDom html={html} />
    </div>
  );
}
