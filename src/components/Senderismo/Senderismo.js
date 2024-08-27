import React from 'react';
import { useNavigate } from 'react-router-dom';
import Botones from '../Botones'; 
import styles from './Senderismo.module.css'; 
import catarataImage from '../../assets/Senderismo/Catarata_Yumbilla.jpg'; 

const routes = [
  {
    imgSrc: catarataImage,
    routeNumber: 'Ruta 1',
    routeName: 'Nombre de la Ruta 1',
    time: '30 min',
    path: '/cataratayumbilla'
  },
  {
    imgSrc: catarataImage,
    routeNumber: 'Ruta 2',
    routeName: 'Nombre de la Ruta 2',
    time: '45 min'
  },
  {
    imgSrc: catarataImage,
    routeNumber: 'Ruta 3',
    routeName: 'Nombre de la Ruta 3',
    time: '1 hr'
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
      <Botones prevPath="" nextPath="/senderismo/cataratayumbilla" /> 
    </div>
  );
};

export default Senderismo;
