import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FeatureFlagsProvider } from "../features/feature-flags/context/FeatureFlagsContext";
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
  title: "Feature Flags System",
  description: "Feature Flags System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FeatureFlagsProvider>
          {children}
        </FeatureFlagsProvider>
      </body>
    </html>
  );
}
