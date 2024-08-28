import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './vista3territorio.module.css';
import suelosImg from '../../assets/suelos.jpg';
import Botones from '../Botones';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Vista3Territorio = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const textSpanish = `El distrito de Cuispes cuenta con la clasificación de suelo: 
  "Lithic Udorthents-Typic Dystrudepts", que describe a los suelos 
  que se han alterado o perturbado significativamente por la actividad humana. 
  La palabra "Lithic" indica que hay roca a 50 cm o menos de la superficie.`;

  const textEnglish = `The district of Cuispes has a soil classification: 
  "Lithic Udorthents-Typic Dystrudepts", which describes soils 
  that have been significantly altered or disturbed by human activity. 
  The word "Lithic" indicates that there is rock 50 cm or less from the surface.`;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.6, ease: 'easeOut' };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.column}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={transition}
      >
        <p className={styles.text}>
          {isEnglish ? textEnglish : textSpanish}
        </p>
      </motion.div>
      <motion.div
        className={styles.column}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={transition}
      >
        <motion.img
          src={suelosImg}
          alt="Suelos"
          className={styles.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </motion.div>
      <Botones prevPath="/territorio/vista2" nextPath="/territorio/volverahome" />
      <div className={styles.translateButtonContainer}>
        <button className={styles.translateButton} onClick={toggleLanguage}>
          <FontAwesomeIcon icon={faLanguage} size="2x" className={styles.icon} />
          {isEnglish ? ' Español' : ' English'}
        </button>
      </div>
    </div>
  );
};

export default Vista3Territorio;
