import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export async function POST(request) {
  try {
    await dbConnect();
    const formData = await request.formData();

    // Convert formData to an object
    const data = {};
    for (const [key, value] of formData.entries()) {
      if (key === 'seo') {
        data.seo = JSON.parse(value);
      } else if (key.startsWith('galleryImages')) {
        const match = key.match(/galleryImages\[(\d+)\]\[(\w+)\]/);
        if (match) {
          const index = parseInt(match[1], 10);
          const field = match[2];
          if (!data.galleryImages) data.galleryImages = [];
          if (!data.galleryImages[index]) data.galleryImages[index] = {};
          data.galleryImages[index][field === 'file' ? 'url' : field] = value;
        }
      } else {
        data[key] = value;
      }
    }

    // Convert tags and metaKeywords to arrays if they are strings
    if (typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    }
    if (typeof data.seo?.metaKeywords === 'string') {
      data.seo.metaKeywords = data.seo.metaKeywords.split(',').map(keyword => keyword.trim()).filter(keyword => keyword);
    }

    // Convert numeric fields
    data.buyingPrice = parseFloat(data.buyingPrice);
    data.regularPrice = parseFloat(data.regularPrice);
    data.salePrice = parseFloat(data.salePrice);
    data.quantity = parseInt(data.quantity, 10);

    // Handle file uploads (for simplicity, store file names; in production, use a file storage service)
    if (data.featureImage) {
      data.featureImage = `/uploads/${data.featureImage}`; // Placeholder path
    }
    if (data.longDescriptionImage) {
      data.longDescriptionImage = `/uploads/${data.longDescriptionImage}`; // Placeholder path
    }
    if (data.galleryImages) {
      data.galleryImages = data.galleryImages.map((img, index) => ({
        url: img.url ? `/uploads/gallery-${index}-${img.url}` : '',
        alt: img.alt || '',
      }));
    }

    const product = await Product.create(data);
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({}).populate('category');
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}