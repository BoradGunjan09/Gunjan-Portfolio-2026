'use client'

import * as React from 'react'

export function CursorGlow() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = React.useState(true)

  React.useEffect(() => {
    const checkDevice = () => {
      const mobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      setIsMobile(mobile)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkDevice)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 mix-blend-screen opacity-100 dark:opacity-80"
      style={{
        background: `radial-gradient(550px at ${position.x}px ${position.y}px, var(--cursor-glow-color), transparent 80%)`,
      }}
    />
  )
}
