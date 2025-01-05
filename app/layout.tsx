import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Révision & Entretien Auto',
  description: 'Découvrez nos forfaits d\'entretien adaptés à votre véhicule',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} font-sans text-gray-800`}>{children}</body>
    </html>
  )
}

