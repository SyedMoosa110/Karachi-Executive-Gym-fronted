'use client'
import { motion, useMotionValue, useSpring, useTransform, useScroll, type MotionValue } from 'framer-motion'
import { Star, MapPin, MessageCircle, Clock } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Magnetic, ClipImage } from './Motion'
import { wa, img, IMG, gymStatus } from '@/lib/data'

function StatusPill() {
  const [s, setS] = useState<{ open: boolean; label: string } | null>(null)
  useEffect(() => {
    const tick = () => setS(gymStatus())
    tick()
    const id = setInterval(tick, 60_000)
    return () => clearInterval(id)
  }, [])
  const open = s?.open ?? true
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-2 pl-3 pr-5 text-sm font-semibold backdrop-blur-xl" role="status">
      <span className="relative flex h-2.5 w-2.5">
        {open && <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${open ? 'bg-emerald-400' : 'bg-zinc-500'}`} />
      </span>
      <span className="uppercase tracking-wide">{s?.label ?? 'Gym is open until midnight (11:59 PM)'}</span>
    </div>
  )
}

function Badge({ sx, sy, depth, className, children }: { sx: MotionValue<number>; sy: MotionValue<number>; depth: number; className: string; children: ReactNode }) {
  const x = useTransform(sx, [-0.5, 0.5], [-depth, depth])
  const y = useTransform(sy, [-0.5, 0.5], [-depth, depth])
  return (
    <motion.div style={{ x, y }} className={`glass-x absolute z-20 hidden items-center gap-2 !rounded-full px-5 py-3 text-sm font-semibold md:flex ${className}`}>
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 13 })
  const sy = useSpring(my, { stiffness: 80, damping: 13 })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const m1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const m2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])

  return (
    <section
      id="top" ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32"
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
    >
      {/* atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(255,184,0,0.14),transparent_55%),radial-gradient(ellipse_at_10%_90%,rgba(0,240,255,0.07),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none opacity-[0.18]" aria-hidden="true">
        <motion.div style={{ x: m1 }} className="outline-text whitespace-nowrap font-display text-[24vw] font-black uppercase leading-[0.8]">
          Iron · Chalk · Sweat · Iron · Chalk · Sweat
        </motion.div>
        <motion.div style={{ x: m2 }} className="whitespace-nowrap font-display text-[24vw] font-black uppercase leading-[0.8] text-white/5">
          Gulshan · Karachi · Gulshan · Karachi
        </motion.div>
      </div>

      {/* hero photograph */}
      <motion.div style={{ y: imgY }} className="absolute right-0 top-24 hidden h-[72%] w-[38%] md:block lg:right-[4%] lg:w-[34%]">
        <ClipImage src={img(IMG.hero, 1400)} alt="Dumbbells under hard side light in a dark gym" eager delay={0.4}
          className="h-full w-full rounded-[2.5rem] [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]" />
      </motion.div>
      <Badge sx={sx} sy={sy} depth={26} className="right-[6%] top-[22%]"><Star size={16} className="fill-gold text-gold" />4.5 ★ · 150+ Reviews</Badge>
      <Badge sx={sx} sy={sy} depth={-34} className="bottom-[20%] right-[22%]"><MapPin size={16} className="text-acid" />Gulshan-e-Iqbal · Block 10-A</Badge>
      <Badge sx={sx} sy={sy} depth={18} className="bottom-[8%] left-[44%]"><Clock size={16} className="text-ice" />Mon–Sat · 7 AM – 11:59 PM</Badge>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
          <StatusPill />
        </motion.div>
        <h1 className="h-display mt-8 text-[clamp(4.2rem,17vw,15rem)]">
          {[['Train', ''], ['Like an', 'outline-text'], ['Executive.', '']].map(([t, c], i) => (
            <span key={t} className="block overflow-hidden pb-[0.04em]">
              <motion.span className={`block ${c}`} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.25 + i * 0.14, duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                {t}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">
          Heavy iron, a fully private ladies floor and certified coaching in Gulshan-e-Iqbal. Open until midnight, six days a week.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25 }} className="mt-10 flex flex-wrap gap-4">
          <Magnetic href={wa('Hi, I would like to inquire about membership at Karachi Executive Gym.')}><MessageCircle size={18} />Inquire on WhatsApp</Magnetic>
          <a href="#zones" className="btn-ghost">Choose your floor</a>
        </motion.div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm text-mute md:hidden">
          <span className="glass-x !rounded-full px-4 py-2">4.5 ★ · 150+ Reviews</span>
          <span className="glass-x !rounded-full px-4 py-2">Block 10-A, Gulshan-e-Iqbal</span>
        </div>
      </div>
    </section>
  )
}
