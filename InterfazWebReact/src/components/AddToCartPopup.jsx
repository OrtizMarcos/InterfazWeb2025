import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/AddToCartPopup.css';

const AddToCartPopup = ({ show, onHide, onCancel, product }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  return (
    <Modal show={show} onHide={onHide} centered className="add-to-cart-popup">
      <Modal.Body>
        <div className="popup-content">
          <FaCheckCircle className="success-icon" />
          <h4>¡Producto agregado al carrito!</h4>
          <p>{product?.titulo} se ha agregado correctamente.</p>
          <p className="product-price">
            {Number(product?.precio).toLocaleString('es-PY')} Gs
          </p>
          <div className="popup-buttons">
            <Button variant="secondary" onClick={onCancel}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddToCartPopup; 