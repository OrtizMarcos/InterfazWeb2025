import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import "../styles/Navbar.css";

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top" variant="dark">
      <div className="navbar-content">
        <Navbar.Brand href="/" className="navbar-brand-text">
          JAM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link href="/Inicio">Inicio</Nav.Link>
            <Nav.Link href="/Productos">Productos</Nav.Link>
            <Nav.Link href="/Ubicaciones">Ubicaciones</Nav.Link>
            <Nav.Link href="/contactos">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
