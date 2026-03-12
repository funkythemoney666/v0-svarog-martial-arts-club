'use client'

import { useState } from 'react'

type Class = {
  time: string
  discipline: string
  coach?: string
  tag?: string
}

type DaySchedule = {
  day: string
  shortDay: string
  dayIndex: number
  classes: Class[]
}

const mondayClasses: Class[] = [
  { time: '16:00', discipline: 'Грэпплинг', tag: 'дети' },
  { time: '17:30', discipline: 'Тайский бокс', coach: 'Михаил', tag: 'дети' },
  { time: '17:30', discipline: 'Рукопашный бой', coach: 'Андрей Титаев', tag: 'дети' },
  { time: '19:00', discipline: 'Бокс', coach: 'Степан Степанович' },
  { time: '19:00', discipline: 'Тайский бокс', coach: 'Михаил' },
  { time: '20:30', discipline: 'ММА', coach: 'Валентин Данилэ' },
  { time: '21:00', discipline: 'Грэпплинг', coach: 'Дмитрий Новиков' },
  { time: '22:00', discipline: 'Бокс', coach: 'Степан Степанович' },
]

const tuesdayClasses: Class[] = [
  { time: '11:00', discipline: 'Бокс', coach: 'Степан Степанович', tag: 'по записи' },
  { time: '17:30', discipline: 'Бокс', coach: 'Никитин Никита', tag: 'дети' },
  { time: '17:30', discipline: 'Капоэйра' },
  { time: '19:00', discipline: 'Бокс', coach: 'Степан Степанович' },
  { time: '19:00', discipline: 'Рукопашный бой', coach: 'Андрей Титаев', tag: 'дети' },
  { time: '20:30', discipline: 'Рукопашный бой', coach: 'Валентин Данилэ' },
  { time: '21:00', discipline: 'Тайский бокс', coach: 'Михаил' },
]

const schedule: DaySchedule[] = [
  { day: 'Понедельник', shortDay: 'Пн', dayIndex: 1, classes: mondayClasses },
  { day: 'Вторник', shortDay: 'Вт', dayIndex: 2, classes: tuesdayClasses },
  { day: 'Среда', shortDay: 'Ср', dayIndex: 3, classes: mondayClasses },
  { day: 'Четверг', shortDay: 'Чт', dayIndex: 4, classes: tuesdayClasses },
  { day: 'Пятница', shortDay: 'Пт', dayIndex: 5, classes: mondayClasses },
  {
    day: 'Суббота',
    shortDay: 'Сб',
    dayIndex: 6,
    classes: [
      { time: '10:00', discipline: 'Рукопашный бой', coach: 'Валентин Данилэ', tag: 'общая группа' },
      { time: '11:30', discipline: 'Бокс', coach: 'Никитин Никита', tag: 'дети' },
      { time: '13:00', discipline: 'Тайский бокс', coach: 'Михаил' },
      { time: '19:00', discipline: 'Бокс', coach: 'Степан Степанович' },
      { time: '21:00', discipline: 'Ножевой бой', coach: 'Юрий Шашкой' },
    ],
  },
  {
    day: 'Воскресенье',
    shortDay: 'Вс',
    dayIndex: 0,
    classes: [
      { time: '11:00', discipline: 'Открытый ковёр' },
      { time: '19:00', discipline: 'Спарринги по боксу', coach: 'Степан Степанович' },
    ],
  },
]

const disciplineColors: Record<string, string> = {
  'Бокс': 'var(--gold)',
  'ММА': '#e87c4e',
  'Грэпплинг': '#6ec6e8',
  'Тайский бокс': '#e86e6e',
  'Рукопашный бой': '#9bca6e',
  'Ножевой бой': '#b06ecc',
  'Капоэйра': '#e8c26e',
  'Открытый ковёр': 'var(--silver)',
  'Спарринги по боксу': 'var(--gold)',
}

