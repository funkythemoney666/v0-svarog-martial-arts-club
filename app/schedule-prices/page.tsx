import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScheduleSection } from '@/components/schedule/schedule-section'
import { PricingSection } from '@/components/schedule/pricing-section'
import { CtaSection } from '@/components/home/cta-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Расписание и цены — Клуб единоборств «Сварог»',
  description: 'Расписание тренировок по боксу, ММА, грэпплингу, тайскому боксу и рукопашному бою. Стоимость абонементов для взрослых и детей.',
}

export default function SchedulePricesPage() {
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
                    Расписание
                  </span>
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-wide text-balance"
                  style={{ color: 'var(--foreground)' }}
                >
                  Расписание <span style={{ color: 'var(--gold)' }}>и цены</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <ScheduleSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
