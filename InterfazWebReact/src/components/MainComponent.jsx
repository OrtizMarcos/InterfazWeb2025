import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import '../styles/MainComponent.css';

const MainComponent = () => {
  return (
    <section className="modern-hero">
      <div className="wave-effect"></div>
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={6} className="text-start">
            <h1 className="hero-title display-3 fw-bold mb-4">
              ¡Bienvenido a ElectroHogar!
            </h1>
            <p className="hero-subtitle lead mb-4">
              Descubre nuestra selección de productos inteligentes que harán tu hogar más cómodo y eficiente. ¡Ofertas especiales por tiempo limitado!
            </p>
            <div className="hero-buttons">
              <Button variant="primary" size="lg" className="hero-btn me-3">
                ¡Ofertas Especiales!
              </Button>
              <Button variant="outline-light" size="lg" className="hero-btn-outline">
                Ver Catálogo
              </Button>
            </div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <div className="hero-image-container">
              <div className="hero-image"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainComponent;