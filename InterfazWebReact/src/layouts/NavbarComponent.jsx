import React from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import "../styles/Navbar.css";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" className="navbar-brand-text">
          JAM
        </Navbar.Brand>
        <Form className="d-flex search-form">
          <Form.Control
            type="search"
            placeholder="Buscar productos..."
            className="me-2 search-input"
            aria-label="Search"
          />
          <Button variant="outline-light" className="search-button">
            <FaSearch />
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/Inicio">Inicio</Nav.Link>
            <Nav.Link href="/Productos">Productos</Nav.Link>
            <Nav.Link href="/Ubicaciones">Ubicaciones</Nav.Link>
            <Nav.Link href="/contactos">Contacto</Nav.Link>
          </Nav>
          <Nav.Link href="/carrito" className="cart-icon">
            <FaShoppingCart size={24} />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
