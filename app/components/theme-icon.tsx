import { css } from "styled-system/css";
import { MoonIcon, SunIcon } from "./icon";

export default function ThemeIcon() {
  return (
    <>
      <SunIcon
        class={css({
          display: {
            base: "block",
            _dark: "none",
          },
        })}
      />
      <MoonIcon
        class={css({
          display: {
            base: "none",
            _dark: "block",
          },
        })}
      />
    </>
  );
}
