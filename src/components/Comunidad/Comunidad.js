// src/components/Comunidad/Comunidad.js
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Botones from '../Botones'; 
import styles from './Comunidad.module.css'; 
import backgroundImage from '../../assets/banner_principal_comunidad.jpg'; 

const Comunidad = () => {
  return (
    <>
      <motion.div
        className={styles.comunidad}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', 
          width: '100%',
        }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <h1>COMUNIDAD</h1> 
          <div className={styles.location}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.locationIcon} />
            <p>Distrito de Cuispes</p>
          </div>
        </div>
      </motion.div>
      <Botones prevPath="" nextPath="/comunidad/vista1" /> 
    </>
  );
};

export default Comunidad;
