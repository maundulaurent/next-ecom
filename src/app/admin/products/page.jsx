'use client';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function AddProduct() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar: Fixed position, touches the top */}
      <Sidebar />

      {/* Main Content: Scrolls independently */}
      <main className="flex-1 bg-gray-100 overflow-y-auto overflow-x-hidden ml-60">
        {/* Sticky Navbar inside main content */}
        <Navbar />

        <div className="max-w-full sm:max-w-[calc(100vw-16rem-3rem)] mx-auto px-18 mt-4">
          <h1 className="text-xl font-semibold text-gray-800 mb-6">
            Add New Product
          </h1>

          {/* Product Form */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8"
            style={{
              backgroundImage: 'linear-gradient(to right, #3b82f6 60%, transparent 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              backgroundSize: '100% 4px',
          }}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200">
              Product Details
            </h2>
            <form className="space-y-6">
              {/* Row 1: SKU, Select Category, Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SKU
                  </label>
                  <input
                    type="text"
                    placeholder="Enter SKU"
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Category
                  </label>
                  <select
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">--select category--</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="home">Home & Garden</option>
                    <option value="sports">Sports</option>
                    <option value="beauty">Beauty</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand
                  </label>
                  <select
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">--select--</option>
                    <option value="brand1">Brand 1</option>
                    <option value="brand2">Brand 2</option>
                    <option value="brand3">Brand 3</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Select Status, Select Featured, Select Sub Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Status
                  </label>
                  <select
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">--select--</option>
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="out-of-stock">Out of Stock</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Featured
                  </label>
                  <select
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">--select--</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Sub Status
                  </label>
                  <select
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                  >
                    <option value="">--select--</option>
                    <option value="new">New</option>
                    <option value="sale">Sale</option>
                    <option value="trending">Trending</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Buying Price, Regular Price, Sale Price */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Buying Price
                  </label>
                  <input
                    type="number"
                    placeholder="Buying Price"
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Regular Price
                  </label>
                  <input
                    type="number"
                    placeholder="Regular Price"
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sale Price
                  </label>
                  <input
                    type="number"
                    placeholder="Sale Price"
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Row 4: Name, Size, Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 70*70cm*50cm"
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Description
                </label>
                <textarea
                  placeholder="Enter product description"
                  rows="4"
                  className="w-full p-2 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Product Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Tags
                </label>
                <input
                  type="text"
                  placeholder="Enter tags (e.g., summer, trendy, casual)"
                  className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Separate tags with commas
                </p>
              </div>

              {/* YouTube Video */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  YouTube Video
                </label>
                <input
                  type="text"
                  placeholder="YouTube video URL"
                  className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Feature Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Feature Image
                </label>
                <input
                  type="file"
                  className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload feature image (JPEG, PNG, max 5MB)
                </p>
              </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Alt Text for Feature Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text (Feature Image)
                </label>
                <input
                  type="text"
                  placeholder="Alt text"
                  className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Gallery Images */}
              <div className="space-y-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gallery Image {index}
                    </label>
                    <input
                      type="file"
                      className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Alt Text (Gallery Image {index})
                      </label>
                      <input
                        type="text"
                        placeholder="Alt text"
                        className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                ))}
                <p className="text-sm text-gray-500 mt-1">
                  Upload up to 4 gallery images (max 5MB)
                </p>
              </div>

              {/* Long Description Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Long Description Image
                </label>
                <input
                  type="file"
                  className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload long description image (JPEG, PNG, max 5MB)
                </p>
              </div>
              </div>
              
              
              {/* Alt Text for Long Description Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Text (Long Description Image)
                </label>
                <input
                  type="text"
                  placeholder="Alt text"
                  className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}