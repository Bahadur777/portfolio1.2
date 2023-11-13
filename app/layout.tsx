import type { Metadata } from 'next'
import '../css/prism.css'
import  '../css/tailwind.css'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: "BMS's Portfolio",
  description: 'This is my portfolio Web site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