function getColor(discipline: string): string {
  for (const key of Object.keys(disciplineColors)) {
    if (discipline.toLowerCase().includes(key.toLowerCase())) return disciplineColors[key]
  }
  return 'var(--silver)'
}

function getCurrentDayIndex(): number {
  return new Date().getDay()
}

export function ScheduleSection() {
  const todayIndex = getCurrentDayIndex()
  const defaultDay = schedule.find((d) => d.dayIndex === todayIndex) ?? schedule[0]
  const [activeDay, setActiveDay] = useState(defaultDay.day)
  const selectedDay = schedule.find((d) => d.day === activeDay) ?? schedule[0]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              График
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display uppercase tracking-wide mb-4">
            Расписание <span style={{ color: 'var(--gold)' }}>тренировок</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 text-sm" style={{ color: 'var(--silver)' }}>
            <p className="flex items-center gap-2">
              <span style={{ color: 'var(--gold)' }}>★</span>
              Утренние посещения — только по предварительной записи
            </p>
            <span className="hidden sm:block" style={{ color: 'var(--border)' }}>|</span>
            <p className="flex items-center gap-2">
              <span style={{ color: 'var(--gold)' }}>★</span>
              Расписание может меняться, уточняйте по телефону
            </p>
          </div>
        </div>

        {/* Day tabs */}
        <div className="flex overflow-x-auto gap-1 py-6 scrollbar-hide">
          {schedule.map((day) => {
            const isToday = day.dayIndex === todayIndex
            const isActive = day.day === activeDay
            return (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`shrink-0 px-4 py-2.5 text-xs font-bold uppercase tracking-wider border transition-all ${
                  isActive
                    ? 'border-gold text-dark-bg'
                    : 'border-border text-foreground hover:border-gold/50'
                }`}
                style={{
                  backgroundColor: isActive ? 'var(--gold)' : 'transparent',
                  borderColor: isActive ? 'var(--gold)' : isToday ? 'var(--gold)' : 'var(--border)',
                  color: isActive ? 'var(--dark-bg)' : isToday ? 'var(--gold)' : 'var(--foreground)',
                }}
              >
                <span className="hidden sm:inline">{day.day}</span>
                <span className="sm:hidden">{day.shortDay}</span>
                {isToday && (
                  <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full align-middle" style={{ backgroundColor: isActive ? 'var(--dark-bg)' : 'var(--gold)' }} />
                )}
              </button>
            )
          })}
        </div>

        {/* Schedule table */}
        <div
          className="border overflow-hidden"
          style={{ borderColor: 'var(--border)' }}
        >
          <div
            className="px-5 py-3 border-b flex items-center gap-3"
            style={{ backgroundColor: 'var(--dark-bg)', borderColor: 'var(--dark-border)' }}
          >
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--gold)' }}>
              {selectedDay.day}
            </span>
            {selectedDay.dayIndex === todayIndex && (
              <span
                className="text-xs font-semibold px-2 py-0.5 uppercase tracking-wide"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
              >
                Сегодня
              </span>
            )}
          </div>

          <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
            {selectedDay.classes.map((cls, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 hover:bg-card transition-colors"
              >
                {/* Time */}
                <div className="text-base font-display tracking-wide w-14" style={{ color: 'var(--gold)' }}>
                  {cls.time}
                </div>

                {/* Discipline + coach */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: getColor(cls.discipline) }}
                  >
                    {cls.discipline}
                  </span>
                  {cls.coach && (
                    <span className="text-xs" style={{ color: 'var(--silver)' }}>
                      — {cls.coach}
                    </span>
                  )}
                </div>

                {/* Tag */}
                {cls.tag && (
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 shrink-0"
                    style={{
                      color: cls.tag === 'дети' ? '#6ec6e8' : 'var(--silver)',
                      backgroundColor: cls.tag === 'дети' ? 'rgba(110,198,232,0.1)' : 'rgba(255,255,255,0.06)',
                    }}
                  >
                    {cls.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
