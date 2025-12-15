// src/services/itemService.js
// ------------------------------------------
// Simple in-memory CRUD + dynamic image helper
// ------------------------------------------

import { getAvailableImages } from '../utils/imageScanner.js';

// ------------------------------------------------------------------
// 1.  Internal memory store
// ------------------------------------------------------------------
let items = [
  {
    id: 1,
    name: 'Mechanical Keyboard',
    price: 89.99,
    image: 'keyboard.jpg',
    description: 'RGB back-lit mechanical keyboard with blue switches.'
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    price: 29.99,
    image: 'mouse.jpg',
    description: 'Ergonomic wireless mouse with 6 programmable buttons.'
  },
  {
    id: 3,
    name: 'USB-C Hub',
    price: 45.0,
    image: 'hub.jpg',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0 and SD card reader.'
  },
  {
    id: 4,
    name: 'Webcam 1080p',
    price: 59.99,
    image: 'webcam.jpg',
    description: 'Full-HD webcam with built-in microphone and privacy shutter.'
  },
  {
    id: 5,
    name: 'Monitor Stand',
    price: 35.5,
    image: 'stand.jpg',
    description: 'Adjustable wooden monitor stand with storage drawer.'
  }
];

// ------------------------------------------------------------------
// 2.  CRUD helpers
// ------------------------------------------------------------------
export const getItems = () => Promise.resolve([...items]);

export const addItem = (item) => {
  const newItem = { ...item, id: Math.max(...items.map((i) => i.id), 0) + 1 };
  items.push(newItem);
  return Promise.resolve(newItem);
};

export const updateItem = (id, updates) => {
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return Promise.resolve(null);
  items[idx] = { ...items[idx], ...updates };
  return Promise.resolve(items[idx]);
};

export const deleteItem = (id) => {
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return Promise.resolve(false);
  items.splice(idx, 1);
  return Promise.resolve(true);
};

// ------------------------------------------------------------------
// 3.  Refresh items with images that actually exist in public/images
// ------------------------------------------------------------------
export const refreshItems = async () => {
  const available = await getAvailableImages(); // string[] of file names
  items = items.map((it) =>
    available.includes(it.image) ? it : { ...it, image: null }
  );
  return [...items];
};

// ------------------------------------------------------------------
// 4.  Re-export the scanner so DebugPanel (or any component) can use it
// ------------------------------------------------------------------
export { getAvailableImages };