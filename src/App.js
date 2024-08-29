import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Comunidad from './components/Comunidad/Comunidad';
import Vista1Comunidad from './components/Comunidad/Vista1Comunidad'; 
import Vista2Comunidad from './components/Comunidad/Vista2Comunidad';
import CuentoComunidad from './components/Comunidad/CuentoComunidad';
import VolverAHome from './components/VolverAHome/VolverAHome';
import Territorio from './components/Territorio/Territorio';
import Vista1Territorio from './components/Territorio/Vista1Territorio'
import Vista2Territorio from './components/Territorio/Vista2Territorio'
import Vista3Territorio from './components/Territorio/Vista3Territorio'
import Biodiversidad from './components/Biodiversidad/Biodiversidad';
import Fauna from './components/Biodiversidad/Fauna';
import Flora from './components/Biodiversidad/Flora'
import Senderismo from './components/Senderismo/Senderismo'
import CatarataYumbilla from './components/Senderismo/CatarataYumbilla';
import CascadaCristal from './components/Senderismo/CascadaCristal';
import CascadaMedioCerro from './components/Senderismo/CascadaMedioCerro'
import Rutas from './components/Senderismo/Rutas'
import Deporte from './components/Deporte/Deporte'

import './App.css';
import GaleriaDeImagenes from './components/Deporte/GaleriaDeImagenes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/comunidad/vista1" element={<Vista1Comunidad />} />
        <Route path="/comunidad/vista2" element={<Vista2Comunidad />} />
        <Route path="/comunidad/cuento" element={<CuentoComunidad />} />


        <Route path="/comunidad/volverahome" element={<VolverAHome />} />
        <Route path="/territorio" element={<Territorio />} />
        <Route path="/territorio/vista1" element={<Vista1Territorio />} />
        <Route path="/territorio/vista2" element={<Vista2Territorio />} />
        <Route path="/territorio/vista3" element={<Vista3Territorio />} />

        <Route path="/territorio/volverahome" element={<VolverAHome />} />
        <Route path="/biodiversidad" element={<Biodiversidad />} />
        <Route path="/biodiversidad/volverahome" element={<VolverAHome />} />
        <Route path="/fauna" element={<Fauna />} />
        <Route path="/flora" element={<Flora />} />


        {/* <Route path="/biodiversidad/vista1" element={<Vista1Biodiversidad />} /> */}
        <Route path="/senderismo" element={<Senderismo />} />
        <Route path="/rutas" element={<Rutas />} />
        <Route path="/cataratayumbilla" element={<CatarataYumbilla />} />
        <Route path="/cascada-cristal" element={<CascadaCristal />} />
        <Route path="/cascada-medio-cerro" element={<CascadaMedioCerro />} />
        <Route path="/senderismo/volverahome" element={<VolverAHome />} />



        <Route path="/deporte" element={<Deporte />} />
        <Route path="/deporte/galeria" element={<GaleriaDeImagenes />} />
        <Route path="/deporte/volverahome" element={<VolverAHome />} />

      </Routes>
    </Router>
  );
};

export default App;
