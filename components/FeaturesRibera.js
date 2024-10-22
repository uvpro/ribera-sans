const features = [
    {
      title: "Libre y Open-Source",
      description: "Ribera es completamente libre de usar y modificar.",
      icon: "🌐",
    },
    {
      title: "Multicultural",
      description:
        "Inspirada en la multiculturalidad del Puerto de Asunción, es ideal para diferentes contextos.",
      icon: "🌍",
    },
    {
      title: "Contribuciones Bienvenidas",
      description:
        "Ayuda a mejorar la tipografía contribuyendo en GitHub. Cada idea cuenta.",
      icon: "🤝",
    },
  ];
  
  const Features = () => {
    return (
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <span className="text-5xl">{feature.icon}</span>
                <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  