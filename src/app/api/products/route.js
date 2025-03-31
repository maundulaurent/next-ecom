import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const product = await Product.create(data);
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}