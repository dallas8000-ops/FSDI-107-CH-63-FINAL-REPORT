// src/data/products.js

// This array holds ALL products displayed on the catalog page.
export const products = [
  // --- EXISTING PRODUCTS (IDs 1-3) ---
  {
    id: 1,
    name: 'Wireless Mechanical Keyboard',
    img: '/images/keyboard.jpg', // Confirmed: Keyboard.jpg
    price: 129.99,
    oldPrice: 159.99,
    discount: 18,
    stars: 4.5,
    description: 'Tactile blue switches with customizable RGB lighting.',
    category: 'Keyboard'
  },
  {
    id: 2,
    name: '4K Ultra HD Monitor',
    img: '/images/monitor.jpg', // Confirmed: monitor.jpg
    price: 399.95,
    oldPrice: 450.00,
    discount: 11,
    stars: 4.7,
    description: 'Crisp, high-resolution display for work and gaming.',
    category: 'Monitor'
  },
  {
    id: 3,
    name: 'Precision Gaming Mouse',
    img: '/images/mouse.jpg', // Confirmed: mouse.jpg
    price: 59.99,
    oldPrice: 79.99,
    discount: 25,
    stars: 4.6,
    description: '20,000 DPI sensor and ultra-lightweight design.',
    category: 'Mouse'
  },
  // --- NEW PRODUCTS (IDs 4-8) ---
  {
    id: 4, 
    name: 'Full HD Streaming Webcam',
    img: '/images/webcam.png', // Confirmed: webcam.png
    price: 79.99,
    stars: 4.2,
    description: 'Crystal clear video for meetings and streaming.',
    category: 'Peripherals'
  },
  {
    id: 5, 
    name: 'High-Speed USB Hub',
    img: '/images/usbs.png', // Confirmed: usb.png
    price: 24.50,
    stars: 4.5,
    description: 'Four port USB 3.0 hub for fast data transfer.',
    category: 'Accessory'
  },
  {
    id: 6, 
    name: 'Modern Smartwatch',
    img: '/images/smartwatch.png', // Confirmed: smartwatch.png
    price: 199.00,
    oldPrice: 249.00,
    discount: 20,
    stars: 4.7,
    description: 'Track fitness, receive notifications, and more.',
    category: 'Wearable'
  },
  {
    id: 7, 
    name: '32GB DDR4 Memory Module',
    img: '/images/memory.png', // Confirmed: memory.png
    price: 85.00,
    stars: 4.9,
    description: 'Boost your PC performance with fast RAM.',
    category: 'Component'
  },
  {
    id: 8, 
    name: 'Ergonomic Computer Desk',
    img: '/images/computer desk.png', // Confirmed: Computer desk.png
    price: 349.00,
    stars: 4.3,
    description: 'Large surface area for multiple monitors and gear.',
    category: 'Furniture'
  }
];