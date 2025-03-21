import { NextRequest, NextResponse } from 'next/server';
import { Movie, getAllMovies } from '../data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryParam = searchParams.get('query');
  
  if (!queryParam || queryParam.trim().length === 0) {
    return NextResponse.json(
      { error: 'Search query parameter is required' },
      { status: 400 }
    );
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

  // Search movies by title (case insensitive)
  const searchQuery = queryParam.toLowerCase();
  const allMovies = getAllMovies();
  const filteredMovies = allMovies.filter((movie: Movie) => 
    movie.title.toLowerCase().includes(searchQuery) ||
    movie.overview.toLowerCase().includes(searchQuery)
  );

  const totalCount = filteredMovies.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  
  // Validate that the requested page exists
  if (page > totalPages && totalCount > 0) {
    return NextResponse.json(
      { error: `Page ${page} does not exist. Total pages available: ${totalPages}` },
      { status: 400 }
    );
  }

  // Get paginated results
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  // Return the response with proper pagination metadata
  return NextResponse.json({
    data: paginatedMovies,
    pagination: {
      totalCount,
      totalPages,
      currentPage: page,
      pageSize,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }
  });
} 