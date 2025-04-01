'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function AddProduct() {
  const [formData, setFormData] = useState({
    sku: '',
    category: '',
    brand: '',
    status: '',
    featured: '',
    subStatus: '',
    buyingPrice: '',
    regularPrice: '',
    salePrice: '',
    name: '',
    size: '',
    quantity: '',
    description: '',
    tags: '',
    youtubeVideo: '',
    featureImage: null,
    featureImageAlt: '',
    galleryImages: Array(4).fill({ file: null, alt: '' }), // Array for 4 gallery images
    longDescriptionImage: null,
    longDescriptionImageAlt: '',
    slug: '',
    shortDescription: '',
    longDescription: '',
    seo: {
      pageTitle: '',
      metaKeywords: '',
      metaDescription: '',
    },
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('seo.')) {
      const seoField = name.split('.')[1];
      setFormData({
        ...formData,
        seo: { ...formData.seo, [seoField]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (field === 'featureImage' || field === 'longDescriptionImage') {
      setFormData({ ...formData, [field]: file });
    } else if (field.startsWith('galleryImages')) {
      const index = parseInt(field.split('.')[1], 10);
      const updatedGalleryImages = [...formData.galleryImages];
      updatedGalleryImages[index] = { ...updatedGalleryImages[index], file };
      setFormData({ ...formData, galleryImages: updatedGalleryImages });
    }
  };

  const handleGalleryAltChange = (e, index) => {
    const updatedGalleryImages = [...formData.galleryImages];
    updatedGalleryImages[index] = { ...updatedGalleryImages[index], alt: e.target.value };
    setFormData({ ...formData, galleryImages: updatedGalleryImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare form data for submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('sku', formData.sku);
      formDataToSubmit.append('category', formData.category);
      formDataToSubmit.append('brand', formData.brand);
      formDataToSubmit.append('status', formData.status);
      formDataToSubmit.append('featured', formData.featured);
      formDataToSubmit.append('subStatus', formData.subStatus);
      formDataToSubmit.append('buyingPrice', formData.buyingPrice);
      formDataToSubmit.append('regularPrice', formData.regularPrice);
      formDataToSubmit.append('salePrice', formData.salePrice);
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('size', formData.size);
      formDataToSubmit.append('quantity', formData.quantity);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('tags', formData.tags);
      formDataToSubmit.append('youtubeVideo', formData.youtubeVideo);
      formDataToSubmit.append('featureImageAlt', formData.featureImageAlt);
      formDataToSubmit.append('longDescriptionImageAlt', formData.longDescriptionImageAlt);
      formDataToSubmit.append('slug', formData.slug);
      formDataToSubmit.append('shortDescription', formData.shortDescription);
      formDataToSubmit.append('longDescription', formData.longDescription);
      formDataToSubmit.append('seo', JSON.stringify(formData.seo));

      // Append files
      if (formData.featureImage) {
        formDataToSubmit.append('featureImage', formData.featureImage, formData.featureImage.name);
      }
      if (formData.longDescriptionImage) {
        formDataToSubmit.append('longDescriptionImage', formData.longDescriptionImage, formData.longDescriptionImage.name);
      }
      formData.galleryImages.forEach((galleryImage, index) => {
        if (galleryImage.file) {
          formDataToSubmit.append(`galleryImages[${index}][file]`, galleryImage.file, galleryImage.file.name);
          formDataToSubmit.append(`galleryImages[${index}][alt]`, galleryImage.alt);
        }
      });

      const res = await fetch('/api/products', {
        method: 'POST',
        body: formDataToSubmit,
      });

      const result = await res.json();
      if (res.ok) {
        alert('Product added successfully!');
        // Reset form
        setFormData({
          sku: '',
          category: '',
          brand: '',
          status: '',
          featured: '',
          subStatus: '',
          buyingPrice: '',
          regularPrice: '',
          salePrice: '',
          name: '',
          size: '',
          quantity: '',
          description: '',
          tags: '',
          youtubeVideo: '',
          featureImage: null,
          featureImageAlt: '',
          galleryImages: Array(4).fill({ file: null, alt: '' }),
          longDescriptionImage: null,
          longDescriptionImageAlt: '',
          slug: '',
          shortDescription: '',
          longDescription: '',
          seo: {
            pageTitle: '',
            metaKeywords: '',
            metaDescription: '',
          },
        });
      } else {
        throw new Error(result.error || 'Failed to add product');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          <div
            className="bg-white p-6 rounded-lg shadow-md mb-8"
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: SKU, Select Category, Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    SKU
                  </label>
                  <input
                    type="text"
                    name="sku"
                    placeholder="Enter SKU"
                    value={formData.sku}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                    required
                    disabled={loading || error}
                  >
                    <option value="">
                      {loading ? 'Loading categories...' : '--select category--'}
                    </option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Enter brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Select Status, Select Featured, Select Sub Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                    required
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
                    name="featured"
                    value={formData.featured}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                    required
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
                    name="subStatus"
                    value={formData.subStatus}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                    required
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
                    name="buyingPrice"
                    placeholder="Buying Price"
                    value={formData.buyingPrice}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Regular Price
                  </label>
                  <input
                    type="number"
                    name="regularPrice"
                    placeholder="Regular Price"
                    value={formData.regularPrice}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                    step="0.01"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sale Price
                  </label>
                  <input
                    type="number"
                    name="salePrice"
                    placeholder="Sale Price"
                    value={formData.salePrice}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                    step="0.01"
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
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Size
                  </label>
                  <input
                    type="text"
                    name="size"
                    placeholder="e.g., 70*70cm*50cm"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Product Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Description
                </label>
                <textarea
                  name="description"
                  placeholder="Enter product description"
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Row 5: Product Tags, YouTube Video, Feature Image */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Tags
                  </label>
                  <input
                    type="text"
                    name="tags"
                    placeholder="Enter tags (e.g., summer, trendy, casual)"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Separate tags with commas
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    YouTube Video
                  </label>
                  <input
                    type="text"
                    name="youtubeVideo"
                    placeholder="YouTube video URL"
                    value={formData.youtubeVideo}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Feature Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'featureImage')}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Upload feature image (JPEG, PNG, max 5MB)
                  </p>
                </div>
              </div>

              {/* Row 6: Feature Image Alt, Slug, Short Description */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alt Text (Feature Image)
                  </label>
                  <input
                    type="text"
                    name="featureImageAlt"
                    placeholder="Alt text"
                    value={formData.featureImageAlt}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug (optional)
                  </label>
                  <input
                    type="text"
                    name="slug"
                    placeholder="Enter slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Short Description
                  </label>
                  <textarea
                    name="shortDescription"
                    placeholder="Enter short description"
                    rows="2"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Row 7: Long Description, Long Description Image, Long Description Image Alt */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Long Description
                  </label>
                  <textarea
                    name="longDescription"
                    placeholder="Enter long description"
                    rows="4"
                    value={formData.longDescription}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Long Description Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'longDescriptionImage')}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Upload long description image (JPEG, PNG, max 5MB)
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alt Text (Long Description Image)
                  </label>
                  <input
                    type="text"
                    name="longDescriptionImageAlt"
                    placeholder="Alt text"
                    value={formData.longDescriptionImageAlt}
                    onChange={handleInputChange}
                    className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Gallery Images */}
              <div className="space-y-4">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  Gallery Images
                </h3>
                {formData.galleryImages.map((_, index) => (
                  <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gallery Image {index + 1}
                      </label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, `galleryImages.${index}`)}
                        className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Alt Text (Gallery Image {index + 1})
                      </label>
                      <input
                        type="text"
                        placeholder="Alt text"
                        value={formData.galleryImages[index].alt}
                        onChange={(e) => handleGalleryAltChange(e, index)}
                        className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div className="sm:col-span-1"></div> {/* Empty column to maintain 3-column layout */}
                  </div>
                ))}
                <p className="text-sm text-gray-500 mt-1">
                  Upload up to 4 gallery images (max 5MB)
                </p>
              </div>

              {/* SEO Elements */}
              <div className="space-y-4">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  SEO Elements (optional)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Page Title
                    </label>
                    <input
                      type="text"
                      name="seo.pageTitle"
                      placeholder="Enter page title"
                      value={formData.seo.pageTitle}
                      onChange={handleInputChange}
                      className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Meta Keywords
                    </label>
                    <input
                      type="text"
                      name="seo.metaKeywords"
                      placeholder="Enter meta keywords"
                      value={formData.seo.metaKeywords}
                      onChange={handleInputChange}
                      className="w-full p-2 h-10 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Separate keywords with commas
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Meta Description
                    </label>
                    <textarea
                      name="seo.metaDescription"
                      placeholder="Enter meta description"
                      rows="2"
                      value={formData.seo.metaDescription}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-dark rounded-sm focus:border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                  disabled={loading}
                >
                  {loading ? 'Adding Product...' : 'Add Product'}
                </button>
              </div>
            </form>
            {error && (
              <p className="mt-4 text-red-500 text-center">Error: {error}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}