import { preventBodyScroll } from "@zag-js/remove-scroll";
import type { Child } from "hono/jsx";

type Props = JSX.IntrinsicElements["button"] & {
  children?: Child;
};

let cleanup: (() => void) | null = null;

export default function ToggleDrawer(props: Props) {
  const handleClick = () => {
    const drawer = document.querySelector("#drawer");
    const backdrop = document.querySelector("#drawer-backdrop");
    const positioner = document.querySelector("#drawer-positioner");
    const open = drawer?.getAttribute("data-open") ?? "false";
    drawer?.setAttribute("data-open", open === "true" ? "false" : "true");
    if (open === "true") {
      cleanup?.();
      cleanup = null;
      backdrop?.addEventListener(
        "animationend",
        () => {
          backdrop?.setAttribute("hidden", "");
        },
        { once: true },
      );
      positioner?.addEventListener(
        "animationend",
        () => {
          positioner?.setAttribute("hidden", "");
        },
        { once: true },
      );
    } else {
      cleanup = preventBodyScroll() ?? null;
      backdrop?.removeAttribute("hidden");
      positioner?.removeAttribute("hidden");
    }
  };

  return (
    <button type="button" {...props} onClick={handleClick}>
      {props.children}
    </button>
  );
}
