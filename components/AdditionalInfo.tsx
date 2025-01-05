export default function AdditionalInfo() {
  return (
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Points de contrôle inclus</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Contrôle des niveaux</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Contrôle des freins</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Contrôle de la direction</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Contrôle des pneumatiques</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Contrôle de la visibilité</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Contrôle de la batterie</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Contrôle du système de refroidissement</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i> Contrôle de l'échappement</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Options disponibles</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><i className="fas fa-plus text-blue-500 mr-2"></i> Filtre à air (+39,95€)</li>
                <li className="flex items-center"><i className="fas fa-plus text-blue-500 mr-2"></i> Filtre habitacle (+39,95€)</li>
                <li className="flex items-center"><i className="fas fa-plus text-blue-500 mr-2"></i> AdBlue® (+14,95€)</li>
                <li className="flex items-center"><i className="fas fa-plus text-blue-500 mr-2"></i> Diagnostic électronique (+29,95€)</li>
                <li className="flex items-center"><i className="fas fa-plus text-blue-500 mr-2"></i> Équilibrage des roues (+19,95€ par roue)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

