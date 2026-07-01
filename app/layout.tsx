import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Lab Portfolio",
  description: "Tracking my Fullstack AI Engineer Progression",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}