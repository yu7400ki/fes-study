import { cx } from "styled-system/css";
import type { IconProps } from "./types";

// biome-ignore lint/style/useNamingConvention:
export default function XIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={cx("lucide lucide-x", props.class)}
    >
      <title>X</title>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
