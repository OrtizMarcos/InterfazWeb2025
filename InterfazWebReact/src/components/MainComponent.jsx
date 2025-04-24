import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import '../styles/MainComponent.css';

/**
 * Componente principal que muestra la descripción de la empresa y los productos destacados
 * Incluye funcionalidades de carrito y favoritos
 */
const MainComponent = () => {
  return (
    <div className="main-component">
      <div className="main-hero">
        <div className="hero-content">
          <h1 className="title-gradient">
            ElectroHogar JAM
          </h1>
          <p className="subtitle">
            Descubre nuestra exclusiva línea de electrodomésticos JAM. 
            Tecnología de vanguardia, eficiencia energética y diseño moderno para tu hogar.
          </p>
          <div className="cta-buttons">
            <Link to="/productos" className="cta-button primary">
              <FaShoppingCart /> Comprar Ahora
            </Link>
            <Link to="/empresa" className="cta-button secondary">
              <FaInfoCircle /> Conocer Más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;