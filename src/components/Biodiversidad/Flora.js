import React, { useState } from 'react';
import './Biodiversidad.css';
import Modal from './Modal'; 
import Botones from '../Botones'; 

// Importar imágenes locales
import asteraceae from '../../assets/flora/asteraceae.jpeg';
import orquideas from '../../assets/flora/orquideas.jpg';
import passifloraceae from '../../assets/flora/Passifloraceae.jpg';
import cocotera from '../../assets/flora/cocoteras.jpg'
// Nombres y datos de las imágenes
const imageDetails = [
  {
    name: 'Asteraceae',
    location: 'Regiones templadas y tropicales',
    info: 'La familia Asteraceae es una de las más grandes de plantas con flores, incluyendo especies como girasoles, margaritas y diente de león.',
    habitat: 'Praderas, campos abiertos, áreas urbanas',
    diet: 'Autótrofa, realiza fotosíntesis',
    behavior: 'Floración estacional, polinización por insectos',
    conservation: 'Varía según la especie, algunas están amenazadas',
  },
  {
    name: 'Orquídeas',
    location: 'Regiones tropicales y subtropicales',
    info: 'Las orquídeas son conocidas por sus flores exóticas y coloridas, y son altamente valoradas por su belleza y diversidad.',
    habitat: 'Bosques húmedos, montañas, selvas tropicales',
    diet: 'Autótrofa, realiza fotosíntesis',
    behavior: 'Floración compleja, requiere polinizadores específicos',
    conservation: 'Algunas especies están en peligro debido a la recolección excesiva y la pérdida de hábitat',
  },
  {
    name: 'Passifloraceae',
    location: 'Regiones tropicales y subtropicales',
    info: 'La familia Passifloraceae incluye plantas trepadoras conocidas por sus flores intrincadas y frutos comestibles, como la maracuyá.',
    habitat: 'Selvas tropicales, áreas húmedas',
    diet: 'Autótrofa, realiza fotosíntesis',
    behavior: 'Crecimiento rápido, polinización por insectos y aves',
    conservation: 'Generalmente no amenazada, aunque la deforestación puede afectar algunas especies',
  },
  {
    name: 'Cocotera',
    location: 'Regiones tropicales y subtropicales',
    info: 'La familia Passifloraceae incluye plantas trepadoras conocidas por sus flores intrincadas y frutos comestibles, como la maracuyá.',
    habitat: 'Selvas tropicales, áreas húmedas',
    diet: 'Autótrofa, realiza fotosíntesis',
    behavior: 'Crecimiento rápido, polinización por insectos y aves',
    conservation: 'Generalmente no amenazada, aunque la deforestación puede afectar algunas especies',
  },
];
const images = [
  asteraceae,
  orquideas,
  passifloraceae,
  cocotera,
];

const Flora = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(imageDetails[index]);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <h1 className="title">Flora</h1> {/* Título añadido aquí */}
      {imageDetails.map((detail, index) => (
        <div
          key={index}
          className="image-container"
          onClick={() => handleImageClick(index)}
        >
          <img src={images[index]} alt={detail.name} className="image" />
          <div className="image-name">{detail.name}</div> {/* Añadido el nombre debajo de la imagen */}
        </div>
      ))}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          image={images[imageDetails.indexOf(selectedImage)]}
          name={selectedImage.name}
          location={selectedImage.location}
          info={selectedImage.info}
          habitat={selectedImage.habitat}
          diet={selectedImage.diet}
          behavior={selectedImage.behavior}
          conservation={selectedImage.conservation}
        />
      )}
      <Botones prevPath="/fauna" nextPath="/biodiversidad/volverahome" /> 
    </div>
  );
};

export default Flora;