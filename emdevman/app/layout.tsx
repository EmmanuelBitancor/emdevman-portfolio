import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./components/Navbar";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // 1. ADDED: transition-colors duration-300 ease-in-out
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-background text-foreground transition-colors duration-300 ease-in-out`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // 2. REMOVED: disableTransitionOnChange (It prevents the animation!)
        >
          <Navbar />
          {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}