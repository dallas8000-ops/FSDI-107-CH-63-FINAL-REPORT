import React from 'react';
import QuantityPicker from './QuantityPicker';
import '../styles/ItemCard.css';

const ItemCard = ({ item, cart, updateCart }) => {
  const qty = cart[item.id] || 0;

  const handleChange = (newQty) => updateCart(item.id, newQty);

  return (
    <article className="item-card">
      <img
        src={item.image ? `/images/${item.image}` : '/images/placeholder.png'}
        alt={item.name}
        onError={(e) => { e.target.src = '/images/placeholder.png'; }}
      />
      <h3>{item.name}</h3>
      <p className="desc">{item.description}</p>
      <p className="price">${item.price.toFixed(2)}</p>

      <QuantityPicker value={qty} onChange={handleChange} />

      {qty > 0 && (
        <p className="line-total">Line total: ${(qty * item.price).toFixed(2)}</p>
      )}
    </article>
  );
};

export default ItemCard;