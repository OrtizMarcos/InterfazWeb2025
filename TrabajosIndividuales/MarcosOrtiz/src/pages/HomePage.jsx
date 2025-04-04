import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/About/AboutSection';
import MenuHighlights from '../components/Menu/MenuHighlights';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer/Footer';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="burger-app">
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuHighlights />

      {/* Sección de Contacto */}
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