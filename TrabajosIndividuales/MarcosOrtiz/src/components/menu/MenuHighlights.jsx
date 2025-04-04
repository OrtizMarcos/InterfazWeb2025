import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Nuestras Especialidades</h2>
        <Row>
          {[1, 2, 3].map((item) => (
            <Col md={4} key={item} className="mb-4">
              <Card>
                <Card.Img variant="top" src={`/api/placeholder/400/300`} alt={`Hamburguesa ${item}`} />
                <Card.Body>
                  <Card.Title>Hamburguesa Especial {item}</Card.Title>
                  <Card.Text>
                    Deliciosa combinación de ingredientes premium con nuestro toque secreto.
                  </Card.Text>
                  <Button variant="warning">Ver Detalles</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="outline-dark" size="lg">Ver Menú Completo</Button>
        </div>
      </Container>
    </section>
  );
};

export default MenuHighlights;