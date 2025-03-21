import { NextRequest, NextResponse } from 'next/server';
import { getAllMovies, generateMovieSummary, classifyMovie, analyzeMovieTrends } from '../data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limitParam = searchParams.get('limit') || '10';
  const includeParam = searchParams.get('include') || 'summary,classification';
  
  // Parse limit parameter
  let limit = 10;
  try {
    limit = Math.min(Math.max(parseInt(limitParam, 10), 1), 50);
  } catch {
    return NextResponse.json(
      { error: 'Invalid limit parameter. Must be a number between 1 and 50.' },
      { status: 400 }
    );
  }
  
  // Parse include parameter to determine what to include in the response
  const includes = includeParam.split(',').map(i => i.trim().toLowerCase());
  const includeSummary = includes.includes('summary');
  const includeClassification = includes.includes('classification');
  const includeTrends = includes.includes('trends');
  
  // Get all movies and sort by rating
  const allMovies = getAllMovies();
  const topMovies = [...allMovies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
  
  // Prepare response data
  const movieIds = topMovies.map(movie => movie.id);
  
  interface MovieResponse {
    id: number;
    title: string;
    rating: number;
    genres: string[];
    releaseDate: string;
    director: string;
    summary?: ReturnType<typeof generateMovieSummary>;
    classification?: ReturnType<typeof classifyMovie>;
  }
  
  interface ApiResponse {
    data: MovieResponse[];
    trends?: ReturnType<typeof analyzeMovieTrends>;
  }
  
  const result: ApiResponse = {
    data: topMovies.map(movie => {
      const movieData: MovieResponse = {
        id: movie.id,
        title: movie.title,
        rating: movie.rating,
        genres: movie.genres,
        releaseDate: movie.releaseDate,
        director: movie.director
      };
      
      // Include summary if requested
      if (includeSummary) {
        movieData.summary = generateMovieSummary(movie.id);
      }
      
      // Include classification if requested
      if (includeClassification) {
        movieData.classification = classifyMovie(movie.id);
      }
      
      return movieData;
    })
  };
  
  // Include trend analysis if requested
  if (includeTrends) {
    result.trends = analyzeMovieTrends(movieIds);
  }
  
  return NextResponse.json(result);
} 