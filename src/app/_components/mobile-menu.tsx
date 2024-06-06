import { Drawer } from "@/components/ui";
import { MenuIcon, XIcon } from "lucide-react";
import { css } from "styled-system/css";
import { iconButton } from "styled-system/recipes";
import Navigation from "./navigation";
import ToggleTheme from "./toggle-theme";

export default function MobileMenu() {
  return (
    <header
      className={css({
        display: { base: "flex", md: "none" },
        height: 16,
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      <ToggleTheme className={iconButton({ variant: "ghost" })} />
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button type="button" className={iconButton({ variant: "ghost" })}>
            <MenuIcon />
          </button>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header
              height={16}
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
              py={0}
              px={{ base: 4, md: 6 }}
            >
              <Drawer.CloseTrigger asChild>
                <button type="button" className={iconButton({ variant: "ghost" })}>
                  <XIcon />
                </button>
              </Drawer.CloseTrigger>
            </Drawer.Header>
            <Drawer.Body>
              <Navigation />
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </header>
  );
}
