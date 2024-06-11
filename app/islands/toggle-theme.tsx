import type { Child } from "hono/jsx";

type Props = JSX.IntrinsicElements["button"] & {
  children?: Child;
};

export default function ToggleTheme(props: Props) {
  const handleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");
    const theme = element.classList.contains("dark") ? "dark" : "light";
    element.style.colorScheme = theme;
    localStorage?.setItem("theme", theme);
  };

  return (
    <button type="button" {...props} onClick={handleClick}>
      {props.children}
    </button>
  );
}
