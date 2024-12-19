import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CustomCollapse from "../components/CustomCollapse";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating"; // Import du composant Rating
import styles from "../styles/Apartment.module.css";
import { PropertiesContext } from "../context/PropertiesProvider";
import NotFound from './NotFound';

const Apartment = () => {
  const { id } = useParams();
  const { properties } = useContext(PropertiesContext);

  const [activeCollapse, setActiveCollapse] = useState(null);

  const apartmentData = properties.find((property) => property.id === id);

  if (!apartmentData) {
    return <NotFound />;
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

  const handleCollapseToggle = (collapseId) => {
    setActiveCollapse((prevState) => (prevState === collapseId ? null : collapseId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.carouselContainer}>
        <Carousel images={pictures} />
      </div>
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
          <Rating rating={rating} styles={styles} /> {/* Utilisation du composant Rating */}
        </div>
      </div>
      <div className={styles.propertyinfo}>
        <div className={styles.twoCollapses}>
          <div className={styles.collapseItem}>
            <CustomCollapse
              buttonContent="Description"
              buttonStyle={`${styles.buttonProperty} ${styles.buttonDescription}`}
              isOpen={activeCollapse === "description"}
              setIsOpen={() => handleCollapseToggle("description")}
            >
              <p>{description}</p>
            </CustomCollapse>
          </div>
          <div className={styles.collapseItem}>
            <CustomCollapse
              buttonContent="Équipements"
              buttonStyle={`${styles.buttonProperty} ${styles.buttonEquipments}`}
              isOpen={activeCollapse === "equipments"}
              setIsOpen={() => handleCollapseToggle("equipments")}
            >
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




