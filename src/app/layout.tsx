import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan DJEBROUNI',
  description: 'PHP Laravel, Clojure or TypeScript Backend Engineer with a strong commitment on software craftmanship.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-neutral-900 text-neutral-300`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
