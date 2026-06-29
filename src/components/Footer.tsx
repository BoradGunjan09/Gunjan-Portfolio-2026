'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Heart } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export function Footer() {
  const [showScrollTop, setShowScrollTop] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/30 bg-card/10 py-12 overflow-hidden select-none">
      <div className="max-w-[1280px] w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-left">
        
        {/* Logo and Copyright Info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center md:text-left">
          <span className="text-base font-display font-extrabold tracking-tight text-text">
            GB
          </span>
          <span className="text-xs font-semibold text-text/50 hidden sm:inline-block">|</span>
          <p className="text-xs font-semibold text-text/60 flex items-center justify-center gap-1.5">
            <span>© {currentYear} Gunjan Borad. Made with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in Gujarat, India.</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/60 hover:text-primary transition-colors hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/60 hover:text-primary transition-colors hover:scale-105"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Floating Back-To-Top Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0.5,
            y: showScrollTop ? 0 : 30,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/20 hover:shadow-primary/35 border border-white/10 hover:scale-[1.03] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </motion.button>
      </div>
    </footer>
  )
}
