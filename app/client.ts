import { createClient } from "honox/client";

function getTheme(): string {
  return (
    localStorage?.getItem("theme") ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
}

function theme() {
  const currentTheme = getTheme();
  const isDark = currentTheme === "dark";
  if (isDark) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
  }
}

window.addEventListener("pageshow", theme);
theme();
createClient();
