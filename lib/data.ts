export const PHONE = '923129090455'
export const PHONE_DISPLAY = '+92 312 909 0455'
export const wa = (t: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`
export const img = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

/* Swap any ID here to change imagery site-wide. Components fall back to a gold-lit
   gradient if an image fails to load, so a bad ID never breaks the layout. */
export const IMG = {
  hero: 'photo-1534438327276-14e5300c3a48',
  iron: 'photo-1517836357463-d25dfeac3438',
  rack: 'photo-1571902943202-507ec2618e8f',
  ladies: 'photo-1518611012118-696072aa579a',
  ladies2: 'photo-1576678927484-cc907957088c',
  cardio: 'photo-1540497077202-7c8a3999166f',
  cable: 'photo-1593079831268-3381b0db4a77',
  interior: 'photo-1558611848-73f7eb4001a1',
}

/* ---------- Live status (Asia/Karachi, Mon–Sat 7:00 AM – 11:59 PM) ---------- */
export const OPEN_MIN = 7 * 60
export function gymStatus(d: Date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Karachi', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(d)
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ''
  const wd = get('weekday')
  const mins = (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10)
  const open = wd !== 'Sun' && mins >= OPEN_MIN
  let label = 'Gym is open until midnight (11:59 PM)'
  if (wd === 'Sun') label = 'Closed Sunday · reopens Monday 7:00 AM'
  else if (mins < OPEN_MIN) label = 'Closed now · opens today 7:00 AM'
  return { open, wd, label }
}

export const WEEK = [
  { d: 'Mon', h: '7:00 AM – 11:59 PM' },
  { d: 'Tue', h: '7:00 AM – 11:59 PM' },
  { d: 'Wed', h: '7:00 AM – 11:59 PM' },
  { d: 'Thu', h: '7:00 AM – 11:59 PM' },
  { d: 'Fri', h: '7:00 AM – 11:59 PM' },
  { d: 'Sat', h: '7:00 AM – 11:59 PM' },
  { d: 'Sun', h: 'Closed · deep cleaning' },
]

/* ---------- Gents / Ladies worlds ---------- */
export type Mode = 'gents' | 'ladies'
export type Coach = { name: string; role: string; cert: string }
export type ModeData = {
  tab: string
  label: string
  title: string[]
  sub: string
  hero: string
  gallery: string[]
  points: string[]
  coaches: Coach[]
  glow: string
  cta: string
  ctaMsg: string
}
export const MODES: Record<Mode, ModeData> = {
  gents: {
    tab: 'Gents zone',
    label: 'Gents high-intensity zone',
    title: ['Forged', 'in iron.'],
    sub: 'Plate-loaded stations, raw power racks and a dumbbell wall built for hypertrophy and heavy strength work.',
    hero: IMG.iron,
    gallery: [IMG.rack, IMG.cable, IMG.hero],
    points: ['Olympic power racks & platforms', 'Plate-loaded focus stations', 'Dumbbell rack up to executive weights', 'High-intensity evening slots'],
    coaches: [
      { name: 'Head Strength Coach', role: 'Powerlifting & hypertrophy', cert: 'Certified Strength Trainer' },
      { name: 'Performance Coach', role: 'Conditioning & fat loss', cert: 'Certified Personal Trainer' },
      { name: 'Transformation Coach', role: 'Body recomposition', cert: 'Certified Personal Trainer' },
    ],
    glow: 'rgba(255,184,0,0.16)',
    cta: 'Book a floor tour',
    ctaMsg: 'Hi, I want to book a tour of the Gents floor at Karachi Executive Gym.',
  },
  ladies: {
    tab: 'Ladies private floor',
    label: 'Ladies dedicated private floor',
    title: ['Your floor.', 'Your rules.'],
    sub: 'A 100% private floor with its own entrance, frosted privacy doors, private toning suites and female-only coaching.',
    hero: IMG.ladies,
    gallery: [IMG.ladies2, IMG.cardio, IMG.ladies],
    points: ['100% private entrance & floor', 'Frosted privacy partitions & doors', 'Private toning suites', 'Female certified trainers only'],
    coaches: [
      { name: 'Coach Minhal', role: 'Lead female trainer', cert: 'Certified Female Fitness Instructor' },
      { name: 'Toning Instructor', role: 'Cardio & toning', cert: 'Certified Instructor' },
      { name: 'Posture Instructor', role: 'Mobility & posture', cert: 'Certified Instructor' },
    ],
    glow: 'rgba(255,150,120,0.17)',
    cta: 'Book a private tour',
    ctaMsg: 'Hi, I want to book a private tour for the Ladies floor.',
  },
}

/* ---------- Facilities (telemetry kept qualitative; add measured figures when you have them) ---------- */
export const FACILITIES = [
  { t: 'Heavy Resistance', img: IMG.cable, d: 'Cable crossovers, plate-loaded leg press and Olympic squat racks.',
    tele: [['Targets', 'Chest · Back · Legs'], ['Loading', 'Plate-loaded'], ['Stations', 'Multi-station']] },
  { t: 'Cardio Suite', img: IMG.cardio, d: 'Treadmills, air bikes and rowers for every tempo.',
    tele: [['Targets', 'Heart & lungs'], ['Tracking', 'Heart-rate telemetry'], ['Incline', 'Up to 15%']] },
  { t: 'Free Weights', img: IMG.rack, d: 'A full dumbbell wall with specialised benches.',
    tele: [['Targets', 'Full body'], ['Capacity', 'Heavy-range dumbbells'], ['Benches', 'Adjustable']] },
  { t: 'Climate Control', img: IMG.interior, d: 'Fully air-conditioned, with high-CFM ventilation and filtered air.',
    tele: [['Cooling', 'Full A/C'], ['Airflow', 'High-CFM'], ['Air', 'Filtered']] },
]

/* ---------- Membership ---------- */
export type Cycle = 'monthly' | 'quarterly' | 'annual'
export const TIERS: { id: Cycle; n: string; cycle: string; who: string; f: string[]; cta: string; msg: string; hot?: boolean }[] = [
  { id: 'monthly', n: 'Monthly Executive', cycle: 'Billed monthly', who: 'Flexible professionals',
    f: ['Full floor access', 'Locker & locker room', 'General trainer support'], cta: 'Join monthly',
    msg: "Hi, I'm interested in the Monthly Executive membership at Karachi Executive Gym." },
  { id: 'quarterly', n: 'Quarterly Elite', cycle: '3 months pre-paid', who: 'Committed athletes',
    f: ['All Monthly perks', 'Customised workout plan', '2× trainer consults'], cta: 'Join quarterly', hot: true,
    msg: "Hi, I'm interested in the Quarterly Elite membership at Karachi Executive Gym." },
  { id: 'annual', n: 'Annual VIP Pass', cycle: '12 months pre-paid', who: 'Long-term executives',
    f: ['Full access', 'Free guest passes', 'Dedicated locker', 'VIP support'], cta: 'Join VIP annual',
    msg: 'Hi, Inquiring about VIP Annual Pass at Karachi Executive Gym.' },
]

export const REVIEWS = [
  { n: 'Verified Member', s: 'Google', t: 'Cleanest equipment in Gulshan. The staff actually correct your form.' },
  { n: 'Verified Member', s: 'BookMySpot', t: 'The private ladies floor is a game changer. Finally comfortable to train.' },
  { n: 'Verified Member', s: 'Google', t: 'Heavy iron, great AC, open till midnight. Perfect for after work.' },
  { n: 'Verified Member', s: 'Google', t: 'Lost 12 kg in 4 months with my coach. Highly recommend.' },
  { n: 'Verified Member', s: 'BookMySpot', t: 'Premium vibe without the premium-city price attitude.' },
]
