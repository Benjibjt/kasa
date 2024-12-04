import React from 'react';
import styles from '../styles/About.module.css'; // Import du CSS Module
import Banner from '../components/Banner';

const About = () => {
  return (
    <div className={styles.about}>
      <Banner image="/assets/about-banner.png" /> {/* Image spécifique à About */}
    </div>
  );
};

export default About;
