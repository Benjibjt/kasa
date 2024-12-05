import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate pour la navigation
import styles from '../styles/Card.module.css'; // CSS Module pour le style

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate(); // Hook pour gérer la navigation

  const handleClick = () => {
    navigate(`/apartment/${id}`); // Navigue vers la page Apartment avec l'ID
  };

  return (
    <div className={styles.card} onClick={handleClick}> {/* Ajout de l'événement onClick */}
      <img src={cover} alt={title} className={styles.cardImage} /> {/* Image */}
      <div className={styles.cardTitle}>{title}</div> {/* Titre */}
    </div>
  );
};

export default Card;
