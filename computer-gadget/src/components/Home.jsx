import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Computer Gadgets Store</h1>
          <p>Welcome to your favorite computer gadgets shop!</p>
          <p className="subtitle">Discover the latest and greatest in computer technology</p>
          <button className="cta-button" onClick={() => navigate('/catalog')}>
            Shop Now
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" 
            alt="Technology" 
            className="hero-img"
          />
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🛍️ Wide Selection</h3>
          <p>Browse our extensive collection of computer gadgets and accessories</p>
        </div>
        <div className="feature-card">
          <h3>💰 Best Prices</h3>
          <p>Get the best deals on premium computer products</p>
        </div>
        <div className="feature-card">
          <h3>🚚 Fast Shipping</h3>
          <p>Quick and reliable delivery to your doorstep</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
