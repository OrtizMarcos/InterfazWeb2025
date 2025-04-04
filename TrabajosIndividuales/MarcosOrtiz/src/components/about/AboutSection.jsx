import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Nuestra Historia</h2>
        <Row>
          <Col lg={6} className="mb-4">
            <p>
              Fundada en 2010, BurgerDelicia nació con la pasión de crear las mejores hamburguesas artesanales.
              Nuestro compromiso es utilizar ingredientes frescos y de alta calidad para brindar una experiencia
              gastronómica única a nuestros clientes.
            </p>
            <p>
              Con más de una década de experiencia, nos hemos convertido en un referente en la ciudad,
              destacándonos por la innovación en nuestras recetas y el excelente servicio al cliente.
            </p>
          </Col>
          <Col lg={6}>
            <Row>
              <Col sm={6} className="mb-4">
                <Card>
                  <Card.Img variant="top" src="/api/placeholder/300/200" alt="Nuestro Local" />
                  <Card.Body>
                    <Card.Title>Nuestro Local</Card.Title>
                    <Card.Text>Un ambiente acogedor para disfrutar en familia.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} className="mb-4">
                <Card>
                  <Card.Img variant="top" src="/api/placeholder/300/200" alt="Nuestro Equipo" />
                  <Card.Body>
                    <Card.Title>Nuestro Equipo</Card.Title>
                    <Card.Text>Profesionales apasionados por la gastronomía.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
