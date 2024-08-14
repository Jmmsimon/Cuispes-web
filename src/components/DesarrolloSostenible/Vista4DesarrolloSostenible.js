import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import styles from './Vista4DesarrolloSostenible.module.css'; // Importa el módulo CSS
import mapaImage from 'C:/Users/jeans/yumbilla/src/assets/mapa.png'; // Usa la misma imagen
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta

const Vista4DesarrolloSostenible = () => {
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
        <div className={styles.headerBox}>ODS 4: Educación de Calidad</div>
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
          <h1>{isEnglish ? 'SDG 4 QUALITY EDUCATION' : 'ODS 4: Educación de Calidad'}</h1>
          <p>
            {isEnglish
              ? 'In Amazonas, in 2019, 11.7% of second-grade secondary students achieved a satisfactory level in mathematical reasoning, showing an improvement compared to previous years. However, in reading comprehension, only 7.5% reached a satisfactory level, indicating a deterioration compared to the previous year. In both subjects, Amazonas is below the national average.'
              : 'En Amazonas, en 2019, el 11.7% de los estudiantes de segundo grado de secundaria lograron un nivel satisfactorio en razonamiento matemático, mostrando una mejora respecto a años anteriores. Sin embargo, en comprensión lectora, solo el 7.5% alcanzó un nivel satisfactorio, lo que indica un deterioro en comparación con el año anterior. En ambas materias, Amazonas está por debajo del promedio nacional.'
            }
          </p>
          <p>
            {isEnglish
              ? 'In fourth grade, 31.4% of students in Amazonas achieved a satisfactory level in mathematics in 2019, although this was 2.6 percentage points less than the national average (34%). However, there was a 4.7 percentage point improvement compared to the previous year in Amazonas (26.7%). In reading comprehension, 26.9% reached a satisfactory level, which represents a 7.6 percentage point difference from the national average for the same year (34.5%), and 2.1 percentage points less than the achievement from the previous year in Amazonas (29%).'
              : 'En cuarto grado de primaria, el 31.4% de los estudiantes en Amazonas alcanzaron un nivel satisfactorio en matemáticas en 2019, aunque esto fue 2.6 puntos porcentuales menos que el promedio nacional (34%). Sin embargo, hubo una mejora de 4.7 puntos porcentuales en comparación con el año anterior en Amazonas (26.7%). En comprensión lectora, el 26.9% logró un nivel satisfactorio, lo que representa una diferencia de 7.6 puntos porcentuales menos que el promedio nacional para el mismo año (34.5%), y 2.1 puntos porcentuales menos que el logro del año anterior en Amazonas (29%).'
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
      <Botones prevPath="/desarrollosostenible/vista3" nextPath="/desarrollosostenible/vista5" />
    </div>
  );
};

export default Vista4DesarrolloSostenible;
