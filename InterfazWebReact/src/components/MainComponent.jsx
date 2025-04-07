import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import '../styles/MainComponent.css';

/**
 * Componente principal que muestra la descripción de la empresa y los productos destacados
 * Incluye funcionalidades de carrito y favoritos
 */
const MainComponent = () => {
  // Estados para manejar la visibilidad, producto activo, carrito y favoritos
  const [isVisible, setIsVisible] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Efecto para activar las animaciones de entrada
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Datos de productos destacados
  const productosDestacados = [
    {
      id: 1,
      nombre: "Heladera JAM 500L",
      precio: "4.500.000 Gs",
      imagen: "/src/assets/heladera-jam.jpg",
      descripcion: "Heladera No Frost con tecnología de enfriamiento inteligente"
    },
    {
      id: 2,
      nombre: "Lavadora JAM Smart 8kg",
      precio: "2.800.000 Gs",
      imagen: "/src/assets/lavadora-jam.jpg",
      descripcion: "Lavadora de carga frontal con programas inteligentes y tecnología de ahorro de agua"
    },
    {
      id: 3,
      nombre: "Microondas JAM Digital 25L",
      precio: "1.200.000 Gs",
      imagen: "/src/assets/microondas-jam.jpg",
      descripcion: "Microondas digital con múltiples funciones y diseño moderno"
    },
    {
      id: 4,
      nombre: "Aire Acondicionado JAM Split 12000 BTU",
      precio: "2.900.000 Gs",
      imagen: "/src/assets/aire-jam.jpg",
      descripcion: "Aire acondicionado split con tecnología inverter y control WiFi"
    }
  ];

  // Manejador para seleccionar un producto
  const handleProductClick = (id) => {
    setCurrentProductIndex(productosDestacados.findIndex(p => p.id === id));
  };

  // Manejador para agregar productos al carrito
  const handleAddToCart = (producto) => {
    setCartItems(prevItems => [...prevItems, producto]);
    alert(`${producto.nombre} agregado al carrito`);
  };

  // Manejador para agregar/remover productos de favoritos
  const handleToggleFavorite = (producto) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(item => item.id === producto.id);
      if (isFavorite) {
        return prevFavorites.filter(item => item.id !== producto.id);
      } else {
        return [...prevFavorites, producto];
      }
    });
  };

  return (
    // Sección principal del componente
    <section className="main-component">
      {/* Sección con título y descripción */}
      <div className="modern-hero">
        <div className="wave-effect"></div>
        <Container className="hero-content">
          <Row className="align-items-center">
            {/* Columna izquierda: Texto y botones */}
            <Col lg={6} className="text-start">
              <h1 className={`hero-title ${isVisible ? 'fade-in' : ''}`}>
                ElectroHogar JAM
              </h1>
              <p className={`hero-subtitle ${isVisible ? 'fade-in' : ''}`}>
                Descubre nuestra exclusiva línea de electrodomésticos JAM. Tecnología de vanguardia, eficiencia energética y diseño moderno para tu hogar.
              </p>
              {/* Botones de acción */}
              <div className={`hero-buttons ${isVisible ? 'fade-in' : ''}`}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="hero-btn me-3"
                  onClick={() => window.scrollTo({ top: document.querySelector('.productos-destacados').offsetTop, behavior: 'smooth' })}
                >
                  ¡Ofertas Especiales!
                </Button>
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="hero-btn-outline"
                  onClick={() => window.location.href = '/catalogo'}
                >
                  Ver Catálogo
                </Button>
              </div>
            </Col>
            {/* Columna derecha: Imagen decorativa */}
            <Col lg={6} className="d-none d-lg-block">
              <div className={`hero-image-container ${isVisible ? 'fade-in' : ''}`}>
                <div className="hero-image"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MainComponent;