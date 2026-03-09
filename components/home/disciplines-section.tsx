import Link from 'next/link'

const disciplines = [
  {
    name: 'Бокс',
    icon: '🥊',
    description: 'Классический бокс — искусство работы руками. Развивает скорость, выносливость, координацию и дисциплину.',
    meta: 'от 6 лет · все уровни',
  },
  {
    name: 'ММА',
    icon: '⚔️',
    description: 'Смешанные единоборства — комплексная система боя, включающая удары, борьбу и партер.',
    meta: 'от 12 лет · все уровни',
  },
  {
    name: 'Грэпплинг / BJJ',
    icon: '🤼',
    description: 'Борцовская техника и бразильское джиу-джитсу. Работа в партере, удушающие и болевые приемы.',
    meta: 'от 10 лет · все уровни',
  },
  {
    name: 'Тайский бокс',
    icon: '🦵',
    description: 'Искусство восьми конечностей. Удары руками, ногами, коленями и локтями в клинче.',
    meta: 'от 12 лет · все уровни',
  },
  {
    name: 'Детский рукопашный бой',
    icon: '🛡️',
    description: 'Комплексная программа для детей: основы единоборств, физическая подготовка, дисциплина.',
    meta: '6–12 лет · начинающие',
  },
  {
    name: 'Штурмовой рукопашный бой',
    icon: '⚡',
    description: 'Прикладная система рукопашного боя с элементами самообороны и тактической подготовки.',
    meta: 'от 16 лет · средний/продвинутый',
  },
  {
    name: 'Ножевой бой',
    icon: '🔪',
    description: 'Техника работы с ножом и защиты от холодного оружия. Только для совершеннолетних.',
    meta: 'от 18 лет · продвинутый',
  },
]

export function DisciplinesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-gold" style={{ color: 'var(--gold)' }}>
              Направления
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display uppercase tracking-wide text-foreground text-balance">
            Выберите <span style={{ color: 'var(--gold)' }}>своё</span> направление
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border">
          {disciplines.map((d) => (
            <div
              key={d.name}
              className="group relative bg-background p-6 lg:p-7 flex flex-col gap-3 transition-all duration-200 hover:bg-card cursor-default"
            >
              {/* Gold top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: 'var(--gold)' }}
                aria-hidden="true"
              />
              <div className="text-3xl" aria-hidden="true">{d.icon}</div>
              <h3 className="text-base font-bold uppercase tracking-wide text-foreground">{d.name}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--silver)' }}>{d.description}</p>
              <div
                className="inline-block text-xs font-semibold uppercase tracking-wider px-2 py-1 mt-1"
                style={{ color: 'var(--gold)', backgroundColor: 'rgba(var(--gold-rgb, 200, 160, 60), 0.1)' }}
              >
                {d.meta}
              </div>
            </div>
          ))}

          {/* CTA cell */}
          <div
            className="bg-background p-6 lg:p-7 flex flex-col justify-between border-0"
            style={{ backgroundColor: 'var(--dark-bg)' }}
          >
            <p className="text-base font-medium leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Не знаете с чего начать? Приходите на пробную тренировку — тренер поможет выбрать направление.
            </p>
            <Link
              href="/contacts"
              className="inline-block text-center px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
            >
              Пробная тренировка
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
