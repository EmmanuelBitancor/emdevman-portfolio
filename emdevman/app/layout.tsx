import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import ClientBackground from "./components/ClientBackground"; 

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Emmanuel | Web Enthusiast",
  description: "Portfolio of a Full Stack Developer",
  icons: {
    icon: "/assets/images/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth scroll-pt-24">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased bg-background text-foreground transition-colors duration-300 ease-in-out`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ClientBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}