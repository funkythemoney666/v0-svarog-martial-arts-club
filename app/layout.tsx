import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Клуб единоборств «Сварог» — Москва, СВАО',
  description:
    'Современный спортивный клуб единоборств для детей и взрослых в СВАО Москвы. Бокс, ММА, грэпплинг, тайский бокс, рукопашный бой. Профессиональные тренеры, оборудованные залы.',
  keywords: 'единоборства Москва, бокс СВАО, ММА, грэпплинг, тайский бокс, клуб Сварог, спортивный клуб ВДНХ',
  openGraph: {
    title: 'Клуб единоборств «Сварог»',
    description: 'Профессиональный клуб единоборств в СВАО Москвы. Тренировки для детей и взрослых.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
