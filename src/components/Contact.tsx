'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export function Contact() {
  const [form, setForm] = React.useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = React.useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Quick validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error')
      setErrorMsg('Please fill in all the fields.')
      return
    }

    setStatus('submitting')

    try {
      // Simulate API submit delay
      await new Promise((resolve) => setTimeout(resolve, 2000))
      
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      
      // Clear success notification after 5s
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden border-t border-border/30">
      <div className="max-w-[1280px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* Left Column - Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-5 space-y-8 text-left"
        >
          <div className="space-y-3">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">Contact</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text">
              Let's Connect
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          <p className="text-text/75 text-base leading-relaxed font-medium">
            Have a project in mind or want to discuss opportunities? Feel free to reach out. I'm always open to new challenges and creative collaborations.
          </p>

          {/* Details list */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm text-primary">
                <Mail className="w-5 h-5 animate-float" />
              </div>
              <div>
                <span className="block text-xs font-bold text-text/50 uppercase tracking-wider">Email Me</span>
                <a href="mailto:gunjanborad14@gmail.com" className="text-sm font-semibold text-text hover:text-primary transition-colors">
                  gunjanborad14@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm text-primary">
                <Phone className="w-5 h-5 animate-float-delayed" />
              </div>
              <div>
                <span className="block text-xs font-bold text-text/50 uppercase tracking-wider">Call Me</span>
                <a href="tel:+919998887776" className="text-sm font-semibold text-text hover:text-primary transition-colors">
                  +91 99988 87776
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm text-primary">
                <MapPin className="w-5 h-5 animate-float" />
              </div>
              <div>
                <span className="block text-xs font-bold text-text/50 uppercase tracking-wider">Location</span>
                <span className="text-sm font-semibold text-text/80">
                  Gujarat, India
                </span>
              </div>
            </div>
          </div>

          {/* Social icons links */}
          <div className="flex space-x-3 pt-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border bg-card/40 hover:bg-card hover:border-primary/50 text-text/80 hover:text-primary flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-border bg-card/40 hover:bg-card hover:border-primary/50 text-text/80 hover:text-primary flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-7 w-full"
        >
          <div className="p-8 md:p-10 rounded-3xl glass-panel border border-border shadow-xl relative">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-text/70 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card/25 focus:bg-card text-text placeholder-text/40 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-text/70 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3.5 rounded-xl border border-border bg-card/25 focus:bg-card text-text placeholder-text/40 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-text/70 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion"
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-card/25 focus:bg-card text-text placeholder-text/40 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-text/70 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project idea..."
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3.5 rounded-xl border border-border bg-card/25 focus:bg-card text-text placeholder-text/40 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                />
              </div>

              {/* Status Notifications */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-semibold"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message was sent successfully.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm font-semibold"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center space-x-2 group disabled:opacity-75 disabled:scale-100 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
