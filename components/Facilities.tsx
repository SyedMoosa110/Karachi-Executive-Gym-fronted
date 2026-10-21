'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FACILITIES, img } from '@/lib/data'
import { Tilt, SmartImg } from './Motion'

export default function Facilities() {
  const outer = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [dist, setDist] = useState(0)
  const { scrollYProgress } = useScroll({ target: outer, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist])
  const bar = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const measure = () => track.current && setDist(Math.max(0, track.current.scrollWidth - window.innerWidth))
    measure()
    const ro = new ResizeObserver(measure)
    if (track.current) ro.observe(track.current)
    window.addEventListener('resize', measure)
    return () => { ro.disconnect(); window.removeEventListener('resize', measure) }
  }, [])

  return (
    <section id="facilities" ref={outer} style={{ height: `calc(100svh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-5">
          <h2 className="h-display text-[clamp(2.8rem,7vw,6rem)]">
            Built for <span className="outline-text">serious</span> training.
          </h2>
          <p className="mt-3 max-w-md text-mute">Scroll to move through the floor. Hover a station to read its specs.</p>
        </div>

        <motion.div ref={track} style={{ x }} className="mt-10 flex w-max gap-6 px-5 [perspective:1400px] md:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]">
          {FACILITIES.map((f, i) => (
            <Tilt key={f.t} max={9} className="w-[78vw] shrink-0 sm:w-[48vw] lg:w-[34vw]">
              <div className="frame group glass-x relative h-[46svh] min-h-[320px] overflow-hidden !rounded-[2rem]">
                <SmartImg src={img(f.img, 1000)} alt={f.t} className="chroma absolute inset-0 h-full w-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/55 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-5 opacity-0 transition-all duration-500 [transform:translateZ(40px)] group-hover:opacity-100 max-md:opacity-100">
                  {f.tele.map(([k, v]) => (
                    <span key={k} className="rounded-full border border-gold/40 bg-obsidian/70 px-3 py-1 text-xs backdrop-blur-md">
                      <span className="text-mute">{k} </span><span className="font-semibold text-gold">{v}</span>
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-0 p-7 [transform:translateZ(30px)]">
                  <span className="font-display text-sm font-bold tracking-widest text-acid">{String(i + 1).padStart(2, '0')} / {String(FACILITIES.length).padStart(2, '0')}</span>
                  <h3 className="font-display text-4xl font-extrabold uppercase leading-none md:text-5xl">{f.t}</h3>
                  <p className="mt-2 max-w-sm text-sm text-zinc-300">{f.d}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </motion.div>

        <div className="mx-auto mt-8 h-px w-full max-w-7xl bg-white/10 px-5">
          <motion.div style={{ width: bar }} className="h-px bg-gold shadow-gold" />
        </div>
      </div>
    </section>
  )
}
