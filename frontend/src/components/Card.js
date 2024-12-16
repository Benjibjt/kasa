import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Card.module.css';

const Card = ({ id, title, cover, isError }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/apartment/${id}`);
  };

  return (
    <div
      className={styles.card}
      onClick={!isError ? handleClick : undefined} // Désactiver le clic si erreur
    >
      {/* Affichage conditionnel de l'image */}
      {!isError && cover && (
        <img src={cover} alt={title} className={styles.cardImage} />
      )}
      {/* Appliquer une classe conditionnelle en fonction de l'erreur */}
      <div
        className={`${styles.cardTitle} ${isError ? styles.cardTitleError : ''}`}
      >
        {title}
      </div>
    </div>
  );
};

export default Card;


