import ShadowDom from "./shadow-dom";
import { Box } from "styled-system/jsx";

type Props = {
  children: React.ReactNode;
};

export default async function WebExample({ children }: Props) {
  const ReactDomServer = (await import("react-dom/server")).default;
  const html = ReactDomServer.renderToStaticMarkup(children);

  return (
    <Box border="1px solid" borderColor="border.default" borderRadius="md" p={4}>
      <ShadowDom html={html} />
    </Box>
  );
}
