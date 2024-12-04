import React from 'react';
import styles from '../styles/About.module.css'; // Import du CSS Module
import Banner from '../components/Banner';
import CustomCollapse from '../components/CustomCollapse';

const About = () => {
  return (
    <div className={styles.about}> 
      <Banner image="/assets/about-banner.png" /> {/* Image spécifique à About */}
      <div className={styles.collapsegroup}>
            <CustomCollapse buttonContent="Fiabilité" buttonStyle={styles.aboutcollapse}>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
                  et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </CustomCollapse>

            <CustomCollapse buttonContent="Respect" buttonStyle={styles.aboutcollapse}>
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou
                  de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </CustomCollapse>

            <CustomCollapse buttonContent="Service" buttonStyle={styles.aboutcollapse}>
                <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, 
                  que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
            </CustomCollapse>

            <CustomCollapse buttonContent="Sécurité" buttonStyle={styles.aboutcollapse}>
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères
                  de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de 
                  vérifier que les standards sont bien respectés. 
                  Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </CustomCollapse>
      </div>
    </div>
  );
};

export default About;
