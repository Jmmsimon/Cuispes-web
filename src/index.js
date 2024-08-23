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

// Código para registrar el Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    navigator.serviceWorker.register(swUrl).then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
  });
}
