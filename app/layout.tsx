import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './components/Header/Header'
import { Toaster } from 'react-hot-toast'

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

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff'
            },
            duration: 2500,
          }}
        />
      </body>
    </html>
  )
}
