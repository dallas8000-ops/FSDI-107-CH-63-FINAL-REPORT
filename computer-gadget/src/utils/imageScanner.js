// src/utils/imageScanner.js
export const getAvailableImages = () => {
  // Vite serves public folder at root, so we scan /images/ not /public/images/
  const imageContext = import.meta.glob('/images/*.{jpg,jpeg,png,webp,gif,svg}', { eager: true });
  
  const images = {};
  Object.keys(imageContext).forEach(path => {
    const fileName = path.split('/').pop();
    const name = fileName.split('.')[0];
    images[name] = `/images/${fileName}`;
  });
  
  return images;
};

export const findMatchingImage = (itemName, availableImages) => {
  // Try to match by item name or create a fallback
  const normalizedName = itemName.toLowerCase().replace(/\s+/g, '-');
  
  // Try different variations
  const variations = [
    normalizedName,
    normalizedName.replace(/-/g, ''),
    normalizedName.split('-')[0],
    'placeholder'
  ];
  
  for (const variation of variations) {
    if (availableImages[variation]) {
      return availableImages[variation];
    }
  }
  
  // Return first available image or placeholder
  const availablePaths = Object.values(availableImages);
  return availablePaths.length > 0 ? availablePaths[0] : '/images/placeholder.jpg';
};