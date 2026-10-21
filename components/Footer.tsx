import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react'
import { wa } from '@/lib/data'
export default function Footer(){
 return <footer id="visit" className="sec">
  <div className="grid gap-8 lg:grid-cols-2">
   <div className="glass overflow-hidden p-2"><iframe title="Karachi Executive Gym map" loading="lazy" className="h-96 w-full rounded-2xl [filter:invert(.92)_hue-rotate(180deg)_saturate(.6)_brightness(.85)]"
    src="https://maps.google.com/maps?q=Block+10-A+Gulshan-e-Iqbal+Karachi&output=embed"/></div>
   <div className="flex flex-col justify-center">
    <h2 className="h-display text-4xl md:text-6xl">Walk in. <span className="text-cyanx">Level up.</span></h2>
    <p className="mt-4 text-silver">Block 10-A, Gulshan-e-Iqbal, Karachi</p>
    <div className="glass mt-6 p-5 text-sm"><p className="flex justify-between"><span>Mon – Sat</span><span>7:00 AM – 11:59 PM</span></p><p className="mt-2 flex justify-between"><span>Sunday</span><span className="text-silver">Deep cleaning & maintenance</span></p>
     <p className="mt-2 text-silver">Ladies-only slots: confirm current timings on WhatsApp.</p></div>
    <div className="mt-6 flex flex-wrap gap-4">
     <a className="btn-lime" target="_blank" rel="noopener" href={wa('Hi, I would like to visit Karachi Executive Gym.')}><MessageCircle size={18}/>WhatsApp Us</a>
     <a className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold" href="tel:+923129090455"><Phone size={18}/>+92 312 909 0455</a></div>
    <div className="mt-6 flex gap-4 text-silver"><Instagram/><Facebook/></div>
   </div></div>
  <p className="mt-16 text-center text-xs text-silver">© {new Date().getFullYear()} Karachi Executive Gym. All rights reserved.</p>
 </footer>}
