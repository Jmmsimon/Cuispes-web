import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; // Asegúrate de que esta ruta es correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose, image, name, location, info, habitat, diet, behavior, conservation, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioSrc));

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{name}</h2>
          <FontAwesomeIcon
            icon={faTimes}
            className="modal-close"
            onClick={onClose}
          />
        </div>
        <div className="modal-body">
          <img src={image} alt={name} className="modal-image" />
          <p><strong>Localización:</strong> {location}</p>
          <p><strong>Información:</strong> {info}</p>
          <p><strong>Hábitat:</strong> {habitat}</p>
          <p><strong>Alimentación:</strong> {diet}</p>
          <p><strong>Comportamiento:</strong> {behavior}</p>
          <p><strong>Conservación:</strong> {conservation}</p>
          <div className="audio-controls">
            <audio id="audio" controls>
              <source src={audioSrc} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          
        </div>
      </div>
    </div>
  );
};

// Definir tipos y requisitos de las props
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  habitat: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  behavior: PropTypes.string.isRequired,
  conservation: PropTypes.string.isRequired,
  audioSrc: PropTypes.string.isRequired,
};

export default Modal;
