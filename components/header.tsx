'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/schedule-prices', label: 'Расписание и цены' },
  { href: '/coaches', label: 'Тренеры' },
  { href: '/contacts', label: 'Контакты' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[var(--dark-border)] ${
        scrolled
          ? 'shadow-lg shadow-black/40'
          : ''
      }`}
      style={{
        backgroundColor: 'var(--dark-bg)',
        backgroundImage: 'url(/images/bg-black-pattern.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/images/svarog-logo-header.png"
              alt="Сварог"
              className="h-12 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'hover:text-gold'
                }`}
                style={{ color: pathname === link.href ? 'var(--gold)' : 'white' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+74954748294"
              className="flex items-center gap-2 text-sm hover:text-gold transition-colors"
              style={{ color: 'white' }}
            >
              <Phone className="w-4 h-4" style={{ color: 'var(--gold)' }} />
              <span>+7 (495) 474-82-94</span>
            </a>
            <Link
              href="/contacts"
              className="px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
            >
              Записаться
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded transition-colors"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            style={{ color: 'white' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          backgroundColor: 'var(--dark-bg)',
          backgroundImage: 'url(/images/bg-black-pattern.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderTop: '1px solid var(--dark-border)'
        }}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium uppercase tracking-wide py-2 border-b transition-colors ${
                pathname === link.href ? 'text-gold border-gold/30' : 'border-[var(--dark-border)] hover:text-gold'
              }`}
              style={{
                color: pathname === link.href ? 'var(--gold)' : 'white',
                borderBottomColor: pathname === link.href ? 'var(--gold)' : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+74954748294"
            className="flex items-center gap-2 py-2 hover:text-gold transition-colors"
            style={{ color: 'white' }}
          >
            <Phone className="w-4 h-4" style={{ color: 'var(--gold)' }} />
            <span>+7 (495) 474-82-94</span>
          </a>
          <Link
            href="/contacts"
            className="mt-2 w-full text-center px-5 py-3 text-sm font-bold uppercase tracking-wider"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--dark-bg)' }}
          >
            Записаться
          </Link>
        </div>
      </div>
    </header>
  )
}
