import Link from 'next/link'
import { Phone, MapPin } from 'lucide-react'
import { SignupForm } from '@/components/signup-form'

export function CtaSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--dark-bg)',
        backgroundImage: 'url(/images/bg-black-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ backgroundColor: 'var(--gold)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10" style={{ backgroundColor: 'var(--gold)' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Записаться
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-display uppercase tracking-wide text-balance leading-none mb-6"
              style={{ color: 'white' }}
            >
              Запишитесь на тренировку в <span style={{ color: 'var(--gold)' }}>«Сварог»</span>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Неважно, новичок вы или опытный спортсмен — в «Сварог» найдётся место для каждого. Приходите на пробную тренировку и убедитесь в этом лично.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+74954748294"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border shrink-0"
                  style={{ borderColor: 'var(--dark-border)' }}
                >
                  <Phone className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--silver)' }}>Телефон</div>
                  <div className="text-sm font-semibold group-hover:text-gold transition-colors" style={{ color: 'white' }}>
                    +7 (495) 474-82-94
                  </div>
                </div>
              </a>
              <a
                href="tel:+79162313220"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border shrink-0"
                  style={{ borderColor: 'var(--dark-border)' }}
                >
                  <Phone className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--silver)' }}>Телефон</div>
                  <div className="text-sm font-semibold group-hover:text-gold transition-colors" style={{ color: 'white' }}>
                    +7 (916) 231-32-20
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 flex items-center justify-center border shrink-0"
                  style={{ borderColor: 'var(--dark-border)' }}
                >
                  <MapPin className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--silver)' }}>Адрес</div>
                  <div className="text-sm font-semibold" style={{ color: 'white' }}>
                    ул. Малыгина, д. 3, стр. 2
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="p-8 border backdrop-blur-sm"
            style={{
              borderColor: 'var(--dark-border)',
              backgroundColor: 'rgba(18, 18, 18, 0.6)',
            }}
          >
            <h3 className="text-xl font-bold uppercase tracking-wide mb-6" style={{ color: 'white' }}>
              Оставить заявку
            </h3>
            <SignupForm dark />
          </div>
        </div>
      </div>
    </section>
  )
}
