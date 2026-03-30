import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "If I Ever Need an Attorney, I'll Keep You in Mind — Avaria Press",
  description:
    "Four years. No law degree. A federal case. Based on a true account in the Western District of North Carolina.",
  openGraph: {
    title: "If I Ever Need an Attorney, I'll Keep You in Mind",
    description:
      "Four years. No law degree. A federal case. Based on a true account in the Western District of North Carolina.",
    type: "book",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
