import { useEffect, useId, useRef } from "hono/jsx";

type Props = {
  html: string;
};

function unescapeHtml(string: string): string {
  return (
    new DOMParser().parseFromString(string, "text/html").querySelector("html")?.textContent ?? ""
  );
}

function setInnerHtml(element: ShadowRoot, html: string): void {
  element.innerHTML = html;
  // biome-ignore lint/complexity/noForEach:
  element.querySelectorAll("script").forEach((script) => {
    const newScript = document.createElement("script");
    newScript.text = script.innerHTML;
    script.replaceWith(newScript);
  });
}

export default function ShadowDom({ html }: Props) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (!shadowRef.current) {
      shadowRef.current = ref.current?.attachShadow({ mode: "open" }) ?? null;
    }

    if (shadowRef.current) {
      setInnerHtml(
        shadowRef.current,
        html
          .replace(/<style>(.*?)<\/style>/s, (_, p1) => {
            return `<style>${unescapeHtml(p1)}</style>`;
          })
          .replace(/<script>(.*?)<\/script>/s, (_, p1) => {
            return `<script>
            const root = document.getElementById("${id}").shadowRoot;
            ${unescapeHtml(p1)}
            </script>`;
          }),
      );
    }

    return () => {
      if (shadowRef.current) {
        shadowRef.current.innerHTML = "";
      }
    };
  }, [html]);

  return <div id={id} ref={ref} />;
}
