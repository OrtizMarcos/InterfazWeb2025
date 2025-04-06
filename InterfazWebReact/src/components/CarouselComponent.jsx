import Carousel from 'react-bootstrap/Carousel';
import AtencionCliente from '../img/AtencionCliente.jpg';
import Delivery from '../img/Delivery.jpg';
import Electro1 from '../img/Electro1.jpg';
import Instalacion from '../img/Instalacion.jpg';
import '../styles/Carousel.css';

function CarouselComponent() {
  return (
    <Carousel fade interval={3000} controls indicators>
      <Carousel.Item>
        <img className="d-block w-100" src={Electro1} alt="JBL TUNE 510BT" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>JBL TUNE 510BT</h5>
          <p>Auriculares inalámbricos on-ear con tecnología Bluetooth.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Delivery} alt="Logitech G203" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Gaming Mouse Logitech G203</h5>
          <p>Ratón Gaming LightSync blanco WHT</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={AtencionCliente} alt="VIOTEK Monitor" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>VIOTEK SUW49C Monitor Curvo</h5>
          <p>Monitor Gaming Curvo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Instalacion} alt="STOGA Mini Keyboard" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Teclado Gaming STOGA</h5>
          <p>Miniteclado con iluminación negra arcoíris.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
