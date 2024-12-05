import React, { useState } from 'react';
import styles from '../styles/Carousel.module.css'; // Votre CSS module pour le carrousel

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className={styles.carousel}>
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className={styles.carouselImage}
            />
            <button className={styles.prevButton} onClick={handlePrev}>
                &#8249; {/* Flèche gauche */}
            </button>
            <button className={styles.nextButton} onClick={handleNext}>
                &#8250; {/* Flèche droite */}
            </button>
            <div className={styles.indicators}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.indicator} ${
                            index === currentIndex ? styles.active : ''
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
