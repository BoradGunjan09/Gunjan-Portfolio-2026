'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Palette, Code, Smartphone, Globe, Cpu, Layout, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    title: 'UI/UX Design',
    desc: 'Creating gorgeous, modern, and intuitive wireframes and interactive prototypes in Figma, focusing on layout usability and design system structures.',
    icon: Palette,
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]',
    iconColor: 'text-pink-500',
  },
  {
    title: 'Frontend Development',
    desc: 'Building responsive, fast-loading, SEO-friendly, and semantic templates using clean HTML5, modern CSS/SCSS, and raw ES6 JavaScript.',
    icon: Code,
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(79,70,229,0.25)]',
    iconColor: 'text-indigo-500',
  },
  {
    title: 'React Development',
    desc: 'Engineering interactive, component-driven web applications using React, Next.js, Framer Motion transitions, and Tailwind CSS design tokens.',
    icon: Cpu,
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]',
    iconColor: 'text-cyan-500',
  },
  {
    title: 'WordPress Development',
    desc: 'Designing bespoke PHP child themes, visual CMS page builder blocks, and custom fields to give clients autonomous layout controls.',
    icon: Globe,
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]',
    iconColor: 'text-emerald-500',
  },
  {
    title: 'Laravel Frontend',
    desc: 'Integrating modular Blade structures, tailwind styles, client validations, and dynamic AJAX requests inside Laravel applications.',
    icon: Layout,
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.25)]',
    iconColor: 'text-rose-500',
  },
  {
    title: 'Responsive Websites',
    desc: 'Ensuring your site renders and functions perfectly across all device viewports: from small smartphone screens up to high-DPI desktop setups.',
    icon: Smartphone,
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]',
    iconColor: 'text-amber-500',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden border-t border-border/30">
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-20 space-y-3"
        >
          <span className="text-sm font-bold tracking-widest text-primary uppercase">Offerings</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text">
            My Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group p-8 rounded-3xl glass-card border border-border/60 hover:border-primary/45 transition-all duration-300 relative flex flex-col justify-between ${srv.glowColor}`}
            >
              <div className="space-y-6 text-left">
                {/* Icon wrapper with hover scale */}
                <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-sm text-text/90 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300">
                  <srv.icon className={`w-7 h-7 ${srv.iconColor} group-hover:animate-float`} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-text group-hover:text-primary transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-text/70 leading-relaxed font-medium">
                    {srv.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Quick-Action indicator */}
              <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Request service info</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
