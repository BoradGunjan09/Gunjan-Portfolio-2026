'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('home')

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Active section spy
      const sections = NAV_ITEMS.map((item) => {
        const el = document.querySelector(item.href)
        if (el) {
          const rect = el.getBoundingClientRect()
          return {
            id: item.href.replace('#', ''),
            top: rect.top + window.scrollY - 150,
            bottom: rect.bottom + window.scrollY - 150,
          }
        }
        return null
      }).filter((section): section is { id: string; top: number; bottom: number } => section !== null)

      const scrollPos = window.scrollY
      const current = sections.find((s) => scrollPos >= s.top && scrollPos < s.bottom)
      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveSection(href.replace('#', ''))
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 border-b border-transparent',
          isScrolled
            ? 'bg-background/70 backdrop-blur-md shadow-md border-border/50 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-[1280px] w-full mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-2 text-xl font-display font-bold tracking-tight cursor-pointer group"
          >
            <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-secondary text-white shadow-md group-hover:scale-105 transition-transform">
              GB
            </span>
            <span className="text-text group-hover:text-primary transition-colors hidden sm:inline-block">
              Gunjan Borad
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-full transition-colors hover:text-primary cursor-pointer',
                    isActive ? 'text-primary' : 'text-text/70'
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative px-6 py-2.5 rounded-full overflow-hidden group bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 hover:scale-102"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full border border-border bg-card/40 text-text cursor-pointer hover:bg-card/75 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-49 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-background border-l border-border/80 shadow-2xl p-8 flex flex-col justify-between lg:hidden"
            >
              <div className="flex flex-col space-y-6">
                <div className="flex items-center justify-between border-b border-border/50 pb-5">
                  <span className="font-display font-bold text-lg text-text">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-card text-text border border-border"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-3">
                  {NAV_ITEMS.map((item, idx) => {
                    const isActive = activeSection === item.href.replace('#', '')
                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={cn(
                          'flex items-center px-4 py-3 rounded-xl text-base font-semibold border transition-all',
                          isActive
                            ? 'bg-primary/10 border-primary/20 text-primary'
                            : 'border-transparent text-text/75 hover:bg-card'
                        )}
                      >
                        {item.label}
                      </motion.a>
                    )
                  })}
                </nav>
              </div>

              <div className="border-t border-border/50 pt-5">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
