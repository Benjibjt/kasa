import React, { useState } from "react";
import styles from "../styles/CustomCollapse.module.css";

function CustomCollapse({ children, buttonContent, buttonStyle }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={styles.customCollapse}>
            <button className={buttonStyle} onClick={toggleCollapse}>
                {buttonContent || (isCollapsed ? "Masquer" : "Afficher")}
                <img
                    src="/assets/arrow_back.svg"
                    alt="Flèche"
                    className={`${styles.arrowIcon} ${isCollapsed ? styles.rotated : ""}`}
                />
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

