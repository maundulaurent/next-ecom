import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Categories', 
    required: true 
  },
  brand: { type: String, required: true }, // Static text field
  status: { type: String, required: true, enum: ['active', 'draft', 'out-of-stock'] },
  featured: { type: String, required: true, enum: ['yes', 'no'] },
  subStatus: { type: String, required: true, enum: ['new', 'sale', 'trending'] },
  buyingPrice: { type: Number, required: true },
  regularPrice: { type: Number, required: true },
  salePrice: { type: Number, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true },
  tags: { type: [String], default: [] }, // Array of tags
  youtubeVideo: { type: String, required: false },
  featureImage: { type: String, required: false }, // Store URL or path to the image
  featureImageAlt: { type: String, required: false },
  galleryImages: [{ url: String, alt: String }], // Array of objects for gallery images
  longDescriptionImage: { type: String, required: false },
  longDescriptionImageAlt: { type: String, required: false },
  slug: { type: String, required: false },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  seo: {
    pageTitle: { type: String, required: false },
    metaKeywords: { type: [String], default: [] }, // Array of keywords
    metaDescription: { type: String, required: false },
  },
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);