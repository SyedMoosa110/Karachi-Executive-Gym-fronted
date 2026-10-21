'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ShieldCheck, Award } from 'lucide-react'
import { MODES, Mode, img, wa } from '@/lib/data'
import { Tilt, Magnetic } from './Motion'
export default function ZoneSwitcher(){
 const [m,setM]=useState<Mode>('gents'); const d=MODES[m]
 return <section id="zones" className="sec">
  <div className={`absolute -z-10 left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full blur-[140px] transition-colors duration-700 ${m==='gents'?'bg-indigox/25':'bg-cyanx/20'}`}/>
  <div className="mx-auto mb-12 flex w-fit max-w-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-xl sm:flex-row sm:rounded-full" role="tablist">
   {(['gents','ladies'] as Mode[]).map(k=><button key={k} role="tab" aria-selected={m===k} onClick={()=>setM(k)} className="relative rounded-full px-6 py-3 text-sm font-semibold">
    {m===k&&<motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-indigox to-cyanx" transition={{type:'spring',stiffness:300,damping:30}}/>}
    <span className={`relative ${m===k?'text-black':'text-silver'}`}>{MODES[k].label}</span></button>)}
  </div>
  <AnimatePresence mode="wait">
   <motion.div key={m} initial={{opacity:0,x:m==='gents'?-60:60}} animate={{opacity:1,x:0}} exit={{opacity:0,x:m==='gents'?60:-60}} transition={{duration:.45}}>
    <div className="grid items-center gap-10 lg:grid-cols-2">
     <div>
      <h2 className="h-display text-5xl md:text-7xl">{d.title}</h2>
      <p className="mt-5 max-w-lg text-silver">{d.sub}</p>
      <ul className="mt-8 space-y-3">{d.points.map((p,i)=><motion.li key={p} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:.2+i*.08}} className="flex items-center gap-3"><Check className="text-lime" size={18}/>{p}</motion.li>)}</ul>
      <div className="mt-8"><Magnetic href={wa(`Hi, I'd like to know more about the ${d.label} at Karachi Executive Gym.`)}>Book a {m==='gents'?'Gents':'Ladies'} Tour</Magnetic></div>
     </div>
     <Tilt className="relative"><div className="glass overflow-hidden p-2"><img src={img(d.hero,1200)} alt={d.label} className="aspect-[4/3] w-full rounded-2xl object-cover"/>
      {m==='ladies'&&<div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm backdrop-blur"><ShieldCheck size={16} className="text-cyanx"/>Private floor · Frosted partitions</div>}</div></Tilt>
    </div>
    <div className="mt-12 grid grid-cols-3 gap-3">{d.gallery.map(g=><img key={g} src={img(g,600)} alt="" className="aspect-video w-full rounded-2xl object-cover opacity-80"/>)}</div>
    <div className="mt-16 grid gap-5 md:grid-cols-3">{d.coaches.map((c:any)=>
     <Tilt key={c.name} className={c.featured?'md:col-span-3 lg:col-span-1':''}><div className={`glass h-full p-6 ${c.featured?'border-cyan-400/50 shadow-[0_0_40px_rgba(0,240,255,.15)]':''}`}>
      {c.featured&&<span className="mb-3 inline-block rounded-full bg-lime px-3 py-1 text-xs font-bold text-black">FEATURED COACH</span>}
      <h3 className="font-display text-2xl font-bold">{c.name}</h3><p className="text-cyanx">{c.role}</p>
      <p className="mt-2 flex items-center gap-2 text-sm text-silver"><Award size={14}/>{c.cert}</p>
      <a target="_blank" rel="noopener" href={wa(`Hi, I would like to book a consult with ${c.name}.`)} className="mt-5 inline-block text-sm font-semibold text-lime">Book Private Session →</a></div></Tilt>)}</div>
   </motion.div>
  </AnimatePresence>
 </section>}
