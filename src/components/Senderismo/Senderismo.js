import React from 'react';
import { useNavigate } from 'react-router-dom';
import Botones from '../Botones';
import styles from './Senderismo.module.css';
import cascadaCristalImage from '../../assets/senderismo/cascada-cristal.jpg';
import cascadaMedioCerroImage from '../../assets/senderismo/cascada-medio-cerro.jpg';
import cataratayumbilla from '../../assets/home-img/HomePortada.jpg';

const routes = [
  {
    imgSrc: cascadaCristalImage,
    routeNumber: 'Ruta 1',
    routeName: 'Cascada Medio Cerro',
    time: '1 h 23 min (4,5 km)',
    path: '/cascada-medio-cerro'

  },
  {
    imgSrc: cascadaMedioCerroImage,
    routeNumber: 'Ruta 2',
    routeName: 'Cascada Cristal',
    time: '1 h 47 min (4,8 km)',
    path: '/cascada-cristal'
  },
  {
    imgSrc: cataratayumbilla,
    routeNumber: 'Ruta 3',
    routeName: 'Catarata Yumbilla',
    time: '1 h 54 min (5,1 km)',
    path: '/cataratayumbilla'
  }
];

const Senderismo = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {routes.map((route, index) => (
          <div 
            key={index} 
            className={styles.card} 
            onClick={() => route.path && handleCardClick(route.path)}
          >
            <img src={route.imgSrc} alt={`Imagen de ${route.routeName}`} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2 className={styles.routeNumber}>{route.routeNumber}</h2>
              <h3 className={styles.routeName}>{route.routeName}</h3>
              <p className={styles.time}>{route.time}</p>
            </div>
          </div>
        ))}
      </div>
      <Botones prevPath="" nextPath="" />
    </div>
  );
};

export default Senderismo;
