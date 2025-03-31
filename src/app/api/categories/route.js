import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Categories from "@/models/Categories";

export async function POST(request) {
    try {
      await dbConnect();
      const data = await request.json();
      const category = await Categories.create(data);
      return NextResponse.json(category);
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

export async function GET() {
  try {
    await dbConnect();
    const categories = await Categories.find({});
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}