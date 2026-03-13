import Link from 'next/link'
import { Check } from 'lucide-react'

type PricingCard = {
  title: string
  price: string
  period?: string
  badge?: string
  features: string[]
  cta: string
  featured?: boolean
}

const adultPricing: PricingCard[] = [
  {
    title: 'Разовое посещение',
    price: '800',
    features: [
      'Одна тренировка',
      'Доступ ко всем залам',
      'Работа с тренером',
      'Душевые и раздевалки',
    ],
    cta: 'Записаться',
  },
  {
    title: 'Абонемент на месяц',
    price: '7 000',
    period: '/ месяц',
    badge: 'Популярный',
    features: [
      'Безлимитное посещение',
      'Все направления',
      'Работа с тренером',
      'Душевые и раздевалки',
      'Индивидуальная программа',
    ],
    cta: 'Записаться',
    featured: true,
  },
]

const childPricing: PricingCard[] = [
  {
    title: 'Разовое посещение',
    price: '600',
    features: [
      'Одна детская тренировка',
      'Работа с тренером',
      'Безопасное оборудование',
      'Душевые и раздевалки',
    ],
    cta: 'Записаться',
  },
  {
    title: 'Детский абонемент',
    price: '6 000',
    period: '/ месяц',
    badge: 'Популярный',
    features: [
      'Безлимитное посещение',
      'Детские группы',
      'Индивидуальный подход',
      'Физическая подготовка',
      'Участие в турнирах',
    ],
    cta: 'Пробная тренировка',
    featured: true,
  },
]

function PricingCardComponent({ card }: { card: PricingCard }) {
  return (
    <div
      className={`relative flex flex-col p-8 border transition-all duration-200 ${
        card.featured ? 'border-gold' : 'border-border hover:border-gold/40'
      }`}
      style={{
        borderColor: card.featured ? 'var(--gold)' : undefined,
        backgroundColor: card.featured ? 'var(--dark-bg)' : 'var(--card)',
        backgroundImage: card.featured ? 'url(/images/bg-grey-pattern.png)' : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Badge */}
      {card.badge && (
        <div
          className="absolute -top-3 left-6 text-xs font-bold uppercase tracking-widest px-3 py-1"
          style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
        >
          {card.badge}
        </div>
      )}

      <h3
        className="text-xs font-bold uppercase tracking-widest mb-5"
        style={{ color: card.featured ? 'var(--gold)' : 'var(--silver)' }}
      >
        {card.title}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-7">
        <span
          className="text-5xl font-display"
          style={{ color: card.featured ? 'white' : 'var(--foreground)' }}
        >
          {card.price}
        </span>
        <span className="text-sm" style={{ color: 'var(--silver)' }}>₽</span>
        {card.period && (
          <span className="text-sm" style={{ color: 'var(--silver)' }}>{card.period}</span>
        )}
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {card.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm" style={{ color: card.featured ? 'rgba(255,255,255,0.8)' : 'var(--silver)' }}>
            <Check className="w-4 h-4 shrink-0" style={{ color: 'var(--gold)' }} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        <Link
          href="/contacts"
          className="block text-center py-3 text-sm font-bold uppercase tracking-widest transition-all hover:opacity-90"
          style={{
            backgroundColor: card.featured ? 'var(--gold)' : 'var(--foreground)',
            color: 'var(--dark-bg)',
          }}
        >
          {card.cta}
        </Link>
        <Link
          href="/contacts"
          className="block text-center py-3 text-sm font-bold uppercase tracking-widest border transition-all hover:border-gold hover:text-gold"
          style={{
            borderColor: card.featured ? 'rgba(255,255,255,0.2)' : 'var(--border)',
            color: card.featured ? 'rgba(255,255,255,0.7)' : 'var(--silver)',
          }}
        >
          Пробная тренировка
        </Link>
      </div>
    </div>
  )
}

export function PricingSection() {
  return (
    <section
      className="py-16 lg:py-24"
      style={{
        backgroundColor: 'var(--dark-bg)',
        backgroundImage: 'url(/images/bg-black-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Стоимость
            </span>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-display uppercase tracking-wide text-balance"
            style={{ color: 'white' }}
          >
            Цены и <span style={{ color: 'var(--gold)' }}>абонементы</span>
          </h2>
        </div>

        {/* Adults */}
        <div className="mb-14">
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3"
            style={{ color: 'var(--silver)' }}
          >
            <span className="h-px flex-1" style={{ backgroundColor: 'var(--dark-border)' }} />
            Взрослые
            <span className="h-px flex-1" style={{ backgroundColor: 'var(--dark-border)' }} />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {adultPricing.map((card) => (
              <PricingCardComponent key={card.title} card={card} />
            ))}
          </div>
        </div>

        {/* Children */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-3"
            style={{ color: 'var(--silver)' }}
          >
            <span className="h-px flex-1" style={{ backgroundColor: 'var(--dark-border)' }} />
            Дети
            <span className="h-px flex-1" style={{ backgroundColor: 'var(--dark-border)' }} />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {childPricing.map((card) => (
              <PricingCardComponent key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
