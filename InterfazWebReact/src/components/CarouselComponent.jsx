import Carousel from 'react-bootstrap/Carousel';
import { Card, Button } from 'react-bootstrap';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { productImages } from '../assets/productImages';
import '../styles/Carousel.css';

function CarouselComponent() {
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
      precio: "2.500.000 Gs",
      imagen: productImages.aspiradora,
      descripcion: "Aspiradora robot con mapeo inteligente y control por app"
    }
  ];

  // Dividir productos en grupos de 3 para el carrusel
  const slides = [];
  for (let i = 0; i < productos.length; i += 3) {
    slides.push(productos.slice(i, i + 3));
  }

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
                      <div className="product-price">{producto.precio}</div>
                      <Card.Text className="product-description">
                        {producto.descripcion}
                      </Card.Text>
                      <div className="product-actions">
                        <Button variant="primary" className="btn-comprar">
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
}

export default CarouselComponent;
