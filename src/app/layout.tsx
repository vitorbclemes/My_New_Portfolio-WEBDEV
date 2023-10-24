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
      <body className={inter.className}>
        <div className='container'>
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  )
}
