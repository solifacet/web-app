import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoliFacet",
  description:
    "Solifacet is a premier digital solutions provider specializing in AI-driven analytics and custom software development.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
