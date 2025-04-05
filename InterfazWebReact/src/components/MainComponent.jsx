import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../styles/MainComponent.css';

const MainComponent = () => {
  return (
    <section className="modern-hero">
      <Container className="hero-content text-center py-5">
        <h1 className="hero-title display-3 fw-bold mb-4">ElectroHogar</h1>
        <p className="hero-subtitle lead mb-5">
          Tecnología inteligente para un hogar conectado
        </p>
        <Button variant="primary" size="lg" className="hero-btn">
          Descubrir Productos
        </Button>
      </Container>
    </section>
  );
};

export default MainComponent;