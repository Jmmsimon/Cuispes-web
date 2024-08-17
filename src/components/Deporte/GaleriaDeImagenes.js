import React from 'react';
import { motion } from 'framer-motion';
import styles from './GaleriaDeImagenes.module.css';

// Rutas de las imágenes
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
  return (
    <div className={styles.container}>
      {images.map((img, index) => (
        <motion.div
          key={index}
          className={styles.imageWrapper}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={require(`../../assets/deporte_img/${img}`)}
            alt={`Deporte ${index + 1}`}
            className={styles.image}
            loading="lazy" // Habilita la carga diferida
          />
        </motion.div>
      ))}
    </div>
  );
};

export default GaleriaDeImagenes;
