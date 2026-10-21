'use client'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, useState, type ReactNode, type PointerEvent } from 'react'

/** Image that never leaves a hole: falls back to a gold-lit gradient if the URL fails. */
export function SmartImg({ src, alt, className = '', eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const [bad, setBad] = useState(false)
  if (bad)
    return (
      <div role="img" aria-label={alt}
        className={`bg-[radial-gradient(circle_at_30%_20%,rgba(255,184,0,0.28),transparent_55%),linear-gradient(160deg,#171a24,#07080B)] ${className}`} />
    )
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setBad(true)} className={className} />
}

/** Image frame with scroll-triggered clip-path wipe, hover scale, halo and chromatic shift. */
export function ClipImage({ src, alt, className = '', eager = false, delay = 0 }: { src: string; alt: string; className?: string; eager?: boolean; delay?: number }) {
  return (
    <div className={`frame group relative ${className}`}>
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gold/0 blur-3xl transition-colors duration-700 group-hover:bg-gold/25" />
      <motion.div
        className="duotone relative h-full w-full overflow-hidden rounded-[inherit]"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 1.1, delay, ease: [0.77, 0, 0.175, 1] }}
      >
        <SmartImg src={src} alt={alt} eager={eager} className="chroma h-full w-full object-cover" />
      </motion.div>
    </div>
  )
}

/** Glass surface whose border shine follows the pointer. */
export function Glass({ children, className = '' }: { children: ReactNode; className?: string }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return <div onPointerMove={onMove} className={`glass-x ${className}`}>{children}</div>
}

/** 3D tilt that follows the cursor (mouse only, off with reduced motion). */
export function Tilt({ children, className = '', max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sp = { stiffness: 170, damping: 16, mass: 0.6 }
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), sp)
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), sp)
  return (
    <motion.div
      className={className}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 1100, transformStyle: 'preserve-3d' }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}

/** Link that leans toward the cursor. */
export function Magnetic({ href, children, className = 'btn-gold', external = true }: { href: string; children: ReactNode; className?: string; external?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 15 })
  const c = (v: number) => Math.max(-12, Math.min(12, v))
  return (
    <motion.a
      ref={ref} href={href} style={{ x, y }} className={className} whileTap={{ scale: 0.96 }}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse' || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        x.set(c((e.clientX - r.left - r.width / 2) * 0.3))
        y.set(c((e.clientY - r.top - r.height / 2) * 0.3))
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.a>
  )
}

/** Line-by-line mask reveal for headings. */
export function RevealLine({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span className="block" initial={{ y: '105%' }} whileInView={{ y: 0 }} viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </motion.span>
    </span>
  )
}
