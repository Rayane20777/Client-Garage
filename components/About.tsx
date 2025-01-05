export default function About() {
  return (
      <section id="about" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Pourquoi Choisir Notre Garage ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <i className="fas fa-tools text-4xl text-accent mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">Expertise Technique</h3>
            <p>Nos mécaniciens sont formés aux dernières technologies automobiles.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <i className="fas fa-clock text-4xl text-accent mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">Service Rapide</h3>
            <p>Nous nous engageons à respecter les délais annoncés.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <i className="fas fa-hand-holding-usd text-4xl text-accent mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">Prix Transparents</h3>
            <p>Pas de surprises, nos tarifs sont clairs et détaillés.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <i className="fas fa-car text-4xl text-accent mb-4"></i>
            <h3 className="text-xl font-bold text-primary mb-2">Toutes Marques</h3>
            <p>Nous entretenons tous types de véhicules, quelle que soit la marque.</p>
          </div>
        </div>
      </section>
  )
}

