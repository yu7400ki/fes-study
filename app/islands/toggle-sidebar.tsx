import type { Child } from "hono/jsx";

type Props = JSX.IntrinsicElements["button"] & {
  children?: Child;
};

export default function ToggleSidebar(props: Props) {
  const handleClick = () => {
    const element = document.querySelector("#sidebar");
    const open = element?.getAttribute("data-open") ?? "true";
    element?.setAttribute("data-open", open === "true" ? "false" : "true");
  };

  return (
    <button type="button" {...props} onClick={handleClick}>
      {props.children}
    </button>
  );
}
