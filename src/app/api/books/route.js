import { NextResponse } from 'next/server';
import { books } from '../db.js';   // one level up from books/ to api/

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request) {
  const book = await request.json();
  books.push(book);
  return NextResponse.json(books);
}