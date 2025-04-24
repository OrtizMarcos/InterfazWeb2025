import React, { useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ProductosPage.css';
import { productImages } from '../assets/productImages';

const ProductosPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [_cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const productos = [
    {
      id: 1,
      nombre: "Heladera JAM 500L",
      precio: "4.500.000 Gs",
      imagen: productImages.heladera,
      descripcion: "Heladera No Frost con tecnología de enfriamiento inteligente"
    },
    {
      id: 2,
      nombre: "Lavadora JAM Smart 8kg",
      precio: "2.800.000 Gs",
      imagen: productImages.lavadora,
      descripcion: "Lavadora de carga frontal con programas inteligentes"
    },
    {
      id: 3,
      nombre: "Microondas JAM Digital 25L",
      precio: "1.200.000 Gs",
      imagen: productImages.microondas,
      descripcion: "Microondas digital con múltiples funciones"
    },
    {
      id: 4,
      nombre: "Aire Acondicionado JAM Split 12000 BTU",
      precio: "2.900.000 Gs",
      imagen: productImages.aire,
      descripcion: "Aire acondicionado split con tecnología inverter"
    },
    {
      id: 5,
      nombre: "Cocina JAM 4 Hornallas",
      precio: "1.800.000 Gs",
      imagen: productImages.cocina,
      descripcion: "Cocina moderna con 4 hornallas y horno eléctrico"
    },
    {
      id: 6,
      nombre: "Lavavajillas JAM 12 Cubiertos",
      precio: "2.300.000 Gs",
      imagen: productImages.lavavajillas,
      descripcion: "Lavavajillas con capacidad para 12 cubiertos y programas especiales"
    },
    {
      id: 7,
      nombre: "Horno Eléctrico JAM 60L",
      precio: "1.500.000 Gs",
      imagen: productImages.horno,
      descripcion: "Horno eléctrico con convección y múltiples funciones"
    },
    {
      id: 8,
      nombre: "Secadora JAM 8kg",
      precio: "2.100.000 Gs",
      imagen: productImages.secadora,
      descripcion: "Secadora de ropa con sensor de humedad y múltiples programas"
    },
    {
      id: 9,
      nombre: "Freezer JAM 200L",
      precio: "2.700.000 Gs",
      imagen: productImages.freezer,
      descripcion: "Freezer vertical con sistema No Frost y control digital"
    },
    {
      id: 10,
      nombre: "Purificador de Aire JAM Smart",
      precio: "1.200.000 Gs",
      imagen: productImages.purificador,
      descripcion: "Purificador de aire con filtro HEPA y control inteligente"
    },
    {
      id: 11,
      nombre: "Ventilador JAM Tower",
      precio: "800.000 Gs",
      imagen: productImages.ventilador,
      descripcion: "Ventilador de torre con control remoto y temporizador"
    },
    {
      id: 12,
      nombre: "Aspiradora JAM Robot",
      precio: "2500.000 Gs",
      imagen: productImages.aspiradora,
      descripcion: "Aspiradora robot con mapeo inteligente y control por app"
    }
  ];

  // Calcular productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(productos.length / productsPerPage);

  const handleAddToCart = (producto) => {
    const isInCart = _cartItems.some(item => item.id === producto.id);
    
    if (isInCart) {
      toast.info(`${producto.nombre} ya está en tu carrito`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    } else {
      setCartItems(prevItems => [...prevItems, producto]);
      toast.success(`${producto.nombre} agregado al carrito`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  };

  const handleToggleFavorite = (producto) => {
    const isFavorite = favorites.some(item => item.id === producto.id);
    
    if (isFavorite) {
      setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== producto.id));
      toast.info(`${producto.nombre} eliminado de favoritos`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    } else {
      setFavorites(prevFavorites => [...prevFavorites, producto]);
      toast.success(`${producto.nombre} agregado a favoritos`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="productos-page">
      <div className="productos-header">
        <h1>Listado de Productos</h1>
        <p>Descubre nuestra exclusiva línea de electrodomésticos JAM</p>
      </div>
      
      <Container fluid className="productos-container">
        <Row className="productos-grid justify-content-center">
          {currentProducts.map((producto) => (
            <Col key={producto.id} xs={12} sm={6} md={4} lg={4} className="producto-col">
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
                      className="producto-btn-cart"
                      onClick={() => handleAddToCart(producto)}
                    >
                      <FaShoppingCart /> Comprar
                    </button>
                    <button 
                      className={`producto-btn-favorite ${favorites.some(item => item.id === producto.id) ? 'active' : ''}`}
                      onClick={() => handleToggleFavorite(producto)}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Paginación */}
        <div className="pagination-container">
          <Pagination className="justify-content-center">
            <Pagination.Prev 
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </Pagination.Prev>
            
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            
            <Pagination.Next
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </Pagination.Next>
          </Pagination>
        </div>
      </Container>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductosPage; 