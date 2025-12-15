import React from 'react';
import '../styles/QuantityPicker.css';

const QuantityPicker = ({ value = 1, onChange }) => {
  const set = (v) => onChange(Math.max(1, v));

  return (
    <div className="qty-picker">
      <button type="button" onClick={() => set(value - 1)} disabled={value <= 1}>
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => set(parseInt(e.target.value, 10) || 1)}
        min="1"
      />
      <button type="button" onClick={() => set(value + 1)}>
        +
      </button>
    </div>
  );
};

export default QuantityPicker;