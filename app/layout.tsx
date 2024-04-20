import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackgroundImage from "./background-image/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React UI Components Explorer",
  description: "Explore the React UI Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-950`}>
        <BackgroundImage />
        <div className="absolute z-10 flex h-screen w-screen flex-col">
          <div className="w-full border-2 border-black">side </div>
          <div className="w-full border-2 border-violet-800">{children}</div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
