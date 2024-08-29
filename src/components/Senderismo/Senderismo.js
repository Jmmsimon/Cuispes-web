import React from 'react';
import styles from './Senderismo.module.css'; // Asegúrate de que este archivo CSS contenga los estilos necesarios
import mapaImage from '../../assets/senderismo/mapa.jpg';
import Botones from '../Botones';

const Senderismo = () => {
  return (
    <div className={styles.fullScreenImage}>
      <img src={mapaImage} alt="Mapa" className={styles.image} />
    <Botones prevPath="" nextPath="/rutas" />

    </div>

  );
};

export default Senderismo;
