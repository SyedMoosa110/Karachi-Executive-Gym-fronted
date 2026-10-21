import './globals.css'
import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
const inter=Inter({subsets:['latin'],variable:'--font-inter'})
const syne=Syne({subsets:['latin'],weight:['700','800'],variable:'--font-display'})
export const metadata:Metadata={title:'Karachi Executive Gym | Gulshan-e-Iqbal Block 10-A',description:'Premium gym in Gulshan-e-Iqbal, Karachi. Private ladies floor, heavy iron zone, certified trainers. Open 7 AM – 11:59 PM.'}
const ld={'@context':'https://schema.org','@type':'HealthClub',name:'Karachi Executive Gym',telephone:'+923129090455',address:{'@type':'PostalAddress',streetAddress:'Block 10-A, Gulshan-e-Iqbal',addressLocality:'Karachi',addressCountry:'PK'},openingHours:'Mo-Sa 07:00-23:59',aggregateRating:{'@type':'AggregateRating',ratingValue:'4.5',reviewCount:'150'}}
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en" className={`${inter.variable} ${syne.variable}`}><body>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>{children}</body></html>}
