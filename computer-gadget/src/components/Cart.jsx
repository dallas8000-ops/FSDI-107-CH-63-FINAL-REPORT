import React from 'react';
import '../styles/Cart.css'; 

export default function Cart({ cartItems, onUpdateQuantity, onRemoveFromCart }) {
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  if (cartItems.length === 0) {
    return (
      <div className="cart-summary empty-cart">
        🛒 Cart is Empty ({totalItems} items)
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <h2>🛒 Shopping Cart ({totalItems} items)</h2>
      
      <div className="cart-items-list">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            
            <img 
                src={item.img} 
                alt={item.name} 
                className="cart-item-image" 
            />

            <span className="item-name">{item.name}</span>
            
            <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
            
            <div className="item-controls">
              {/* Decrease Quantity Button */}
              <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1} 
              >
                -
              </button>
              
              {/* Quantity Input */}
              <input 
                type="number" 
                value={item.quantity} 
                min="1"
                onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
              />
              
              {/* Increase Quantity Button */}
              <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              
              {/* Remove Button */}
              <button 
                className="remove-btn"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cart-total">
        <strong>Total: ${cartTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
}