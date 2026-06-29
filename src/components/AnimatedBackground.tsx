'use client'

import * as React from 'react'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-background">
      {/* Animated blurred circles (blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-indigo-500/15 dark:bg-purple-900/15 blur-[120px] animate-blob" />
      <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] rounded-full bg-violet-500/20 dark:bg-cyan-900/15 blur-[130px] animate-blob-delayed" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[35vw] h-[35vw] max-w-[450px] rounded-full bg-purple-500/10 dark:bg-purple-800/10 blur-[100px] animate-pulse-slow" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-bg" />

      {/* Linear Gradient lines */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/40 to-background" />
      
      {/* Decorative vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-border/50 hidden md:block" />
      <div className="absolute right-[10%] top-0 bottom-0 w-[1px] bg-border/50 hidden md:block" />
    </div>
  )
}
