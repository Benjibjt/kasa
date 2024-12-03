import React from 'react';
import styles from '../styles/Card.module.css'; // CSS Module pour le style

const Card = ({ id, title, cover }) => {
  return (
    <div className={styles.card} id={id}> {/* Conteneur principal */}
      <img src={cover} alt={title} className={styles.cardImage} /> {/* Image */}
      <div className={styles.cardTitle}>{title}</div> {/* Titre */}
    </div>
  );
};

export default Card;
