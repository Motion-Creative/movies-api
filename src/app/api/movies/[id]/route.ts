import { NextRequest, NextResponse } from 'next/server';
import { getMovieById } from '../data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  
  if (isNaN(id)) {
    return NextResponse.json(
      { error: 'Invalid movie ID. Please provide a valid numeric ID.' },
      { status: 400 }
    );
  }

  const movie = getMovieById(id);
  
  if (!movie) {
    return NextResponse.json(
      { error: `Movie with ID ${id} not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: movie });
} 