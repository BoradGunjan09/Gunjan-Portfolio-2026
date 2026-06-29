'use client'

import * as React from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { value: '2.5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '10+', label: 'Happy Clients' },
  { value: '100%', label: 'Client Satisfaction' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden border-t border-border/30">
      <div className="max-w-[1280px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Intro Copy */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-3">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Discover</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <div className="space-y-4 text-text/75 text-base md:text-lg leading-relaxed font-medium">
            <p>
              I'm a Frontend Developer and Web Designer with over 2.5 years of experience building modern, responsive, and user-friendly websites.
            </p>
            <p>
              I enjoy transforming complex UI/UX design wireframes into pixel-perfect, highly responsive interfaces while maintaining strict accessibility standards, fast performance benchmarks, and clean, modular code.
            </p>
            <p>
              My tech stack focuses on building scalable components and interactions using <span className="text-primary font-semibold">React</span>, <span className="text-primary font-semibold">Tailwind CSS</span>, <span className="text-primary font-semibold">Bootstrap</span>, <span className="text-primary font-semibold">WordPress</span>, <span className="text-primary font-semibold">Laravel</span>, and <span className="text-primary font-semibold">GSAP</span>.
            </p>
          </div>
        </motion.div>

        {/* Right Column - 4 Glass Stats Cards */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 relative">
          {/* Subtle Ambient BG Glow behind cards */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/15 blur-[60px] rounded-full pointer-events-none" />

          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-6 md:p-8 rounded-2xl glass-card flex flex-col items-center justify-center text-center select-none shadow-sm hover:shadow-xl border border-border/60 hover:border-primary/50 hover:bg-card/90 transition-all duration-300 group overflow-hidden"
            >
              {/* Card Corner accent decoration */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="text-3xl md:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-semibold text-text/65 mt-2 tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
