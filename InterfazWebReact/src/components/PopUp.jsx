import React, { useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/AddToCartPopup.css';

const PopUp = ({ message, onClose, onCancel }) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    }
  }, [onCancel]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleClose]);

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <div className="popup-buttons">
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp; 