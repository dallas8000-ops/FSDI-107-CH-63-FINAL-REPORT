import React from 'react';
import '../styles/Navigation.css';

const Navigation = ({ cartCount }) => (
  <header className="nav">
    <div className="nav-container">
      <div className="logo">Computer Gadgets</div>

      <input type="text" className="search-bar" placeholder="Search products…" />

      <div className="cart-icon">
        <span className="cart-icon-symbol">🛒</span>
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </div>
    </div>
  </header>
);

export default Navigation;