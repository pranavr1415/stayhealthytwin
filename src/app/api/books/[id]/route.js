import { NextResponse } from 'next/server';
import { books } from '../../db.js';   // two levels up: [id] → books → api

// GET /api/books/:id
export async function GET(request, { params }) {
  const { id } = await params;
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  return NextResponse.json(book);
}

// DELETE /api/books/:id
export async function DELETE(request, { params }) {
  const { id } = await params;
  const index = books.findIndex((b) => b.id === Number(id));

  if (index === -1) {
    return NextResponse.json({ error: "Book not found" }, { status: 404 });
  }

  const [deletedBook] = books.splice(index, 1);

  return NextResponse.json(
    { message: "Book deleted successfully", book: deletedBook },
    { status: 200 }
  );
}