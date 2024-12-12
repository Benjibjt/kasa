import React, { useState } from "react";
import styles from "../styles/CustomCollapse.module.css";

function CustomCollapse({ children, buttonContent, buttonStyle }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Fonction pour basculer l'état de collapse
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={styles.customCollapse}>
            <button className={buttonStyle}>
                {/* Texte non interactif */}
                <span className={styles.buttonText}>
                    {buttonContent || (isCollapsed ? "Masquer" : "Afficher")}
                </span>

                {/* Flèche cliquable */}
                <img
                    src="/assets/arrow_back.svg"
                    alt="Flèche"
                    className={`${styles.arrowIcon} ${isCollapsed ? styles.rotated : ""}`}
                    onClick={toggleCollapse} // Clique uniquement sur la flèche pour toggler
                />
            </button>

            {/* Contenu du collapse */}
            <div
                className={`${styles.collapseContent} ${
                    isCollapsed ? styles.open : styles.closed
                }`}
            >
                {children}
            </div>
        </div>
    );
}

export default CustomCollapse;





