import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/Navbar.css';

const NavbarComponent = () => {
  const { getCartCount } = useCart();
  const { favorites } = useFavorites();

  const handleContactClick = (e) => {
    e.preventDefault();
    window.open('mailto:jam.electrodomesticos@gmail.com', '_blank');
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">JAM</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link onClick={handleContactClick} href="#">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/favoritos" className="favorites-link me-2">
              <FaHeart />
              {favorites.length > 0 && <span className="favorites-count">{favorites.length}</span>}
            </Nav.Link>
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
