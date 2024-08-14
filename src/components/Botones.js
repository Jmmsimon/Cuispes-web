import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHome, faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Botones.css'; // Asegúrate de tener el archivo CSS para estilos
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';

const Botones = ({ prevPath, nextPath }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (prevPath) {
      navigate(prevPath); // Regresar a la página anterior o la ruta especificada
    }
  };

  const handleHome = () => {
    navigate('/'); // Navegar a la página de inicio
  };

  const handleNext = () => {
    if (nextPath) {
      navigate(nextPath); // Navegar a la siguiente ruta especificada
    }
  };

  return (
    <div className="boton-container">
      <button className="boton" onClick={handleBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="boton" onClick={handleHome}>
        <FontAwesomeIcon icon={faHome} />
      </button>
      <button className="boton" onClick={handleNext}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Botones;
