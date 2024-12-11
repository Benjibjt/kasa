import React, { useContext } from 'react';
import styles from '../styles/Home.module.css'; // Import du CSS Module
import Banner from '../components/Banner';
import Card from '../components/Card';
import { PropertiesContext } from '../context/PropertiesProvider'; // Import du contexte

const Home = () => {
  const { properties, loading, error } = useContext(PropertiesContext); // Accès au contexte

  // Fonction pour générer des cartes vides
  const renderEmptyCards = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <Card key={index} title="Titre de la location" cover="" />
    ));
  };

  return (
    <div className={styles.home}> {/* Applique la classe .home */}
      <Banner image="/assets/home-banner.png" showOverlay={true}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner> {/* Image spécifique à Home */}
      <div className={styles.cardsContainer}> {/* Conteneur pour les cartes */}
        {loading ? (
          <div>Chargement...</div> // Message pendant le chargement
        ) : error ? (
          renderEmptyCards() // Affiche des cartes vides en cas d'erreur
        ) : properties.length > 0 ? (
          properties.map((property) => (
            <Card
              key={property.id} // Utilisation de l'id comme clé
              id={property.id}
              title={property.title}
              cover={property.cover}
            />
          ))
        ) : (
          renderEmptyCards() // Si aucune propriété n'est disponible
        )}
      </div>
    </div>
  );
};

export default Home;




