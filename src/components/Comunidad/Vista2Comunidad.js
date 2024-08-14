import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta
import styles from './Vista2Comunidad.module.css'; // Usa CSS Módulos aquí
import backgroundImage from '../../assets/banner_comunidad2.jpg'; // Asegúrate de que la ruta sea correcta
import locationImage from '../../assets/ubicacion.png'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Vista2Comunidad = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  const toggleLocation = () => {
    setShowLocation(!showLocation);
  };

  const textSpanish = "El significado del topónimo Cuispes no se conoce con certeza. Sin embargo, durante el proceso de investigación se encontró un documento del año 1713 en la Municipalidad Distrital de Cuispes, que proporciona información sobre la conformación del pueblo de Cuispes. Este documento dice lo siguiente: En el pueblo nuevo de San Francisco de Cuispes, el día 11 de marzo de 1713, ante Don Francisco Antonio de Trauco, Juez Subdelegado del Señor Licenciado Don Gonzalo Ramírez de Baquedano, Caballero, se presentaron los señores Don Juan Baboc, Cacique y Gobernador de los naturales indios de este pueblo, Don Juan de la Cruz, Alcalde Ordinario, y Don Isidro Visalot, Procurador, pidiendo posesión de sus tierras para amparar a los indios. En este respecto, el Señor Francisco Antonio de Trauco cita a los señores circunvecinos, Don Agustín Meléndez, representante de la estancia de Jumbilla, Don Gregorio Fernández de Córdoba, circunvecino de la estancia de San Antonio de Famre, y Don Cristóbal Rodríguez Paredes, circunvecino de la estancia de Bonillo. Firman como testigos Don Cristóbal Tafur de Córdoba, Don Andrés Torres Altamirano y Francisco Villanueva y Salinas. - firmado Francisco Antonio de Trauco.";
  
  const textEnglish = "The meaning of the toponym Cuispes is not known with certainty. However, during the research process, a document from the year 1713 was found in the District Municipality of Cuispes, which provides information on the formation of the town of Cuispes. This document states the following: In the new town of San Francisco de Cuispes, on March 11, 1713, before Don Francisco Antonio de Trauco, Deputy Judge of Señor Licenciado Don Gonzalo Ramírez de Baquedano, Knight, appeared the gentlemen Don Juan Baboc, Cacique and Governor of the native Indians of this town, Don Juan de la Cruz, Ordinary Mayor, and Don Isidro Visalot, Procurator, requesting possession of their lands to protect the Indians. In this regard, Señor Francisco Antonio de Trauco cites the neighboring gentlemen, Don Agustín Meléndez, representative of the Jumbilla estate, Don Gregorio Fernández de Córdoba, neighbor of the San Antonio de Famre estate, and Don Cristóbal Rodríguez Paredes, neighbor of the Bonillo estate. Signed as witnesses Don Cristóbal Tafur de Córdoba, Don Andrés Torres Altamirano, and Francisco Villanueva y Salinas. - signed Francisco Antonio de Trauco.";

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.Vista2Comunidad}
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
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 1.2, type: 'spring', stiffness: 50 }}
        >
          <p className={styles.text}>{isEnglish ? textEnglish : textSpanish}</p>
          <button className={styles.translateButton} onClick={toggleLanguage}>
            <FontAwesomeIcon icon={faLanguage} size="2x" />
            {isEnglish ? ' Español' : ' English'}
          </button>
        </motion.div>
      </motion.div>
      <div className={styles.fixedButtons}>
        <Botones prevPath="/comunidad/vista1" nextPath="/comunidad/cuento" />
      </div>
      {showLocation && (
        <div className={styles.locationImageContainer}>
          <img src={locationImage} alt="Ubicación" className={styles.locationImage} />
        </div>
      )}
    </div>
  );
};

export default Vista2Comunidad;
