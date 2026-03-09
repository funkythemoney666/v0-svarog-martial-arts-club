import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactsContent } from '@/components/contacts/contacts-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты — Клуб единоборств «Сварог»',
  description: 'Адрес, телефоны и часы работы клуба единоборств «Сварог». Москва, СВАО, ул. Малыгина, д. 3, стр. 2. Рядом с метро ВДНХ и Алексеевская.',
}

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <div
          className="pt-32 pb-16 px-4"
          style={{ backgroundColor: 'var(--dark-bg)' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Как нас найти
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-wide text-balance"
              style={{ color: 'var(--foreground)' }}
            >
              Контакты и <span style={{ color: 'var(--gold)' }}>адрес</span>
            </h1>
          </div>
        </div>

        <ContactsContent />
      </main>
      <Footer />
    </>
  )
}
