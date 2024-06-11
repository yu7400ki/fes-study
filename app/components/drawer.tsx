import type { Child } from "hono/jsx";
import { sva } from "styled-system/css";

const drawer = sva({
  slots: ["backdrop", "positioner", "content", "header", "body"],
  base: {
    backdrop: {
      backdropFilter: "blur(4px)",
      background: {
        base: "white.a10",
        _dark: "black.a10",
      },
      height: "100vh",
      left: "0",
      position: "fixed",
      top: "0",
      width: "100vw",
      zIndex: "overlay",
      ".group[data-open='true'] &": {
        animation: "backdrop-in",
      },
      ".group[data-open='false'] &": {
        animation: "backdrop-out",
      },
    },
    positioner: {
      alignItems: "center",
      display: "flex",
      height: "100dvh",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      width: { base: "100vw", sm: "sm" },
      zIndex: "modal",
      ".group[data-open='false'] &": {
        pointerEvents: "none",
      },
    },
    content: {
      background: "bg.default",
      boxShadow: "lg",
      display: "grid",
      divideY: "1px",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr auto",
      gridTemplateAreas: `
        'header'
        'body'
        'footer'
      `,
      height: "full",
      width: "full",
      _hidden: {
        display: "none",
      },
    },
    header: {
      height: 16,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "1",
      gridArea: "header",
      py: 0,
      px: { base: "4", md: "6" },
    },
    body: {
      display: "flex",
      flexDirection: "column",
      gridArea: "body",
      overflow: "auto",
      p: { base: "4", md: "6" },
    },
  },
  defaultVariants: {
    variant: "right",
  },
  variants: {
    variant: {
      left: {
        positioner: {
          left: 0,
        },
        content: {
          ".group[data-open='true'] &": {
            animation: "drawer-in-left",
          },
          ".group[data-open='false'] &": {
            animation: "drawer-out-left",
          },
        },
      },
      right: {
        positioner: {
          right: 0,
        },
        content: {
          ".group[data-open='true'] &": {
            animation: "drawer-in-right",
          },
          ".group[data-open='false'] &": {
            animation: "drawer-out-right",
          },
        },
      },
    },
  },
});

const styles = drawer();

type RootProps = JSX.IntrinsicElements["div"] & {
  children?: Child;
};

export function Root({ children, ...props }: RootProps) {
  return (
    <div class="group" id="drawer" data-open="false" {...props}>
      {children}
    </div>
  );
}

type BackdropProps = JSX.IntrinsicElements["div"];

export function Backdrop({ ...props }: BackdropProps) {
  return <div {...props} id="drawer-backdrop" class={styles.backdrop} hidden />;
}

type PositionerProps = JSX.IntrinsicElements["div"] & {
  children?: Child;
};

export function Positioner({ children, ...props }: PositionerProps) {
  return (
    <div {...props} id="drawer-positioner" class={styles.positioner} hidden>
      {children}
    </div>
  );
}

type ContentProps = JSX.IntrinsicElements["div"] & {
  children?: Child;
};

export function Content({ children, ...props }: ContentProps) {
  return (
    <div {...props} class={styles.content}>
      {children}
    </div>
  );
}

type HeaderProps = JSX.IntrinsicElements["header"] & {
  children?: Child;
};

export function Header({ children, ...props }: HeaderProps) {
  return (
    <header {...props} class={styles.header}>
      {children}
    </header>
  );
}

type BodyProps = JSX.IntrinsicElements["div"] & {
  children?: Child;
};

export function Body({ children, ...props }: BodyProps) {
  return (
    <div {...props} class={styles.body}>
      {children}
    </div>
  );
}
