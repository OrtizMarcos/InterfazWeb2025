import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import NavbarComponent from './layouts/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import MainComponent from './components/MainComponent';
import CarritoPage from './pages/CarritoPage';
import ProductosPage from './components/ProductosPage';
import EmpresaPage from './components/EmpresaPage';
import FavoritosPage from './pages/FavoritosPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <FavoritesProvider>
          <div className="app-main">
            {/*##############################################
            #################################################
                         IMPORTANTE
            ¡¡No cambiar los nombres de las clases(className)
            como por ejemplo: container, row, col. Por que
            se van a perder los estilos de Bootstrap.!!!!!
            ################################################
            ################################################*/}
            {/* Navbar |JACKSPARROW*/}
            <NavbarComponent />
            <Routes>
              <Route path="/" element={
                <div className="main-content">
                  {/* Tagline |ANABANANA*/}
                  <div className="col-12">
                    <MainComponent />
                  </div>
                  {/* Carousel | MONKITOS */}
                  <div className="carousel-full-width">
                    <CarouselComponent />
                  </div>
                </div>
              } />
              <Route path="/carrito" element={<CarritoPage />} />
              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/empresa" element={<EmpresaPage />} />
              <Route path="/favoritos" element={<FavoritosPage />} />
            </Routes>
          </div>
        </FavoritesProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
