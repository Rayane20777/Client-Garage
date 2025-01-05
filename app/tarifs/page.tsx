import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  )
}

