import './globals.css'
import { Staatliches } from 'next/font/google'

const staatliches = Staatliches({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Interbrain data viewer',
  description: '- an experiment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={staatliches.className}>{children}</body>
    </html>
  )
}
