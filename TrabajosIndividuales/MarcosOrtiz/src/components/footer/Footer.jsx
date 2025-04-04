import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>BurgerDelicia</h5>
            <p>Las mejores hamburguesas artesanales desde 2010.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>&copy; {new Date().getFullYear()} BurgerDelicia. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;