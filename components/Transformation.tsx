'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronsLeftRight } from 'lucide-react'
import { useRef, type KeyboardEvent, type PointerEvent } from 'react'
import { IMG, img } from '@/lib/data'
import { RevealLine, SmartImg } from './Motion'

export default function Transformation() {
  const box = useRef<HTMLDivElement>(null)
  const raw = useMotionValue(50)
  const pos = useSpring(raw, { stiffness: 260, damping: 28, mass: 0.7 })
  const clip = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`)
  const left = useTransform(pos, (v) => `${v}%`)

  const setFrom = (e: PointerEvent<HTMLDivElement>) => {
    if (!box.current) return
    const r = box.current.getBoundingClientRect()
    raw.set(Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)))
  }
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') raw.set(Math.max(0, raw.get() - 5))
    if (e.key === 'ArrowRight') raw.set(Math.min(100, raw.get() + 5))
  }

  return (
    <section id="results" className="sec">
      <h2 className="h-display text-[clamp(2.8rem,7vw,6rem)]">
        <RevealLine>Day 1.</RevealLine>
        <RevealLine delay={0.1} className="outline-text">Day 90.</RevealLine>
      </h2>
      <p className="mt-4 max-w-md text-mute">Drag the divider to compare. Illustrative preview; real member results are shared only with consent.</p>

      <div
        ref={box}
        className="relative mt-10 aspect-[4/5] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-[2rem] border border-white/10 sm:aspect-[16/9]"
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); setFrom(e) }}
        onPointerMove={(e) => { if (e.buttons === 1 || e.pointerType !== 'mouse') setFrom(e) }}
        role="slider" tabIndex={0} aria-label="Compare Day 1 and Day 90" aria-valuemin={0} aria-valuemax={100} aria-valuenow={50} onKeyDown={onKey}
      >
        <SmartImg src={img(IMG.iron, 1800)} alt="Day 90" className="absolute inset-0 h-full w-full object-cover" />
        <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
          <SmartImg src={img(IMG.iron, 1800)} alt="Day 1" className="h-full w-full object-cover [filter:grayscale(1)_brightness(.55)_contrast(.9)]" />
        </motion.div>
        <span className="absolute left-4 top-4 rounded-full bg-obsidian/70 px-3 py-1 text-xs font-bold backdrop-blur">Day 1</span>
        <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-obsidian">Day 90</span>
        <motion.div style={{ left }} className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-gold shadow-[0_0_18px_#FFB800,0_0_40px_rgba(255,184,0,0.6)]">
          <div className="absolute left-1/2 top-1/2 grid h-14 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-b from-[#FFD45E] to-gold text-obsidian shadow-gold">
            <ChevronsLeftRight size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
