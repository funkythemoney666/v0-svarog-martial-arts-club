'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Clock } from 'lucide-react'

type Coach = {
  name: string
  title: string
  disciplines: string[]
  bio: string
  achievements: string[]
  experience: string
  image?: string
}

const coaches: Coach[] = [
  {
    name: 'Сафиулин Дмитрий',
    title: 'Тренер по грэпплингу и BJJ',
    disciplines: ['Грэпплинг', 'BJJ'],
    bio: 'Дмитрий занимается единоборствами с 2005 года. Специализируется на борцовской технике и бразильском джиу-джитсу. Готовит спортсменов для выступления на соревнованиях всех уровней.',
    achievements: [
      'Мастер спорта по грэпплингу',
      'Коричневый пояс BJJ',
      'Чемпион России по грэпплингу 2019',
    ],
    experience: '18 лет в спорте, 10 лет тренерской работы',
    image: '/images/coach-safiulin.jpg',
  },
  {
    name: 'Данилэ Валентин',
    title: 'Мастер спорта по рукопашному бою',
    disciplines: ['ММА', 'Бокс', 'Рукопашный бой'],
    bio: 'Валентин — один из ведущих тренеров клуба. Имеет богатый соревновательный опыт в различных дисциплинах. Специализируется на подготовке бойцов смешанных единоборств.',
    achievements: [
      'Мастер спорта по рукопашному бою',
      'КМС по боксу',
      'Чемпион Москвы по ММА 2018',
    ],
    experience: '15 лет в спорте, 8 лет тренерской работы',
    image: '/images/coach-danile.jpg',
  },
  {
    name: 'Титаев Андрей',
    title: 'Мастер спорта по рукопашному бою',
    disciplines: ['ММА', 'Рукопашный бой', 'Детские группы'],
    bio: 'Андрей работает как со взрослыми спортсменами, так и с детскими группами. Особое внимание уделяет технике, дисциплине и безопасности на тренировках.',
    achievements: [
      'Мастер спорта по рукопашному бою',
      'Призер чемпионата России',
      'Многократный чемпион Москвы',
    ],
    experience: '14 лет в спорте, 7 лет тренерской работы',
    image: '/images/coach-titaev.jpg',
  },
  {
    name: 'Шашков Юрий',
    title: 'Инструктор ножевого боя',
    disciplines: ['Ножевой бой'],
    bio: 'Юрий специализируется на прикладном ножевом бое и тактике самообороны. Обучает реалистичным техникам работы с холодным оружием и противодействию вооружённому противнику.',
    achievements: [
      'Инструктор прикладного ножевого боя',
      'Специалист тактической подготовки',
      'Опыт преподавания более 8 лет',
    ],
    experience: '10 лет практики, 8 лет преподавания',
    image: '/images/coach-shashkov.jpg',
  },
  {
    name: 'Степан Степанович',
    title: 'Тренер по боксу',
    disciplines: ['Бокс'],
    bio: 'Степан делает акцент на классической технике бокса и тактической подготовке. Работает как с начинающими, так и с опытными спортсменами, готовя их к соревнованиям.',
    achievements: [
      'КМС по боксу',
      'Призер первенства Москвы',
      'Опыт любительских боёв 52-8',
    ],
    experience: '13 лет в боксе, 6 лет тренерской работы',
    image: '/images/coach-stepan.jpg',
  },
  {
    name: 'Михаил',
    title: 'Тренер по тайскому боксу',
    disciplines: ['Тайский бокс'],
    bio: 'Михаил посвятил себя тайскому боксу и передаёт ученикам как технические навыки, так и дух муай-тай. Проходил обучение у мастеров в Таиланде.',
    achievements: [
      'КМС по тайскому боксу',
      'Победитель региональных турниров по муай-тай',
      'Опыт стажировок в Таиланде',
    ],
    experience: '11 лет в спорте, 5 лет тренерской работы',
    image: '/images/coach-mikhail.jpg',
  },
  {
    name: 'Никитин Никита',
    title: 'Тренер по боксу',
    disciplines: ['Бокс'],
    bio: 'Никита — молодой тренер, специализирующийся на работе с детьми и начинающими. Делает акцент на правильной технике и безопасности на тренировках.',
    achievements: [
      'КМС по боксу',
      'Призер первенства Москвы среди юниоров',
      'Опыт работы с детскими группами',
    ],
    experience: '9 лет в боксе, 4 года тренерской работы',
    image: '/images/coach-nikitin.jpg',
  },
  {
    name: 'Графов Григорий',
    title: 'Мастер спорта по боксу',
    disciplines: ['Бокс'],
    bio: 'Григорий — опытный тренер по боксу. Проводит групповые и персональные тренировки, уделяя внимание технике, физической подготовке и тактическому мышлению каждого спортсмена.',
    achievements: [
      'Мастер спорта по боксу',
      'Групповые тренировки по боксу',
      'Персональные тренировки по боксу',
    ],
    experience: 'Многолетний опыт в боксе и тренерской работе',
    image: '/images/coach-grafov.png',
  },
]

const allDisciplines = ['Все', ...Array.from(new Set(coaches.flatMap((c) => c.disciplines)))]

export function CoachesGrid() {
  const [filter, setFilter] = useState('Все')

  const filtered = filter === 'Все' ? coaches : coaches.filter((c) => c.disciplines.includes(filter))

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allDisciplines.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-all"
              style={{
                borderColor: filter === d ? 'var(--gold)' : 'var(--border)',
                backgroundColor: filter === d ? 'var(--gold)' : 'transparent',
                color: filter === d ? 'var(--dark-bg)' : 'var(--silver)',
              }}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((coach) => (
            <article
              key={coach.name}
              className="group border overflow-hidden transition-all duration-200 hover:border-gold/50 flex flex-col"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Image */}
              <div
                className="relative h-72 overflow-hidden shrink-0"
                style={{
                  backgroundColor: 'var(--dark-bg)',
                }}
              >
                <Image
                  src={coach.image || "/images/coach-placeholder.jpg"}
                  alt={coach.name}
                  fill
                  className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Disciplines */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                  {coach.disciplines.map((d) => (
                    <span
                      key={d}
                      className="text-xs font-semibold px-2 py-0.5"
                      style={{ backgroundColor: 'rgba(0,0,0,0.75)', color: 'var(--gold)' }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1" style={{ backgroundColor: 'var(--card)' }}>
                <div>
                  <h2 className="text-xl font-bold uppercase tracking-wide mb-1">{coach.name}</h2>
                  <p className="text-sm font-medium" style={{ color: 'var(--gold)' }}>{coach.title}</p>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: 'var(--silver)' }}>{coach.bio}</p>

                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--silver)' }}>
                      Достижения
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {coach.achievements.map((a) => (
                      <li key={a} className="text-xs flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: 'var(--gold)' }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <Clock className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
                  <span className="text-xs" style={{ color: 'var(--silver)' }}>{coach.experience}</span>
                </div>

                <Link
                  href="/contacts"
                  className="mt-2 block text-center py-3 text-sm font-bold uppercase tracking-widest border transition-all hover:bg-gold hover:text-dark-bg hover:border-gold"
                  style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
                >
                  Записаться к тренеру
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
