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
    a: 'На первую тренировку достаточно удобной спортивной одежды и в зависимости от спортивной дисциплины может понадобится ещё другая экипировка, лучше уточнять по телефону!',
  },
  {
    q: 'Какие есть раздевалки и душевые?',
    a: 'В клубе есть раздевалки и душевые кабины раздельно для мужчин и женщин. Всё чисто и в порядке.',
  },
  {
    q: 'Есть ли пробное занятие?',
    a: 'Вы можете оплатить разовое занятие и посетить любую секцию на Ваш выбор!',
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
