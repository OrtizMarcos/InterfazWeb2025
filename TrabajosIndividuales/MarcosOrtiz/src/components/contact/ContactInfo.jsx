import React from 'react';
import { Button } from 'react-bootstrap';

const ContactInfo = () => {
  return (
    <>
      <h4>Información de Contacto</h4>
      <p>
        <strong>Dirección:</strong> Av. Principal 123, Ciudad
        <br />
        <strong>Teléfono:</strong> (123) 456-7890
        <br />
        <strong>Email:</strong> info@burgerdelicia.com
        <br />
        <strong>Horario:</strong> Lunes a Domingo, 12:00 - 22:00
      </p>
      <h5 className="mt-4">Síguenos en redes sociales</h5>
      <div className="d-flex gap-3">
        <Button variant="outline-dark">Facebook</Button>
        <Button variant="outline-dark">Instagram</Button>
        <Button variant="outline-dark">Twitter</Button>
      </div>
    </>
  );
};

export default ContactInfo;