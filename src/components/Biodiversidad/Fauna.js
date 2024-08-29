
import React, { useState } from 'react';
import './Biodiversidad.css';
import Modal from './Modal'; // Asegúrate de que esta ruta es correcta
import Botones from '../Botones'; 

// Importar imágenes locales
import colibri from '../../assets/aves/colibri.jpg';
import gallitodelasrocas from '../../assets/aves/gallitodelasrocas.jpg';
import tucanAndino from '../../assets/aves/tucan-andino.jpg';
import zorzal from '../../assets/aves/zorzal.jpg';

// Importar audios locales
import colibriAudio from '../../assets/aves/canto-colibri.mp3';
import gallitodelasrocasAudio from '../../assets/aves/canto-gallito-de-las-rocas.mp3';
import tucanAndinoAudio from '../../assets/aves/canto-tucan-andino.mp3';
import zorzalAudio from '../../assets/aves/canto-de-zorzal.mp3';

// Nombres y datos de las imágenes
const imageDetails = [
  {
    name: 'Colibrí cola de espátula',
    location: 'Selvas de América Central y del Sur',
    info: 'El colibrí cola de espátula es conocido por sus impresionantes plumas en forma de espátula en la cola. Se alimenta principalmente de néctar y tiene una increíble agilidad en vuelo.',
    habitat: 'Bosques y áreas floridas',
    diet: 'Néctar de flores, insectos',
    behavior: 'Agitado y rápido, puede flotar en el aire',
    conservation: 'Preocupación menor',
    audio: colibriAudio,
  },
  {
    name: 'Gallito de las Rocas',
    location: 'Andes de Perú, Colombia y Ecuador',
    info: 'El gallo de las rocas es famoso por su brillante plumaje y su ritual de cortejo espectacular. Su canto y danza son parte importante de su comportamiento reproductivo.',
    habitat: 'Bosques nublados y de montaña',
    diet: 'Frutas, insectos',
    behavior: 'Cortejo elaborado, vocalizaciones distintivas',
    conservation: 'Vulnerable',
    audio: gallitodelasrocasAudio,
  },
  {
    name: 'Tucán Andino',
    location: 'Bosques de los Andes de Colombia y Ecuador',
    info: 'El tucán andino se destaca por su gran pico colorido y su plumaje vibrante. Se alimenta de frutas, insectos y pequeños vertebrados y juega un papel crucial en la dispersión de semillas.',
    habitat: 'Bosques tropicales y subtropicales',
    diet: 'Frutas, insectos, pequeños vertebrados',
    behavior: 'Social, ruidoso, vuela en grupos',
    conservation: 'Preocupación menor',
    audio: tucanAndinoAudio,
  },
  {
    name: 'Zorzal del marañón',
    location: 'Bosques secos y áreas abiertas de Perú y Ecuador',
    info: 'El zorzal del marañón es conocido por su canto melodioso y su plumaje de tonos marrones. Es un ave migratoria que se mueve entre áreas de bosque seco y regiones abiertas.',
    habitat: 'Bosques secos, áreas abiertas',
    diet: 'Frutas, insectos, gusanos',
    behavior: 'Migratorio, canto melodioso',
    conservation: 'Preocupación menor',
    audio: zorzalAudio,
  },
];

const images = [
  colibri,
  gallitodelasrocas,
  tucanAndino,
  zorzal,
];

const Fauna = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(imageDetails[index]);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <h1 className="title">Fauna</h1> {/* Título añadido aquí */}
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
          audioSrc={selectedImage.audio}
        />
      )}
      <Botones prevPath="/biodiversidad" nextPath="/flora" /> 
    </div>
  );
};

export default Fauna;
