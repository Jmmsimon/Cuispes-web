// src/components/Comunidad/Video1Comunidad.js

import React from 'react';
import videoSource from '../../assets/TRADICIÓN 1.1.mp4';
import styles from './Video1Comunidad.module.css';
import Botones from '../Botones'; // Asegúrate de que la ruta sea correcta

const Video1Comunidad = () => {
  return (
    <div className={styles['video-container']}>
      <video controls className={styles['video-player']}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.botonesContainer}>
    <Botones prevPath="/comunidad/vista2" nextPath="/comunidad/cuento" />
  </div>
    </div>
   
  );
};

export default Video1Comunidad;
