import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Biodiversidad.css';
import Botones from '../Botones'; 

import gallitodelasrocas from '../../assets/aves/gallitodelasrocas.jpg';
import orquideas from '../../assets/flora/orquideas.jpg';

const imageDetails = [
  {
    name: 'Fauna',
    path: '/fauna', // Añadido path para fauna
  },
  {
    name: 'Flora',
    path: '/flora', // Añadido path para flora
  },
];

const images = [
  gallitodelasrocas,
  orquideas,
];

const Biodiversidad = () => {
  const navigate = useNavigate(); // Hook para la navegación

  const handleImageClick = (index) => {
    navigate(imageDetails[index].path); // Navega a la ruta correspondiente
  };

  return (
    <div className="container">
      <h1 className="title">Biodiversidad</h1>
      {imageDetails.map((detail, index) => (
        <div
          key={index}
          className="image-container"
          onClick={() => handleImageClick(index)}
        >
          <img src={images[index]} alt={detail.name} className="image" />
          <div className="image-name">{detail.name}</div> 
        </div>
      ))}
      
      <Botones prevPath="" nextPath="/fauna" /> 
    </div>
  );
};

export default Biodiversidad;
