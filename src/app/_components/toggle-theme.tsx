"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export default function ToggleTheme({ className }: Props) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      className={className}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {mounted ? resolvedTheme === "light" ? <SunIcon size={24} /> : <MoonIcon size={24} /> : null}
    </button>
  );
}
