'use client'

import { useState } from 'react'
import { Check, Circle, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ContactDialog from './ContactDialog'

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
    const totalPages = services.length;

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

    const AppointmentButton = () => (
        <ContactDialog>
            <Button className="w-full bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
                Prendre rendez-vous
            </Button>
        </ContactDialog>
    );

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

                <div className="mb-16 relative">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto ${
                                index === currentPage ? 'block' : 'hidden'
                            }`}
                        >
                            <div className="relative h-[600px]">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                                <div className="absolute inset-0 flex flex-col justify-between p-8">
                                    <div className="text-white">
                                        <h3 className="text-4xl font-bold mb-2">{service.name}</h3>
                                        <p className="text-3xl font-semibold mb-4">{service.price}</p>
                                        <p className="text-xl mb-2">{service.description}</p>
                                        <p className="text-sm">{service.note}</p>
                                    </div>
                                    <div className="bg-white/90 p-6 rounded-lg">
                                        <ul className="grid grid-cols-2 gap-4">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-2">
                                                    {getFeatureIcon(feature.status)}
                                                    <span className="text-sm text-gray-800">{feature.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6">
                                            <AppointmentButton />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handlePrev}
                                    disabled={currentPage === 0}
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 text-primary p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50"
                                    aria-label="Service précédent"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages - 1}
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 text-primary p-2 rounded-full hover:bg-white transition-colors disabled:opacity-50"
                                    aria-label="Service suivant"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-4">
                    <span className="text-lg font-medium">
                        {currentPage + 1} / {totalPages}
                    </span>
                </div>

                {/* Services Comparison Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-x-auto mt-16">
                    <div className="min-w-[1000px]">

                        {/* Table Header */}
                        <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b">
                            <div className="bg-blue-50 rounded-lg p-4">
                                <h3 className="font-medium text-primary mb-2">Pourquoi choisir la révision ÉcoContrôle ?</h3>
                                <p className="text-sm text-gray-600">
                                    Anticipez votre prochain contrôle technique en assurant l'encrassement de votre moteur et en identifiant les éléments défaillants pour éviter des réparations coûteuses.
                                </p>
                            </div>
                            {['RÉVISION ECO CONTRÔLE', 'RÉVISION', 'ENTRETIEN VIDANGE', 'VIDANGE SIMPLE'].map((service, index) => (
                                <div key={index} className="text-center flex flex-col justify-between h-full">
                                    <div>
                                        <div className="font-bold text-primary mb-1">{service}</div>
                                        {index <= 1 && (
                                            <div className="text-sm text-gray-500 mb-2">GARANTIE CONSTRUCTEUR PRÉSERVÉE*</div>
                                        )}
                                        {index === 0 && (
                                            <div className="text-sm text-gray-500 mb-2">DIAGNOSTIC ANTI-POLLUTION INCLUS*</div>
                                        )}
                                        <div className="font-bold text-xl mt-2">à partir de</div>
                                        <div className="text-3xl font-bold text-primary">
                                            {index === 0 ? '104 €' : index === 1 ? '91 €' : index === 2 ? '79,95 €' : '69,95 €'}
                                        </div>
                                        <div className="text-xs text-gray-500">Prix variable en fonction du véhicule*</div>
                                    </div>
                                    <div className="mt-4">
                                        <AppointmentButton />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Table Body */}
                        <div className="divide-y">
                            {[
                                { name: "Vidange huile moteur", all: true },
                                { name: "Remplacement du filtre à huile", all: true },
                                {
                                    name: "Remplacement des filtres à air, habitacle et carburant",
                                    eco: true,
                                    revision: true,
                                    vidange: { price: "39,95 €" },
                                    simple: { price: "39,95 €" }
                                },
                                {
                                    name: "Points de contrôle",
                                    eco: "jusqu'à 40 points de contrôle",
                                    revision: "jusqu'à 40 points de contrôle",
                                    vidange: "12 points de contrôles",
                                    simple: "3 points de contrôle"
                                },
                                {
                                    name: "Mise à niveau des liquides",
                                    eco: true,
                                    revision: true,
                                    vidange: "AdBlue® en option",
                                    simple: { price: "14,95 €" }
                                },
                                { name: "Pression des pneus", all: true },
                                { name: "Remise à zéro des indicateurs de maintenance", all: true },
                                { name: "Permutation des roues AV/AR sur les véhicules 4 roues motrices", all: true },
                                {
                                    name: "Diagnostic électronique moteur (pour véhicules après 2000)",
                                    eco: true,
                                    revision: true,
                                    vidange: { price: "19,95 €" },
                                    simple: { price: "19,95 €" }
                                }
                            ].map((row: {
                                name: string;
                                all?: boolean;
                                eco?: boolean | string;
                                revision?: boolean | string;
                                vidange?: { price: string } | string;
                                simple?: { price: string } | string;
                            }, index) => (
                                <div key={index} className="grid grid-cols-5 gap-4 px-6 py-3">
                                    <div className="font-medium">{row.name}</div>
                                    {['eco', 'revision', 'vidange', 'simple'].map((col) => (
                                        <div key={col} className="text-center">
                                            {row.all ? (
                                                <Check className="w-5 h-5 text-accent mx-auto" />
                                            ) : row[col] === true ? (
                                                <Check className="w-5 h-5 text-accent mx-auto" />
                                            ) : row[col]?.price ? (
                                                <div className="text-sm">
                                                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                                                        +{row[col].price}
                                                    </span>
                                                </div>
                                            ) : typeof row[col] === 'string' ? (
                                                <div className="text-sm text-gray-600">{row[col]}</div>
                                            ) : (
                                                <Circle className="w-5 h-5 text-gray-300 mx-auto" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground text-center mt-6">
                    * Prix variables en fonction du véhicule. Voir conditions en atelier.
                </p>
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
        </section>
    );
}

