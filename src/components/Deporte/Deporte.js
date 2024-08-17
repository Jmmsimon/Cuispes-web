import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Deporte.module.css';
import videoSource from '../../assets/BARRANQUISMO_1_1.mp4';
import Botones from '../Botones'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Deporte = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.6, ease: 'easeOut' };

  const translateText = () => {
    setIsEnglish(!isEnglish);
  };

  const text = isEnglish
    ? 'Canyoning is an adventure sport that involves descending canyons and ravines using techniques such as rappelling, hiking, and sometimes climbing. Participants navigate rugged terrains that may include waterfalls, steep rocks, and water courses. The goal is to overcome the natural obstacles of the canyon safely and excitingly, using specialized equipment like harnesses, ropes, and helmets. This sport offers a combination of adrenaline and connection with nature.'
    : 'El barranquismo es un deporte de aventura que consiste en descender cañones y barrancos utilizando técnicas de rappel, senderismo y a veces escalada. Los participantes navegan por terrenos accidentados que pueden incluir cascadas, rocas escarpadas y cursos de agua. El objetivo es superar los obstáculos naturales del cañón de manera segura y emocionante, empleando equipo especializado como arneses, cuerdas y cascos. Este deporte ofrece una combinación de adrenalina y conexión con la naturaleza.';

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.column}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={transition}
      >
        <p className={styles.text}>
          {text}
        </p>
      </motion.div>
      <motion.div
        className={styles.column}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={transition}
      >
        <motion.video
          src={videoSource}
          controls
          autoPlay
          muted
          className={styles.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </motion.div>
      <div className={styles.translateButtonContainer}>
        <button className={styles.translateButton} onClick={translateText}>
          <FontAwesomeIcon icon={faLanguage} size="2x" className={styles.icon} />
          {isEnglish ? ' Español' : ' English'}
        </button>
      </div>
      <Botones prevPath="" nextPath="/deporte/galeria" />
    </div>
  );
};

export default Deporte;
