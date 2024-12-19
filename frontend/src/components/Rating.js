import React from "react";

const Rating = ({ rating, styles }) => {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.rating}>
        {Array(5)
          .fill()
          .map((_, index) => (
            <img
              key={index}
              src={index < rating ? '/assets/star-filled.svg' : '/assets/star-empty.svg'}
              alt={index < rating ? 'Star filled' : 'Star empty'}
              className={index < rating ? styles.starFilled : styles.starEmpty}
            />
          ))}
      </div>
    </div>
  );
};

export default Rating;