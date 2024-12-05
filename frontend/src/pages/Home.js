import React, { useContext } from 'react';
import styles from '../styles/Home.module.css'; // Import du CSS Module
import Banner from '../components/Banner';
import Card from '../components/Card';
import { PropertiesContext } from '../context/PropertiesProvider'; // Import du contexte

const Home = () => {
  const { properties, loading, error } = useContext(PropertiesContext); // Accès au contexte

  // Gestion des états de chargement et d'erreur
  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className={styles.home}> {/* Applique la classe .home */}
      <Banner image="/assets/home-banner.png" showOverlay={true}>
        <h1>Chez vous et partout ailleurs</h1>
      </Banner> {/* Image spécifique à Home */}
      <div className={styles.cardsContainer}> {/* Conteneur pour les cartes */}
        {properties.map((property) => (
          <Card
            key={property.id} // Utilisation de l'id comme clé
            id={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
