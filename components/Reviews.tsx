import { Star } from 'lucide-react'
import { REVIEWS } from '@/lib/data'
import { RevealLine } from './Motion'

export default function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS]
  return (
    <section id="reviews" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="h-display text-[clamp(2.8rem,7vw,6rem)]">
          <RevealLine>Rated 4.5 ★ by</RevealLine>
          <RevealLine delay={0.1} className="outline-text">150+ members.</RevealLine>
        </h2>
      </div>
      <div className="marquee mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track gap-5 pr-5">
          {loop.map((r, i) => (
            <figure key={i} aria-hidden={i >= REVIEWS.length} className="glass-x w-[80vw] shrink-0 p-7 sm:w-96">
              <div className="flex gap-1 text-gold">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={15} className="fill-gold" />)}</div>
              <blockquote className="mt-4 text-lg leading-snug">{r.t}</blockquote>
              <figcaption className="mt-5 text-sm text-mute">{r.n} · {r.s}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
