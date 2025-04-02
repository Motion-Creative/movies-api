import { NextRequest, NextResponse } from 'next/server';
import { getMovieById } from '../data';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const idNum = parseInt(id, 10);
  
  if (isNaN(idNum)) {
    return NextResponse.json(
      { error: 'Invalid movie ID. Please provide a valid numeric ID.' },
      { status: 400 }
    );
  }

  const movie = getMovieById(idNum);
  
  if (!movie) {
    return NextResponse.json(
      { error: `Movie with ID ${idNum} not found.` },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: movie });
} 