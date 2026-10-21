'use client'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Magnetic } from './Motion'
import { wa } from '@/lib/data'

const LINKS: [string, string][] = [
  ['Zones', '#zones'], ['Facilities', '#facilities'], ['Results', '#results'], ['Membership', '#pricing'], ['Reviews', '#reviews'], ['Visit', '#visit'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[92%] max-w-5xl -translate-x-1/2">
      <nav aria-label="Primary" className="flex items-center justify-between rounded-full border border-white/10 bg-obsidian/70 px-5 py-3 backdrop-blur-2xl">
        <a href="#top" className="flex items-baseline gap-2 font-display text-2xl font-black uppercase leading-none tracking-wide">
          <span className="text-gold">KEG</span>
          <span className="hidden text-xs font-bold tracking-[0.2em] text-mute sm:inline">Karachi Executive Gym</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-mute lg:flex">
          {LINKS.map(([n, h]) => (
            <li key={h}><a href={h} className="transition-colors hover:text-gold">{n}</a></li>
          ))}
        </ul>
        <div className="hidden md:block lg:ml-0">
          <Magnetic href={wa('Hi, I would like to join Karachi Executive Gym.')} className="btn-gold !px-5 !py-2 text-sm">
            <MessageCircle size={16} /> Join on WhatsApp
          </Magnetic>
        </div>
        <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="glass-x mt-2 flex flex-col gap-4 p-5 md:hidden">
            {LINKS.map(([n, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="text-lg">{n}</a>)}
            <a className="btn-gold" href={wa('Hi, I would like to join Karachi Executive Gym.')} target="_blank" rel="noopener noreferrer">Join on WhatsApp</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
