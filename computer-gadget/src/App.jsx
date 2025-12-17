// src/App.jsx  
import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import DebugPanel from './components/DebugPanel';
import './styles/App.css';

function App() {
  const [cart, setCart] = useState({});
  const updateCart = (id, qty) =>
    setCart((prev) => ({ ...prev, [id]: qty }));

  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);

  // OPTIONAL: refresh items once so placeholders are shown for missing images
  useEffect(() => {
    import('./services/itemService').then((mod) => mod.refreshItems());
  }, []);

  return (
    <div className="App">
      <Navigation cartCount={cartCount} />
      <Catalog cart={cart} updateCart={updateCart} />
      <Footer />
      <DebugPanel />
    </div>
  );
}

export default App;