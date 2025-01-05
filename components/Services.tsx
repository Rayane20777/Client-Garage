'use client'

import { useState } from 'react'
import { Check, Circle } from 'lucide-react'

const services = [
    {
        name: "Révision Éco",
        price: "104 €",
        description: "à partir de",
        note: "Prix variable en fonction du véhicule*",
        tags: ["eco"],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.02_cbc51502.jpg-HRHczlwTq8pelnf8sVxWr4w6tZo48S.jpeg",
        features: [
            { text: "Vidange huile moteur", status: "included" },
            { text: "Remplacement du filtre à huile", status: "included" },
            { text: "Jusqu'à 40 points de contrôle", status: "included" },
            { text: "Pression des pneus", status: "included" },
            { text: "Remise à zéro des indicateurs", status: "included" },
            { text: "Mise à niveau des liquides", status: "optional" }
        ]
    },
    {
        name: "Révision Complète",
        price: "91 €",
        description: "à partir de",
        note: "Prix variable en fonction du véhicule*",
        tags: ["popular"],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.01_28d8c4ff.jpg-U1D2zHZGIqkVbYggJCtAdFlXYo5gjq.jpeg",
        features: [
            { text: "Vidange huile moteur", status: "included" },
            { text: "Remplacement du filtre à huile", status: "included" },
            { text: "Jusqu'à 40 points de contrôle", status: "included" },
            { text: "Pression des pneus", status: "included" },
            { text: "Remise à zéro des indicateurs", status: "included" },
            { text: "Mise à niveau des liquides", status: "included" }
        ]
    },
    {
        name: "Vidange Simple",
        price: "69,95 €",
        description: "à partir de",
        note: "Prix variable en fonction du véhicule*",
        tags: [],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.02_5ad9bee9.jpg-L2yCiDapcpmDAaM3OvwiVqJmwwn3P8.jpeg",
        features: [
            { text: "Vidange huile moteur", status: "included" },
            { text: "Remplacement du filtre à huile", status: "included" },
            { text: "Jusqu'à 3 points de contrôle", status: "included" },
            { text: "Pression des pneus", status: "included" },
            { text: "Remise à zéro des indicateurs", status: "included" },
            { text: "Mise à niveau des liquides", status: "not-included" }
        ]
    },
    {
        name: "Contrôle Technique",
        price: "79,90 €",
        description: "à partir de",
        note: "Prix variable en fonction du véhicule*",
        tags: [],
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.01_e19f1d97.jpg-w1TlzOOGj7ZXNXzZcbgY2HgPapU3Lw.jpeg",
        features: [
            { text: "Contrôle complet du véhicule", status: "included" },
            { text: "Rapport détaillé", status: "included" },
            { text: "Conseils personnalisés", status: "included" },
            { text: "Contre-visite gratuite", status: "included" },
            { text: "Prise de rendez-vous en ligne", status: "included" },
            { text: "Réparations sur place", status: "optional" }
        ]
    }
];

export default function Services() {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 1;
    const totalPages = Math.ceil(services.length / cardsPerPage);

    const getFeatureIcon = (status: string) => {
        switch(status) {
            case 'included':
                return <Check className="w-5 h-5 text-emerald-500" />;
            case 'optional':
                return <Circle className="w-5 h-5 fill-amber-500" />;
            default:
                return <Circle className="w-5 h-5 text-red-500" />;
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-background to-muted py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">
                    Nos Services d'Entretien
                </h1>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Découvrez nos différentes formules d'entretien adaptées à vos besoins. 
                    Nos experts sont à votre disposition pour maintenir votre véhicule en parfait état.
                </p>
                
                <div className="relative max-w-4xl mx-auto">
                    {services.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage).map((service, index) => (
                        <div 
                            key={index} 
                            className="bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden shadow-2xl p-8 text-white"
                            style={{
                                backgroundImage: `linear-gradient(to bottom right, rgba(30, 64, 175, 0.95), rgba(59, 130, 246, 0.95)), url('${service.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundBlendMode: 'overlay'
                            }}
                        >
                            <div className="flex flex-col">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold mb-6">{service.name}</h2>
                                    <div className="flex flex-col">
                                        <span className="text-5xl font-bold mb-1">{service.price}</span>
                                        <span className="text-blue-100">{service.description}</span>
                                        <span className="text-blue-100 text-sm">{service.note}</span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mb-8">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-3">
                                            {getFeatureIcon(feature.status)}
                                            <span className="text-blue-50">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                    
                    <div className="flex justify-center items-center mt-8 gap-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50 
                                disabled:cursor-not-allowed transition-all duration-300"
                        >
                            ←
                        </button>
                        <span className="text-primary font-medium">
                            {currentPage + 1} / {totalPages}
                        </span>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            className="w-10 h-10 flex items-center justify-center rounded-full 
                                bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50 
                                disabled:cursor-not-allowed transition-all duration-300"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="mt-24 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-6">Informations Importantes</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-500 mt-1" />
                                <div>
                                    <p className="font-medium text-gray-900">Garantie Constructeur Préservée</p>
                                    <p className="text-gray-600">Nos interventions respectent le carnet d'entretien constructeur</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-500 mt-1" />
                                <div>
                                    <p className="font-medium text-gray-900">Pièces d'Origine</p>
                                    <p className="text-gray-600">Utilisation exclusive de pièces de première monte ou de qualité équivalente</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-emerald-500 mt-1" />
                                <div>
                                    <p className="font-medium text-gray-900">Devis Gratuit</p>
                                    <p className="text-gray-600">Estimation détaillée avant toute intervention</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-primary mb-6">Services Complémentaires</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">+39,95€</span>
                                <div>
                                    <p className="font-medium text-gray-900">Remplacement Filtre à Air</p>
                                    <p className="text-gray-600">Améliore les performances et la consommation</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">+39,95€</span>
                                <div>
                                    <p className="font-medium text-gray-900">Remplacement Filtre Habitacle</p>
                                    <p className="text-gray-600">Pour un air plus sain dans l'habitacle</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">+29,95€</span>
                                <div>
                                    <p className="font-medium text-gray-900">Diagnostic Électronique</p>
                                    <p className="text-gray-600">Lecture et analyse des codes défaut</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-24 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-primary text-center mb-8">Questions Fréquentes</h3>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-lg mb-2 text-primary">Combien de temps dure une révision ?</h4>
                            <p className="text-gray-600">La durée moyenne d'une révision est de 2 à 3 heures, selon le type de révision et le modèle du véhicule.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-lg mb-2 text-primary">Puis-je attendre pendant l'intervention ?</h4>
                            <p className="text-gray-600">Oui, notre espace d'attente est équipé de WiFi gratuit et de boissons chaudes.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-lg mb-2 text-primary">Les pièces sont-elles garanties ?</h4>
                            <p className="text-gray-600">Oui, toutes nos pièces et main d'œuvre sont garanties 12 mois.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

