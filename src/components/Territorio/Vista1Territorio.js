import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta
import styles from './Vista1Territorio.module.css'; // Usa CSS Módulos aquí
import backgroundImage from '../../assets/banner_territorio_1.jpg'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Vista1Comunidad = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const toggleLocation = () => {
    setShowLocation(!showLocation);
  };

  const textSpanish = "El distrito de Cuispes está en una parte de la Cordillera de los Andes. En esta región, el terro en su mayoría es plano con algunas pequeñas onduñaciones. Solo una pequeña parte del distrito está en las montañas altas.";
  
  const textEnglish = "The district of Cuispes is in a part of the Andes Mountain Range. In this region, the terrain is mostly flat with some small undulations. Only a small part of the district is in the high mountains.";

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.vista1comunidad}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className={styles.content}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
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
        <Botones prevPath="/territorio" nextPath="/territorio/vista2" />
      </div>
    </div>
  );
};

export default Vista1Comunidad;
