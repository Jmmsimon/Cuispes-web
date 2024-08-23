import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import styles from './Vista5DesarrolloSostenible.module.css'; // Importa el módulo CSS
// import mapaImage from '../assets/mapa.png';
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta

const Vista5DesarrolloSostenible = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const translateText = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className={styles.headerBox}>ODS SOCIALES</div>
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1>
            {isEnglish ? 'SDG 6: Clean Water and Sanitation' : 'ODS 6: Agua limpia y saneamiento'}
          </h1>
          <p>
            {isEnglish
              ? 'In Amazonas, there is an important goal called SDG6, which focuses on having clean water and good drainage systems. In 2021, 85.7% of people in Amazonas have water from a public network, slightly less than the 90.5% nationwide. The improvement in having public network water in Amazonas has been slow, just like in the entire country.'
              : 'En Amazonas, hay un objetivo importante llamado ODS6 que se trata de tener agua limpia y buenos sistemas de drenaje. En el 2021, el 85.7% de las personas en Amazonas tienen agua de una red pública, un poco menos que el 90.5% en todo el país. La mejora en tener agua por la red pública en Amazonas ha sido lenta, igual que en todo el país.'
            }
          </p>
          <p>
            {isEnglish
              ? 'Additionally, 60.1% of the population in Amazonas had access to safe drainage services in 2021. Although this is less than the national average (76.5%) for the same year, there has been an increase since 2011 when only 38.5% had safe drainage access.'
              : 'Además, el 60.1% de la población en Amazonas tiene acceso a servicios de drenaje seguros en el 2021. Aunque esto es menos que el promedio nacional (76.5%) para el mismo año, ha habido un aumento desde el 2011 cuando solo el 38.5% tenía acceso seguro al drenaje.'
            }
          </p>
        
        </motion.div>
        <motion.div
          className={styles.imageContent}
          initial={{ opacity: 0, x: 100, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* <img src={mapaImage} alt="Mapa" /> */}
        </motion.div>
      </motion.div>
      <div className={styles.translateButtonContainer}>
            <button className={styles.translateButton} onClick={translateText}>
              <FontAwesomeIcon icon={faLanguage} size="2x" className={styles.icon} />
              {isEnglish ? ' Español' : ' English'}
            </button>
          </div>
      <Botones prevPath="/desarrollosostenible/vista4" nextPath="/desarrollosostenible/vista6" />
    </div>
  );
};

export default Vista5DesarrolloSostenible;
