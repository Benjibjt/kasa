import React from 'react';
import styles from '../styles/Home.module.css'; // Import du CSS Module

const Home = () => {
  return (
    <div className={styles.home}> {/* Applique la classe .home */}
      <h1>Bienvenue sur la page d'accueil</h1> 
    </div>
  );
};

export default Home;
