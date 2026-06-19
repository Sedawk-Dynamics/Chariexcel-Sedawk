import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Charis Excel Training & Development | Excellence Elevated',
  description:
    'Charis Excel Training & Development — a premium learning and transformation company focused on building real-world skills, confidence, and leadership in corporates, teachers, parents & students.',
  keywords: [
    'corporate training',
    'leadership development',
    'training Goa',
    'student development',
    'teacher training',
    'Charis Excel',
  ],
  openGraph: {
    title: 'Charis Excel Training & Development',
    description: 'Excellence Elevated — Premium Corporate Training & Development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
