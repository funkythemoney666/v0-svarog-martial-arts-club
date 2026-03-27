import Link from 'next/link'
import { Shield, Users, Trophy, Zap } from 'lucide-react'

const badges = [
  { icon: Users, label: 'Для детей и взрослых' },
  { icon: Shield, label: 'Все уровни подготовки' },
  { icon: Trophy, label: 'Подготовка к соревнованиям' },
  { icon: Zap, label: 'Современное оборудование' },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: 'var(--dark-bg)',
        backgroundImage: 'url(/images/bg-black-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.97) 100%)' }}
        aria-hidden="true"
      />

      {/* Gold accent line top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ backgroundColor: 'var(--gold)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 border text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
        >
          <span className="w-4 h-px" style={{ backgroundColor: 'var(--gold)' }} />
          СВАО Москвы
          <span className="w-4 h-px" style={{ backgroundColor: 'var(--gold)' }} />
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-8xl font-display uppercase tracking-wide text-balance leading-none mb-6"
          style={{ color: 'white' }}
        >
          Клуб единоборств<br />
          <span style={{ color: 'var(--gold)' }}>«Сварог»</span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: 'rgba(255,255,255,0.72)' }}
        >
          Современный спортивный клуб единоборств для детей и взрослых в СВАО Москвы. Профессиональные тренеры, оборудованные залы, подготовка к соревнованиям. В клубе вас ждёт приятная домашняя атмосфера. Здесь русский Дух — здесь Русью пахнет! ☀️
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contacts"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
          >
            Записаться
          </Link>
          <Link
            href="/schedule-prices"
            className="w-full sm:w-auto px-8 py-4 text-sm font-bold uppercase tracking-widest border transition-all duration-200 hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.9)' }}
          >
            Расписание и цены
          </Link>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 px-4 py-4 border"
              style={{ borderColor: 'var(--dark-border)', backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              <Icon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              <span className="text-xs font-medium text-center leading-tight" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom angle */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-background"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 0)' }}
        aria-hidden="true"
      />
    </section>
  )
}
