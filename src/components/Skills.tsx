'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Monitor, Server, Wrench, CheckCircle } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend Development',
    icon: Monitor,
    color: 'from-blue-500/20 to-indigo-500/20 dark:from-blue-900/20 dark:to-indigo-900/10',
    skills: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'React',
      'Bootstrap',
      'Tailwind CSS',
      'Material UI',
      'GSAP',
    ],
  },
  {
    title: 'Backend & CMS',
    icon: Server,
    color: 'from-purple-500/20 to-pink-500/20 dark:from-purple-900/20 dark:to-pink-900/10',
    skills: ['Laravel', 'WordPress', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Tools & Design',
    icon: Wrench,
    color: 'from-cyan-500/20 to-emerald-500/20 dark:from-cyan-900/20 dark:to-emerald-900/10',
    skills: [
      'Figma',
      'Photoshop',
      'Git',
      'GitHub',
      'Responsive Design',
      'UI/UX Design',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden border-t border-border/30">
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16 space-y-3"
        >
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text">
            My Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-3xl glass-card overflow-hidden shadow-sm hover:shadow-2xl border border-border/60 hover:border-primary/50 transition-all duration-300 glow-card"
            >
              {/* Card Header with Accent Gradient */}
              <div className={`p-6 md:p-8 bg-gradient-to-br ${category.color} border-b border-border/40 flex items-center space-x-4`}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-background border border-border shadow-sm text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold text-text">
                  {category.title}
                </h3>
              </div>

              {/* Skills badges list */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <ul className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.li
                      key={sIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + sIdx * 0.05 }}
                      className="flex items-center space-x-2 text-sm text-text/80 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom Card Design Accent */}
                <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-xs text-text/50 font-semibold tracking-wide uppercase">
                  <span>Professional Grade</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
