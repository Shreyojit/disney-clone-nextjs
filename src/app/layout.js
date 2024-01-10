"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <body>
    <SessionProvider>
      <Header/>
      {children}
      </SessionProvider>

    </body>

      
     


    </html>
  )
}
