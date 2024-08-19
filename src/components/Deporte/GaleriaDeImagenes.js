import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './GaleriaDeImagenes.module.css';

import Botones from '../Botones'; 

const images = [
  'deporte (1).jpg',
  'deporte (2).jpg',
  'deporte (3).jpg',
  'deporte (4).jpg',
  'deporte (5).jpg',
  'deporte (6).jpg',
  'deporte (7).jpg',
  'deporte (8).jpg',
  'deporte (9).jpg',
  'deporte (10).jpg',
  'deporte (11).jpg',
  'deporte (12).jpg',
  'deporte (13).jpg',
  'deporte (14).jpg',
  'deporte (15).jpg',
  'deporte (16).jpg',
  'deporte (17).jpg',
  'deporte (18).jpg',
  'deporte (19).jpg',
];

const GaleriaDeImagenes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getPrevIndex = () =>
    currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  return (
    <div className={styles.carouselContainer}>
      <button onClick={prevImage} className={styles.prevButton}>
        <FontAwesomeIcon icon={faChevronLeft} size="2x" /> {/* Tamaño del ícono aumentado */}
      </button>

      <div className={styles.imageAlbum}>
        <motion.div
          className={`${styles.imageWrapper} ${styles.sideImageWrapper}`}
          initial={{ scale: 1 }}
          animate={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={require(`../../assets/deporte_img/${images[getPrevIndex()]}`)}
            alt={`Deporte ${getPrevIndex() + 1}`}
            className={`${styles.image} ${styles.sideImage}`}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className={`${styles.imageWrapper} ${styles.mainImageWrapper}`}
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={require(`../../assets/deporte_img/${images[currentIndex]}`)}
            alt={`Deporte ${currentIndex + 1}`}
            className={`${styles.image} ${styles.mainImage}`}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className={`${styles.imageWrapper} ${styles.sideImageWrapper}`}
          initial={{ scale: 1 }}
          animate={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={require(`../../assets/deporte_img/${images[getNextIndex()]}`)}
            alt={`Deporte ${getNextIndex() + 1}`}
            className={`${styles.image} ${styles.sideImage}`}
            loading="lazy"
          />
        </motion.div>
      </div>

      <button onClick={nextImage} className={styles.nextButton}>
        <FontAwesomeIcon icon={faChevronRight} size="2x" /> {/* Tamaño del ícono aumentado */}
      </button>
      <Botones prevPath="/deporte" nextPath="/deporte/volverahome" />

    </div>
    
  );
};

export default GaleriaDeImagenes;
