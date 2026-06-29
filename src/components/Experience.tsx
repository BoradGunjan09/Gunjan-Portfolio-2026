'use client'

import * as React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'

const EXPERIENCES = [
  {
    company: 'Saawahi IT Solution',
    role: 'Web Designer',
    period: '2025 - Present',
    tags: ['WordPress', 'Laravel', 'Reusable Components', 'Performance Optimization'],
    desc: 'Led frontend architectures, built responsive dashboards in Laravel, styled CMS themes in WordPress, and optimized page load performance across legacy projects.',
  },
  {
    company: 'InfyOm Technologies',
    role: 'Web Designer',
    period: '2024 - 2025',
    tags: ['Client Websites', 'Responsive UI', 'UI/UX'],
    desc: 'Created responsive layouts for modern client portfolios, designed graphic frameworks, and collaborated directly with product managers to deliver clean layouts.',
  },
  {
    company: 'NITS',
    role: 'Frontend Developer Intern',
    period: '2023 - 2024',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Pages'],
    desc: 'Assisted in building custom landing pages, performed code revisions, fixed stylesheet alignment bugs, and learned advanced responsiveness patterns.',
  },
]

export function Experience() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Track scroll progress of this container to animate the line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 md:py-32 overflow-hidden border-t border-border/30"
    >
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-20 space-y-3"
        >
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Journey</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background Line (static grey) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border/60 -translate-x-1/2" />

          {/* Active Line (glowing color animation based on scroll progress) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary origin-top -translate-x-1/2 shadow-[0_0_8px_rgba(139,92,246,0.5)]"
          />

          {/* Experience Items */}
          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={idx} className="relative flex flex-col md:flex-row md:items-center">
                  
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full border-4 border-background bg-gradient-to-r from-primary to-secondary -translate-x-1/2 z-10 shadow-md" />

                  {/* Left Side spacer/content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 ${isEven ? 'md:text-right' : 'md:order-2 md:pl-12 md:pr-0 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="glass-card p-6 md:p-8 rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
                    >
                      {/* Company & Date Header */}
                      <div className={`flex flex-col sm:flex-row ${isEven ? 'md:flex-col lg:flex-row md:justify-end md:items-end' : 'md:flex-col lg:flex-row'} sm:justify-between sm:items-center gap-2 mb-4`}>
                        <div>
                          <h3 className="text-xl font-display font-extrabold text-text group-hover:text-primary transition-colors">
                            {exp.company}
                          </h3>
                          <span className="text-sm font-semibold text-text/60">
                            {exp.role}
                          </span>
                        </div>
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-card/60 text-xs font-bold border border-border/80 text-primary">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Narrative Description */}
                      <p className="text-sm text-text/70 mb-5 leading-relaxed font-medium">
                        {exp.desc}
                      </p>

                      {/* Tech Badges / Responsibilities tags */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-primary/5 dark:bg-primary/10 border border-primary/15 text-primary"
                          >
                            <ChevronRight className="w-3 h-3 text-secondary mr-0.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty block on the opposite side to preserve spacing on large monitors */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
