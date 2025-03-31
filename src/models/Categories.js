import mongoose from 'mongoose';

const categoriesSchema = new mongoose.Schema ({
    name: { type: String, required:true},
    slug: { type: String, required:true},
    description: { type: String, required:true},
});

export default mongoose.models.Categories || mongoose.model('Categories', categoriesSchema);