import Image from 'next/image'
import Link from 'next/link'
import { Car, Wrench, PenToolIcon as Tool, Battery, Gauge, AlertTriangle, ThermometerSun, Sparkles } from 'lucide-react'

const services = [
  {
    title: "Diagnostic Électronique",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.01_28d8c4ff.jpg-U1D2zHZGIqkVbYggJCtAdFlXYo5gjq.jpeg",
    icon: <Gauge className="w-6 h-6" />,
    description: "Diagnostic complet avec équipement de dernière génération",
    services: [
      {
        name: "Diagnostic électronique",
        detail: "Lecture et analyse des codes défaut"
      },
      {
        name: "Mise à jour logiciel",
        detail: "Actualisation des calculateurs"
      },
      {
        name: "Test des capteurs",
        detail: "Vérification complète des systèmes"
      },
      {
        name: "Rapport détaillé",
        detail: "Documentation des interventions"
      }
    ]
  },
  {
    title: "Entretien Moteur",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.02_cbc51502.jpg-HRHczlwTq8pelnf8sVxWr4w6tZo48S.jpeg",
    icon: <Wrench className="w-6 h-6" />,
    description: "Maintenez votre moteur en parfait état avec nos services d'entretien spécialisés",
    services: [
      {
        name: "Révision complète",
        detail: "Contrôle approfondi du moteur"
      },
      {
        name: "Vidange",
        detail: "Huiles premium et filtres d'origine"
      }
    ]
  },
  {
    title: "Système de Freinage",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.02_5ad9bee9.jpg-L2yCiDapcpmDAaM3OvwiVqJmwwn3P8.jpeg",
    icon: <Tool className="w-6 h-6" />,
    description: "Service complet de freinage pour votre sécurité",
    services: [
      {
        name: "Remplacement plaquettes",
        detail: "Plaquettes haute performance"
      },
      {
        name: "Disques de frein",
        detail: "Installation et équilibrage"
      },
      {
        name: "Système hydraulique",
        detail: "Contrôle et purge"
      },
      {
        name: "Freins à tambour",
        detail: "Réglage et remplacement"
      }
    ]
  },
  {
    title: "Inspection Générale",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-25%20%C3%A0%2021.54.01_e19f1d97.jpg-w1TlzOOGj7ZXNXzZcbgY2HgPapU3Lw.jpeg",
    icon: <Car className="w-6 h-6" />,
    description: "Inspection complète de votre véhicule",
    services: [
      {
        name: "Points de contrôle",
        detail: "Vérification exhaustive"
      },
      {
        name: "Suspension",
        detail: "Test et diagnostic"
      },
      {
        name: "Pneumatiques",
        detail: "Contrôle et pression"
      },
      {
        name: "Éclairage",
        detail: "Vérification des feux"
      }
    ]
  }
]

export default function WorkshopServices() {
  return (
      <section className="py-16 px-4 bg-gradient-to-b from-white to-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Nos prestations atelier
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div key={index} className="flex flex-col bg-muted rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                      {service.icon}
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-3">
                      {service.services.map((item, i) => (
                          <li key={i} className="group">
                            <div className="font-medium text-primary">{item.name}</div>
                            <div className="text-sm text-muted-foreground group-hover:text-secondary transition-colors">
                              {item.detail}
                            </div>
                          </li>
                      ))}
                    </ul>
                  </div>

                  {service.services.length > 5 && (
                      <div className="p-6 pt-0">
                        <Link
                            href="/tarifs"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                        >
                          Voir tous les services
                          <span className="text-lg">→</span>
                        </Link>
                      </div>
                  )}
                </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 bg-background p-8 rounded-lg shadow-lg">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <ThermometerSun className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-lg font-bold text-primary mb-2">Diagnostic Précis</h4>
              <p className="text-muted-foreground">Équipement de diagnostic dernière génération pour une analyse complète</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <Sparkles className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-lg font-bold text-primary mb-2">Pièces d'Origine</h4>
              <p className="text-muted-foreground">Utilisation exclusive de pièces d'origine ou de qualité équivalente</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <Battery className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-lg font-bold text-primary mb-2">Service Rapide</h4>
              <p className="text-muted-foreground">Interventions rapides pour les opérations courantes sans rendez-vous</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <AlertTriangle className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-lg font-bold text-primary mb-2">Garantie Travaux</h4>
              <p className="text-muted-foreground">Tous nos travaux sont garantis pour votre tranquillité d'esprit</p>
            </div>
          </div>
        </div>
      </section>
  )
}

