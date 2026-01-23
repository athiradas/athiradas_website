import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Athira Das | Data Engineer & Leadership Coach',
    template: '%s | Athira Das',
  },
  description:
    'Data engineer with 10+ years of experience in tech, now helping leaders and organizations through coaching. Expertise in data engineering, machine learning, and leadership development.',
  keywords: [
    'data engineering',
    'machine learning',
    'leadership coach',
    'organizational coach',
    'tech career',
    'University of Pennsylvania',
    'career transition',
    'executive coaching',
  ],
  authors: [{ name: 'Athira Das' }],
  creator: 'Athira Das',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://athiradas.com',
    siteName: 'Athira Das',
    title: 'Athira Das | Data Engineer & Leadership Coach',
    description: '10+ years in tech, now coaching leaders and organizations',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Athira Das',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Athira Das | Data Engineer & Leadership Coach',
    description: '10+ years in tech, now coaching leaders and organizations',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
