// src/services/itemService.js
// ------------------------------------------
// Simple in-memory CRUD + dynamic image helper
// ------------------------------------------

import { products } from '../data/products.js';
import { getAvailableImages } from '../utils/imageScanner.js';

// ------------------------------------------------------------------
// 1.  Internal memory store - initialized from products.js
// ------------------------------------------------------------------
let items = products.map(product => ({
  id: product.id,
  name: product.name,
  price: product.price,
  image: product.img || null, // Keep full path from products.js
  description: product.description || '',
  category: product.category || '',
  stars: product.stars || 0,
  oldPrice: product.oldPrice || null,
  discount: product.discount || null
}));

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