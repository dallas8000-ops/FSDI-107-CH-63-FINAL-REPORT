// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Shipping from './components/Shipping';
import Payment from './components/Payment';
import Footer from './components/Footer';
import { getItems } from './services/itemService';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState({});
  const [allItems, setAllItems] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    getItems().then(items => setAllItems(items));
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const updateCart = (itemId, quantity) => {
    console.log(`Updating cart: item ${itemId} to quantity ${quantity}`);
    setCart(prev => {
      const updated = { ...prev };
      if (quantity <= 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = quantity;
      }
      console.log('Cart updated:', updated);
      return updated;
    });
  };

  // Convert cart object to array format for Cart component
  const cartItems = Object.entries(cart).map(([itemId, quantity]) => {
    const item = allItems.find(i => i.id === parseInt(itemId));
    return item ? { ...item, quantity } : null;
  }).filter(Boolean);

  const clearCart = () => setCart({});

  return (
    <BrowserRouter>
      <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Navigation 
          cartCount={Object.values(cart).reduce((a, b) => a + b, 0)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <main className="bg-light">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalog cart={cart} updateCart={updateCart} />} />
            <Route path="/cart" element={
              <Cart 
                cartItems={cartItems} 
                onUpdateQuantity={updateCart}
                onRemoveFromCart={(id) => updateCart(id, 0)}
                onClearCart={clearCart}
              />
            } />
            <Route path="/shipping" element={<Shipping cart={cart} />} />
            <Route path="/payment" element={<Payment cartItems={cartItems} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;