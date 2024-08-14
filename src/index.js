// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa el módulo de cliente
import App from './App';
import './index.css'; // Importa el archivo de estilos globales si es necesario

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea la raíz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
