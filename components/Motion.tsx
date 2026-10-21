'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
export function Tilt({children,className=''}:{children:React.ReactNode;className?:string}){
 const x=useMotionValue(0),y=useMotionValue(0),sp={stiffness:200,damping:18}
 const rx=useSpring(useTransform(y,[-.5,.5],[8,-8]),sp),ry=useSpring(useTransform(x,[-.5,.5],[-8,8]),sp)
 return <motion.div className={className} style={{rotateX:rx,rotateY:ry,transformPerspective:900}}
  onMouseMove={e=>{const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left)/r.width-.5);y.set((e.clientY-r.top)/r.height-.5)}}
  onMouseLeave={()=>{x.set(0);y.set(0)}}>{children}</motion.div>}
export function Magnetic({href,children,className='btn-lime'}:{href:string;children:React.ReactNode;className?:string}){
 const ref=useRef<HTMLAnchorElement>(null)
 const x=useSpring(useMotionValue(0),{stiffness:250,damping:15}),y=useSpring(useMotionValue(0),{stiffness:250,damping:15})
 const c=(v:number)=>Math.max(-12,Math.min(12,v))
 return <motion.a ref={ref} href={href} target="_blank" rel="noopener" style={{x,y}} className={className}
  onMouseMove={e=>{const r=ref.current!.getBoundingClientRect();x.set(c((e.clientX-r.left-r.width/2)*.3));y.set(c((e.clientY-r.top-r.height/2)*.3))}}
  onMouseLeave={()=>{x.set(0);y.set(0)}} whileTap={{scale:.96}}>{children}</motion.a>}
export const Reveal=({children,d=0,className=''}:{children:React.ReactNode;d?:number;className?:string})=>
 <motion.div className={className} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.7,delay:d,ease:[.22,1,.36,1]}}>{children}</motion.div>
