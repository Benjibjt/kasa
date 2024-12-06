import React, { useState } from 'react';
import styles from '../styles/CustomCollapse.module.css';

function CustomCollapse({ children, buttonContent, buttonStyle }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <button className={buttonStyle} onClick={toggleCollapse}>
                {buttonContent || (isCollapsed ? "Masquer" : "Afficher")} {/* Valeur par défaut */}
                <img
                    src="/assets/arrow_back.svg"
                     alt="Flèche"
                    className={`${styles.arrowIcon} ${isCollapsed ? styles.rotated : ""}`}
                />
            </button>
            {isCollapsed && <div>{children}</div>}
        </div>
    );
}

export default CustomCollapse;

