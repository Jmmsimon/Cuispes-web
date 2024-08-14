// src/components/Comunidad/Comunidad.js
import React from 'react';
import { motion } from 'framer-motion';
import Botones from '../Botones'; 
import styles from './DesarrolloSostenible.module.css'; 
import backgroundImage from '../../assets/banner_territorio.jpg'; 

const DesarrolloSostenible = () => {
  return (
    <>
      <motion.div
        className={styles.desarrollosostenible}
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
          <h1 className={styles.title}>Desarrollo Sostenible</h1> 
        </motion.div>
      </motion.div>
      <Botones prevPath="" nextPath="/desarrollosostenible/vista1" /> 
    </>
  );
};

export default DesarrolloSostenible;
