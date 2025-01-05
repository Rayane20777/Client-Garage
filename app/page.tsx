import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WorkshopServices from '@/components/WorkshopServices'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <WorkshopServices />
        <About />
      </main>
      <Footer />
    </>
  )
}

