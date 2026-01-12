// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/GlobalComponents.css'; 

export default function NavBar({ totalItems = 0, onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold">
          🖥️ Computer Gadget Store
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/catalog" className="nav-link">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={onCartClick}
              >
                🛒 Cart ({totalItems})
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}