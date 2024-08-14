import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta
import styles from './Vista1Comunidad.module.css'; // Usa CSS Módulos aquí
import backgroundImage from '../../assets/banner_comunidad1.jpg'; // Asegúrate de que la ruta sea correcta
import locationImage from '../../assets/ubicacion.png'; // Asegúrate de que la ruta sea correcta
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

  const textSpanish = "El Distrito de Cuispes es uno de los doce distritos de la Provincia de Bongará, en el Departamento de Amazonas, al noreste de Perú. La capital del distrito se llama La Villa de Cuispes y está a 1690 metros sobre el nivel del mar. La temperatura en Cuispes varía entre 22°C y 28°C. Cuispes es un lugar grande, con una superficie de 110,72 km², y tiene una densidad de 7.2 habitantes por km². Además de La Villa de Cuispes, hay otros pueblos como Mitoapampa, Tayapampa, Ramos, San Francisco, Chacma, La Jalca, Batan, y muchos más.El distrito de Cuispes fue creado el 11 de noviembre de 1944 por una ley firmada por el presidente Manuel Prado. Cuispes limita al norte con el distrito de Florida, al este con Jumbilla, al sur con San Carlos y Jazán, y al oeste con Shipasbamba. Este distrito tiene una población de 708 personas.";
  
  const textEnglish = "The District of Cuispes is one of the twelve districts of the Province of Bongará, in the Department of Amazonas, in the northeast of Peru. The capital of the district is called La Villa de Cuispes and is located at 1690 meters above sea level. The temperature in Cuispes varies between 22°C and 28°C. Cuispes is a large area, with a surface of 110.72 km², and has a density of 7.2 inhabitants per km². In addition to La Villa de Cuispes, there are other towns such as Mitoapampa, Tayapampa, Ramos, San Francisco, Chacma, La Jalca, Batan, and many more. The district of Cuispes was created on November 11, 1944, by a law signed by President Manuel Prado. Cuispes borders the district of Florida to the north, Jumbilla to the east, San Carlos and Jazán to the south, and Shipasbamba to the west. This district has a population of 708 people.";

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
        <div className={styles.backgroundImage}></div>
        <motion.div
          className={styles.content}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 50 }}
        >
          <div className={styles.location}>
            📍 Cuispes
          </div>
          <p>{isEnglish ? textEnglish : textSpanish}</p>
          <button className={styles.translateButton} onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faLanguage} size="2x" />
            {isEnglish ? ' Español' : ' English'}
          </button>
          <button className={styles.showLocationButton} onClick={toggleLocation}>
            Mostrar Ubicación
          </button>
        </motion.div>
      </motion.div>
      <div className={styles.fixedButtons}>
        <Botones prevPath="/comunidad" nextPath="/comunidad/vista2" />
      </div>
      {showLocation && (
        <div className={styles.locationImageContainer}>
          <img src={locationImage} alt="Ubicación" className={styles.locationImage} />
        </div>
      )}
    </div>
  );
};

export default Vista1Comunidad;
