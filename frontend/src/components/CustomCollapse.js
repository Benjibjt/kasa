import React, { useState, useRef } from "react";
import styles from "../styles/CustomCollapse.module.css";

function CustomCollapse({ children, buttonContent, buttonStyle }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const arrowRef = useRef(null); // Référence à l'icône de la flèche

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={styles.customCollapse}>
            <button className={buttonStyle}>
                <span className={styles.buttonText}>
                    {buttonContent || (isCollapsed ? "Masquer" : "Afficher")}
                </span>
                <div
                    className={`${styles.arrowContainer}`}
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







