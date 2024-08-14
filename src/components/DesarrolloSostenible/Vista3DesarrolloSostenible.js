import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLanguage } from '@fortawesome/free-solid-svg-icons';
import styles from './Vista3DesarrolloSostenible.module.css'; // Asegúrate de que la ruta sea correcta
import mapaImage from 'C:/Users/jeans/yumbilla/src/assets/mapa.png'; // Usa la misma imagen
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta

const Vista3DesarrolloSostenible = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const translateText = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.headerBox}>ODS 2: Hambre Cero</div>
      </motion.div>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{isEnglish ? 'SDG 2 ZERO HUNGER' : 'ODS 2: Hambre Cero'}</h1>
          <p>
            {isEnglish
              ? 'In Amazonas, a place in Peru, some children under 5 years old do not have enough good food every day. In 2021, 19.2% of these children had this problem, which is higher than the national average (11.5%). Although there have been times when this has improved since 2007, it has also worsened at times. Nationwide, it is generally improving (see Graph 2.1). Another important point is that 0.4% of children in Amazonas experienced severe hunger in 2021, which is the same as the national average. Since 2010, this has improved slightly in Amazonas, but it has sometimes been worse in some years (see Graph 2.2), as in the entire country.'
              : 'En Amazonas, un lugar en Perú, algunos niños menores de 5 años no tienen suficiente comida buena todos los días. En 2021, el 19.2% de estos niños tenían este problema, que es más alto que el promedio del país (11.5%). Aunque ha habido veces en que esto ha mejorado desde el 2007, a veces ha empeorado también. En todo el país, generalmente está mejorando (ver Gráfico 2.1). Otra cosa importante es que el 0.4% de los niños en Amazonas tuvieron hambre severa en 2021, igual que el promedio del país. Desde 2010, esto ha mejorado un poco en Amazonas, pero a veces ha sido peor en algunos años (ver Gráfico 2.2), como en todo el país.'
            }
          </p>
          <button className={styles.translateButton} onClick={translateText}>
            <FontAwesomeIcon icon={faLanguage} /> {isEnglish ? 'Español' : 'English'}
          </button>
        </motion.div>
        <motion.div
          className={styles.imageContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={mapaImage} alt="Mapa" />
        </motion.div>
      </motion.div>
      <Botones prevPath="/desarrollosostenible/vista2" nextPath="/desarrollosostenible/vista4" />
    </div>
  );
};

export default Vista3DesarrolloSostenible;
