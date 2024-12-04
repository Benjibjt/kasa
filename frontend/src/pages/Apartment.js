import React from "react";
import CustomCollapse from "../components/CustomCollapse";
import styles from "../styles/Apartment.module.css"; // Import du CSS module

const Apartment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.collapseItem}>
                <CustomCollapse buttonContent="Description" buttonStyle={styles.buttonproperty}>
                    <p>Contenu de la description de l'appartement.</p>
                </CustomCollapse>
            </div>

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
    );
};

export default Apartment;

