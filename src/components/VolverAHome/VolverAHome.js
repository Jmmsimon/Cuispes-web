import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/volverahome.png'; // Asegúrate de que la ruta sea correcta
import './VolverAHome.css'; // Asegúrate de que el archivo CSS exista y esté configurado correctamente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de casa

const VolverAHome = () => {
  return (
    <motion.div
      className="volver-a-home"
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
      <div className="content">
        <button className="home-button" onClick={() => window.location.href = '/'}>
          <FontAwesomeIcon icon={faHome} size="2x" />
          <span>Volver a Home</span>
        </button>
      </div>
    </motion.div>
  );
};

export default VolverAHome;
