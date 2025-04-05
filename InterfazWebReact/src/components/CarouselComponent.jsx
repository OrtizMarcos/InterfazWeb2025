import Carousel from 'react-bootstrap/Carousel';
import Lavadora from '../img/Lavadora.jpg';
import Licuadora from '../img/Licuadora.jpg';
import Aspiradora from '../img/Aspiradora.jpg';
//import microondas from '../img/microondas.jpg';
import RefrigeradorDosPuertas from '../img/RefrigeradorDosPuertas.jpg';

function CarouselComponent() {
  return (
    <Carousel fade interval={3000} controls indicators>
      <Carousel.Item>
        <img className="d-block w-100" src={Lavadora} alt="JBL TUNE 510BT" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>JBL TUNE 510BT</h5>
          <p>Auriculares inalámbricos on-ear con tecnología Bluetooth.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Licuadora} alt="Logitech G203" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Gaming Mouse Logitech G203</h5>
          <p>Ratón Gaming LightSync blanco WHT</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={RefrigeradorDosPuertas} alt="VIOTEK Monitor" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>VIOTEK SUW49C Monitor Curvo</h5>
          <p>Monitor Gaming Curvo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Aspiradora} alt="STOGA Mini Keyboard" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Teclado Gaming STOGA</h5>
          <p>Miniteclado con iluminación negra arcoíris.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
