'use client'
import { Dumbbell, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Magnetic } from './Motion'
import { wa } from '@/lib/data'
const L=[['Zones','#zones'],['Facilities','#facilities'],['Pricing','#pricing'],['Reviews','#reviews'],['Visit','#visit']]
export default function Navbar(){
 const [o,setO]=useState(false)
 return <header className="fixed left-1/2 top-4 z-50 w-[92%] max-w-4xl -translate-x-1/2">
  <nav className="flex items-center justify-between rounded-full border border-white/[0.08] bg-[#0B0F19]/75 px-5 py-3 backdrop-blur-2xl">
   <a href="#" className="flex items-center gap-2 font-display font-extrabold hover:drop-shadow-[0_0_10px_#00F0FF]"><Dumbbell className="text-cyanx" size={20}/>KEG</a>
   <ul className="hidden gap-6 text-sm text-silver md:flex">{L.map(([n,h])=><li key={h}><a href={h} className="transition hover:text-cyanx">{n}</a></li>)}</ul>
   <div className="hidden md:block"><Magnetic href={wa('Hi, I would like to join Karachi Executive Gym.')} className="btn-lime animate-pulse !py-2 text-sm">Join Today</Magnetic></div>
   <button className="md:hidden" aria-label="Menu" onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button>
  </nav>
  {o&&<div className="glass mt-2 flex flex-col gap-4 p-5 md:hidden">{L.map(([n,h])=><a key={h} href={h} onClick={()=>setO(false)}>{n}</a>)}
   <a className="btn-lime justify-center" href={wa('Hi, I would like to join Karachi Executive Gym.')}>Join Today</a></div>}
 </header>}
