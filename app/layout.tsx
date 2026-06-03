import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fredoka = Fredoka({ 
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Makjulo - Manisan Kulit Jeruk Pamelo',
  description: 'Makjulo menghadirkan makanan sehat dan lezat dari kulit jeruk pamelo. Inovasi kuliner Indonesia yang ramah lingkungan dengan cita rasa autentik.',
  keywords: ['makjulo', 'kulit jeruk pamelo', 'makanan sehat', 'inovasi kuliner', 'zero waste', 'makanan indonesia'],
  generator: 'makjulo team',
  icons: {
    icon: [
      {
        url: '/logo-makjulo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-makjulo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo-makjulo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo-makjulo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F7941D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${fredoka.variable} ${nunito.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
