import { useState } from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import Footer from './Footer';
import '../styles/About.css';

function About() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

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
              {isEmailVisible ? 'dallas8000@gmail.com' : 'Contact information available upon request.'}
            </span>
            <br />
            {isEmailVisible ? '' : 'Please click the button below to reveal my email.'}
          </p>
          {isEmailVisible ? (
            <button className="btn btn-primary" onClick={hideEmailInformation}>Hide my email</button>
          ) : (
            <button className="btn btn-secondary" onClick={showEmailInformation}>Show my email</button>
          )}
        </div>
      </section>
    <footer className="about-footer" style={{background: '#222', color: '#fff', padding: '2rem 0', marginTop: '2rem'}}>
      <div style={{maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem'}}>Business Address</div>
        <div>1234 Tech Avenue, Suite 100, San Diego, CA 92101</div>
        <div style={{marginTop: '0.5rem', fontWeight: 'bold', fontSize: '1.1rem'}}>Business Contact</div>
        <div>Phone: (555) 123-4567 &nbsp;|&nbsp; Email: dallas8000@gmail.com</div>
      </div>
    </footer>
    <Footer />
    </main>
  );
}

export default About;
