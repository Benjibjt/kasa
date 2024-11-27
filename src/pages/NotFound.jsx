import React from 'react';
import styles from '../styles/NotFound.module.css'; // Import du CSS Module

const NotFound = () => {
  return (
    <div className={styles.nofound}> {/* Applique la classe .nofound */}
      <h1>404 - Page non trouvée</h1>
    </div>
  );
};

export default NotFound;