import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Card.module.css';

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const handleClick = () => {
    navigate(`/apartment/${id}`);
  };

  useEffect(() => {
    const handleGlobalClick = (event) => {
      if (cardRef.current && cardRef.current.contains(event.target)) {
        return; // Ne rien faire si le clic est sur la carte
      }

      if (cardRef.current) {
        cardRef.current.classList.add(styles.flashAnimation);
        setTimeout(() => {
          if (cardRef.current) {
            cardRef.current.classList.remove(styles.flashAnimation);
          }
        }, 500);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    // Nettoyage : Supprime l'écouteur au démontage du composant
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onClick={handleClick}
    >
      <img src={cover} alt={title} className={styles.cardImage} />
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default Card;


