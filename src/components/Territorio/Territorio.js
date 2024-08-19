// src/components/Territorio/Territorio.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLanguage } from '@fortawesome/free-solid-svg-icons';
import Botones from '../Botones'; 
import styles from './Territorio.module.css'; 
import backgroundImage from '../../assets/banner_territorio.jpg'; 

const Territorio = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const titleSpanish = 'Territorio';
  const titleEnglish = 'Territory';

  return (
    <>
      <motion.div
        className={styles.territorio}
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
          
        </div>

        <div className={styles.translateButtonContainer}>
          <button className={styles.translateButton} onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faLanguage} size="2x" className={styles.icon} />
            {isEnglish ? ' Español' : ' English'}
          </button>
        </div>
      </motion.div>
      <Botones prevPath="" nextPath="/territorio/vista1" /> 
    </>
  );
};

export default Territorio;
