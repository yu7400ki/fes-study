import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.text(`
User-agent: *
Disallow: /
`);
});
