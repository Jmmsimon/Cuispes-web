// src/components/Comunidad/Comunidad.js
import React from 'react';
import { motion } from 'framer-motion';
import Botones from '../Botones'; 
import styles from './Biodiversidad.module.css'; 
import backgroundImage from '../../assets/banner_principal_D_sostenible.jpg'; 

const Biodiversidad = () => {
  return (
    <>
      <motion.div
        className={styles.biodiversidad}
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
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <h1 className={styles.title}>Biodiversidad</h1> 
        </motion.div>
      </motion.div>
      <Botones prevPath="" nextPath="/biodiversidad/vista1" /> 
    </>
  );
};

export default Biodiversidad;
