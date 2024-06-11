import type { Child } from "hono/jsx";
import { css } from "styled-system/css";
import { ShadowDom } from "../islands";

function unescapeHtml(html: string): string {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

type Props = {
  children?: Child;
};

export default async function WebExample({ children }: Props) {
  // biome-ignore lint/complexity/noUselessFragments:
  const html = (<>{children}</>)?.toString() ?? "";
  const unescapedHtml = html.replace(/<style>(.*?)<\/style>/s, (_, p1) => {
    return `<style>${unescapeHtml(p1)}</style>`;
  });

  return (
    <div
      class={css({
        border: "1px solid",
        borderColor: "border.default",
        borderRadius: "md",
        p: 4,
      })}
    >
      <ShadowDom html={unescapedHtml} />
    </div>
  );
}
