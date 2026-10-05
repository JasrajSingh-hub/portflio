import type { Metadata } from "next";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Jasraj Singh Bhatia — Developer & Builder", template: "%s — Jasraj Singh Bhatia" },
  description: "Inside the notebook of Jasraj Singh Bhatia, a Computer Science Engineering student at SVIET building across AI, software, distributed systems and games.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

