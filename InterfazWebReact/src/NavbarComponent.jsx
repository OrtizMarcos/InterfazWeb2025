import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Mi Empresa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/empresas">Empresas</Nav.Link>
            <Nav.Link href="/trabajadores">Trabajadores</Nav.Link>
            <Nav.Link href="/antivirus">Antivirus</Nav.Link>
            <Nav.Link href="/contactos">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
