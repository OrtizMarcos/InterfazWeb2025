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
        <img className="d-block w-100" src={Electro1} alt="Atencion Personalizada" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Atencion Personalizada</h5>
          <p>Contamos con atencion personalizada profesional acorde a tus necesidades.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Delivery} alt="Logitech G203" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Delivery</h5>
          <p>Contamos con el delivery mas rapido de todo el paraguay</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={AtencionCliente} alt="VIOTEK Monitor" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Atencion al Cliente</h5>
          <p>Damos soporte las 24 hs los 7 dias a la semana para todos nuestos clientes</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Instalacion} alt="STOGA Mini Keyboard" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h5>Instalacion y Mantenimiento</h5>
          <p>Tenemos la facilidad de que nuestros propios Deliverys estan capacitados para poder instalar cualquier tipo de electrodomestico o electronico
              y aparte de eso tambien podemos dar seguimiento de productos y brindarle mantenimiento en caso de que lo necesite.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
