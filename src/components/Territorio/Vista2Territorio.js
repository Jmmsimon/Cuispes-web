import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Botones from '../Botones';
import styles from './Vista2Territorio.module.css';
import backgroundImage from '../../assets/banner_territorio_2.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Vista2Comunidad = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const textSpanish = "Este lugar tiene diferentes rocas que han creado muchos tipos de suelos. Gracias a esto, hay vegetación (plantas) y muchos animales. Esto ha hecho que haya diferentes tipos de lugares donde las plantas y los animales puedan vivir. En toda la provincia hay 21 tipos importantes de suelos y terrenos.";
  
  const textEnglish = "This place has various rocks that have created many types of soils. Thanks to this, there is vegetation (plants) and many animals. This has resulted in different types of habitats where plants and animals can live. Throughout the province, there are 21 significant types of soils and terrains.";

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.vista2comunidad}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
        
          className={styles.content}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 50 }}
        >
          <p>{isEnglish ? textEnglish : textSpanish}</p>
          <button className={styles.translateButton} onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faLanguage} size="2x" />
            {isEnglish ? ' Español' : ' English'}
          </button>
        </motion.div>
      </motion.div>
      <div className={styles.fixedButtons}>
        <Botones prevPath="/territorio/vista1" nextPath="/territorio/volverahome" />
      </div>
    </div>
    
  );
};

export default Vista2Comunidad;
