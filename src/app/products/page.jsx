'use client';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Products
      </h1>

      {loading ? (
        <div className="text-center text-gray-500 py-10">
          <svg
            className="animate-spin h-8 w-8 mx-auto mb-4 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
            ></path>
          </svg>
          Loading products...
        </div>
      ) : error ? (
        <div className="p-6 bg-red-100 text-red-700 rounded-lg text-center">
          Error: {error}
        </div>
      ) : (
        <div>
          {products.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <li
                  key={product._id} // No .toString() needed if _id is a string
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-blue-500 font-medium">
                    Category: {product.category?.name || 'Uncategorized'}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-6 bg-gray-100 text-gray-500 rounded-lg text-center">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
}