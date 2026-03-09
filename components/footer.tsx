import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ backgroundColor: 'var(--dark-bg)', borderColor: 'var(--dark-border)', color: 'var(--foreground)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-display tracking-widest mb-4">
              <span style={{ color: 'var(--gold)' }}>С</span>ВАРОГ
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--silver)' }}>
              Клуб единоборств «Сварог» — современный спортивный клуб в СВАО Москвы. Мы предлагаем тренировки по боксу, ММА, грэпплингу, тайскому боксу и другим единоборствам для детей и взрослых всех уровней подготовки.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>
              Разделы
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Главная' },
                { href: '/schedule-prices', label: 'Расписание и цены' },
                { href: '/coaches', label: 'Тренеры' },
                { href: '/contacts', label: 'Контакты' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                    style={{ color: 'var(--silver)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>
              Контакты
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm" style={{ color: 'var(--silver)' }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
                <span>г. Москва, ул. Малыгина, д. 3, стр. 2</span>
              </li>
              <li>
                <a
                  href="tel:+74954748294"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
                  style={{ color: 'var(--silver)' }}
                >
                  <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>+7 (495) 474-82-94</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+79162313220"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
                  style={{ color: 'var(--silver)' }}
                >
                  <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>+7 (916) 231-32-20</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@svarog-club.ru"
                  className="flex items-center gap-2 text-sm transition-colors hover:text-gold"
                  style={{ color: 'var(--silver)' }}
                >
                  <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--gold)' }} />
                  <span>info@svarog-club.ru</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--gold)' }}>
              Мы в соцсетях
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border rounded transition-all hover:border-gold hover:text-gold"
                style={{ borderColor: 'var(--dark-border)', color: 'var(--silver)' }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border rounded transition-all hover:border-gold hover:text-gold"
                style={{ borderColor: 'var(--dark-border)', color: 'var(--silver)' }}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              {/* VK icon */}
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border rounded transition-all hover:border-gold hover:text-gold text-xs font-bold"
                style={{ borderColor: 'var(--dark-border)', color: 'var(--silver)' }}
                aria-label="ВКонтакте"
              >
                VK
              </a>
            </div>
            <p className="text-xs" style={{ color: 'var(--silver)' }}>
              Пн–Пт: 08:00–22:00
              <br />
              Сб: 09:00–20:00
              <br />
              Вс: 09:00–18:00
            </p>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t text-xs"
          style={{ borderColor: 'var(--dark-border)', color: 'var(--silver)' }}
        >
          <p>© {new Date().getFullYear()} Клуб единоборств «Сварог». Все права защищены.</p>
          <p>Москва, СВАО</p>
        </div>
      </div>
    </footer>
  )
}
