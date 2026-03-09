const reviews = [
  {
    name: 'Алексей К.',
    tag: 'Боксёр',
    text: 'Три года занимаюсь в Сварог и уже выступаю на городских соревнованиях. Степан — тренер от бога, разобрал мою технику до мелочей. Зал отличный, атмосфера рабочая.',
    stars: 5,
  },
  {
    name: 'Екатерина М.',
    tag: 'Тайский бокс',
    text: 'Пришла без какого-либо опыта, боялась, что будет тяжело влиться. Михаил сразу поставил задачи по силам — уже через месяц почувствовала себя совершенно другим человеком.',
    stars: 5,
  },
  {
    name: 'Сергей Д.',
    tag: 'Грэпплинг',
    text: 'Уровень технической подготовки у Дмитрия просто серьёзный. Коричневый пояс BJJ — это не просто титул, в каждой тренировке чувствуется глубина знаний. Рекомендую.',
    stars: 5,
  },
  {
    name: 'Родители Вани, 9 лет',
    tag: 'Детская группа',
    text: 'Сын занимается рукопашным боём уже год. Стал дисциплинированнее, увереннее в себе. Андрей находит подход к каждому ребёнку — это очень ценно.',
    stars: 5,
  },
  {
    name: 'Иван Р.',
    tag: 'Бокс',
    text: 'Зашёл на разведку — остался на год. Атмосфера в клубе без понтов: все помогают друг другу, новичков не обижают. Цены честные для такого уровня.',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} из 5 звёзд`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill={i < count ? 'var(--gold)' : 'transparent'}
          stroke="var(--gold)"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--dark-bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Отзывы
            </span>
          </div>
          <h2
            className="text-4xl lg:text-5xl font-display uppercase tracking-wide text-balance"
            style={{ color: 'var(--foreground)' }}
          >
            Что говорят <span style={{ color: 'var(--gold)' }}>наши ученики</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-7 border flex flex-col gap-4"
              style={{ borderColor: 'var(--dark-border)', backgroundColor: 'var(--dark-surface)' }}
            >
              <StarRating count={r.stars} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'var(--dark-border)' }}>
                <span className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>{r.name}</span>
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5"
                  style={{ color: 'var(--gold)', backgroundColor: 'rgba(200,160,60,0.1)' }}
                >
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
