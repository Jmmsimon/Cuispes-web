import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/fondo_comunidad_2.png';
import Botones from '../Botones';
import styles from './CuentoComunidad.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faLanguage } from '@fortawesome/free-solid-svg-icons';

const CuentoComunidad = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [translated, setTranslated] = useState(false);

  const text = `LA POSESIÓN MÁGICA DE LOS CUISPES
    En la selva amazónica, la tribu de los Cuispes era conocida por su conexión con la naturaleza y sus tradiciones antiguas. Según la leyenda, poseían un amuleto mágico llamado "El Amuleto del Sol", que les otorgaba prosperidad y protección al mantener el equilibrio entre el mundo natural y los espíritus.
    Un día, un joven ambicioso llamado Inti, deseando poder para sí mismo, robó el amuleto. Sin comprender su verdadero poder, desestabilizó el equilibrio natural. La tribu enfrentó sequías y desastres, y la armonía que una vez tuvieron se desvaneció.
    Dándose cuenta de su error, Inti regresó el amuleto al templo y pidió perdón a los espíritus. La tribu, al recuperar el amuleto y restaurar el equilibrio, perdonó a Inti. Desde entonces, los Cuispes aprendieron a valorar el equilibrio y la armonía por encima del poder personal.`;

  const translatedText = `THE MAGIC POSSESSION OF THE CUISPES
    In the Amazon jungle, the Cuispes tribe was known for its connection to nature and its ancient traditions. According to legend, they possessed a magical amulet called "The Sun Amulet," which granted them prosperity and protection by maintaining balance between the natural world and the spirits.
    One day, an ambitious young man named Inti, seeking power for himself, stole the amulet. Without understanding its true power, he disrupted the natural balance. The tribe faced droughts and disasters, and the harmony they once had faded away.
    Realizing his mistake, Inti returned the amulet to the temple and asked the spirits for forgiveness. The tribe, upon recovering the amulet and restoring balance, forgave Inti. Since then, the Cuispes learned to value balance and harmony over personal power.`;

  const handlePlayPause = () => {
    if (isSpeaking) {
      if (utterance) {
        window.speechSynthesis.pause();
        setIsSpeaking(false);
      }
    } else {
      const newUtterance = new SpeechSynthesisUtterance(translated ? translatedText : text);
      setUtterance(newUtterance);
      window.speechSynthesis.speak(newUtterance);
      setIsSpeaking(true);
    }
  };

  const handleTranslate = () => {
    setTranslated(!translated);
  };

  useEffect(() => {
    // Cleanup function to stop the speech when the component unmounts
    return () => {
      if (isSpeaking && utterance) {
        window.speechSynthesis.cancel(); // Detiene la síntesis de voz
        setIsSpeaking(false);
      }
    };
  }, [isSpeaking, utterance]);

  return (
    <>
      <motion.div
        className={styles['cuento-comunidad']}
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
        <div className={styles.content}>
          <h1>CUENTO: LA POSESIÓN MÁGICA DE LOS CUISPES</h1>
          <p>
            {translated ? translatedText : text}
          </p>
          
        </div>
        <div className={styles['button-container']}>
            <button className={styles['play-button']} onClick={handlePlayPause}>
              <FontAwesomeIcon icon={isSpeaking ? faPause : faPlay} size="2x" />
            </button>
            <button className={styles['translate-button']} onClick={handleTranslate}>
              <FontAwesomeIcon icon={faLanguage} size="2x" />
              {translated ? ' Español' : ' English'}
            </button>
          </div>
      </motion.div>
      <Botones prevPath="/comunidad/vista1" nextPath="/comunidad/volverahome" />
    </>
  );
};

export default CuentoComunidad;
