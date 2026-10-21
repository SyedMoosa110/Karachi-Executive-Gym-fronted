'use client'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { TIERS, wa } from '@/lib/data'
import { Tilt, Reveal, Magnetic } from './Motion'
export default function Pricing(){
 return <section id="pricing" className="sec">
  <Reveal><h2 className="h-display text-center text-4xl md:text-6xl">Choose your <span className="text-lime">commitment.</span></h2></Reveal>
  <div className="mt-14 grid gap-6 lg:grid-cols-3">{TIERS.map((t,i)=><Reveal key={t.n} d={i*.1}><Tilt className="h-full"><div className={`glass relative flex h-full flex-col p-8 ${t.hot?'border-lime/50 shadow-[0_0_50px_rgba(204,255,0,.15)] lg:-translate-y-4':''}`}>
   {t.hot&&<span className="absolute -top-3 left-1/2 -translate-x-1/2 animate-pulse rounded-full bg-lime px-4 py-1 text-xs font-bold text-black shadow-lime">MOST POPULAR</span>}
   <p className="text-sm text-cyanx">{t.cycle}</p><h3 className="font-display text-3xl font-bold">{t.n}</h3><p className="text-sm text-silver">{t.who}</p>
   <p className="mt-5 font-display text-2xl">Ask for today’s rate</p>
   <ul className="my-6 flex-1 space-y-3">{t.f.map((x,j)=><li key={x} className="flex items-center gap-3 text-sm"><motion.span initial={{scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{delay:.3+j*.12,type:'spring'}}><Check size={16} className="text-lime"/></motion.span>{x}</li>)}</ul>
   <Magnetic href={wa(`Hi, I'm interested in the ${t.n} membership at Karachi Executive Gym.`)} className="btn-lime justify-center">{t.cta}</Magnetic></div></Tilt></Reveal>)}</div>
 </section>}
