import { NextRequest, NextResponse } from 'next/server';
import { getRecommendedMovies } from '../data';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body. Expected an object with user preferences.' },
        { status: 400 }
      );
    }

    // Define the preferences type to match the expected input for getRecommendedMovies
    type MoviePreferences = {
      favoriteGenres?: string[];
      favoriteTitles?: string[];
      favoriteActors?: string[];
      preferredLanguage?: string;
      minimumRating?: number;
      releaseYearRange?: [number, number];
      excludedGenres?: string[];
      maxRuntime?: number;
    };

    // Extract preferences with proper validation
    const preferences: MoviePreferences = {
      favoriteGenres: Array.isArray(body.favoriteGenres) ? body.favoriteGenres : undefined,
      favoriteTitles: Array.isArray(body.favoriteTitles) ? body.favoriteTitles : undefined,
      favoriteActors: Array.isArray(body.favoriteActors) ? body.favoriteActors : undefined,
      preferredLanguage: typeof body.preferredLanguage === 'string' ? body.preferredLanguage : undefined,
      minimumRating: typeof body.minimumRating === 'number' ? body.minimumRating : undefined,
      maxRuntime: typeof body.maxRuntime === 'number' ? body.maxRuntime : undefined,
      excludedGenres: Array.isArray(body.excludedGenres) ? body.excludedGenres : undefined
    };

    // Check if release year range is valid
    if (Array.isArray(body.releaseYearRange) && 
        body.releaseYearRange.length === 2 && 
        typeof body.releaseYearRange[0] === 'number' && 
        typeof body.releaseYearRange[1] === 'number') {
      preferences.releaseYearRange = body.releaseYearRange as [number, number];
    }

    // Get limit parameter (default to 10, max 50)
    let limit = 10;
    if (typeof body.limit === 'number' && body.limit > 0) {
      limit = Math.min(body.limit, 50);
    }

    // Get recommendations based on preferences
    const recommendations = getRecommendedMovies(preferences);
    
    // Apply limit to results
    const limitedRecommendations = recommendations.slice(0, limit);

    return NextResponse.json({
      data: limitedRecommendations,
      meta: {
        count: limitedRecommendations.length,
        totalResults: recommendations.length,
        appliedPreferences: preferences
      }
    });
  } catch (error) {
    console.error('Error processing recommendation request:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}

// Provide documentation for the API via the OPTIONS method
export async function OPTIONS() {
  return NextResponse.json({
    description: "Movie recommendation API that suggests movies based on user preferences",
    methods: ["POST"],
    requestFormat: {
      favoriteGenres: ["string array - genres the user likes"],
      favoriteTitles: ["string array - titles of movies the user likes"],
      favoriteActors: ["string array - actors the user likes"],
      preferredLanguage: "string - preferred movie language",
      minimumRating: "number - minimum rating threshold",
      releaseYearRange: "[number, number] - range of years to include",
      excludedGenres: ["string array - genres the user dislikes"],
      maxRuntime: "number - maximum runtime in minutes",
      limit: "number - maximum number of recommendations to return (default: 10, max: 50)"
    },
    responseFormat: {
      data: "array of recommended movies",
      meta: {
        count: "number of returned recommendations",
        totalResults: "total number of matching movies before limit",
        appliedPreferences: "preferences used for the recommendations"
      }
    }
  });
} 