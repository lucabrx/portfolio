import "./globals.css"

import { type ReactNode } from "react"
import { Montserrat } from "next/font/google"
import Footer from "@/components/Footer"
import { TailwindIndicator } from "@/components/helpers/TailwindIndicator"
import { ToastProvider } from "@/components/helpers/ToastProvider"
import Navbar from "@/components/Navbar"
import ScrollToTop from "@/components/ScrollToTop"
import { headConfig } from "@/config/head"
import Loglib from "@loglib/tracker/react"

export const metadata = headConfig
const font = Montserrat({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
      </head>
      <body className="bg-page-gradient">
        <ToastProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <TailwindIndicator />
        </ToastProvider>
        <Loglib
          config={{
            id: "www_lukabrx",
          }}
        />
      </body>
    </html>
  )
}
