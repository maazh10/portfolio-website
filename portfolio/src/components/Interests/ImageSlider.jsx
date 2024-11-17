import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from "./ImageSlider.module.css";

export const ImageSlider = ({ images, interval }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className={styles.imageSlider}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${styles.imageSlide} ${index === currentIndex ? styles.active : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.array.isRequired,
    interval: PropTypes.number.isRequired,
};