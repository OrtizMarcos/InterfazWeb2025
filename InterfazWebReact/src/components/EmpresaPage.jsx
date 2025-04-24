import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import '../styles/EmpresaPage.css';

const EmpresaPage = () => {
  const handleGitHubClick = () => {
    window.open('https://github.com/OrtizMarcos/InterfazWeb2025.git', '_blank');
  };

  return (
    <div className="empresa-page">
      <div className="empresa-header">
        <h1>Nuestra Empresa</h1>
        <p>Conoce más sobre ElectroHogar JAM</p>
        <button className="github-button" onClick={handleGitHubClick}>
          <FaGithub /> Ver en GitHub
        </button>
      </div>
      
      <Container fluid className="empresa-container">
        <Row className="empresa-grid">          
          <Col xs={12} className="empresa-info">
            <div className="empresa-card">
              <h2>Fundadores</h2>
              <div className="fundadores-grid">
                <div className="fundador-item">
                  <h3>Marcos Ortiz</h3>
                </div>
                <div className="fundador-item">
                  <h3>Ana Duarte</h3>
                </div>
                <div className="fundador-item">
                  <h3>Jack Delvalle</h3>
                </div>
              </div>
            </div>
          </Col>
          
          <Col xs={12} className="empresa-info">
            <div className="empresa-card">
              <h2>Misión</h2>
              <p>
                Proporcionar electrodomésticos de última generación que combinen eficiencia energética, diseño moderno y durabilidad, 
                asegurando la satisfacción total de nuestros clientes.
              </p>
            </div>
          </Col>
          
          <Col xs={12} className="empresa-info">
            <div className="empresa-card">
              <h2>Visión</h2>
              <p>
                Ser la empresa líder en el mercado de electrodomésticos en Paraguay, reconocida por nuestra innovación, 
                calidad de servicio y compromiso con el medio ambiente.
              </p>
            </div>
          </Col>
          
          <Col xs={12} className="empresa-info">
            <div className="empresa-card">
              <h2>Valores</h2>
              <ul>
                <li>Innovación constante</li>
                <li>Calidad garantizada</li>
                <li>Sostenibilidad ambiental</li>
                <li>Servicio al cliente excepcional</li>
                <li>Integridad en todas nuestras operaciones</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EmpresaPage; 