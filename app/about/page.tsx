import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Users, History, Target, Award, Wrench } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center text-white">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.02_22089e60.jpeg-Upz7chLnhqkXoM1wMcCcFGLHcC63Qv.jpeg')"
                        }}
                    >
                        <div className="absolute inset-0 bg-primary/70"></div>
                    </div>
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de Nous</h1>
                        <p className="text-xl md:text-2xl">Votre partenaire de confiance pour l'entretien automobile</p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.01_28d8c4ff.jpg-U1D2zHZGIqkVbYggJCtAdFlXYo5gjq.jpeg"
                                    alt="Notre histoire"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-1/2 md:pl-8">
                                <h2 className="text-3xl font-bold text-primary mb-4">Notre Histoire</h2>
                                <p className="text-gray-600 mb-4">
                                    Fondé en 1995, notre garage a débuté comme une petite entreprise familiale avec une passion pour l'automobile et un engagement envers un service client exceptionnel. Au fil des ans, nous avons grandi, évolué et nous sommes adaptés aux changements technologiques de l'industrie automobile.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Aujourd'hui, nous sommes fiers d'être l'un des garages les plus réputés de la région, offrant une gamme complète de services d'entretien et de réparation pour tous types de véhicules. Notre succès repose sur notre engagement continu envers la qualité, l'honnêteté et la satisfaction de nos clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-primary text-center mb-12">Nos Valeurs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-accent mb-4">
                                    <Target className="w-12 h-12 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                                <p className="text-gray-600">Nous investissons continuellement dans la formation de notre équipe pour rester à la pointe de la technologie automobile.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-accent mb-4">
                                    <Users className="w-12 h-12 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Service Client</h3>
                                <p className="text-gray-600">La satisfaction de nos clients est notre priorité absolue. Nous nous efforçons de dépasser vos attentes à chaque visite.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-accent mb-4">
                                    <Award className="w-12 h-12 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Qualité</h3>
                                <p className="text-gray-600">Nous n'utilisons que des pièces de haute qualité et des équipements de pointe pour garantir la fiabilité de nos services.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-accent mb-4">
                                    <History className="w-12 h-12 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Transparence</h3>
                                <p className="text-gray-600">Nous croyons en une communication ouverte et honnête avec nos clients à chaque étape du processus.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-primary text-center mb-12">Notre Équipe</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.01_e19f1d97.jpg-w1TlzOOGj7ZXNXzZcbgY2HgPapU3Lw.jpeg"
                                    alt="Jean Dupont"
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Jean Dupont</h3>
                                <p className="text-gray-600 mb-2">Fondateur & Maître Mécanicien</p>
                                <p className="text-sm text-gray-500">Plus de 30 ans d'expérience dans l'industrie automobile</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.02_cbc51502.jpg-HRHczlwTq8pelnf8sVxWr4w6tZo48S.jpeg"
                                    alt="Marie Martin"
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Marie Martin</h3>
                                <p className="text-gray-600 mb-2">Responsable Service Client</p>
                                <p className="text-sm text-gray-500">Dévouée à offrir une expérience client exceptionnelle</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.02_5ad9bee9.jpg-L2yCiDapcpmDAaM3OvwiVqJmwwn3P8.jpeg"
                                    alt="Pierre Leroy"
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-2">Pierre Leroy</h3>
                                <p className="text-gray-600 mb-2">Chef Mécanicien</p>
                                <p className="text-sm text-gray-500">Spécialiste en diagnostic électronique et réparations complexes</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="py-16 bg-primary text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Prêt à nous confier votre véhicule ?</h2>
                        <p className="text-xl mb-8">Prenez rendez-vous dès aujourd'hui et découvrez la différence de notre service.</p>
                        <a
                            href="/contact"
                            className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center"
                        >
                            <Wrench className="mr-2" />
                            Prendre Rendez-vous
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

