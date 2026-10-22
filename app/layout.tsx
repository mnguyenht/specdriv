import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "specdriv",
  description: "One honest white t-shirt.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="border-t border-foreground/10 p-6 text-center text-sm">
          <a
            href="https://mnguyenht.github.io/specdriv/"
            className="underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Docs
          </a>
        </footer>
      </body>
    </html>
  );
}
