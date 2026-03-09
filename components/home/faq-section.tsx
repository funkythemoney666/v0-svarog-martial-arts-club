'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Можно ли начать заниматься без опыта?',
    a: 'Да, конечно. Большинство наших учеников начинали с нуля. Тренеры работают с каждым новичком индивидуально, объясняя базовую технику с самого начала.',
  },
  {
    q: 'Что нужно для первой тренировки?',
    a: 'На первую тренировку достаточно удобной спортивной одежды и сменной обуви. Всё необходимое снаряжение (перчатки, бинты) можно взять в прокат или приобрести у нас.',
  },
  {
    q: 'Сколько раз в неделю нужно тренироваться?',
    a: 'Для поддержания формы хватит 2 раз в неделю. Для прогресса и подготовки к соревнованиям — 3–5 раз. Тренер составит оптимальный план под ваши цели.',
  },
  {
    q: 'С какого возраста берёте детей?',
    a: 'Детские группы начинаются с 6 лет. Для самых маленьких у нас специальная программа с акцентом на физическое развитие, дисциплину и базовые навыки единоборств.',
  },
  {
    q: 'Есть ли женские группы?',
    a: 'Да. Тренировки в смешанных группах, но тренеры всегда учитывают особенности физической подготовки. В тайском боксе и грэпплинге активно занимаются женщины.',
  },
  {
    q: 'Можно ли заморозить абонемент?',
    a: 'Да, абонемент можно заморозить на период болезни или отпуска. Условия уточняйте у администратора.',
  },
  {
    q: 'Готовите ли к соревнованиям?',
    a: 'Да, это одно из ключевых направлений клуба. Наши спортсмены выступают на городских, региональных и российских турнирах.',
  },
  {
    q: 'Есть ли пробное занятие?',
    a: 'Да! Первая пробная тренировка бесплатна. Запишитесь через форму или позвоните нам — мы подберём удобное время.',
  },
  {
    q: 'Какие есть раздевалки и душевые?',
    a: 'В клубе есть раздевалки и душевые кабины раздельно для мужчин и женщин. Всё чисто и в порядке.',
  },
  {
    q: 'Как записаться на тренировку?',
    a: 'Позвоните нам по номеру +7 (495) 474-82-94, напишите в мессенджер или заполните форму на сайте. Мы ответим в течение часа.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              Вопросы
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display uppercase tracking-wide text-balance">
            Часто задаваемые <span style={{ color: 'var(--gold)' }}>вопросы</span>
          </h2>
        </div>

        <div className="flex flex-col divide-y" style={{ borderColor: 'var(--border)' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b" style={{ borderColor: 'var(--border)' }}>
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className={`text-sm font-semibold uppercase tracking-wide transition-colors ${open === i ? 'text-gold' : 'text-foreground group-hover:text-gold'}`}
                  style={{ color: open === i ? 'var(--gold)' : undefined }}>
                  {faq.q}
                </span>
                <span
                  className="shrink-0 w-7 h-7 flex items-center justify-center border transition-all"
                  style={{
                    borderColor: open === i ? 'var(--gold)' : 'var(--border)',
                    color: open === i ? 'var(--gold)' : 'var(--silver)',
                  }}
                >
                  {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0' }}
              >
                <p className="pb-5 text-sm leading-relaxed" style={{ color: 'var(--silver)' }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
