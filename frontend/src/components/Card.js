import React from 'react';
import styles from '../styles/Card.module.css';

const Card = () => {
  return (
    <div className={styles.outerSquare}>
      <div className={styles.innerSquare}></div>
    </div>
  );
};

export default Card;