'use client'
import { motion } from 'framer-motion'
import { Star, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Magnetic } from './Motion'
import { wa, img, IMG } from '@/lib/data'
const Split=({t,o=0}:{t:string;o?:number})=><span className="block overflow-hidden pb-1">{t.split('').map((c,i)=>
 <motion.span key={i} className="inline-block" initial={{y:'110%'}} animate={{y:0}} transition={{delay:o+i*.02,duration:.6,ease:[.22,1,.36,1]}}>{c===' '?'\u00A0':c}</motion.span>)}</span>
const chips=[[Star,'4.5 ★ · 150+ Reviews','top-[18%] right-[6%]'],[MapPin,'Block 10-A, Gulshan-e-Iqbal','bottom-[22%] right-[10%]'],[Clock,'7:00 AM – 11:59 PM Daily','bottom-[10%] left-[6%]']] as const
export default function Hero(){
 return <section className="relative flex min-h-screen items-center overflow-hidden">
  <img src={img(IMG.hero,2000)} alt="Dark executive gym floor" className="absolute inset-0 h-full w-full object-cover opacity-40"/>
  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(11,15,25,.6),#0B0F19_75%)]"/>
  <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-indigox/30 blur-[120px]"/><div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyanx/20 blur-[120px]"/>
  <div className="relative mx-auto w-full max-w-7xl px-5 pt-28">
   <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyanx">Gulshan-e-Iqbal · Karachi</p>
   <h1 className="h-display text-5xl sm:text-7xl lg:text-[7.5rem]"><Split t="TRAIN LIKE" /><Split t="AN EXECUTIVE." o={.3}/></h1>
   <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} className="mt-6 max-w-xl text-lg text-silver">Heavy iron, a fully private ladies floor and certified coaching, open until midnight.</motion.p>
   <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.4}} className="mt-10 flex flex-wrap gap-4">
    <Magnetic href={wa('Hi, I would like to inquire about membership at Karachi Executive Gym.')}><MessageCircle size={18}/>Inquire via WhatsApp</Magnetic>
    <a href="#facilities" className="glass inline-flex items-center rounded-full px-7 py-3.5 font-semibold">Explore Facilities</a>
   </motion.div>
  </div>
  {chips.map(([I,t,p],i)=><motion.div key={t} className={`glass absolute hidden items-center gap-2 !rounded-full px-4 py-2 text-sm md:flex ${p}`}
   animate={{y:[0,-10,0]}} transition={{duration:4+i,repeat:Infinity,ease:'easeInOut'}}><I size={16} className="text-cyanx"/>{t}</motion.div>)}
  <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 text-xs text-silver md:hidden"><span>4.5 ★ · 150+ reviews</span>·<span>7 AM – 11:59 PM</span></div>
 </section>}
