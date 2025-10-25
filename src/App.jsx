import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Infaltables from './components/Infaltables';
import Login from './components/Login';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import Productos from './components/Productos';
import Administracion from './components/Administracion';
import RutaProtegida from './components/RutaProtegida';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productos" element={<Productos/>} />
      <Route path="/infaltables" element={<Infaltables/>} />
      <Route path="/nosotros" element={<Nosotros/>} />
      <Route path='/administracion' element={<Login/>} />
      <Route path="/contacto" element={<Contacto />} />


      {/*Ruta protegida*/}
      <Route path='/admin' element={
      <RutaProtegida> <Administracion/> </RutaProtegida>}/>

      {/* Ruta no existente */}
      <Route path='*' element={<NotFound/>} />  

    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
