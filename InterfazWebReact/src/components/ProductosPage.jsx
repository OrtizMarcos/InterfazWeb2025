import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ProductosPage.css';

const ProductosPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [_cartItems, setCartItems] = useState([]);

  const productos = [
    {
      id: 1,
      nombre: "Smart TV JAM 55\" 4K UHD",
      precio: "3.500.000 Gs",
      imagen: "/src/assets/tv-jam.jpg",
      descripcion: "Smart TV con resolución 4K, HDR, Android TV y control por voz"
    },
    {
      id: 2,
      nombre: "Heladera JAM No Frost 500L",
      precio: "4.500.000 Gs",
      imagen: "/src/assets/heladera-jam.jpg",
      descripcion: "Heladera No Frost con tecnología de enfriamiento inteligente y eficiencia energética A+"
    },
    {
      id: 3,
      nombre: "Lavadora JAM Smart 8kg",
      precio: "2.800.000 Gs",
      imagen: "/src/assets/lavadora-jam.jpg",
      descripcion: "Lavadora de carga frontal con programas inteligentes y tecnología de ahorro de agua"
    },
    {
      id: 4,
      nombre: "Aire Acondicionado JAM Split 12000 BTU",
      precio: "2.900.000 Gs",
      imagen: "/src/assets/aire-jam.jpg",
      descripcion: "Aire acondicionado split con tecnología inverter y control WiFi"
    },
    {
      id: 5,
      nombre: "Microondas JAM Digital 25L",
      precio: "1.200.000 Gs",
      imagen: "/src/assets/microondas-jam.jpg",
      descripcion: "Microondas digital con múltiples funciones y diseño moderno"
    },
    {
      id: 6,
      nombre: "Licuadora JAM Pro 1200W",
      precio: "850.000 Gs",
      imagen: "/src/assets/licuadora-jam.jpg",
      descripcion: "Licuadora profesional con 6 velocidades y jarra de vidrio templado"
    },
    {
      id: 7,
      nombre: "Horno Eléctrico JAM 60L",
      precio: "1.800.000 Gs",
      imagen: "/src/assets/horno-jam.jpg",
      descripcion: "Horno eléctrico con 8 funciones y control digital de temperatura"
    },
    {
      id: 8,
      nombre: "Aspiradora JAM Robot",
      precio: "2.200.000 Gs",
      imagen: "/src/assets/aspiradora-jam.jpg",
      descripcion: "Aspiradora robot con mapeo inteligente y control por aplicación"
    },
    {
      id: 9,
      nombre: "Lavavajillas JAM 14 Servicios",
      precio: "3.100.000 Gs",
      imagen: "/src/assets/lavavajillas-jam.jpg",
      descripcion: "Lavavajillas con 14 servicios y tecnología de ahorro de agua"
    },
    {
      id: 10,
      nombre: "Plancha JAM Vapor 2000W",
      precio: "450.000 Gs",
      imagen: "/src/assets/plancha-jam.jpg",
      descripcion: "Plancha a vapor con depósito extra grande y suela de cerámica"
    },
    {
      id: 11,
      nombre: "Batidora JAM 5 Velocidades",
      precio: "750.000 Gs",
      imagen: "/src/assets/batidora-jam.jpg",
      descripcion: "Batidora de mano con 5 velocidades y accesorios incluidos"
    },
    {
      id: 12,
      nombre: "Tostadora JAM 2 Slots",
      precio: "350.000 Gs",
      imagen: "/src/assets/tostadora-jam.jpg",
      descripcion: "Tostadora con 2 slots y control de temperatura ajustable"
    }
  ];

  const handleAddToCart = (producto) => {
    const isInCart = _cartItems.some(item => item.id === producto.id);
    
    if (isInCart) {
      toast.info(`${producto.nombre} ya está en tu carrito`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          background: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
          color: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(76, 175, 80, 0.2)",
          fontSize: "1rem",
          fontWeight: "500",
          padding: "1rem"
        }
      });
    } else {
      setCartItems(prevItems => [...prevItems, producto]);
      toast.success(`${producto.nombre} agregado al carrito`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          background: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
          color: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(76, 175, 80, 0.2)",
          fontSize: "1rem",
          fontWeight: "500",
          padding: "1rem"
        }
      });
    }
  };

  const handleToggleFavorite = (producto) => {
    const isFavorite = favorites.some(item => item.id === producto.id);
    
    if (isFavorite) {
      setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== producto.id));
      toast.info(`${producto.nombre} eliminado de favoritos`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          background: "linear-gradient(135deg, #FF4081 0%, #F50057 100%)",
          color: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(245, 0, 87, 0.2)",
          fontSize: "1rem",
          fontWeight: "500",
          padding: "1rem"
        }
      });
    } else {
      setFavorites(prevFavorites => [...prevFavorites, producto]);
      toast.success(`${producto.nombre} agregado a favoritos`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          background: "linear-gradient(135deg, #FF4081 0%, #F50057 100%)",
          color: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(245, 0, 87, 0.2)",
          fontSize: "1rem",
          fontWeight: "500",
          padding: "1rem"
        }
      });
    }
  };

  return (
    <div className="productos-page">
      <div className="productos-header">
        <h1>Listado de Productos</h1>
        <p>Descubre nuestra exclusiva línea de electrodomésticos JAM</p>
      </div>
      
      <Container fluid className="productos-container">
        <Row className="productos-grid justify-content-center">
          {productos.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={3} className="producto-col">
              <div className="producto-card">
                <div className="producto-imagen">
                  <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className="producto-info">
                  <h3 className="producto-nombre">{producto.nombre}</h3>
                  <p className="producto-descripcion">{producto.descripcion}</p>
                  <p className="producto-precio">{producto.precio}</p>
                  <div className="producto-actions">
                    <button 
                      className={`producto-btn-favorite ${favorites.some(item => item.id === producto.id) ? 'active' : ''}`}
                      onClick={() => handleToggleFavorite(producto)}
                    >
                      <FaHeart />
                    </button>
                    <button 
                      className="producto-btn-cart"
                      onClick={() => handleAddToCart(producto)}
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ProductosPage; 