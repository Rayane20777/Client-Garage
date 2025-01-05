import Link from 'next/link'
import { Clock, MapPin, Phone } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-[700px] flex items-center justify-center text-white">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.02_22089e60.jpeg-Upz7chLnhqkXoM1wMcCcFGLHcC63Qv.jpeg')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 mix-blend-multiply"></div>
            </div>


            {/* Main content */}
            <div className="relative z-10 max-w-3xl mx-auto px-4 text-center mt-24">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Votre garage automobile de confiance
                </h1>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                    Plus de 20 ans d'expertise technique et de service professionnel pour l'entretien de votre véhicule
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/tarifs"
                        className="bg-button-primary hover:bg-button-primary/90 text-button-text font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Voir nos tarifs
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-button-secondary hover:bg-button-secondary/90 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Nous contacter
                    </Link>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
                    ></path>
                </svg>
            </div>
        </section>
    )
}

