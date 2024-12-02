import React from 'react';
import { Link } from 'react-router-dom'; // Import du composant Link
import styles from '../styles/NotFound.module.css'; // Import du CSS Module

const NotFound = () => {
  return (
    <div className={styles.nofound}> {/* Applique la classe .nofound */}
      <h1>404</h1>
      <p className={styles.message}>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className={styles.link}> {/* Lien vers la page d'accueil */}
        Retourner sur la page d'accueil
      </Link>

    </div>
  );
};

export default NotFound;