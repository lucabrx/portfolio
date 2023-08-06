import "./globals.css";

import { headConfig } from "@/config/head";
import { Montserrat } from 'next/font/google'


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TailwindIndicator } from "@/components/helpers/TailwindIndicator";
import { ToastProvider } from "@/components/helpers/ToastProvider";
import { Analytics } from "@vercel/analytics/react";
import { type ReactNode } from "react";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = headConfig;
const font = Montserrat({ subsets: ['latin']})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className}>
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
