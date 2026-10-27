import { useState, useEffect } from 'react'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ dark, setDark }) {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // If near or at the bottom of the page, activate the last section ('contact')
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 90
      if (isAtBottom) {
        setActive('contact')
        return
      }

      const sections = links.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom > 80) {
            setActive(sections[i])
            return
          }
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setMobileOpen(false)
    setActive(href.slice(1))
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0F1013]/95 backdrop-blur-md border-b border-[#e5e7eb] dark:border-[#2E3238]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo: ~/syahrul */}
        <a
          href="#"
          className="text-base sm:text-lg font-bold tracking-tight text-[#111] dark:text-white flex items-center gap-1 group"
        >
          <span className="font-mono text-[#6b7280] dark:text-[#9CA3AF] group-hover:text-[#111] dark:group-hover:text-white transition-colors">
            ~/
          </span>
          <span>syahrul</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-7">
            {links.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => handleClick(href)}
                  className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer pb-1 ${
                    active === href.slice(1)
                      ? 'text-[#111] dark:text-white'
                      : 'text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#111] dark:bg-white transition-all duration-200 ${
                      active === href.slice(1) ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg border border-[#e5e7eb] dark:border-[#2E3238] flex items-center justify-center text-[#4b5563] dark:text-[#D1D5DB] hover:text-[#111] dark:hover:text-white hover:bg-[#f3f4f6] dark:hover:bg-[#1A1D24] transition-colors duration-200 cursor-pointer"
            aria-label="Toggle dark/light mode"
            title="Toggle theme"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile: Toggle + Touch-friendly Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="w-10 h-10 rounded-lg border border-[#e5e7eb] dark:border-[#2E3238] flex items-center justify-center text-[#4b5563] dark:text-[#D1D5DB] cursor-pointer"
            aria-label="Toggle dark/light mode"
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 rounded-lg border border-[#e5e7eb] dark:border-[#2E3238] flex items-center justify-center text-[#111] dark:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 border-b border-[#e5e7eb] dark:border-[#2E3238]' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-3 bg-white/98 dark:bg-[#0F1013]/98 backdrop-blur-xl">
          {links.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleClick(href)}
                className={`w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer ${
                  active === href.slice(1)
                    ? 'text-[#111] dark:text-white bg-[#f3f4f6] dark:bg-[#1A1D24]'
                    : 'text-[#6b7280] dark:text-[#9CA3AF] hover:bg-[#f9fafb] dark:hover:bg-[#15171D]'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
