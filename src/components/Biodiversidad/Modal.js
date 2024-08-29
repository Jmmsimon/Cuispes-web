import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, onClose, image, name, location, info, habitat, diet, behavior, conservation, audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(audioSrc ? new Audio(audioSrc) : null);

  const handlePlayPause = () => {
    if (isPlaying && audio) {
      audio.pause();
    } else if (audio) {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isOpen) {
      if (audio) {
        audio.pause();
        setIsPlaying(false);
      }
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;  // Reset audio to the start
      }
    };
  }, [isOpen, audio]);

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
          <div className="modal-image-container">
            <img src={image} alt={name} className="modal-image" />
          </div>
          <div className="modal-info">
            <p><strong>Localización:</strong> {location}</p>
            <p><strong>Información:</strong> {info}</p>
            <p><strong>Hábitat:</strong> {habitat}</p>
            <p><strong>Alimentación:</strong> {diet}</p>
            <p><strong>Comportamiento:</strong> {behavior}</p>
            <p><strong>Conservación:</strong> {conservation}</p>
            {audioSrc && (
              <div className="audio-controls">
                <button onClick={handlePlayPause} className="audio-button">
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
  audioSrc: PropTypes.string,
};

export default Modal;
