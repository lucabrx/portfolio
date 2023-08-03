import "./globals.css";

import { headConfig } from "@/config/head";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TailwindIndicator } from "@/components/helpers/TailwindIndicator";
import { ToastProvider } from "@/components/helpers/ToastProvider";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';

export const metadata = headConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body className="bg-page-gradient">
        <ToastProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
            <Analytics />
          <TailwindIndicator />
        </ToastProvider>
      </body>
    </html>
  );
}
