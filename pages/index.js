import Head from "next/head";
import Hero from "../components/HeroRibera.js";
import Features from "../components/FeaturesRibera";
import RiberaSans from "../components/RiberaSans";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ribera Sans - Tipografía Del Puerto</title>
        <meta
          name="description"
          content="Ribera Sans es una tipografía libre de uso, diseñada para reflejar el espíritu multicultural del Puerto de Asunción."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Secciones */}
      <Hero />
      <Features />
      <RiberaSans />
      <Footer />
    </div>
  );
}
