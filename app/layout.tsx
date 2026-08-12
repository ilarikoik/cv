import type { Metadata } from "next";
import { Geist, Geist_Mono, Elms_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/dashboard/navbar";
import { ThemeProvider } from "./theme-provider";

const Elms = Elms_Sans({
  weight: "200",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "My application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${Elms.className} h-full antialiased `}
    >
      <body className="h-full text-black/40 dark:text-white/70">
        <ThemeProvider >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}