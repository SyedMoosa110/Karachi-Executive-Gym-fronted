import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ZoneSwitcher from '@/components/ZoneSwitcher'
import Facilities from '@/components/Facilities'
import Transformation from '@/components/Transformation'
import Pricing from '@/components/Pricing'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ZoneSwitcher />
      <Facilities />
      <Transformation />
      <Pricing />
      <Reviews />
      <Footer />
    </main>
  )
}
