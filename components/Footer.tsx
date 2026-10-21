'use client'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { WEEK, PHONE_DISPLAY, wa, gymStatus } from '@/lib/data'
import { Glass, Magnetic, RevealLine } from './Motion'

export default function Footer() {
  const [today, setToday] = useState('')
  useEffect(() => setToday(gymStatus().wd), [])
  return (
    <footer id="visit" className="sec">
      <h2 className="h-display text-[clamp(3rem,9vw,8rem)]">
        <RevealLine>Walk in.</RevealLine>
        <RevealLine delay={0.1} className="outline-text">Level up.</RevealLine>
      </h2>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Glass className="overflow-hidden p-2">
          <iframe
            title="Karachi Executive Gym on the map" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="h-[26rem] w-full rounded-[1.25rem] [filter:invert(.92)_hue-rotate(180deg)_saturate(.5)_brightness(.85)_sepia(.25)]"
            src="https://maps.google.com/maps?q=Block+10-A+Gulshan-e-Iqbal+Karachi&output=embed"
          />
        </Glass>

        <div className="flex flex-col justify-center">
          <p className="flex items-center gap-2 text-zinc-300"><MapPin size={18} className="text-gold" />Block 10-A, Gulshan-e-Iqbal, Karachi</p>
          <Glass className="mt-6 p-2">
            <table className="w-full text-sm">
              <caption className="sr-only">Opening hours</caption>
              <tbody>
                {WEEK.map((w) => {
                  const on = w.d === today
                  return (
                    <tr key={w.d} className={on ? 'bg-gold/10 text-gold' : 'text-zinc-300'}>
                      <th scope="row" className="rounded-l-xl px-4 py-2.5 text-left font-semibold">{w.d}{on && ' · today'}</th>
                      <td className="rounded-r-xl px-4 py-2.5 text-right">{w.h}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </Glass>
          <p className="mt-3 text-sm text-mute">Ladies floor slots: confirm current timings on WhatsApp.</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic href={wa('Hi, I want to book a private tour for the Ladies floor.')}><MessageCircle size={18} />Book ladies private tour</Magnetic>
            <Magnetic href={wa('Hi, Inquiring about VIP Annual Pass.')} className="btn-ghost">Ask about VIP Annual</Magnetic>
            <a className="btn-ghost" href="tel:+923129090455"><Phone size={18} />{PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>
      <p className="mt-20 text-center text-xs text-mute">&copy; {new Date().getFullYear()} Karachi Executive Gym. All rights reserved.</p>
    </footer>
  )
}
