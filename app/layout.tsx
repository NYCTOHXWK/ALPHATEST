import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "Vinay | Portfolio",
  description: "A personal portfolio for Vinay with featured projects and a contact page."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="page-frame">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
