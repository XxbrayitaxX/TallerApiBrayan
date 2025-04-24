import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';
import SearchBar from './SearchBar/SearchBar';
import './MainContainer.css';

const MainContainer = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  
    const filteredProducts = products.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <SearchBar setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default MainContainer;