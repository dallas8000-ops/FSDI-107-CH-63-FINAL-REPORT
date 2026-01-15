import React, { useEffect, useState } from 'react';
import { getItems } from '../services/itemService';
import ItemCard from './ItemCard';
import '../styles/Catalog.css';

const Catalog = ({ cart, updateCart, setItems: setParentItems, items: parentItems }) => {
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    getItems().then((data) => {
      console.log('Catalog received items:', data);
      setItems(data);
      if (setParentItems) {
        setParentItems(data);
      }
    }).catch(err => console.error('Error loading items:', err));
  }, [setParentItems]);

  const handleEditItem = (item) => {
    setEditingItem({ ...item });
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    const updatedItems = items.map((item) =>
      item.id === editingItem.id ? editingItem : item
    );
    setItems(updatedItems);
    setParentItems(updatedItems);
    setIsEditing(false);
    setEditingItem(null);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    setParentItems(updatedItems);
  };

  return (
    <main className="catalog">
      <div className="catalog-header">
        <h2>Our Products</h2>
        <button
          className="edit-mode-toggle"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? '✓ Done Editing' : '✎ Edit Catalog'}
        </button>
      </div>

      {isEditing && editingItem && (
        <div className="edit-panel">
          <h3>Edit Item: {editingItem.name}</h3>
          <div className="edit-form">
            <label>
              Name:
              <input
                type="text"
                value={editingItem.name}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, name: e.target.value })
                }
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                value={editingItem.description}
                onChange={(e) =>
                  setEditingItem({ ...editingItem, description: e.target.value })
                }
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                step="0.01"
                value={editingItem.price}
                onChange={(e) =>
                  setEditingItem({
                    ...editingItem,
                    price: parseFloat(e.target.value),
                  })
                }
              />
            </label>
            <label>
              Old Price (for discounts):
              <input
                type="number"
                step="0.01"
                value={editingItem.oldPrice || ''}
                onChange={(e) =>
                  setEditingItem({
                    ...editingItem,
                    oldPrice: e.target.value ? parseFloat(e.target.value) : null,
                  })
                }
              />
            </label>
            <label>
              Discount (%):
              <input
                type="number"
                value={editingItem.discount || ''}
                onChange={(e) =>
                  setEditingItem({
                    ...editingItem,
                    discount: e.target.value ? parseInt(e.target.value) : null,
                  })
                }
              />
            </label>
            <div className="edit-buttons">
              <button className="save-btn" onClick={handleSaveEdit}>
                Save Changes
              </button>
              <button
                className="cancel-btn"
                onClick={() => {
                  setEditingItem(null);
                  setIsEditing(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid">
        {items.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
            <p>Loading products...</p>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.id} className="item-card-wrapper">
              <ItemCard item={item} cart={cart} updateCart={updateCart} />
              {isEditing && (
                <div className="item-edit-controls">
                  <button
                    className="edit-btn"
                    onClick={() => handleEditItem(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Catalog;