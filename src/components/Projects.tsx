'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Layers, Code, Sparkles } from 'lucide-react'

const CATEGORIES = ['All', 'React & JS', 'CMS & PHP', 'Dashboards']

const PROJECTS = [
  {
    id: 1,
    name: 'ClassCare ERP',
    category: 'Dashboards',
    tags: ['React', 'Tailwind CSS', 'Laravel', 'MySQL'],
    bgGradient: 'from-blue-600 via-indigo-600 to-violet-600',
    shortDesc: 'A comprehensive ERP system for schools and tuition centers managing students, fee registers, and academic reporting.',
    features: [
      'Interactive student onboarding and dashboard metrics',
      'Real-time automated fees payment invoices & logging',
      'Classroom attendance logs and progress report card outputs',
      'Modular database architecture for multi-branch environments'
    ],
  },
  {
    id: 2,
    name: 'Web Builder CMS',
    category: 'React & JS',
    tags: ['React', 'GSAP', 'Tailwind CSS', 'WordPress API'],
    bgGradient: 'from-violet-600 via-purple-600 to-pink-600',
    shortDesc: 'A visual drag-and-drop website page builder with live layout previews, responsive widgets, and direct WordPress syncing.',
    features: [
      'Drag-and-drop block interface powered by GSAP dragging events',
      'Live responsive media viewport preview toggles',
      'Custom theme exportable templates and clean code compiler',
      'Optimized REST API integration with WordPress CMS back-end'
    ],
  },
  {
    id: 3,
    name: 'INFYCARD',
    category: 'React & JS',
    tags: ['HTML5', 'SCSS', 'Bootstrap', 'JavaScript'],
    bgGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    shortDesc: 'An interactive digital business card generator with custom QR codes and real-time profile traffic tracking.',
    features: [
      'Real-time profile detail updates & QR code downloads',
      'One-tap vCard saving system for mobile devices',
      'Sleek modern layouts with SCSS custom styling options',
      'Embedded traffic analytics checking link click-through metrics'
    ],
  },
  {
    id: 4,
    name: 'Bilma Stone',
    category: 'CMS & PHP',
    tags: ['WordPress', 'SCSS', 'PHP', 'jQuery'],
    bgGradient: 'from-amber-600 via-orange-600 to-red-600',
    shortDesc: 'A corporate product catalogue website for a leading stone exporting corporation featuring advanced category galleries.',
    features: [
      'Interactive stone texture catalog filter and search system',
      'Bespoke quotes generator form with automated client emails',
      'Fully responsive, SEO-ready PHP custom theme design',
      'Speed-optimized media loading and lazy loading image buffers'
    ],
  },
  {
    id: 5,
    name: 'HisabKitab',
    category: 'Dashboards',
    tags: ['React', 'Material UI', 'Tailwind CSS', 'LocalStorage'],
    bgGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    shortDesc: 'A responsive personal finance tracking dashboard with category budgeting charts and monthly exportable spreadsheet logs.',
    features: [
      'Graphical budget spending category analysis charts',
      'Interactive income & expense logging logs',
      'Offline caching and persistence via LocalStorage API',
      'CSV spreadsheet data export options for offline reports'
    ],
  },
  {
    id: 6,
    name: 'Food Delivery Website',
    category: 'React & JS',
    tags: ['React', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
    bgGradient: 'from-rose-500 via-orange-500 to-yellow-500',
    shortDesc: 'A high-fidelity landing page and food ordering UI containing smooth fluid motion transitions and a real-time cart.',
    features: [
      'Smooth scroll animations and parallax canvas product reveals',
      'Dynamic search menus filtering active food items instantly',
      'Tactile cart additions and order invoice checkout simulation',
      'Optimized responsiveness supporting mobile quick-checkout gestures'
    ],
  },
]

export function Projects() {
  const [filter, setFilter] = React.useState('All')
  const [selectedProject, setSelectedProject] = React.useState<typeof PROJECTS[0] | null>(null)

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'All') return true
    return project.category === filter
  })

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden border-t border-border/30">
      <div className="max-w-[1280px] w-full mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-lg text-left">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Works</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Categories Filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide border cursor-pointer transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                    : 'bg-card/40 border-border text-text/80 hover:bg-card/75'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative flex flex-col rounded-3xl glass-card border border-border/60 overflow-hidden hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image Mockup (Premium Gradient Screen with Floating Code Graphics) */}
                <div className={`relative h-56 w-full bg-gradient-to-tr ${project.bgGradient} flex items-center justify-center overflow-hidden p-6`}>
                  {/* Subtle Grid backdrop inside mockup */}
                  <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40" />

                  {/* Dynamic Zooming Screen Panel */}
                  <div className="w-11/12 h-5/6 rounded-xl border border-white/20 bg-black/35 backdrop-blur-md shadow-2xl p-4 flex flex-col justify-between transform group-hover:scale-[1.06] transition-transform duration-500 origin-bottom relative select-none">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                      <div className="flex space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[10px] text-white/50 font-mono tracking-tight">{project.name.toLowerCase().replace(/\s+/g, '')}.tsx</span>
                    </div>
                    
                    {/* Visual mockup symbols */}
                    <div className="flex-grow flex items-center justify-center">
                      <div className="text-white/20 flex flex-col items-center space-y-2">
                        <Code className="w-10 h-10 animate-pulse" />
                        <span className="text-[9px] uppercase tracking-widest font-bold">Interactive Module</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-white/60 font-mono pt-2 border-t border-white/10 mt-2">
                      <span>COMPILING...</span>
                      <span className="text-secondary font-bold">✓ READY</span>
                    </div>
                  </div>

                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info Area */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-card/20">
                  <div className="space-y-3">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-full bg-primary/10 border border-primary/10">
                      <Sparkles className="w-3 h-3 text-secondary mr-1 shrink-0" />
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-extrabold text-text group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-text/70 line-clamp-3 leading-relaxed font-medium">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold text-text/60 px-2 py-0.5 rounded bg-border/40"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded bg-primary/5">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details Action Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-full border border-primary/20 hover:border-primary bg-primary/5 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white text-xs font-bold tracking-wide text-primary shadow-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
              >
                {/* Modal Container */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-2xl rounded-3xl bg-background border border-border shadow-2xl overflow-hidden flex flex-col max-h-[85vh] relative"
                >
                  {/* Banner */}
                  <div className={`relative h-48 w-full bg-gradient-to-tr ${selectedProject.bgGradient} flex items-center justify-center p-6 shrink-0`}>
                    <div className="absolute inset-0 bg-black/15" />
                    
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-black/35 hover:bg-black/55 text-white border border-white/10 transition-colors cursor-pointer"
                      aria-label="Close modal"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="relative text-center text-white space-y-2">
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full border border-white/10">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-display font-extrabold">
                        {selectedProject.name}
                      </h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex-grow overflow-y-auto space-y-6">
                    {/* Description */}
                    <div className="space-y-2 text-left">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wide">Overview</h4>
                      <p className="text-sm md:text-base text-text/75 leading-relaxed font-medium">
                        {selectedProject.shortDesc}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 text-left">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wide">Core Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2.5 text-sm text-text/80 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies list */}
                    <div className="space-y-3 text-left">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wide">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-semibold text-text/80 shadow-sm"
                          >
                            <Code className="w-3.5 h-3.5 text-primary mr-1.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer Actions */}
                  <div className="p-6 border-t border-border/80 bg-card/10 flex items-center justify-end space-x-3 shrink-0">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2.5 rounded-full border border-border text-text hover:bg-card text-xs font-bold tracking-wide"
                    >
                      Close Details
                    </button>
                    <a
                      href="#contact"
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold tracking-wide shadow-md flex items-center space-x-1.5"
                    >
                      <span>Inquire About Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
