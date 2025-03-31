import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Categories', 
    required: true 
  }, // Reference to Category
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);