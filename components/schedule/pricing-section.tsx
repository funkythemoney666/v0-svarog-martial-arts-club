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
    price: '900',
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
    price: '8 000',
    period: '/ месяц',
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
  {
    title: 'Абонемент без ограничений',
    price: '12 000',
    period: '/ месяц',
    badge: 'Премиум',
    features: [
      'Безлимитное посещение',
      'Все направления',
      'Работа с тренером',
      'Душевые и раздевалки',
      'Индивидуальная программа',
    ],
    cta: 'Записаться',
  },
]

const childPricing: PricingCard[] = [
  {
    title: 'Разовое посещение',
    price: '700',
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
    price: '7 000',
    period: '/ месяц',
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

type LongTermPlan = {
  duration: string
  price: string
  discount: string
}

const adultLongTerm: LongTermPlan[] = [
  { duration: '3 месяца', price: '22 800', discount: '−5%' },
  { duration: '6 месяцев', price: '43 200', discount: '−10%' },
  { duration: '12 месяцев', price: '81 600', discount: '−15%' },
]

const childLongTerm: LongTermPlan[] = [
  { duration: '3 месяца', price: '20 000', discount: '−5%' },
  { duration: '6 месяцев', price: '37 800', discount: '−10%' },
  { duration: '12 месяцев', price: '71 400', discount: '−15%' },
]

function LongTermCards({ plans }: { plans: LongTermPlan[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-5">
      {plans.map((plan) => (
        <div
          key={plan.duration}
          className="relative flex flex-col items-center text-center p-6 border transition-all duration-200 hover:border-gold/40"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
        >
          <span
            className="absolute -top-3 right-4 text-xs font-bold uppercase tracking-widest px-2 py-1"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
          >
            {plan.discount}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--silver)' }}>
            {plan.duration}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-display" style={{ color: 'var(--foreground)' }}>{plan.price}</span>
            <span className="text-sm" style={{ color: 'var(--silver)' }}>₽</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function PricingCardComponent({ card }: { card: PricingCard }) {
  return (
    <div
      className={`relative flex flex-col p-8 border transition-all duration-200 ${
        card.featured ? 'border-gold' : 'border-border hover:border-gold/40'
      }`}
      style={{
        borderColor: card.featured ? 'var(--gold)' : undefined,
        backgroundColor: card.featured ? 'rgba(18, 18, 18, 0.8)' : 'var(--card)',
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
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
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
          <p className="text-center text-xs uppercase tracking-widest mt-10 mb-1" style={{ color: 'var(--gold)' }}>
            Абонемент на длительный срок
          </p>
          <LongTermCards plans={adultLongTerm} />
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
          <p className="text-center text-xs uppercase tracking-widest mt-10 mb-1" style={{ color: 'var(--gold)' }}>
            Абонемент на длительный срок
          </p>
          <LongTermCards plans={childLongTerm} />
        </div>
      </div>
    </section>
  )
}
