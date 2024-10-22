const Hero = () => {
    return (
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Ribera' }}>
            RIBERA SANS
          </h1>
          <p className="text-xl mb-8">
          Abierta, Dinámica & Cultural - Una familia tipográfica inspirada en la multiculturalidad del puerto.
          </p>
          <a
            href="#features"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Descubre más
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
