import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Pagination, Form, InputGroup } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import PopUp from './PopUp';
import '../styles/ProductosPage.css';
import { productImages } from '../assets/productImages';

const ProductosPage = () => {
  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const productsPerPage = 6;

  const productos = [
    {
      id: 1,
      nombre: "Heladera JAM 500L",
      precio: 4500000,
      imagen: productImages.heladera,
      descripcion: "Heladera No Frost con tecnología de enfriamiento inteligente"
    },
    {
      id: 2,
      nombre: "Lavadora JAM Smart 8kg",
      precio: 2800000,
      imagen: productImages.lavadora,
      descripcion: "Lavadora de carga frontal con programas inteligentes"
    },
    {
      id: 3,
      nombre: "Microondas JAM Digital 25L",
      precio: 1200000,
      imagen: productImages.microondas,
      descripcion: "Microondas digital con múltiples funciones"
    },
    {
      id: 4,
      nombre: "Aire Acondicionado JAM Split 12000 BTU",
      precio: 2900000,
      imagen: productImages.aire,
      descripcion: "Aire acondicionado split con tecnología inverter"
    },
    {
      id: 5,
      nombre: "Cocina JAM 4 Hornallas",
      precio: 1800000,
      imagen: productImages.cocina,
      descripcion: "Cocina moderna con 4 hornallas y horno eléctrico"
    },
    {
      id: 6,
      nombre: "Lavavajillas JAM 12 Cubiertos",
      precio: 2300000,
      imagen: productImages.lavavajillas,
      descripcion: "Lavavajillas con capacidad para 12 cubiertos y programas especiales"
    },
    {
      id: 7,
      nombre: "Horno Eléctrico JAM 60L",
      precio: 1500000,
      imagen: productImages.horno,
      descripcion: "Horno eléctrico con convección y múltiples funciones"
    },
    {
      id: 8,
      nombre: "Secadora JAM 8kg",
      precio: 2100000,
      imagen: productImages.secadora,
      descripcion: "Secadora de ropa con sensor de humedad y múltiples programas"
    },
    {
      id: 9,
      nombre: "Freezer JAM 200L",
      precio: 2700000,
      imagen: productImages.freezer,
      descripcion: "Freezer vertical con sistema No Frost y control digital"
    },
    {
      id: 10,
      nombre: "Purificador de Aire JAM Smart",
      precio: 1200000,
      imagen: productImages.purificador,
      descripcion: "Purificador de aire con filtro HEPA y control inteligente"
    },
    {
      id: 11,
      nombre: "Ventilador JAM Tower",
      precio: 800000,
      imagen: productImages.ventilador,
      descripcion: "Ventilador de torre con control remoto y temporizador"
    },
    {
      id: 12,
      nombre: "Aspiradora JAM Robot",
      precio: 2500000,
      imagen: productImages.aspiradora,
      descripcion: "Aspiradora robot con mapeo inteligente y control por app"
    }
  ];

  // Filtrar productos basado en el término de búsqueda
  const filteredProducts = useMemo(() => {
    return productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Resetear la página cuando cambia el término de búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleAddToCart = (producto) => {
    const productoConPrecioNumerico = {
      ...producto,
      precio: Number(producto.precio)
    };
    setSelectedProduct(productoConPrecioNumerico);
    setShowPopup(true);
    addToCart(productoConPrecioNumerico);
  };

  const handleToggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
  };

  const handleConfirmAdd = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const handleCancelAdd = () => {
    setShowPopup(false);
    setSelectedProduct(null);
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
        <div className="search-container">
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </InputGroup>
        </div>
      </div>
      
      <Container fluid className="productos-container">
        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <>
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
                      <p className="producto-precio">{producto.precio.toLocaleString('es-PY')} Gs</p>
                      <div className="producto-actions">
                        <button 
                          className="producto-btn-cart"
                          onClick={() => handleAddToCart(producto)}
                        >
                          <FaShoppingCart /> Comprar
                        </button>
                        <button 
                          className={`producto-btn-favorite ${favorites.includes(producto.id) ? 'active' : ''}`}
                          onClick={() => handleToggleFavorite(producto.id)}
                        >
                          <FaHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {filteredProducts.length > productsPerPage && (
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
            )}
          </>
        )}
      </Container>

      {showPopup && (
        <PopUp
          message={`${selectedProduct?.nombre} se ha agregado al carrito con éxito`}
          onClose={handleConfirmAdd}
          onCancel={handleCancelAdd}
        />
      )}
    </div>
  );
};

export default ProductosPage; 