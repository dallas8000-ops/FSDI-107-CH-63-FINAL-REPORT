// src/components/NavBar.jsx

import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { IconHome, IconInfoCircle, IconDeviceImac, IconUserShield } from '@tabler/icons-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/GlobalComponents.css';
import GlobalContext from '../state/globalContext';

export default function NavBar({ totalItems = 0, onCartClick }) {
  const user = useContext(GlobalContext).user;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
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
              <Link to="/" className="nav-link d-flex align-items-center">
                <IconHome size={22} color="#4F8EF7" style={{marginRight: 6}} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link d-flex align-items-center">
                <IconInfoCircle size={22} color="#F7B32B" style={{marginRight: 6}} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/catalog" className="nav-link d-flex align-items-center">
                <IconDeviceImac size={22} color="#43AA8B" style={{marginRight: 6}} /> Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link d-flex align-items-center">
                <IconUserShield size={22} color="#E94F37" style={{marginRight: 6}} /> Admin
              </Link>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={onCartClick}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                🛒 Cart ({totalItems})
                <span style={{ color: 'maroon', marginLeft: '12px', fontWeight: 'bold' }}>{user.name}</span>
              </button>
            </li>
          </ul>
          {/* Removed user.name display, now shown next to cart */}
        </div>
      </div>
    </nav>
  );
}