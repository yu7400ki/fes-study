"use client";

import { usePathname } from "next/navigation";
import { MobileMenu } from "./_components";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      <MobileMenu key={pathname} />
      {children}
    </>
  );
}
