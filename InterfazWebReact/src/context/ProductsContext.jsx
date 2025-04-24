import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchProducts = (query, products) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const results = products.filter(product => 
      product.nombre.toLowerCase().includes(query.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
    setIsSearching(true);
  };

  const clearSearch = () => {
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <ProductsContext.Provider value={{
      searchResults,
      isSearching,
      searchProducts,
      clearSearch
    }}>
      {children}
    </ProductsContext.Provider>
  );
}; 