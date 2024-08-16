import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Comunidad from './components/Comunidad/Comunidad';
import Vista1Comunidad from './components/Comunidad/Vista1Comunidad'; 
import Vista2Comunidad from './components/Comunidad/Vista2Comunidad';
import Vista3Comunidad from './components/Comunidad/Vista3Comunidad'
import Vista4Comunidad from './components/Comunidad/Vista4Comunidad'
import Vista5Comunidad from './components/Comunidad/Vista5Comunidad'
import CuentoComunidad from './components/Comunidad/CuentoComunidad';
import VolverAHome from './components/VolverAHome/VolverAHome';
import Territorio from './components/Territorio/Territorio';
import Vista1Territorio from './components/Territorio/Vista1Territorio'
import Vista2Territorio from './components/Territorio/Vista2Territorio'
import Vista3Territorio from './components/Territorio/Vista3Territorio'
import Biodiversidad from './components/Biodiversidad/Biodiversidad';
import DesarrolloSostenible from './components/DesarrolloSostenible/DesarrolloSostenible'
import Vista1Biodiversidad from './components/Biodiversidad/Vista1Biodiversidad';
import Vista1DesarrolloSostenible from './components/DesarrolloSostenible/Vista1DesarrolloSostenible';
import Vista2DesarrolloSostenible from './components/DesarrolloSostenible/Vista2DesarrolloSostenible'
import Vista3DesarrolloSostenible from './components/DesarrolloSostenible/Vista3DesarrolloSostenible'
import Vista4DesarrolloSostenible from './components/DesarrolloSostenible/Vista4DesarrolloSostenible'
import Vista5DesarrolloSostenible from './components/DesarrolloSostenible/Vista5DesarrolloSostenible'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/comunidad/vista1" element={<Vista1Comunidad />} />
        <Route path="/comunidad/vista2" element={<Vista2Comunidad />} />
        <Route path="/comunidad/vista3" element={<Vista3Comunidad />} />
        <Route path="/comunidad/vista4" element={<Vista4Comunidad />} />
        <Route path="/comunidad/vista5" element={<Vista5Comunidad />} />
        <Route path="/comunidad/cuento" element={<CuentoComunidad />} />
        <Route path="/comunidad/volverahome" element={<VolverAHome />} />
        <Route path="/territorio" element={<Territorio />} />
        <Route path="/territorio/vista1" element={<Vista1Territorio />} />
        <Route path="/territorio/vista2" element={<Vista2Territorio />} />
        <Route path="/territorio/vista3" element={<Vista3Territorio />} />

        <Route path="/territorio/volverahome" element={<VolverAHome />} />
        <Route path="/biodiversidad" element={<Biodiversidad />} />
        {/* <Route path="/biodiversidad/vista1" element={<Vista1Biodiversidad />} /> */}
        <Route path="/desarrollosostenible" element={<DesarrolloSostenible />} />
        <Route path="/desarrollosostenible/vista1" element={<Vista1DesarrolloSostenible />} />
        <Route path="/desarrollosostenible/vista2" element={<Vista2DesarrolloSostenible />} />
        <Route path="/desarrollosostenible/vista3" element={<Vista3DesarrolloSostenible />} />
        <Route path="/desarrollosostenible/vista4" element={<Vista4DesarrolloSostenible />} />
        <Route path="/desarrollosostenible/vista5" element={<Vista5DesarrolloSostenible />} />
      </Routes>
    </Router>
  );
};

export default App;
