import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'
import { FloatingScrollTop } from '@/components/ui/FloatingScrollTop'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  title: 'GS Cyahafi TSS',
  description: 'Created with v0',
  generator: 'paccy IT',
  icons: {
    icon: '/logocyaha.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <FloatingScrollTop />
      </body>
    </html>
  )
}
