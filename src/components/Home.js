import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.css';
import backgroundImage from '../assets/home-img/HomePortada.jpg';
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
    <div
      className={styles['home-container']}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles['nav-buttons']}>
        <div>
          <Link className={styles['nav-button']} to="/comunidad">
            {isEnglish ? 'Community' : 'Comunidad'}
          </Link>
        </div>
        <div>
          <Link className={styles['nav-button']} to="/territorio">
            {isEnglish ? 'Territory' : 'Territorio'}
          </Link>
        </div>
        <div>
          <Link className={styles['nav-button']} to="/biodiversidad">
            {isEnglish ? 'Biodiversity' : 'Biodiversidad'}
          </Link>
        </div>
        <div>
          <Link className={styles['nav-button']} to="/senderismo">
            {isEnglish ? 'Sustainable Development' : 'Senderismo'}
          </Link>
        </div>
        <div>
          <Link className={styles['nav-button']} to="/deporte">
            {isEnglish ? 'Sports' : 'Deporte'}
          </Link>
        </div>
      </div>

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
    </div>
  );
};

export default Home;
