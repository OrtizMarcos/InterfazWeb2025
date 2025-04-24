import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Table, Form, Alert } from 'react-bootstrap';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../styles/CarritoPage.css';

const CarritoPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getSubtotal,
    applyCoupon,
    removeCoupon,
    getDiscount,
    appliedCoupon 
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState(null);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const formatPrice = (price) => {
    return Number(price).toLocaleString('es-PY');
  };

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponCode);
    setCouponMessage({
      type: result.isValid ? 'success' : 'danger',
      text: result.message
    });
    if (!result.isValid) {
      setCouponCode('');
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponCode('');
    setCouponMessage(null);
  };

  return (
    <Container className="carrito-container">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Tu carrito está vacío</p>
          <Button variant="primary" href="/">Continuar comprando</Button>
        </div>
      ) : (
        <Row>
          <Col md={8}>
            <Table responsive>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={item.imagen} alt={item.nombre} className="producto-imagen" />
                        <span className="ms-2">{item.nombre}</span>
                      </div>
                    </td>
                    <td>{formatPrice(item.precio)} Gs</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <FaMinus />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button 
                          variant="outline-secondary" 
                          size="sm"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          <FaPlus />
                        </Button>
                      </div>
                    </td>
                    <td>{formatPrice(item.precio * item.quantity)} Gs</td>
                    <td>
                      <Button 
                        variant="danger" 
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <h4>Resumen de Compra</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>{formatPrice(getSubtotal())} Gs</span>
                </div>

                {/* Sección de Cupones */}
                <div className="coupon-section mb-3">
                  <Form.Group>
                    <Form.Label>Cupón de descuento</Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Ingresa tu cupón"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        disabled={appliedCoupon !== null}
                      />
                      {appliedCoupon ? (
                        <Button 
                          variant="outline-danger" 
                          onClick={handleRemoveCoupon}
                        >
                          Quitar
                        </Button>
                      ) : (
                        <Button 
                          variant="outline-primary" 
                          onClick={handleApplyCoupon}
                          disabled={!couponCode}
                        >
                          Aplicar
                        </Button>
                      )}
                    </div>
                  </Form.Group>
                  {couponMessage && (
                    <Alert variant={couponMessage.type} className="mt-2 mb-0 py-2">
                      {couponMessage.text}
                    </Alert>
                  )}
                </div>

                {appliedCoupon && (
                  <div className="d-flex justify-content-between mb-2 text-success">
                    <span>Descuento ({appliedCoupon.discountPercentage}%):</span>
                    <span>-{formatPrice(getDiscount())} Gs</span>
                  </div>
                )}

                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span>0 Gs</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total:</strong>
                  <strong>{formatPrice(getCartTotal())} Gs</strong>
                </div>
                <Button variant="primary" className="w-100">
                  Proceder al Pago
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CarritoPage; 