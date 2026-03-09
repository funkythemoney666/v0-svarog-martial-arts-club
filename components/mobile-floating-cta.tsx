'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function MobileFloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 lg:hidden transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <Link
        href="/contacts"
        className="flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-widest shadow-xl shadow-black/60"
        style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
      >
        Записаться на пробную тренировку
      </Link>
    </div>
  )
}
