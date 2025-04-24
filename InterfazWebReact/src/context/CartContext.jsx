import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const validateCoupon = (coupon) => {
    // Validar que el cupón sea exactamente "DESCUENTO" seguido de números
    const prefix = coupon.slice(0, 9); // Obtener los primeros 9 caracteres
    if (prefix !== 'DESCUENTO') {
      return { 
        isValid: false, 
        message: 'El cupón solo puede comenzar con la palabra "DESCUENTO"' 
      };
    }

    // Obtener los números después de "DESCUENTO"
    const numberPart = coupon.slice(9);
    if (!/^\d+$/.test(numberPart)) {
      return { 
        isValid: false, 
        message: 'Después de DESCUENTO solo se permiten números' 
      };
    }

    // Convertir a número y validar el rango
    const discountPercentage = parseInt(numberPart);
    if (discountPercentage < 1 || discountPercentage > 60) {
      return { 
        isValid: false, 
        message: 'El descuento debe estar entre 1% y 60%' 
      };
    }

    return { 
      isValid: true, 
      discountPercentage,
      message: `¡Cupón válido! Se aplicará un ${discountPercentage}% de descuento`
    };
  };

  const applyCoupon = (coupon) => {
    const validationResult = validateCoupon(coupon);
    if (validationResult.isValid) {
      setAppliedCoupon({
        code: coupon,
        discountPercentage: validationResult.discountPercentage
      });
      return validationResult;
    }
    setAppliedCoupon(null);
    return validationResult;
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = Number(item.precio);
      const itemQuantity = Number(item.quantity);
      return total + (itemPrice * itemQuantity);
    }, 0);
  };

  const getDiscount = () => {
    if (!appliedCoupon) return 0;
    const subtotal = getSubtotal();
    return Math.round(subtotal * (appliedCoupon.discountPercentage / 100));
  };

  const getCartTotal = () => {
    const subtotal = getSubtotal();
    const discount = getDiscount();
    return subtotal - discount;
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
    getCartTotal,
    getSubtotal,
    applyCoupon,
    removeCoupon,
    getDiscount,
    appliedCoupon
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}; 