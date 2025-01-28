import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from '../../assets/logo.png'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> <img src={logo} alt="Logo de la tienda" />Amoblamientos Mishi</div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
