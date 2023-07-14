import './globals.css'

import { headConfig } from '@/config/head'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { TailwindIndicator } from '@/components/helpers/TailwindIndicator'
import { ToastProvider } from '@/components/helpers/ToastProvider'
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = headConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body className='bg-page-gradient'>
      <ToastProvider>
      <Navbar />
      <main className="pt-navigation-height ">
      {children}
      </main>
      <Footer />
          <ScrollToTop />
          <TailwindIndicator />
      </ToastProvider>
      </body>
    </html>
  )
}
