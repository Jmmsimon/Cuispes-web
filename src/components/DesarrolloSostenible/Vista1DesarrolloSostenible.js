import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Vista1DesarrolloSostenible.module.css'; // Importa el módulo CSS
import ruletaImage from 'C:/Users/jeans/yumbilla/src/assets/ruleta.png';
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Vista1DesarrolloSostenible = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    setIsEnglish((prevIsEnglish) => !prevIsEnglish);
  };

  // Textos en ambos idiomas
  const textItems = isEnglish
    ? ['I. Social ODS', 'II. Environmental ODS', 'III. Productive ODS']
    : ['I. ODS Sociales', 'II. ODS Ambientales', 'III. ODS Productivos'];

  // Definir la variante de la animación para los elementos de la lista
  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.6,
        duration: 1.2,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div className={styles.vistaContainer}>
      <div className={styles.odsList}>
        <ul>
          {textItems.map((text, index) => (
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
      <div className={styles.translateButtonContainer}>
        <button className={styles.translateButton} onClick={toggleLanguage}>
          <FontAwesomeIcon icon={faLanguage} size="2x" className={styles.icon} />
          {isEnglish ? ' Español' : ' English'}
        </button>
      </div>
      <div className={styles.odsImage}>
        <img src={ruletaImage} alt="Ruleta ODS" />
      </div>
      <Botones prevPath="/desarrollosostenible" nextPath="/desarrollosostenible/vista2" />
    </div>
  );
};

export default Vista1DesarrolloSostenible;
