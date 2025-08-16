import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inconsolata = Inconsolata({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johnzyll Jimeno",
  description:
    "I'm a passionate individual who finds joy in both coding innovative solutions and immersing myself in the world of gaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inconsolata.className} antialiased bg-gradient-to-t dark:bg-gradient-to-b from-primary dark:from-primary/20 to-primary/30 dark:to-background min-h-screen flex flex-col items-center`}
      >
        <ThemeProvider>
          <div className="container space-y-2 md:space-y-4">
            <Header />
            {children}
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
