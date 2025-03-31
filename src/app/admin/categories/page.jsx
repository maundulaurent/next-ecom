'use client'; // Mark as client component since we'll use hooks

import { useState, useEffect } from 'react';

interface Category {
  _id: string;
  name: string;
  description?: string;
  createdAt: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/categories');
      const data = await res.json();
      if (res.ok) {
        setCategories(data);
      } else {
        setError(data.error || 'Failed to fetch categories');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description }),
      });

      const data = await res.json();
      if (res.ok) {
        setCategories([...categories, data]); // Add new category to list
        setName(''); // Clear inputs
        setDescription('');
      } else {
        setError(data.error || 'Failed to add category');
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>

      {/* Form to add a category */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Category Name"
            className="p-2 border rounded"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
            className="p-2 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Adding...' : 'Add Category'}
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {/* List of categories */}
      {loading && !categories.length ? (
        <p>Loading...</p>
      ) : categories.length === 0 ? (
        <p>No categories yet.</p>
      ) : (
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category._id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{category.name}</h2>
              {category.description && <p>{category.description}</p>}
              <p className="text-sm text-gray-500">
                Created: {new Date(category.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}