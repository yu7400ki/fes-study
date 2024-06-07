import { Box } from "styled-system/jsx";
import ShadowDom from "./shadow-dom";

type Props = {
  children: React.ReactNode;
};

function unescapeHtml(html: string): string {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export default async function WebExample({ children }: Props) {
  const ReactDomServer = (await import("react-dom/server")).default;
  const html = ReactDomServer.renderToStaticMarkup(children);
  const unescapedHtml = html.replace(/<style>(.*?)<\/style>/s, (_, p1) => {
    return `<style>${unescapeHtml(p1)}</style>`;
  });

  return (
    <Box border="1px solid" borderColor="border.default" borderRadius="md" p={4}>
      <ShadowDom html={unescapedHtml} />
    </Box>
  );
}
