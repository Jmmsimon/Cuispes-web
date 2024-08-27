// src/components/Comunidad/Comunidad.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';
import Botones from '../Botones'; 
import styles from './Comunidad.module.css'; 
import backgroundImage from '../../assets/comunidad-img/porta-comunidad.jpg'; 

const Comunidad = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const titleSpanish = 'COMUNIDAD';
  const titleEnglish = 'COMMUNITY';
  const textSpanish = 'Distrito de Cuispes';
  const textEnglish = 'District of Cuispes';

  return (
    <>
      <motion.div
        className={styles.comunidad}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', 
          width: '100%',
        }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <h1>{isEnglish ? titleEnglish : titleSpanish}</h1> 
          <div className={styles.location}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
            <p>{isEnglish ? textEnglish : textSpanish}</p>
          </div>
        </div>

        <div className={styles.translateButtonContainer}>
          <button className={styles.translateButton} onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faLanguage} size="2x" className={styles.icon} />
            {isEnglish ? ' Español' : ' English'}
          </button>
        </div>
      </motion.div>
      <Botones prevPath="" nextPath="/comunidad/vista1" /> 
    </>
  );
};

export default Comunidad;
