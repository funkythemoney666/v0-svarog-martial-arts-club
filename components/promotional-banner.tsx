'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'

type BannerProps = {
  schedule: boolean
  onDismiss: () => void
}

function BannerDialog({ schedule, onDismiss }: BannerProps) {
  const [open, setOpen] = useState(true)
  const dismiss = () => {
    setOpen(false)
    onDismiss()
  }

  return (
    <Dialog open={open} onOpenChange={(nextOpen) => { if (!nextOpen) dismiss() }}>
      <DialogContent
        showCloseButton={false}
        className="max-w-[calc(100vw-2rem)] gap-0 overflow-hidden p-0 sm:max-w-[calc(100vw-2rem)]"
        style={{ width: `min(calc(100vw - 2rem), calc((100dvh - 2rem) * ${schedule ? 941 / 1672 : 2 / 3}))` }}
      >
        <DialogTitle className="sr-only">
          {schedule ? 'Пробное занятие по ММА и грэпплингу' : 'Акция клуба Сварог'}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {schedule
            ? 'Бесплатное пробное занятие по ММА и грэпплингу. Понедельник, среда, пятница. Телефоны: +7 (495) 474-82-94 и +7 (916) 231-32-20. Москва, улица Малыгина, дом 3, строение 2.'
            : 'Акция: для тех, кто ранее занимался в клубе, — 6 500 рублей; для новых посетителей — 7 000 рублей; для детей — 6 000 рублей.'}
          {' Нажмите на баннер или крестик, чтобы закрыть его. Также можно нажать Escape.'}
        </DialogDescription>
        <DialogClose asChild>
          <button type="button" aria-label="Закрыть баннер нажатием на изображение" className="block cursor-pointer focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-4px]">
            <img
              src={schedule ? '/images/promo-schedule.png' : '/images/promo-welcome.png'}
              alt={schedule ? 'Бесплатное пробное занятие: ММА и грэпплинг в клубе Сварог' : 'Акция клуба Сварог: специальные цены для взрослых и детей'}
              className="block h-auto max-h-[calc(100dvh-2rem)] w-auto max-w-full object-contain"
            />
          </button>
        </DialogClose>
        <DialogClose asChild>
          <button type="button" aria-label="Закрыть рекламный баннер" className="absolute right-2 top-2 flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg focus-visible:outline-2 focus-visible:outline-ring">
            <X className="size-5" aria-hidden="true" />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export function PromotionalBanner() {
  const pathname = usePathname()
  const [welcomeDismissed, setWelcomeDismissed] = useState(false)
  const schedule = pathname?.replace(/\/$/, '') === '/schedule-prices'

  if (!schedule && welcomeDismissed) return null

  return (
    <BannerDialog
      key={schedule ? pathname : 'welcome'}
      schedule={schedule}
      onDismiss={() => setWelcomeDismissed(true)}
    />
  )
}
