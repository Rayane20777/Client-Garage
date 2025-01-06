import ContactDialog from './ContactDialog'
import { Facebook } from 'lucide-react'

export default function Footer() {
    return (
        <footer id="contact" className="bg-primary text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4">Contact</h4>
                        <p className="flex items-center mb-2"><i className="fas fa-phone mr-2"></i> Tél: +33 670 058 094</p>
                        <p className="flex items-center mb-2"><i className="fas fa-envelope mr-2"></i> Email: garagemaautoservices@outlook.com</p>
                        <a
                            href="https://maps.app.goo.gl/YaQzuqdLMH3mEk6f8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center hover:text-accent transition-colors"
                        >
                            <i className="fas fa-map-marker-alt mr-2"></i> 42 Chemin de Gérocourt, 95650 Boissy-L'Aillerie
                        </a>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Horaires</h4>
                        <p className="flex items-center mb-2"><i className="far fa-clock mr-2"></i> Lun-Ven: 8h30-19h00</p>
                        <p className="flex items-center mb-2"><i className="far fa-clock mr-2"></i> Sam: 8h30-18h00</p>
                        <p className="flex items-center"><i className="far fa-clock mr-2"></i> Dim: Fermé</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
                        <div className="flex items-center space-x-2">
                            <a
                                href="https://www.facebook.com/share/18ZX4XLKHC/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white flex items-center hover:text-accent transition-colors"
                            >
                                <Facebook className="w-6 h-6 mr-2" />
                                <span>Garage M&A Auto Services</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                    <p>© 2023 GARAGE M&A AUTO SERVICES. Tous droits réservés.</p>
                    <p className="mt-2 text-sm">* Prix TTC conseillés, voir conditions en atelier</p>
                </div>
            </div>
        </footer>
    )
}

