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
      <Card key={index} title="Titre de la location" cover="" isError={true} />
    ));
  };

  // Détermine si on doit limiter les cartes en mode responsive
  const isError = error || properties.length === 0;

  return (
    <div className={styles.home}> {/* Applique la classe .home */}
      <Banner image="/assets/home-banner.png" showOverlay={true}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner> {/* Image spécifique à Home */}
      <div
        className={`${styles.cardsContainer} ${
          isError ? styles.errorMode : ''
        }`}
      >
        {loading ? (
          <div>Chargement...</div> // Message pendant le chargement
        ) : isError ? (
          renderEmptyCards() // Affiche des cartes vides en cas d'erreur
        ) : (
          properties.map((property) => (
            <Card
              key={property.id} // Utilisation de l'id comme clé
              id={property.id}
              title={property.title}
              cover={property.cover}
              isError={false} // Aucune erreur ici
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;




