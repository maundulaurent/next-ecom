'use client';

import { useState, useEffect } from 'react';

export default function CategoriesPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    slug: '',
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (res.ok) {
        setCategories([...categories, result]);
        setFormData({ name: '', description: '', slug: '' });
        alert('Category added successfully');
      } else {
        alert('Error: ' + result.error);
      }
    } catch (err) {
      alert('Something went wrong');
    }
  };

  // Render everything together
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Categories</h1>

      {/* Form Section */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Category</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            placeholder="Category Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            placeholder="Enter Slug"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="p-2 border rounded w-full"
            required
          />
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="p-2 border rounded w-full"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Category
          </button>
        </form>
      </div>

      {/* Categories List with Loading/Error Below */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Categories</h2>
        {error ? (
          <div className="p-4 text-red-500">Error: {error}</div>
        ) : (
          <>
            {categories.length > 0 ? (
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li
                    key={category._id}
                    className="border-b border-gray-300 pb-4"
                  >
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <p className="text-gray-600">Slug: {category.slug}</p>
                    {category.description && (
                      <p className="text-grayFr-600">{category.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-4 border border-gray-200 text-gray-500">
                No Categories found
              </p>
            )}
            {loading && (
              <div className="p-4 text-gray-500">Loading Categories...</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}