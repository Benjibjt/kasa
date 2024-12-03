import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'; // Import du CSS Module
import Banner from '../components/Banner';
import Card from '../components/Card';

const Home = () => {
  const [properties, setProperties] = useState([]); // État pour stocker les propriétés
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs

  useEffect(() => {
    // Appel à l'API pour récupérer les données
    fetch('http://localhost:8080/api/properties')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données');
        }
        return response.json();
      })
      .then((data) => {
        setProperties(data); // Stocke les données dans l'état
        setLoading(false); // Fin du chargement
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Le tableau vide [] garantit que l'effet s'exécute une seule fois

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

