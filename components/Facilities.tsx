'use client'
import { FACILITIES, img } from '@/lib/data'
import { Tilt, Reveal } from './Motion'
export default function Facilities(){
 return <section id="facilities" className="sec">
  <Reveal><h2 className="h-display text-4xl md:text-6xl">Built for <span className="text-cyanx">serious</span> training.</h2></Reveal>
  <div className="mt-14 grid gap-6 sm:grid-cols-2">{FACILITIES.map((f,i)=><Reveal key={f.t} d={i*.1}><Tilt><div className="glass group relative h-80 overflow-hidden">
   <img src={img(f.img,900)} alt={f.t} className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-110"/>
   <div className="absolute inset-0 bg-gradient-to-t from-[#05070C] via-[#05070C]/50 to-transparent"/>
   <div className="absolute bottom-0 p-6"><h3 className="font-display text-2xl font-bold">{f.t}</h3><p className="mt-1 max-w-sm text-sm text-silver">{f.d}</p>
    <div className="mt-3 flex max-h-0 flex-wrap gap-2 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 max-md:max-h-20 max-md:opacity-100">
     {f.spec.map(s=><span key={s} className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs text-cyanx">{s}</span>)}</div></div></div></Tilt></Reveal>)}</div>
 </section>}
