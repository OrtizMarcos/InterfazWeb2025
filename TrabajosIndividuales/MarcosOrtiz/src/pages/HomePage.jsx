import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from "../components/navbar/Navbar.jsx";
import AboutSection from '../components/About/AboutSection.jsx';
import MenuHighlights from '../components/Menu/MenuHighlights.jsx';
import ContactInfo from '../components/contact/ContactInfo.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import Hero from '../components/hero/Hero.jsx';
import Footer from '../components/footer/Footer.jsx';
import '../styles/HomePage.css';
import {useGSAP} from '../hooks/useGSAP.js'
import PixelTransition from '../components/transitions/PixelTransition'
import PixelScroll from '../components/Effects/PixelScroll';

const HomePage = () => {

    const { heroRef, aboutRef, menuRef, contactRef } = useGSAP();

  return (
    <div className="burger-app">


      <PixelScroll/ >
      <Navbar />

      <PixelScroll/ >
      <Hero />


      <PixelScroll/ >
      <AboutSection />

      <PixelScroll/ >
      <MenuHighlights />

      {/* Sección de Contacto */}
      <PixelScroll/ >
      <section id="contact" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Contáctanos</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <ContactInfo />
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;