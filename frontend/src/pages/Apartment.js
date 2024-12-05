import React from "react";
import CustomCollapse from "../components/CustomCollapse";
import Carousel from "../components/Carousel"; // Import du composant Carousel
import styles from "../styles/Apartment.module.css"; // Import du CSS module

const Apartment = ({ apartmentData = {} }) => {
    const images = apartmentData.images || ["/assets/default1.jpg", "/assets/default2.jpg"];

    return (
        <div className={styles.container}>
            {/* Section Carrousel */}
            <div className={styles.carouselContainer}>
                <Carousel images={images} />
            </div>

            <div className={styles.propertyinfo}>
                <div className={styles.twocollapses}>
                    {/* Section Description */}
                    <div className={styles.collapseItem}>
                        <CustomCollapse buttonContent="Description" buttonStyle={styles.buttonproperty}>
                            <p>Contenu de la description de l'appartement.</p>
                        </CustomCollapse>
                    </div>

                    {/* Section Équipements */}
                    <div className={styles.collapseItem}>
                        <CustomCollapse buttonContent="Équipements" buttonStyle={styles.buttonproperty}>
                            <ul>
                                <li>Wi-Fi</li>
                                <li>Machine à laver</li>
                                <li>Cuisine équipée</li>
                            </ul>
                        </CustomCollapse>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Apartment;


