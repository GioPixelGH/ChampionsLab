import type { Metadata } from "next";
import { Suspense } from "react";
import { cookies } from "next/headers";
import "./globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import { ThemeInit } from "@/components/theme-init";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Champions Lab - Pokémon Champions 2026",
  description:
    "The ultimate competitive companion for Pokémon Champions. Season tracking, team builder, battle simulator, and deep Pokémon data - all in one immersive hub.",
  keywords: ["Pokemon Champions", "VGC", "team builder", "battle simulator", "competitive Pokemon", "Pokemon Champions 2026", "VGC team builder", "Pokemon meta"],
  metadataBase: new URL("https://championslab.xyz"),
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Champions Lab - Pokémon Champions 2026",
    description: "The ultimate competitive companion for Pokémon Champions. Team builder, battle simulator, META analysis, and VGC learning - all in one hub.",
    url: "https://championslab.xyz",
    siteName: "Champions Lab",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Champions Lab - Pokémon Champions 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Champions Lab - Pokémon Champions 2026",
    description: "The ultimate competitive companion for Pokémon Champions. Team builder, battle simulator, META analysis & more.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://championslab.xyz",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let initialLocale = "en";
  let isDark = false;
  try {
    const cookieStore = await cookies();
    initialLocale = cookieStore.get("cl-lang")?.value ?? "en";
    const themeCookie = cookieStore.get("cl-theme")?.value;
    isDark = themeCookie === "dark";
  } catch {
    // Static export / mobile build
  }

  return (
    <html
      lang={initialLocale.split("-")[0]}
      className={`h-full antialiased ${isDark ? "dark" : ""}`}
      style={{ colorScheme: isDark ? "dark" : "light" }}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeInit />
        <I18nProvider initialLocale={initialLocale}>
          <Suspense>{children}</Suspense>
        </I18nProvider>
      </body>
    </html>
  );
}
