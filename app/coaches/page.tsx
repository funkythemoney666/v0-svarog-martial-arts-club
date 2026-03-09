import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CoachesGrid } from '@/components/coaches/coaches-grid'
import { CtaSection } from '@/components/home/cta-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Тренеры — Клуб единоборств «Сварог»',
  description: 'Профессиональные тренеры клуба Сварог. Мастера спорта по рукопашному бою, боксу, грэпплингу, BJJ и тайскому боксу.',
}

export default function CoachesPage() {
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
            <div className="flex items-center gap-6 mb-8">
              <img
                src="/images/svarog-logo.png"
                alt="Сварог"
                className="h-24 w-auto"
              />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                    Команда
                  </span>
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-wide text-balance"
                  style={{ color: 'var(--foreground)' }}
                >
                  Наши <span style={{ color: 'var(--gold)' }}>тренеры</span>
                </h1>
              </div>
            </div>
            <p className="mt-4 text-base max-w-xl" style={{ color: 'var(--silver)' }}>
              Мастера спорта и опытные практики с многолетним соревновательным и тренерским стажем.
            </p>
          </div>
        </div>

        <CoachesGrid />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
