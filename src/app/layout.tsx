import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { cx } from "styled-system/css";
import { Container } from "styled-system/jsx";
import { Sidebar, type SidebarData } from "./_components";

const inter = Inter({ subsets: ["latin"] });
const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "大学祭勉強会",
};

const sidebar: SidebarData = [
  {
    title: "概要",
    pages: [{ name: "イントロダクション", path: "/" }],
  },
  {
    title: "CSS",
    pages: [{ name: "セレクターの基本", path: "/css/basic-selectors" }],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={cx(inter.className, notoSansJp.className)}>
        <ThemeProvider defaultTheme="light" attribute="class">
          <Container
            maxWidth="6xl"
            display="flex"
            gap={{
              base: 2,
              md: 4,
              lg: 6,
            }}
          >
            <Sidebar data={sidebar} />
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
