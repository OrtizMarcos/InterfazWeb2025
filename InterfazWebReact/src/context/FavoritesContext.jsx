import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (productId) => {
    setFavorites(prev => [...prev, productId]);
  };

  const removeFromFavorites = (productId) => {
    setFavorites(prev => prev.filter(id => id !== productId));
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext; 