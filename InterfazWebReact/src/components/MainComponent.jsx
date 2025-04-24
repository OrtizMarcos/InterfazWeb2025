import React from 'react';
import { FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/MainComponent.css';

/**
 * Componente principal que muestra la descripción de la empresa y los productos destacados
 * Incluye funcionalidades de carrito y favoritos
 */
const MainComponent = () => {
  const navigate = useNavigate();

  const handleComprarAhora = () => {
    navigate('/productos');
  };

  return (
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
          <button className="cta-button primary" onClick={handleComprarAhora}>
            <FaShoppingCart /> Comprar Ahora
          </button>
          <button className="cta-button secondary">
            <FaInfoCircle /> Conocer Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;