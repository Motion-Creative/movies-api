import { NextRequest, NextResponse } from 'next/server';
import { explainMovieSimilarity } from '../data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const movie1Param = searchParams.get('movie1');
  const movie2Param = searchParams.get('movie2');
  
  // Validate movie IDs
  if (!movie1Param || !movie2Param) {
    return NextResponse.json(
      { error: 'Both movie1 and movie2 parameters are required.' },
      { status: 400 }
    );
  }
  
  // Parse movie IDs
  let movie1Id: number;
  let movie2Id: number;
  
  try {
    movie1Id = parseInt(movie1Param, 10);
    movie2Id = parseInt(movie2Param, 10);
    
    if (isNaN(movie1Id) || isNaN(movie2Id)) {
      throw new Error('Invalid movie ID');
    }
  } catch {
    return NextResponse.json(
      { error: 'Invalid movie IDs. Please provide valid numeric IDs.' },
      { status: 400 }
    );
  }
  
  // Get similarity analysis
  const similarityAnalysis = explainMovieSimilarity(movie1Id, movie2Id);
  
  if (!similarityAnalysis) {
    return NextResponse.json(
      { error: 'One or both movies not found.' },
      { status: 404 }
    );
  }
  
  // Return the similarity analysis
  return NextResponse.json({
    data: similarityAnalysis,
    meta: {
      movie1Id,
      movie2Id
    }
  });
} 