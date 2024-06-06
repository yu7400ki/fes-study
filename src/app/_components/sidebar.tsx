"use client";

import { MoonIcon, PanelLeftClose, PanelLeftOpen, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { css, cx } from "styled-system/css";
import { iconButton } from "styled-system/recipes";
import Navigation from "./navigation";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside
      className={cx(
        css({
          top: 12,
          mt: 12,
          position: "sticky",
          fontSize: "sm",
          width: 64,
          placeSelf: "flex-start",
          flexShrink: 0,
          px: 4,
          transition: "width 0.2s",
          "&[data-open=false]": {
            width: 16,
          },
        }),
        "group",
      )}
      data-open={open}
    >
      <Navigation
        className={css({
          pb: 6,
          height: "calc(100vh - {spacing.12} - {spacing.14})",
          overflowX: "hidden",
          ".group[data-open=false] &": {
            height: "calc(100vh - {spacing.12} - {spacing.20})",
            width: 0,
          },
        })}
      />
      <div
        className={css({
          borderTop: "1px solid",
          borderColor: "border.muted",
          height: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ".group[data-open=false] &": {
            borderTop: "none",
            height: 20,
            flexDirection: "column",
            justifyContent: "center",
          },
        })}
      >
        <button
          type="button"
          className={cx(iconButton({ size: "xs", variant: "ghost" }), css({ color: "fg.muted" }))}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {mounted ? theme === "light" ? <SunIcon /> : <MoonIcon /> : null}
        </button>
        <button
          type="button"
          className={cx(iconButton({ size: "xs", variant: "ghost" }), css({ color: "fg.muted" }))}
          onClick={() => setOpen(!open)}
        >
          {open ? <PanelLeftClose /> : <PanelLeftOpen />}
        </button>
      </div>
    </aside>
  );
}
