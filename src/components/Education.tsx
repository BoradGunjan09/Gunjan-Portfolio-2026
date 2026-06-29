'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const EDUCATION_ITEMS = [
  {
    degree: 'Bachelor of Engineering (IT)',
    institution: 'Gujarat Technological University',
    period: '2020 - 2024',
    gradeType: 'SPI',
    gradeValue: '7.78 / 10',
    details: 'Focused on Computer Programming, Web Engineering, Database Management Systems, Software Engineering, and Data Structures.',
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'GSEB (Science Stream)',
    period: '2019 - 2020',
    gradeType: 'Percentage',
    gradeValue: '77.69%',
    details: 'Completed senior secondary education focusing on Physics, Chemistry, and Mathematics (Science Group).',
  },
]

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 overflow-hidden border-t border-border/30">
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-20 space-y-3"
        >
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Milestones</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text">
            Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl glass-card border border-border/60 hover:border-primary/45 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between text-left group glow-card"
            >
              <div className="space-y-6">
                {/* Header Icon + Degree */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-extrabold text-text group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-text/70">
                      {item.institution}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center shrink-0 text-primary shadow-sm group-hover:scale-105 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 animate-float" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text/65 leading-relaxed font-medium">
                  {item.details}
                </p>
              </div>

              {/* Date & Grade stats line */}
              <div className="mt-8 pt-5 border-t border-border/30 flex flex-wrap justify-between items-center gap-4">
                <div className="inline-flex items-center space-x-1.5 text-xs text-text/60 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span>{item.period}</span>
                </div>

                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/10 text-primary">
                  <Award className="w-4 h-4 text-secondary shrink-0" />
                  <span className="text-xs font-extrabold uppercase tracking-wide">
                    {item.gradeType}: {item.gradeValue}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
