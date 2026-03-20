import { Phone, Mail, MapPin, Clock, Train, Car } from 'lucide-react'
import { SignupForm } from '@/components/signup-form'

const contactCards = [
  {
    icon: MapPin,
    label: 'Адрес',
    lines: ['г. Москва, ул. Малыгина,', 'дом 3, строение 2'],
    note: 'СВАО, рядом с ВДНХ',
  },
  {
    icon: Phone,
    label: 'Телефоны',
    lines: ['+7 (495) 474-82-94', '+7 (916) 231-32-20'],
    href1: 'tel:+74954748294',
    href2: 'tel:+79162313220',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@svarog-club.ru'],
    href1: 'mailto:info@svarog-club.ru',
  },
  {
    icon: Clock,
    label: 'Часы работы',
    lines: ['Пн–Пт: 08:00–22:00', 'Суббота: 09:00–20:00', 'Воскресенье: 09:00–18:00'],
    note: 'Утренние тренировки — по записи',
  },
]

const directions = [
  {
    icon: Train,
    title: 'От метро Свиблово',
    desc: 'Выход из метро, далее автобус №61, №71 или маршрутка до остановки «Улица Малыгина». Время в пути — около 10 минут.',
  },
  {
    icon: Train,
    title: 'От метро Бабушкинская',
    desc: 'Автобус №93, №181 до остановки «Улица Малыгина». Время в пути — около 15 минут.',
  },
  {
    icon: Train,
    title: 'От метро Медведково',
    desc: 'Автобус №50, №181 до остановки «Улица Малыгина». Время в пути — около 20 минут.',
  },
  {
    icon: Train,
    title: 'От платформы Лось',
    desc: 'Выход с платформы, далее пешком около 10 минут по улице Малыгина до дома 3, строение 2.',
  },
  {
    icon: Car,
    title: 'На автомобиле',
    desc: 'Есть бесплатная парковка рядом со зданием.',
  },
]

export function ContactsContent() {
  return (
    <>
      {/* Contact info section */}
      <section
        className="py-16 lg:py-20"
        style={{
          backgroundColor: 'var(--dark-bg)',
          backgroundImage: 'url(/images/bg-black-pattern.png)',
          backgroundSize: 'auto',
          backgroundPosition: 'top left',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {contactCards.map(({ icon: Icon, label, lines, note, href1, href2 }) => (
              <div
                key={label}
                className="p-6 border flex flex-col gap-3 backdrop-blur-sm"
                style={{ borderColor: 'var(--dark-border)', backgroundColor: 'rgba(18, 18, 18, 0.6)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border"
                  style={{ borderColor: 'var(--dark-border)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  {label}
                </span>
                <div className="flex flex-col gap-1">
                  {lines.map((line, i) => {
                    const href = i === 0 ? href1 : i === 1 ? href2 : undefined
                    if (href) {
                      return (
                        <a
                          key={line}
                          href={href}
                          className="text-sm font-medium transition-colors hover:text-gold"
                          style={{ color: 'white' }}
                        >
                          {line}
                        </a>
                      )
                    }
                    return (
                      <span key={line} className="text-sm font-medium" style={{ color: 'white' }}>
                        {line}
                      </span>
                    )
                  })}
                </div>
                {note && (
                  <p className="text-xs" style={{ color: 'var(--silver)' }}>{note}</p>
                )}
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div
            className="w-full h-80 flex items-center justify-center border mb-14 backdrop-blur-sm"
            style={{
              borderColor: 'var(--dark-border)',
              backgroundColor: 'rgba(18, 18, 18, 0.6)',
            }}
          >
            <div className="text-center">
              <MapPin className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--gold)' }} />
              <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: 'white' }}>
                ул. Малыгина, д. 3, стр. 2
              </p>
              <p className="text-xs mb-4" style={{ color: 'var(--silver)' }}>СВАО, Москва</p>
              <a
                href="https://yandex.ru/maps/?text=Москва+улица+Малыгина+3+строение+2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
              >
                Открыть на Яндекс.Картах
              </a>
            </div>
          </div>

          {/* Directions */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Как добраться
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {directions.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 border backdrop-blur-sm"
                  style={{
                    borderColor: 'var(--dark-border)',
                    backgroundColor: 'rgba(18, 18, 18, 0.6)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                    <span className="text-sm font-bold uppercase tracking-wide" style={{ color: 'white' }}>
                      {title}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--silver)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                  Запись
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display uppercase tracking-wide text-balance mb-5">
                Запишитесь на <span style={{ color: 'var(--gold)' }}>тренировку</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--silver)' }}>
                Оставь��е заявку — тренер свяжется с вами и подберёт удобное время для первой пробной тренировки.
              </p>
              <div className="p-6 border-l-2" style={{ borderColor: 'var(--gold)', backgroundColor: 'var(--card)' }}>
                <p className="text-sm font-semibold mb-1">Пробная тренировка — бесплатно</p>
                <p className="text-sm" style={{ color: 'var(--silver)' }}>
                  Для новых учеников первая тренировка проводится бесплатно. Приходите и убедитесь в качестве лично.
                </p>
              </div>
            </div>
            <div
              className="p-8 border"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
            >
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
