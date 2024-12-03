import React, { Children } from 'react';
import styles from '../styles/Banner.module.css';

const Banner = ({ image, children, showOverlay = false }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    >
      {showOverlay && <div className={styles.overlay}></div>} {/* Affiche l'overlay uniquement si showOverlay est true */}
        <div className={styles.content}>{children}</div> {/* Zone pour le texte */}
    </div>
  );
};

export default Banner;