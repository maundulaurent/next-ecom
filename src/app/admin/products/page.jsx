'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [formData, setFormData] = useState({ 
    name: '', 
    price: '', 
    description: '' 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price)
      }),
    });
    const result = await res.json();
    alert(result._id ? 'Product added!' : 'Error: ' + result.error);
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
          step="0.01"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}