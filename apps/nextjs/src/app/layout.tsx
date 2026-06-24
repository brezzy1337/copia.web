import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/styles.css";
import "~/app/landing.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://copia.market"
      : "http://localhost:3000",
  ),
  title: "Copia — eat well, on your budget",
  description:
    "Budget-first grocery planning. Tell Copia your weekly budget and how you eat; it plans a balanced week that fits — then shows you what to cook with exactly what you bought.",
  openGraph: {
    title: "Copia — eat well, on your budget",
    description:
      "Budget-first grocery planning that fits your budget, then shows you what to cook with what you bought.",
    url: "https://copia.market",
    siteName: "Copia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Copia — eat well, on your budget",
    description: "Budget-first grocery planning. Coming soon to iOS & Android.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E3B30",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <TRPCReactProvider>{props.children}</TRPCReactProvider>
      </body>
    </html>
  );
}
