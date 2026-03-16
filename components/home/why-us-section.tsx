import { Users, BarChart2, Trophy, Star, Zap, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Групповые и индивидуальные тренировки',
    desc: 'Занимайтесь в группе или индивидуально — подберём формат под ваши цели.',
  },
  {
    icon: BarChart2,
    title: 'Для новичков и профессионалов',
    desc: 'Программы для любого уровня подготовки: от первых шагов до соревновательного уровня.',
  },
  {
    icon: Trophy,
    title: 'Подготовка к соревнованиям',
    desc: 'Системная работа с бойцами на региональные и российские турниры.',
  },
  {
    icon: Star,
    title: 'Опытные тренеры',
    desc: 'Мастера спорта с многолетним соревновательным и тренерским опытом.',
  },
  {
    icon: Zap,
    title: 'Современное оборудование',
    desc: 'Полностью оснащённые залы: ринг, клетка, татами, снарядный зал.',
  },
  {
    icon: Heart,
    title: 'Семейные тренировки',
    desc: 'Тренируйтесь вместе с детьми — у нас есть программы для всей семьи.',
  },
]

export function WhyUsSection() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        backgroundColor: 'var(--dark-bg)',
        backgroundImage: 'url(/images/bg-black-pattern.png)',
        backgroundSize: 'auto',
        backgroundPosition: 'top left',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Преимущества
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-display uppercase tracking-wide text-balance"
            style={{ color: 'white' }}
          >
            Почему выбирают <span style={{ color: 'var(--gold)' }}>«Сварог»</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-7 border transition-all duration-200 hover:border-gold backdrop-blur-sm"
              style={{
                borderColor: 'var(--dark-border)',
                backgroundColor: 'rgba(18, 18, 18, 0.6)',
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center border mb-5 group-hover:border-gold transition-colors"
                style={{ borderColor: 'var(--dark-border)' }}
              >
                <Icon className="w-6 h-6 group-hover:text-gold transition-colors" style={{ color: 'var(--gold)' }} />
              </div>
              <h3 className="text-base font-bold uppercase tracking-wide mb-3" style={{ color: 'white' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--silver)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
