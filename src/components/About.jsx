import { useState } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import '../styles/About.css';

function About() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  function showEmailInformation() {
    setIsEmailVisible(true);
  }

  function hideEmailInformation() {
    setIsEmailVisible(false);
  }

  return (
    <main className="about">
      <section className="about-hero">
        <h1>🖥️ About Computer Gadgets Store <IconInfoCircle size={32} color="#F7B32B" style={{verticalAlign: 'middle', marginLeft: 8}} /></h1>
        <p className="subtitle">Your trusted destination for premium computer technology</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Computer Gadgets Store, we are dedicated to providing our customers with the highest quality computer products and accessories. Our mission is to make cutting-edge technology accessible to everyone, from casual users to professional enthusiasts.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="features-list">
            <li>✓ Curated selection of premium computer gadgets</li>
            <li>✓ Competitive pricing with regular discounts</li>
            <li>✓ Expert customer support team</li>
            <li>✓ Fast and reliable shipping</li>
            <li>✓ Easy returns and exchanges</li>
            <li>✓ Warranty on all products</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, Computer Gadgets Store started with a simple vision: to create a platform where tech enthusiasts can discover and purchase the latest computer products. What began as a small venture has grown into a trusted online store serving thousands of customers worldwide.
          </p>
          <p>
            We believe in quality, reliability, and customer satisfaction. Every product in our catalog is carefully selected to ensure it meets our high standards. Our team works tirelessly to bring you the best deals on the latest technology.
          </p>
        </div>

        <div className="about-section">
          <h2>Contact Information</h2>
          <p>
            <span style={{ color: 'blue', fontFamily: 'Lucida Handwriting' }}>
              {isEmailVisible || isHovering ? 'dallas8000@gmail.com' : 'Contact information available upon request.'}
            </span>
            <br />
            {isEmailVisible || isHovering ? '' : 'Please click the button below to reveal my email.'}
          </p>
          <button className="btn btn-primary" onClick={hideEmailInformation}>Hide my email</button>
          <button 
            className="btn btn-secondary" 
            onClick={showEmailInformation}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Show my email
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;
