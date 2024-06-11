import * as Drawer from "@/components/drawer";
import { MenuIcon, PanelLeftCloseIcon, PanelLeftOpenIcon } from "@/components/icon";
import MobileMenu from "@/components/mobile-mene";
import Navigation from "@/components/navigation";
import Pager from "@/components/pager";
import * as Sidebar from "@/components/sidebar";
import ThemeIcon from "@/components/theme-icon";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { css, cx } from "styled-system/css";
import { container } from "styled-system/patterns";
import { iconButton } from "styled-system/recipes";
import ToggleDrawer from "../islands/toggle-drawer";
import ToggleSidebar from "../islands/toggle-sidebar";
import ToggleTheme from "../islands/toggle-theme";

export default jsxRenderer(({ children, title, frontmatter }, c) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || frontmatter?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400,700&family=Noto+Sans+JP:wght@400,700&display=swap"
          rel="stylesheet"
        />
        <Link rel="stylesheet" href="/app/index.css" />
        <Script src="/app/client.ts" async />
      </head>
      <body
        class={css({
          fontFamily: "'Inter', 'Noto Sans JP', sans-serif",
          fontOpticalSizing: "auto",
          fontStyle: "normal",
          color: "fg.default",
          bg: {
            base: "bg.default",
            _light: "bg.default",
            _dark: "bg.canvas",
          },
        })}
      >
        <div
          class={container({
            maxW: "6xl",
            display: "flex",
            flexDir: { base: "column", md: "row" },
            gap: 4,
          })}
        >
          <Sidebar.Root>
            <Sidebar.Content>
              <Navigation pathname={c.req.path} />
            </Sidebar.Content>
            <Sidebar.Footer>
              <ToggleTheme
                class={cx(iconButton({ size: "xs", variant: "ghost" }), css({ color: "fg.muted" }))}
              >
                <ThemeIcon />
              </ToggleTheme>
              <ToggleSidebar
                class={cx(iconButton({ size: "xs", variant: "ghost" }), css({ color: "fg.muted" }))}
              >
                <PanelLeftCloseIcon
                  class={css({
                    display: "block",
                    ".group[data-open=false] &": {
                      display: "none",
                    },
                  })}
                />
                <PanelLeftOpenIcon
                  class={css({
                    display: "none",
                    ".group[data-open=false] &": {
                      display: "block",
                    },
                  })}
                />
              </ToggleSidebar>
            </Sidebar.Footer>
          </Sidebar.Root>
          <MobileMenu>
            <ToggleTheme class={iconButton({ variant: "ghost" })}>
              <ThemeIcon />
            </ToggleTheme>
            <ToggleDrawer class={iconButton({ variant: "ghost" })}>
              <MenuIcon />
            </ToggleDrawer>
          </MobileMenu>
          <main
            class={css({
              flexGrow: 1,
              py: 12,
              minW: 0,
              "& > * + *": {
                mt: 12,
              },
            })}
          >
            <article
              class={css({
                lineHeight: "relaxed",
                "& > * + *": {
                  mt: "1.5em",
                },
              })}
            >
              {children}
            </article>
            <Pager pathname={c.req.path} />
          </main>
        </div>
        <Drawer.Root>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <ToggleDrawer class={iconButton({ variant: "ghost" })}>
                  <xIcon />
                </ToggleDrawer>
              </Drawer.Header>
              <Drawer.Body>
                <Navigation pathname={c.req.path} />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </body>
    </html>
  );
});
