import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.css';
import backgroundImage from '../assets/banner_principal.jpg';
import naturalezaAudio from '../assets/naturaleza.mp3'; 
import logo from '../assets/logo.png'; 

const Home = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    const audio = new Audio(naturalezaAudio);

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleTranslate = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <motion.div
      className={styles['home-container']}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <motion.div
        className={styles['nav-buttons']}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 10 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className={styles['nav-button']} to="/comunidad">
            {isEnglish ? 'Community' : 'Comunidad'}
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className={styles['nav-button']} to="/territorio">
            {isEnglish ? 'Territory' : 'Territorio'}
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className={styles['nav-button']} to="/biodiversidad">
            {isEnglish ? 'Biodiversity' : 'Biodiversidad'}
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className={styles['nav-button']} to="/desarrollosostenible">
            {isEnglish ? 'Sustainable Development' : 'Desarrollo Sostenible'}
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className={styles['nav-button']} to="/deporte">
            {isEnglish ? 'Sports' : 'Deporte'}
          </Link>
        </motion.div>
      </motion.div>

      <div className={styles['text-container']}>
        <h1>
          {isEnglish
            ? (
              <>
                Life in Community<br />
                and Nature
              </>
            )
            : (
              <>
                La vida en Comunidad<br />
                y Naturaleza
              </>
            )}
        </h1>
      </div>

      <button className={styles['translate-button']} onClick={handleTranslate}>
        <FontAwesomeIcon icon={faLanguage} size="2x" />
        {isEnglish ? ' Español' : ' English'}
      </button>
    </motion.div>
  );
};

export default Home;
