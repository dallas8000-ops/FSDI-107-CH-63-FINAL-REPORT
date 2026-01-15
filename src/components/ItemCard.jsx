import React from 'react';
import QuantityPicker from './QuantityPicker';
import '../styles/ItemCard.css';

const ItemCard = ({ item, cart = {}, updateCart = () => {} }) => {
  if (!item) return <div>Item not found</div>;

  const qty = cart[item.id] || 0;
  const total = qty > 0 ? qty * item.price : 0;

  const handleChange = (newQty) => updateCart(item.id, newQty);

  return (
    <article className="item-card">
      <div className="item-image-container">
        <img
          src={item.image && typeof item.image === 'string' && item.image.startsWith('/') ? item.image : (item.image ? `/images/${item.image}` : '/images/placeholder.png')}
          alt={item.name || 'Product'}
          className="item-image"
          onError={(e) => { e.target.src = '/images/placeholder.png'; }}
        />
        {item.discount && (
          <span className="discount-badge">-{item.discount}%</span>
        )}
      </div>
      
      <div className="item-info">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        
        <div className="price-section">
          {item.oldPrice && (
            <span className="old-price">${item.oldPrice.toFixed(2)}</span>
          )}
          <span className="current-price">${item.price.toFixed(2)}</span>
        </div>

        {item.stars > 0 && (
          <div className="rating">
            {'★'.repeat(Math.floor(item.stars))}
            {item.stars % 1 >= 0.5 && '½'}
            <span className="rating-value">({item.stars})</span>
          </div>
        )}

        <div className="quantity-section">
          <label className="quantity-label">Quantity:</label>
          <QuantityPicker value={qty} onChange={handleChange} />
        </div>

        {qty > 0 && (
          <div className="total-section">
            <span className="total-label">Total:</span>
            <span className="total-amount">${total.toFixed(2)}</span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ItemCard;