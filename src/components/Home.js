import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import backgroundImage from '../assets/banner_principal.jpg';
import naturalezaAudio from '../assets/naturaleza.mp3'; 
import logo from '../assets/logo.png'; // Importa el logo

const Home = () => {
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

  return (
    <motion.div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} alt="Logo" className="logo" /> {/* Añade el logo */}
      <motion.div
        className="nav-buttons"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}  // Ajuste para bajar los botones un poco
        transition={{ type: 'spring', stiffness: 150, damping: 10 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className="nav-button" to="/comunidad">Comunidad</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className="nav-button" to="/territorio">Territorio</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className="nav-button" to="/biodiversidad">Biodiversidad</Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className="nav-button" to="/desarrollosostenible">Desarrollo Sostenible</Link>
        </motion.div>
      </motion.div>
      <div className="text-container">
        <h1>La vida en Comunidad <br /> y Naturaleza</h1>
      </div>
    </motion.div>
  );
};

export default Home;
