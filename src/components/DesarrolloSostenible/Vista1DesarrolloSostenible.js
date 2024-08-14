import React from 'react';
import { motion } from 'framer-motion';
import styles from './Vista1DesarrolloSostenible.module.css'; // Importa el módulo CSS
import ruletaImage from 'C:/Users/jeans/yumbilla/src/assets/ruleta.png';
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta

const Vista1DesarrollosoSostenible = () => {
  // Definir la variante de la animación para los elementos de la lista
  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.6,
        duration: 1.2,
        ease: "easeInOut"
      },
    }),
  };

  return (
    <div className={styles.vistaContainer}>
      <div className={styles.odsList}>
        <ul>
          {['I. ODS SOCIALES', 'II. ODS AMBIENTALES', 'III. ODS PRODUCTIVOS'].map((text, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={listItemVariants}
              className={styles.listItem}
            >
              {text}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className={styles.odsImage}>
        <img src={ruletaImage} alt="Ruleta ODS" />
      </div>
      <Botones prevPath="/desarrollosostenible" nextPath="/desarrollosostenible/vista2" />

    </div>
  );
};

export default Vista1DesarrollosoSostenible;
