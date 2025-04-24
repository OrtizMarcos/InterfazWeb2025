import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Form, Button, Container, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import jamLogo from '../img/STK-20250424-WA0003.webp';
import '../styles/Navbar.css';

const NavbarComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { getCartCount } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="d-flex align-items-center p-0">
          <img
            src={jamLogo}
            alt="JAM más tecnología"
            className="navbar-logo"
            style={{ 
              height: '95px', 
              width: 'auto', 
              margin: '-20px 0',
              position: 'relative',
              zIndex: 1000
            }}
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/categorias">Categorías</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Buscar productos..."
                className="me-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="outline-light" type="submit">
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/carrito" className="cart-link">
              <FaShoppingCart />
              <span className="cart-count">{getCartCount()}</span>
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default NavbarComponent;
