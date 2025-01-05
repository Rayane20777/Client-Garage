'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Clock, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import ContactDialog from './ContactDialog'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300
              ${isScrolled ? 'shadow-lg' : ''}`}
        >
            <div className="bg-primary text-white text-sm">
                <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                    <div className="flex items-center gap-2 hover:text-accent transition-colors">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">Lun-Sam: 8h30-19h00</span>
                    </div>
                    <a href="tel:+212670058094" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">+212 670 05 80 94</span>
                    </a>
                    <a href="https://maps.app.goo.gl/YaQzuqdLMH3mEk6f8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">42 Chemin de Gérocourt, 95650 Boissy-L'Aillerie</span>
                    </a>
                </div>
            </div>
            <nav className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                <div className="logo">
                    <Link href="/" className="block">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-23%20%C3%A0%2020.02.09_d3d420b6.jpg-AwQ4dkNIQetfjBLKJVlf72D03sDGpj.jpeg"
                            alt="M&A Auto Services"
                            width={180}
                            height={60}
                            className="h-16 w-auto transition-transform hover:scale-105"
                            priority
                        />
                    </Link>
                </div>

                <ul className={`
                  md:flex md:space-x-8 items-center
                  ${isMobileMenuOpen
                    ? 'absolute top-full left-0 right-0 bg-white shadow-lg p-4 space-y-4 md:space-y-0'
                    : 'hidden'}
              `}>
                    <li>
                        <Link
                            href="/"
                            className={`text-primary font-bold transition-all duration-300 hover:text-accent
                              relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                              after:bg-accent after:origin-center after:scale-x-0 hover:after:scale-x-100
                              after:transition-transform
                              ${pathname === '/' ? 'text-accent after:scale-x-100' : ''}`}
                        >
                            Prestations
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/tarifs"
                            className={`text-primary font-bold transition-all duration-300 hover:text-accent
                              relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                              after:bg-accent after:origin-center after:scale-x-0 hover:after:scale-x-100
                              after:transition-transform
                              ${pathname === '/tarifs' ? 'text-accent after:scale-x-100' : ''}`}
                        >
                            Tarifs
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`text-primary font-bold transition-all duration-300 hover:text-accent
                              relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                              after:bg-accent after:origin-center after:scale-x-0 hover:after:scale-x-100
                              after:transition-transform
                              ${pathname === '/about' ? 'text-accent after:scale-x-100' : ''}`}
                        >
                            À Propos
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://maps.app.goo.gl/YaQzuqdLMH3mEk6f8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent transition-colors"
                            aria-label="Notre localisation"
                        >
                            <MapPin className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <ContactDialog>
                            <button className="text-primary font-bold transition-all duration-300 hover:text-accent">
                                Nous Contacter
                            </button>
                        </ContactDialog>
                    </li>
                </ul>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-primary hover:text-accent transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </nav>
        </header>
    )
}

