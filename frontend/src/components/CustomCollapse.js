import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CustomCollapse.module.css";

function CustomCollapse({ children, buttonContent, buttonStyle }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [highlight, setHighlight] = useState(false);  // État pour activer la lumière bleue
    const arrowRef = useRef(null);  // Référence à l'icône de la flèche

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        let timer;
        if (highlight) {
            // Désactiver la lumière bleue après 0,5 seconde
            timer = setTimeout(() => {
                setHighlight(false);
            }, 500);
        }
        return () => clearTimeout(timer); // Nettoyer le timer
    }, [highlight]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (arrowRef.current && !arrowRef.current.contains(event.target)) {
                setHighlight(true);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.customCollapse}>
            <button className={buttonStyle}>
                <span className={styles.buttonText}>
                    {buttonContent || (isCollapsed ? "Masquer" : "Afficher")}
                </span>
                <div
                    className={`${styles.arrowContainer} ${highlight ? styles.highlighted : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleCollapse();
                    }}
                    ref={arrowRef}
                >
                    <img
                        src="/assets/arrow_back.svg"
                        alt="Flèche"
                        className={`${styles.arrowIcon} ${isCollapsed ? styles.rotated : ""}`}
                    />
                </div>
            </button>
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







