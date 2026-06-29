'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaWordpress, FaFigma } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const FLOATING_ICONS = [
  { icon: FaReact, color: 'text-[#61DAFB]', top: '10%', left: '15%', delay: 0 },
  { icon: FaHtml5, color: 'text-[#E34F26]', top: '22%', right: '10%', delay: 1.5 },
  { icon: FaCss3Alt, color: 'text-[#1572B6]', bottom: '15%', left: '10%', delay: 0.8 },
  { icon: FaJs, color: 'text-[#F7DF1E]', top: '65%', right: '8%', delay: 2.2 },
  { icon: SiTailwindcss, color: 'text-[#06B6D4]', bottom: '8%', right: '28%', delay: 1.2 },
  { icon: FaLaravel, color: 'text-[#FF2D20]', top: '48%', left: '5%', delay: 1.7 },
  { icon: FaWordpress, color: 'text-[#21759B]', top: '80%', left: '32%', delay: 0.5 },
  { icon: FaFigma, color: 'text-[#F24E1E]', top: '0%', right: '35%', delay: 2.7 },
]

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1280px] w-full mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-border bg-card/45 backdrop-blur-sm text-sm font-medium text-text/80 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>👋 Hi, I'm Gunjan Borad</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-text leading-[1.15]"
            >
              Building digital <br />
              <span className="text-gradient font-black dark:text-shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                interfaces that matter.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text/70 leading-relaxed max-w-xl font-medium"
            >
              I am a Frontend Developer and UI/UX Designer who creates beautiful, interactive, and high-performance websites using React, Tailwind CSS, WordPress, and Laravel.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={(e) => handleScroll(e, '#projects')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:scale-[1.03] transition-all flex items-center space-x-2 group cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector('#contact')
                if (target) {
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 80,
                    behavior: 'smooth',
                  })
                }
              }}
              className="px-8 py-4 rounded-full border border-border bg-card/30 hover:bg-card/75 text-text font-bold tracking-wide shadow-sm hover:shadow-md hover:scale-[1.03] transition-all flex items-center space-x-2 group"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Side Graphic with Image & Tech Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96"
          >
            {/* Pulsing Outer Gradient Blob */}
            <div className="absolute inset-0 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-gradient-to-tr from-primary to-secondary opacity-25 dark:opacity-30 blur-[10px] animate-blob" />
            
            {/* Spinning Second Blob */}
            <div className="absolute inset-4 rounded-[50%_40%_30%_70%_/_50%_60%_40%_60%] bg-gradient-to-br from-secondary to-cyan-500 opacity-20 dark:opacity-25 blur-[12px] animate-blob-delayed" />

            {/* Profile Image Wrapper */}
            <div className="absolute inset-8 rounded-[60%_40%_55%_45%_/_45%_55%_40%_60%] overflow-hidden border-2 border-border/40 dark:border-border/20 shadow-2xl glass-card flex items-center justify-center">
              <Image
                src="/profile.jpg"
                alt="Gunjan Borad"
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover scale-[1.03]"
              />
            </div>

            {/* Slow Floating Tech Badges */}
            {FLOATING_ICONS.map((item, idx) => (
              <motion.div
                key={idx}
                style={{
                  position: 'absolute',
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                }}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4 + idx,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
                className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl glass-card text-2xl md:text-3xl shadow-lg border border-border/80 dark:border-border/30 hover:scale-110 hover:border-primary/50 transition-all duration-300"
              >
                <item.icon className={item.color} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
