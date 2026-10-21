'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { REVIEWS, img, IMG } from '@/lib/data'
function BeforeAfter(){
 const [p,setP]=useState(50)
 return <div className="glass relative mx-auto aspect-[16/9] max-w-3xl select-none overflow-hidden p-0">
  <img src={img(IMG.iron,1200)} alt="After" className="absolute inset-0 h-full w-full object-cover"/>
  <img src={img(IMG.iron,1200)} alt="Before" className="absolute inset-0 h-full w-full object-cover grayscale brightness-50" style={{clipPath:`inset(0 ${100-p}% 0 0)`}}/>
  <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs">BEFORE</span><span className="absolute right-4 top-4 rounded-full bg-lime px-3 py-1 text-xs font-bold text-black">AFTER</span>
  <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-cyanx shadow-[0_0_15px_#00F0FF]" style={{left:`${p}%`}}><div className="absolute top-1/2 -ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-cyanx bg-[#0B0F19]"/></div>
  <input aria-label="Before and after slider" type="range" min={0} max={100} value={p} onChange={e=>setP(+e.target.value)} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"/>
 </div>}
export default function Reviews(){
 const list=[...REVIEWS,...REVIEWS]
 return <section id="reviews" className="py-24 md:py-32">
  <h2 className="h-display mb-12 px-5 text-center text-4xl md:text-6xl">4.5 <Star className="inline text-lime" fill="#CCFF00"/> · 150+ verified reviews</h2>
  <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
   <motion.div className="flex w-max gap-5" animate={{x:['0%','-50%']}} transition={{duration:35,repeat:Infinity,ease:'linear'}}>
    {list.map((r,i)=><div key={i} className="glass w-80 shrink-0 p-6"><div className="flex gap-1 text-lime">{[...Array(5)].map((_,k)=><Star key={k} size={14} fill="#CCFF00"/>)}</div>
     <p className="mt-3 text-sm">“{r.t}”</p><p className="mt-4 text-xs text-silver">{r.n} · {r.s}</p></div>)}</motion.div></div>
  <div className="mt-20 px-5"><p className="mb-6 text-center text-silver">Drag to reveal the transformation <span className="text-xs">(sample preview — swap in real client photos with consent)</span></p><BeforeAfter/></div>
 </section>}
