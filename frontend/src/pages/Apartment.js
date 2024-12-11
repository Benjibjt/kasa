import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CustomCollapse from "../components/CustomCollapse";
import Carousel from "../components/Carousel"; // Import du composant Carousel
import styles from "../styles/Apartment.module.css"; // Import du CSS module
import { PropertiesContext } from "../context/PropertiesProvider"; // Import du contexte
import NotFound from './NotFound';


const Apartment = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const { properties } = useContext(PropertiesContext); // Accède aux propriétés via le contexte

  // Trouver les données de l'appartement correspondant
  const apartmentData = properties.find((property) => property.id === id);

  // Gestion si l'appartement n'est pas trouvé
  if (!apartmentData) {
    return <NotFound />
  }

  const {
    pictures,
    title,
    location,
    tags,
    rating,
    host,
    description,
    equipments,
  } = apartmentData;

  return (
    <div className={styles.container}>
      {/* Section Carrousel */}
      <div className={styles.carouselContainer}>
        <Carousel images={pictures} />
      </div>

      {/* Informations principales */}
      <div className={styles.mainInfo}>
        <div className={styles.generalInfo}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.location}>{location}</p>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.host}>
          <div className={styles.hostInfo}>
            <div className={styles.hostName}>{host.name}</div>
            <img src={host.picture} alt={host.name} className={styles.hostImage} />
          </div>
          {/* Section Rating */}
          <div className={styles.ratingContainer}>
            <div className={styles.rating}>
            {Array(5)
              .fill()
              .map((_, index) => (
                <img
                  key={index}
                  src={index < apartmentData.rating ? '/assets/star-filled.svg' : '/assets/star-empty.svg'}
                  alt={index < apartmentData.rating ? 'Star filled' : 'Star empty'}
                  className={index < apartmentData.rating ? styles.starFilled : styles.starEmpty}
                  />
              ))}
          </div>
        </div>
      </div>
    </div>


      {/* Sections Description et Équipements */}
      <div className={styles.propertyinfo}>
        <div className={styles.twoCollapses}>
          <div className={styles.collapseItem}>
            <CustomCollapse buttonContent="Description" buttonStyle={`${styles.buttonProperty} ${styles.buttonDescription}`}>
              <p>{description}</p>
            </CustomCollapse>
          </div>
          <div className={styles.collapseItem}>
            <CustomCollapse buttonContent="Équipements" buttonStyle={`${styles.buttonProperty} ${styles.buttonEquipments}`}>
              <ul>
                {equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CustomCollapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;





