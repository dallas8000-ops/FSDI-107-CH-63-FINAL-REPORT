import React, { useEffect, useState } from 'react';
import { getItems } from '../services/itemService';
import ItemCard from './ItemCard';
import '../styles/Catalog.css';

const Catalog = ({ cart, updateCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(setItems);
  }, []);

  return (
    <main className="catalog">
      <h2>Our Products</h2>
      <div className="grid">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} cart={cart} updateCart={updateCart} />
        ))}
      </div>
    </main>
  );
};

export default Catalog;