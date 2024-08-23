import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLanguage } from '@fortawesome/free-solid-svg-icons';
import styles from './Vista2DesarrolloSostenible.module.css'; // Importa el módulo CSS
// import mapaImage from '../assets/mapa.png';
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta

const Vista2DesarrolloSostenible = () => {
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
        <div className={styles.headerBox}>ODS SOCIALES</div>
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
          <h1>{isEnglish ? 'SDG 1 NO POVERTY' : 'ODS 1 FIN DE LA POBRESA'}</h1>
          <p>
            {isEnglish
              ? 'The first Sustainable Development Goal (SDG1) aims to end poverty worldwide. Its first target is to eliminate extreme poverty, which is when people lack enough money to meet basic needs like food, clothing, and shelter.'
              : 'El primer Objetivo de Desarrollo Sostenible (ODS1) quiere acabar con la pobreza en todo el mundo. Su primera meta es eliminar la pobreza extrema, que es cuando las personas no tienen suficiente dinero para cubrir sus necesidades básicas como comida, ropa y vivienda.'
            }
          </p>
          <p>
            {isEnglish
              ? 'In 2021, the Amazonas region in Peru was among the areas with the highest extreme poverty rates, along with Apurimac, Ayacucho, Huánuco, La Libertad, Loreto, and Pasco. In these regions, between 6.1% and 8.1% of people live in extreme poverty. Although Amazonas still has much extreme poverty, the situation has improved over the last decade. In 2010, more people in Amazonas lived in extreme poverty, with rates between 18.3% and 21.7%.'
              : 'En el año 2021, la región de Amazonas en Perú estaba entre las áreas con más personas en pobreza extrema, junto con Apurimac, Ayacucho, Huánuco, La Libertad, Loreto y Pasco. En estas regiones, entre el 6.1% y el 8.1% de la gente vive en pobreza extrema. Aunque Amazonas todavía tiene mucha pobreza extrema, la situación ha mejorado en los últimos diez años. En 2010, más personas en Amazonas vivían en pobreza extrema, con tasas entre el 18.3% y el 21.7%.'
            }
          </p>
          <p>
            {isEnglish
              ? 'In 2021, 30.1% of people in Amazonas were poor, meaning nearly one in three people faced economic difficulties. This percentage is higher than the national average, which is 25.9%. However, it is much lower than in 2007, when 58.1% of the Amazonas population lived in poverty. Before the pandemic, poverty in Amazonas had been decreasing steadily, though more slowly than in the rest of the country.'
              : 'En 2021, el 30.1% de las personas en Amazonas eran pobres, lo que significa que casi una de cada tres personas tenía problemas económicos. Este porcentaje es mayor que el promedio nacional, que es del 25.9%. Sin embargo, es mucho menor que en 2007, cuando el 58.1% de la población de Amazonas vivía en pobreza. Antes de la pandemia, la pobreza en Amazonas había disminuido constantemente, aunque más lentamente que en el resto del país.'
            }
          </p>
          <p>
            {isEnglish
              ? 'Imagine that out of 10 friends you have, 3 are in poverty. In 2007, more than half of the people in Amazonas were poor, but things have improved a lot since then. Although the pandemic brought challenges, the region is slowly getting better.'
              : 'Imagina que de cada 10 amigos que tienes, 3 están en pobreza. En el año 2007, más de la mitad de las personas en Amazonas eran pobres, pero las cosas han mejorado mucho desde entonces. Aunque la pandemia trajo problemas, la región está volviendo a mejorar poco a poco.'
            }
          </p>
      
          
        </motion.div>
        
        <motion.div
          className={styles.imageContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
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
      <Botones prevPath="/desarrollosostenible/vista1" nextPath="/desarrollosostenible/vista3" />
    </div>
  );
};

export default Vista2DesarrolloSostenible;
