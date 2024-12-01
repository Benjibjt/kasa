import React from 'react';
import styles from '../styles/Home.module.css'; // Import du CSS Module
import Banner from '../components/Banner';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className={styles.home}> {/* Applique la classe .home */}
      <Banner />
      <Card />
    </div>
  );
};

export default Home;
