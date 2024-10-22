import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
 title="Ribera Sans - Abierta, Dinámica e Cultural"
      description="Descubre Ribera: Una familia tipográfica inspirada en el espíritu multicultural del puerto. Libre de usar, abierta a colaboraciones."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

