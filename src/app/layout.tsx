import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vitor Bernstorff Clemes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className='container'>
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  )
}
