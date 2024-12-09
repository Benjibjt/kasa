import React, { useState } from "react";
import styles from "../styles/Carousel.module.css";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gestion des images précédentes et suivantes
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Affichage conditionnel : cas d'une seule image
    const hasMultipleImages = images.length > 1;

    return (
        <div className={styles.carousel}>
            {/* Image principale */}
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className={styles.carouselImage}
            />

            {/* Flèches : affichées seulement si plusieurs images */}
            {hasMultipleImages && (
                <>
                    <button className={styles.prevButton} onClick={handlePrev}>
                        <img src="/assets/left-arrow.svg" alt="Previous" />
                    </button>
                    <button className={styles.nextButton} onClick={handleNext}>
                        <img src="/assets/right-arrow.svg" alt="Next" />
                    </button>
                </>
            )}

            {/* Indicateurs : affichés seulement si plusieurs images */}
            {hasMultipleImages && (
                <div className={styles.indicators}>
                    <span>
                        {currentIndex + 1}/{images.length}
                    </span>
                </div>
            )}
        </div>
    );
}

export default Carousel;