import type { Metadata } from 'next'
import '../css/prism.css'
import  '../css/tailwind.css'
import Header from '@/components/Header'
import LenisProvider from '@/components/Providers/LenisProvider'


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
        <LenisProvider>
       <main>
       {children}
       </main>
        </LenisProvider>
      </body>
    </html>
  )
}
