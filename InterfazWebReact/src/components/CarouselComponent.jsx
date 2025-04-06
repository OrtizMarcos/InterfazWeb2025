import Carousel from 'react-bootstrap/Carousel';
import Digital1 from '../img/Digital1.jpg';
import digital4 from '../img/digital4.jpg';
import digital3 from '../img/digital3.jpg';
import digital2 from '../img/digital2.jpg';
import '../styles/Carousel.css';

function CarouselComponent() {
  return (
    <Carousel fade interval={3000} controls indicators>
      <Carousel.Item>
        <img className="d-block w-100" src={Digital1} alt="JBL TUNE 510BT" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>JBL TUNE 510BT</h5>
          <p>Auriculares inalámbricos on-ear con tecnología Bluetooth.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={digital2} alt="Logitech G203" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Gaming Mouse Logitech G203</h5>
          <p>Ratón Gaming LightSync blanco WHT</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={digital3} alt="VIOTEK Monitor" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>VIOTEK SUW49C Monitor Curvo</h5>
          <p>Monitor Gaming Curvo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={digital4} alt="STOGA Mini Keyboard" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Teclado Gaming STOGA</h5>
          <p>Miniteclado con iluminación negra arcoíris.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
