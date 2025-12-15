// src/components/NavBar.jsx
import React from 'react';
import '../styles/GlobalComponents.css'; 

export default function NavBar({ totalItems = 0, onCartClick }) {
  return (
    <nav className="navbar"> 
      <div className="navbar-container"> 
        <div className="navbar-logo"> 
          <h1 style={{ margin: 0 }}>Computer Gadget Store</h1>
        </div>
        <button 
            className="cart-button" 
            onClick={onCartClick} 
        >
          Cart ({totalItems})
        </button>
      </div>
    </nav>
  );
}