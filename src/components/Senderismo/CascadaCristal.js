import React from 'react';
import styles from './CascadaCristal.module.css';
import Botones from '../Botones';

const CascadaCristal = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cascada Cristal</h1>
      <div className={styles.content}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d13062.982445737429!2d-77.92916341839667!3d-5.925445004939609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d-5.9272998999999995!2d-77.93096969999999!4m5!1s0x91b69f4ed194741b%3A0x194d5e5f90dd34fb!2s33HV%2B775%20Cascada%20Cristal%2C%20Cuispes%2001140!3m2!1d-5.921872!2d-77.906763!5e1!3m2!1ses-419!2spe!4v1724798453486!5m2!1ses-419!2spe"
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
              <p>1 h 47 min</p>
            </div>
            <div className={styles.stat}>
              <h3>Distancia</h3>
              <p>4,8 km</p>
            </div>
            <div className={styles.stat}>
              <h3>Carreteras</h3>
              <p>Sin nombre</p>
            </div>
            <div className={styles.stat}>
              <h3>Desnivel positivo</h3>
              <p>630 m</p>
            </div>
            <div className={styles.stat}>
              <h3>Desnivel negativo</h3>
              <p>227 m</p>
            </div>
          </div>
        </div>
      </div>
      <Botones prevPath="/cascada-medio-cerro" nextPath="/cataratayumbilla" />
    </div>
  );
};

export default CascadaCristal;
