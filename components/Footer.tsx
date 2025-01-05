export default function Footer() {
    return (
        <footer id="contact" className="bg-primary text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4">Contact</h4>
                        <p className="flex items-center mb-2"><i className="fas fa-phone mr-2"></i> Tél: 01 23 45 67 89</p>
                        <p className="flex items-center mb-2"><i className="fas fa-envelope mr-2"></i> Email: contact@garage.fr</p>
                        <p className="flex items-center"><i className="fas fa-map-marker-alt mr-2"></i> 123 Rue de l'Auto, 75000 Paris</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Horaires</h4>
                        <p className="flex items-center mb-2"><i className="far fa-clock mr-2"></i> Lun-Ven: 8h30-19h00</p>
                        <p className="flex items-center mb-2"><i className="far fa-clock mr-2"></i> Sam: 9h00-18h00</p>
                        <p className="flex items-center"><i className="far fa-clock mr-2"></i> Dim: Fermé</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-accent transition-colors"><i className="fab fa-facebook text-2xl"></i></a>
                            <a href="#" className="text-white hover:text-accent transition-colors"><i className="fab fa-twitter text-2xl"></i></a>
                            <a href="#" className="text-white hover:text-accent transition-colors"><i className="fab fa-instagram text-2xl"></i></a>
                            <a href="#" className="text-white hover:text-accent transition-colors"><i className="fab fa-linkedin text-2xl"></i></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/20 text-center">
                    <p>© 2023 Garage Auto Service. Tous droits réservés.</p>
                    <p className="mt-2 text-sm">* Prix TTC conseillés, voir conditions en atelier</p>
                </div>
            </div>
        </footer>
    )
}

