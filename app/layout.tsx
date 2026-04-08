import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'GS Cyahafi TSS',
  description: 'Created with v0',
  generator: 'paccy IT',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
