import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CarpTravel',
  description: "Uncover Carpathian’s Secrets",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
