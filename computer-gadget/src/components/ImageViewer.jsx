// src/components/ImageViewer.jsx
import React from 'react';
import { getAvailableImages } from '../utils/imageScanner';

const ImageViewer = () => {
  const availableImages = getAvailableImages();
  
  return (
    <div className="image-viewer">
      <h3>Available Images in /public/images/</h3>
      <div className="image-grid">
        {Object.entries(availableImages).map(([name, path]) => (
          <div key={name} className="image-item">
            <img src={path} alt={name} />
            <p>{name}</p>
            <small>{path}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;