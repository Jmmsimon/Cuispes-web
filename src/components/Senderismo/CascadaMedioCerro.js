import React from 'react';
import styles from './CascadaMedioCerro.module.css';
import Botones from '../Botones';

const CascadaMedioCerro = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cascada Medio Cerro</h1>
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15873.973754695953!2d-77.93637580622082!3d-5.926496204923215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x91b4201bbf0b9ba1%3A0x51de394afbdf0173!2sCuispes!3m2!1d-5.9285726!2d-77.9438811!4m5!1s0x91b69f6fa8fe3e0d%3A0xbc8c973307bded6c!2sCascada%20Medio%20Cerro!3m2!1d-5.924232!2d-77.908271!5e0!3m2!1ses!2spe!4v1724881180292!5m2!1ses!2spe"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.info}>
          <h2>Información de la Ruta</h2>
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <h3>Tiempo</h3>
              <p>1 h 40 min</p>
            </div>
            <div className={styles.stat}>
              <h3>Distancia</h3>
              <p>4,5 km</p>
            </div>
            <div className={styles.stat}>
              <h3>Carreteras</h3>
              <p>Sin nombre</p>
            </div>
            <div className={styles.stat}>
              <h3>Desnivel positivo</h3>
              <p>559 m</p>
            </div>
            <div className={styles.stat}>
              <h3>Desnivel negativo</h3>
              <p>230 m</p>
            </div>
          </div>
        </div>
      </div>
      <Botones prevPath="/senderismo" nextPath="/cascada-cristal" />
    </div>
  );
};

export default CascadaMedioCerro;
