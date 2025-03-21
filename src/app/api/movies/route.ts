import { NextRequest, NextResponse } from 'next/server';
import { getPaginatedMovies, getMovieById } from './data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  
  // If id is provided, return a single movie
  if (id) {
    const movieId = parseInt(id, 10);
    if (isNaN(movieId)) {
      return NextResponse.json(
        { error: 'Invalid movie ID. Please provide a valid numeric ID.' },
        { status: 400 }
      );
    }

    const movie = getMovieById(movieId);
    if (!movie) {
      return NextResponse.json(
        { error: `Movie with ID ${movieId} not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: movie });
  }

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

  // Return the response with proper pagination metadata
  return NextResponse.json({
    data: result.movies,
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