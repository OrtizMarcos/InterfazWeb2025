import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero-section bg-warning text-dark py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">BurgerDelicia</h1>
            <p className="lead">Las hamburguesas más deliciosas de la ciudad</p>
            <Button variant="dark" size="lg" href="#menu">Ver Menú</Button>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <Image
                src="/api/placeholder/500/300"
                alt="Hamburguesa Deliciosa"
                fluid
                rounded
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
