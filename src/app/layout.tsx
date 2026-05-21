import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cruise In Auto Repair | Garden City, MI Auto Repair",
  description:
    "Trusted auto repair in Garden City, Michigan, with honest estimates, fair pricing, and experienced technicians.",
  openGraph: {
    title: "Cruise In Auto Repair",
    description:
      "Honest auto repair, transparent pricing, and experienced technicians serving Garden City, Michigan.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
