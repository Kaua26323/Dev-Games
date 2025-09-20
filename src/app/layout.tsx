import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "DevGames - Choose! Play! Have fun!",
  description: "Explore a complete catalog with hundreds of games for all platforms. Discover, compare, and choose your favorites!",
  keywords: ["games", "platforms", "play", "randomGames"],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`],
  },
  robots: {
     index: true,
     follow: true,
     nocache: true,
     googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
