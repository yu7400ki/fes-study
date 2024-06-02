"use client";

import { useEffect, useRef } from "react";

type Props = {
  html: string;
};

export default function ShadowDom({ html }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (!shadowRef.current) {
      shadowRef.current = ref.current?.attachShadow({ mode: "open" }) ?? null;
    }

    if (shadowRef.current) {
      shadowRef.current.innerHTML = html;
    }

    return () => {
      if (shadowRef.current) {
        shadowRef.current.innerHTML = "";
      }
    };
  }, [html]);

  return <div ref={ref} />;
}
