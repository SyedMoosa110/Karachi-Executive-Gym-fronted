'use client'
import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { TIERS, wa, type Cycle } from '@/lib/data'
import { Tilt, Glass, Magnetic, RevealLine } from './Motion'

const LABEL: Record<Cycle, string> = { monthly: 'Monthly', quarterly: 'Quarterly', annual: 'Annual' }

export default function Pricing() {
  const [cycle, setCycle] = useState<Cycle>('quarterly')
  return (
    <section id="pricing" className="sec">
      <h2 className="h-display text-[clamp(2.8rem,7vw,6rem)]">
        <RevealLine>Choose your</RevealLine>
        <RevealLine delay={0.1} className="outline-text">commitment.</RevealLine>
      </h2>

      <div role="tablist" aria-label="Billing cycle" className="relative mt-10 inline-flex rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl">
        {(Object.keys(LABEL) as Cycle[]).map((c) => (
          <button key={c} role="tab" aria-selected={cycle === c} onClick={() => setCycle(c)}
            className={`relative z-10 rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${cycle === c ? 'text-obsidian' : 'text-zinc-300 hover:text-white'}`}>
            {cycle === c && <motion.span layoutId="cycle-pill" className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold to-[#FFD45E] shadow-gold" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
            {LABEL[c]}
          </button>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3 [perspective:1400px]">
        {TIERS.map((t) => {
          const on = t.id === cycle
          return (
            <Tilt key={t.id} max={6} className="h-full">
              <motion.div animate={{ y: on ? -14 : 0, scale: on ? 1 : 0.97, opacity: on ? 1 : 0.7 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }} className="h-full">
                <Glass className={`flex h-full flex-col p-8 ${on ? '!border-gold/60 shadow-[0_0_60px_rgba(255,184,0,0.18)]' : ''}`}>
                  {t.hot && <span className="absolute -top-3 left-8 rounded-full bg-acid px-4 py-1 text-xs font-bold text-obsidian shadow-acid">Most popular</span>}
                  <p className="text-sm text-gold">{t.cycle}</p>
                  <h3 className="mt-1 font-display text-4xl font-extrabold uppercase leading-none">{t.n}</h3>
                  <p className="mt-1 text-sm text-mute">{t.who}</p>
                  <p className="mt-6 font-display text-2xl font-bold uppercase">Ask for today&rsquo;s rate</p>
                  <ul className="my-6 flex-1 space-y-3">
                    {t.f.map((x, j) => (
                      <li key={x} className="flex items-center gap-3 text-sm">
                        <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + j * 0.1, type: 'spring' }}>
                          <Check size={16} className="text-acid" />
                        </motion.span>
                        {x}
                      </li>
                    ))}
                  </ul>
                  <Magnetic href={wa(t.msg)} className={on ? 'btn-gold' : 'btn-ghost'}><MessageCircle size={17} />{t.cta}</Magnetic>
                </Glass>
              </motion.div>
            </Tilt>
          )
        })}
      </div>
    </section>
  )
}
