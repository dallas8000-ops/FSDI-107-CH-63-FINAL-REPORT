import React from 'react';
import { IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css'; 

export default function Cart({ cartItems, onUpdateQuantity, onRemoveFromCart, onClearCart }) {
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  if (cartItems.length === 0) {
    return (
      <div className="cart-summary empty-cart">
        <h2>🛒 Cart is Empty</h2>
        <p>Your shopping cart is currently empty. Add items from the catalog!</p>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <div className="cart-header">
        <h2>🛒 Shopping Cart ({totalItems} items)</h2>
        <button className="clear-cart-btn" onClick={onClearCart}>
          Clear Cart
        </button>
      </div>
      
      <div className="cart-items-list">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            
            <img 
                src={item.image ? (item.image.startsWith('/') ? item.image : `/images/${item.image}`) : '/images/placeholder.png'}
                alt={item.name} 
                className="cart-item-image"
                onError={(e) => { e.target.src = '/images/placeholder.png'; }}
            />

            <div className="cart-item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-unit-price">${item.price.toFixed(2)} each</span>
            </div>
            
            <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
            
            <div className="item-controls">
              {/* Decrease Quantity Button */}
              <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1} 
                className="qty-btn"
              >
                −
              </button>
              
              {/* Quantity Input */}
              <input 
                type="number" 
                value={item.quantity} 
                min="1"
                onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                className="qty-input"
              />
              
              {/* Increase Quantity Button */}
              <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="qty-btn"
              >
                +
              </button>
              
              {/* Remove Button */}
              <button 
                className="remove-btn"
                onClick={() => onRemoveFromCart(item.id, 0)}
                title="Remove from cart"
                style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <IconTrash size={18} color="#E94F37" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-total">
        <strong>Total: ${cartTotal.toFixed(2)}</strong>
        <Link to="/shipping" className="checkout-btn">Proceed to Shipping →</Link>
      </div>
    </div>
  );
}