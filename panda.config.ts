import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
  preflight: true,
  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: "neutral",
      grayColor: "neutral",
      borderRadius: "md",
    }),
  ],
  include: ["./app/**/*.{js,jsx,ts,tsx}"],
  outdir: "styled-system",
  globalCss: {
    body: {
      minHeight: "100dvh",
    },
  },
});
