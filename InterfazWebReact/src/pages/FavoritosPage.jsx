import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import PopUp from '../components/PopUp';
import { productImages } from '../assets/productImages';
import '../styles/FavoritosPage.css';

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

const FavoritosPage = () => {
  const { addToCart } = useCart();
  const { favorites, removeFromFavorites } = useFavorites();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const favoriteProducts = productos.filter(producto => favorites.includes(producto.id));

  const handleAddToCart = (producto) => {
    const productoConPrecioNumerico = {
      ...producto,
      precio: Number(producto.precio)
    };
    setSelectedProduct(productoConPrecioNumerico);
    setShowPopup(true);
    addToCart(productoConPrecioNumerico);
  };

  const handleRemoveFavorite = (productId) => {
    removeFromFavorites(productId);
  };

  const handleConfirmAdd = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const handleCancelAdd = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  return (
    <div className="favoritos-page">
      <Container>
        <h1 className="favoritos-title">Mis Favoritos</h1>
        {favoriteProducts.length === 0 ? (
          <p className="no-favoritos">No tienes productos favoritos</p>
        ) : (
          <Row>
            {favoriteProducts.map(producto => (
              <Col key={producto.id} xs={12} md={6} lg={4} className="mb-4">
                <div className="favorito-card">
                  <img src={producto.imagen} alt={producto.nombre} className="favorito-imagen" />
                  <div className="favorito-info">
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <p className="favorito-precio">{producto.precio.toLocaleString('es-PY')} Gs</p>
                    <div className="favorito-actions">
                      <button 
                        className="btn-add-cart"
                        onClick={() => handleAddToCart(producto)}
                      >
                        <FaShoppingCart /> Comprar
                      </button>
                      <button 
                        className="btn-remove"
                        onClick={() => handleRemoveFavorite(producto.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
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

export default FavoritosPage; 