import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const coaches = [
  {
    name: 'Сафиулин Дмитрий',
    title: 'Тренер по грэпплингу и BJJ',
    disciplines: ['Грэпплинг', 'BJJ'],
    achievement: 'Мастер спорта по грэпплингу',
    image: '/images/coach-safiulin.jpg',
  },
  {
    name: 'Данилэ Валентин',
    title: 'Мастер спорта по рукопашному бою',
    disciplines: ['ММА', 'Бокс', 'Рукопашный бой'],
    achievement: 'Чемпион Москвы по ММА',
    image: '/images/coach-danile.jpg',
  },
  {
    name: 'Титаев Андрей',
    title: 'Мастер спорта по рукопашному бою',
    disciplines: ['ММА', 'Рукопашный бой'],
    achievement: 'Многократный чемпион Москвы',
    image: '/images/coach-titaev.jpg',
  },
]

export function CoachesPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14">
          <div className="flex items-center gap-6">
            <img
              src="/images/svarog-logo.png"
              alt="Сварог"
              className="h-20 w-auto"
            />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Тренеры
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display uppercase tracking-wide text-balance">
                Наши <span style={{ color: 'var(--gold)' }}>тренеры</span>
              </h2>
            </div>
          </div>
          <Link
            href="/coaches"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-gold"
            style={{ color: 'var(--silver)' }}
          >
            Все тренеры
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="group border overflow-hidden transition-all duration-200 hover:border-gold/50"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Image placeholder */}
              <div
                className="relative h-64 overflow-hidden"
                style={{
                  backgroundColor: 'var(--dark-bg)',
                }}
              >
                <Image
                  src={coach.image || "/images/coach-placeholder.jpg"}
                  alt={coach.name}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gold overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: 'var(--gold)' }}
                  aria-hidden="true"
                />
                {/* Disciplines badges */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                  {coach.disciplines.map((d) => (
                    <span
                      key={d}
                      className="text-xs font-semibold px-2 py-0.5"
                      style={{ backgroundColor: 'var(--dark-bg)', color: 'var(--gold)' }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold uppercase tracking-wide mb-1">{coach.name}</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--silver)' }}>{coach.title}</p>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--gold)' }}>
                  {coach.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/coaches"
            className="inline-flex items-center gap-2 px-8 py-3.5 border text-sm font-bold uppercase tracking-widest transition-all hover:border-gold hover:text-gold"
            style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
          >
            Все тренеры
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
