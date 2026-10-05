import { Phone, Instagram, Youtube, Send } from 'lucide-react'

const socials = [
  { label: 'Telegram', href: 'https://t.me/svarogfight', icon: Send },
  { label: 'Instagram', href: 'https://www.instagram.com/svarog_club/', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%92%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2-%D0%B51%D1%82', icon: Youtube },
  { label: 'ВКонтакте', href: 'https://vk.com/svarog_boxing', icon: null },
]

export function BookingContacts({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex flex-col gap-6 ${dark ? 'text-primary-foreground' : 'text-foreground'}`}>
      <p className="text-base leading-relaxed" style={{ color: dark ? 'var(--silver)' : 'var(--muted-foreground)' }}>Позвоните или напишите нам в соцсетях, чтобы записаться и уточнить время тренировки.</p>
      <div className="flex flex-col gap-3">
        {[
          { label: '+7 (495) 474-82-94', href: 'tel:+74954748294' },
          { label: '+7 (916) 231-32-20', href: 'tel:+79162313220' },
        ].map((phone) => (
          <a key={phone.href} href={phone.href} className="flex items-center gap-3 text-lg font-semibold text-gold hover:underline focus-visible:outline-2 focus-visible:outline-gold">
            <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
            {phone.label}
          </a>
        ))}
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide">Мы в соцсетях</h3>
      <div className="flex flex-wrap gap-3">
        {socials.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-border px-4 py-3 text-sm font-semibold hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-gold">
            {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : <span aria-hidden="true">VK</span>}
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
