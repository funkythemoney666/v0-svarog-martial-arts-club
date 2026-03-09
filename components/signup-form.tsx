'use client'

import { useState } from 'react'

const directions = [
  'Бокс',
  'ММА',
  'Грэпплинг / BJJ',
  'Тайский бокс',
  'Детский рукопашный бой',
  'Штурмовой рукопашный бой',
  'Ножевой бой',
  'Не определился',
]

interface SignupFormProps {
  dark?: boolean
}

export function SignupForm({ dark = false }: SignupFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  const inputClass = `w-full px-4 py-3 text-sm border outline-none transition-all focus:border-gold ${
    dark
      ? 'bg-[var(--dark-surface)] border-[var(--dark-border)] text-foreground placeholder:text-[var(--silver)]'
      : 'bg-background border-border text-foreground placeholder:text-muted-foreground'
  }`

  if (submitted) {
    return (
      <div
        className="text-center py-10 px-6 border"
        style={{ borderColor: 'var(--gold)', backgroundColor: dark ? 'var(--dark-surface)' : 'var(--card)' }}
      >
        <div className="text-4xl mb-3 font-display tracking-wider" style={{ color: 'var(--gold)' }}>
          ✓
        </div>
        <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
        <p className="text-sm" style={{ color: 'var(--silver)' }}>
          Наш тренер свяжется с вами в ближайшее время.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Ваше имя *"
        required
        className={inputClass}
        style={{ borderRadius: 'var(--radius)' }}
      />
      <input
        type="tel"
        placeholder="Телефон *"
        required
        className={inputClass}
        style={{ borderRadius: 'var(--radius)' }}
      />
      <select
        required
        className={inputClass}
        style={{ borderRadius: 'var(--radius)' }}
        defaultValue=""
      >
        <option value="" disabled>Направление *</option>
        {directions.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <textarea
        placeholder="Сообщение (необязательно)"
        rows={3}
        className={inputClass}
        style={{ borderRadius: 'var(--radius)', resize: 'none' }}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 text-sm font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-60"
        style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)', borderRadius: 'var(--radius)' }}
      >
        {loading ? 'Отправляем...' : 'Записаться'}
      </button>
      <p className="text-xs text-center" style={{ color: 'var(--silver)' }}>
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  )
}
