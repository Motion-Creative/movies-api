import { NextRequest, NextResponse } from 'next/server';
import { getPaginatedMovies } from './data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  // Handle pagination
  const pageParam = searchParams.get('page');
  const pageSizeParam = searchParams.get('pageSize');

  let page = 1;
  let pageSize = 50;

  // Parse and validate page parameter
  if (pageParam) {
    const parsedPage = parseInt(pageParam, 10);
    if (!isNaN(parsedPage) && parsedPage > 0) {
      page = parsedPage;
    } else {
      return NextResponse.json(
        { error: 'Invalid page parameter. Page must be a positive integer.' },
        { status: 400 }
      );
    }
  }

  // Parse and validate pageSize parameter
  if (pageSizeParam) {
    const parsedPageSize = parseInt(pageSizeParam, 10);
    if (!isNaN(parsedPageSize) && parsedPageSize > 0 && parsedPageSize <= 100) {
      pageSize = parsedPageSize;
    } else {
      return NextResponse.json(
        { error: 'Invalid pageSize parameter. Page size must be between 1 and 100.' },
        { status: 400 }
      );
    }
  }

  // Get paginated movies
  const result = getPaginatedMovies(page, pageSize);

  // Create a new array of movies without overview field
  const moviesWithoutSummary = result.movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    tagline: movie.tagline,
    releaseDate: movie.releaseDate,
    posterPath: movie.posterPath,
    backdropPath: movie.backdropPath,
    runtime: movie.runtime,
    budget: movie.budget,
    revenue: movie.revenue,
    rating: movie.rating,
    voteCount: movie.voteCount,
    director: movie.director,
    cast: movie.cast,
    language: movie.language,
  }));

  // Return the response with proper pagination metadata
  return NextResponse.json({
    data: moviesWithoutSummary,
    pagination: {
      totalCount: result.totalCount,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
      pageSize: result.pageSize,
      hasNextPage: result.currentPage < result.totalPages,
      hasPreviousPage: result.currentPage > 1
    }
  });
} 