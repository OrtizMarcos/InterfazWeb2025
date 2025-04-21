import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { productImages } from '../assets/productImages';
import '../styles/CarouselComponent.css';

const CarouselComponent = () => {
  const { addToCart } = useCart();

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

  // Dividir productos en grupos de 3 para el carrusel
  const slides = [];
  for (let i = 0; i < productos.length; i += 3) {
    slides.push(productos.slice(i, i + 3));
  }

  const handleAddToCart = (producto) => {
    const productoConPrecioNumerico = {
      ...producto,
      precio: Number(producto.precio)
    };
    addToCart(productoConPrecioNumerico);
  };

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Nuestros Productos</h2>
      <Carousel 
        className="multi-item-carousel" 
        interval={8000}
        indicators={true}
        controls={true}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-around">
              {slide.map((producto) => (
                <div key={producto.id} className="product-carousel-item">
                  <Card className="product-card">
                    <Card.Img 
                      variant="top" 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className="product-image"
                    />
                    <Card.Body>
                      <Card.Title className="product-title">{producto.nombre}</Card.Title>
                      <div className="product-price">{Number(producto.precio).toLocaleString('es-PY')} Gs</div>
                      <Card.Text className="product-description">
                        {producto.descripcion}
                      </Card.Text>
                      <div className="product-actions">
                        <Button 
                          variant="primary" 
                          className="btn-comprar"
                          onClick={() => handleAddToCart(producto)}
                        >
                          <FaShoppingCart /> Comprar
                        </Button>
                        <Button variant="outline-danger" className="btn-favorito">
                          <FaHeart /> Favorito
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselComponent;
