import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../styles/Navbar.css";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-text">
          Mi Empresa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/empresas">Inicio</Nav.Link>
            <Nav.Link href="/trabajadores">Productos</Nav.Link>
            <Nav.Link href="/antivirus">Ubicaciones</Nav.Link>
            <Nav.Link href="/contactos">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
