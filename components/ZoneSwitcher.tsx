'use client'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Crown, Lock, MessageCircle, Check } from 'lucide-react'
import { useState } from 'react'
import { MODES, type Mode, img, wa } from '@/lib/data'
import { Glass, Magnetic, SmartImg } from './Motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function ZoneSwitcher() {
  const [mode, setMode] = useState<Mode>('gents')
  const m = MODES[mode]
  const ladies = mode === 'ladies'

  return (
    <section id="zones" className="relative overflow-hidden">
      {/* world-shift glow */}
      <motion.div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-[34rem] w-[34rem] rounded-full blur-[140px]" animate={{ backgroundColor: m.glow }} transition={{ duration: 1 }} />
      <motion.div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full blur-[140px]" animate={{ backgroundColor: ladies ? 'rgba(255,184,0,0.1)' : 'rgba(0,240,255,0.07)' }} transition={{ duration: 1 }} />

      <div className="sec">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm text-mute">Two floors, two experiences. Pick yours.</p>
            <h2 className="h-display text-[clamp(3.2rem,9vw,8rem)]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.span key={mode} className="block" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} transition={{ duration: 0.45, ease }}>
                  {m.title.map((l, i) => <span key={l} className={`block ${i === 1 ? 'outline-text' : ''}`}>{l}</span>)}
                </motion.span>
              </AnimatePresence>
            </h2>
          </div>

          <div role="tablist" aria-label="Choose a floor" className="relative flex w-full max-w-md rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl">
            {(Object.keys(MODES) as Mode[]).map((k) => (
              <button key={k} role="tab" aria-selected={mode === k} onClick={() => setMode(k)}
                className={`relative z-10 flex-1 rounded-full px-5 py-3 text-sm font-bold transition-colors ${mode === k ? 'text-obsidian' : 'text-zinc-300 hover:text-white'}`}>
                {mode === k && (
                  <motion.span layoutId="zone-pill" className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold to-[#FFD45E] shadow-gold" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
                )}
                {MODES[k].tab}
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            {/* photograph + gallery */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
                <AnimatePresence initial={false}>
                  <motion.div key={mode} className="absolute inset-0" initial={{ clipPath: 'inset(0 0 0 100%)' }} animate={{ clipPath: 'inset(0 0 0 0%)' }} exit={{ opacity: 0 }} transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}>
                    <SmartImg src={img(m.hero, 1600)} alt={m.label} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <motion.p key={`l-${mode}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="max-w-sm font-display text-3xl font-extrabold uppercase leading-none">{m.label}</motion.p>
                  <div className="hidden gap-2 sm:flex">
                    {m.gallery.map((g, i) => (
                      <motion.div key={`${mode}-${i}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="h-16 w-16 overflow-hidden rounded-xl border border-white/20">
                        <SmartImg src={img(g, 300)} alt="" className="h-full w-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.p key={`s-${mode}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">{m.sub}</motion.p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {m.points.map((p, i) => (
                  <motion.li key={`${mode}-${p}`} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.08, ease }} className="flex items-center gap-3 text-sm">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">{ladies && i === 0 ? <Lock size={13} /> : <Check size={13} />}</span>
                    {p}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <Magnetic href={wa(m.ctaMsg)}><MessageCircle size={18} />{m.cta}</Magnetic>
              </div>
            </div>

            {/* coach deck: slots morph via layoutId, content staggers in */}
            <div className="flex flex-col gap-4 lg:col-span-5">
              {m.coaches.map((c, i) => {
                const featured = i === 0
                return (
                  <motion.div key={`slot-${i}`} layout layoutId={`slot-${i}`} transition={{ layout: { type: 'spring', stiffness: 260, damping: 30 } }} className="relative">
                    {featured && ladies && <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/40 via-rose-300/20 to-transparent blur-2xl" />}
                    <Glass className={featured ? 'p-7' : 'p-5'}>
                      <AnimatePresence mode="wait">
                        <motion.div key={`${mode}-${i}`} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4, delay: i * 0.07, ease }}>
                          {featured && (
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-bold text-gold shadow-gold">
                              <Crown size={13} />{ladies ? 'Spotlight coach' : 'Lead coach'}
                            </span>
                          )}
                          <h3 className={`font-display font-extrabold uppercase leading-none ${featured ? 'text-5xl' : 'text-3xl'}`}>{c.name}</h3>
                          <p className="mt-2 text-zinc-300">{c.role}</p>
                          <p className="mt-1 text-sm text-mute">{c.cert}</p>
                          {featured && ladies && (
                            <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-zinc-300">
                              Lead female trainer on the private floor, a space that is only for women.
                            </p>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </Glass>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  )
}
