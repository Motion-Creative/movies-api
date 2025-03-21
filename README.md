# Movies API

A comprehensive REST API for accessing movie data with advanced features including classification, recommendations, and comparison.

## Features

- **Movie Data**: Access detailed information for numerous movies
- **Classification**: Get thematic and genre classifications
- **Summarization**: Generate concise movie summaries
- **Recommendations**: Receive personalized movie suggestions
- **Trend Analysis**: Analyze patterns across selected movies
- **Similarity Comparison**: Compare and explain how movies are related

## Getting Started

First, run the development server:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The API will be available at `http://localhost:3000/api/movies`.

## API Endpoints

### Basic Movie Operations

#### Get All Movies (Paginated)

```
GET /api/movies
```

Returns a paginated list of movies.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `pageSize` (optional): Number of results per page (default: 50, max: 100)

**Example Response:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "tagline": "Fear can hold you prisoner. Hope can set you free.",
      "overview": "Framed in the 1940s for the double murder of his wife and her lover...",
      "releaseDate": "1994-09-23",
      "posterPath": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "backdropPath": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      "runtime": 142,
      "budget": 25000000,
      "revenue": 28341469,
      "genres": ["Drama", "Crime"],
      "rating": 8.7,
      "voteCount": 23456,
      "director": "Frank Darabont",
      "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
      "language": "English"
    },
    // ... more movies
  ],
  "pagination": {
    "totalCount": 200,
    "totalPages": 4,
    "currentPage": 1,
    "pageSize": 50,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

#### Get Movie by ID

```
GET /api/movies/{id}
```

Returns details for a specific movie.

**Path Parameters:**
- `id` (required): Movie ID

**Example Response:**
```json
{
  "data": {
    "id": 1,
    "title": "The Shawshank Redemption",
    "tagline": "Fear can hold you prisoner. Hope can set you free.",
    "overview": "Framed in the 1940s for the double murder of his wife and her lover...",
    "releaseDate": "1994-09-23",
    "posterPath": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "backdropPath": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    "runtime": 142,
    "budget": 25000000,
    "revenue": 28341469,
    "genres": ["Drama", "Crime"],
    "rating": 8.7,
    "voteCount": 23456,
    "director": "Frank Darabont",
    "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    "language": "English"
  }
}
```

#### Search Movies by Title or Description

```
GET /api/movies/search
```

Returns movies that match the search query in title or description.

**Query Parameters:**
- `query` (required): Search term
- `page` (optional): Page number (default: 1)
- `pageSize` (optional): Number of results per page (default: 50, max: 100)

**Example Response:**
```json
{
  "data": [
    {
      "id": 10,
      "title": "The Matrix",
      "tagline": "Welcome to the real world.",
      "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker...",
      // ... other movie data
    }
  ],
  "pagination": {
    "totalCount": 1,
    "totalPages": 1,
    "currentPage": 1,
    "pageSize": 50,
    "hasNextPage": false,
    "hasPreviousPage": false
  }
}
```

#### Filter Movies by Genre

```
GET /api/movies/genre
```

Returns movies that match the specified genre.

**Query Parameters:**
- `genre` (required): Genre to filter by
- `page` (optional): Page number (default: 1)
- `pageSize` (optional): Number of results per page (default: 50, max: 100)

**Example Response:**
```json
{
  "data": [
    {
      "id": 3,
      "title": "The Dark Knight",
      "tagline": "Why so serious?",
      "overview": "Batman raises the stakes in his war on crime...",
      // ... other movie data
    },
    // ... more action movies
  ],
  "pagination": {
    "totalCount": 45,
    "totalPages": 1,
    "currentPage": 1,
    "pageSize": 50,
    "hasNextPage": false,
    "hasPreviousPage": false
  }
}
```

### Advanced Movie Operations

#### Get Top Movies with Analysis

```
GET /api/movies/top
```

Returns top-rated movies with optional summarization, classification, and trend analysis.

**Query Parameters:**
- `limit` (optional): Number of movies to return (default: 10, max: 50)
- `include` (optional): Comma-separated list of additional data to include (default: 'summary,classification')
  - Available options: `summary`, `classification`, `trends`

**Example Response:**
```json
{
  "data": [
    {
      "id": 1,
      "title": "The Shawshank Redemption",
      "rating": 8.7,
      "genres": ["Drama", "Crime"],
      "releaseDate": "1994-09-23",
      "director": "Frank Darabont",
      "summary": {
        "title": "The Shawshank Redemption",
        "summary": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne...",
        "keypoints": [
          "Directed by Frank Darabont",
          "142 minutes runtime",
          "Drama, Crime genres",
          "1994 release",
          "8.7/10 rating from 23456 votes"
        ],
        "yearReleased": 1994,
        "director": "Frank Darabont"
      },
      "classification": {
        "primaryGenre": "Drama",
        "secondaryGenres": ["Crime"],
        "themes": ["Redemption", "Friendship"],
        "mood": ["Inspiring", "Dark"],
        "targetAudience": "Broad appeal",
        "era": "Modern"
      }
    },
    // ... more movies
  ],
  "trends": {
    "commonGenres": [
      { "genre": "Drama", "count": 7 },
      { "genre": "Crime", "count": 4 }
    ],
    "averageRating": 8.51,
    "ratingDistribution": {
      "8": 7,
      "9": 3
    },
    "decadeDistribution": {
      "1990s": 4,
      "2000s": 3,
      "2010s": 2,
      "2020s": 1
    },
    "commonCast": [
      { "actor": "Morgan Freeman", "appearances": 2 },
      { "actor": "Leonardo DiCaprio", "appearances": 2 }
    ],
    "commonDirectors": [
      { "director": "Christopher Nolan", "movies": 3 },
      { "director": "Frank Darabont", "movies": 2 }
    ]
  }
}
```

#### Get Movie Recommendations

```
POST /api/movies/recommend
```

Returns personalized movie recommendations based on user preferences.

**Request Body:**
```json
{
  "favoriteGenres": ["Action", "Sci-Fi"],
  "favoriteTitles": ["The Matrix", "Inception"],
  "favoriteActors": ["Keanu Reeves", "Leonardo DiCaprio"],
  "preferredLanguage": "English",
  "minimumRating": 7.5,
  "releaseYearRange": [1990, 2023],
  "excludedGenres": ["Horror"],
  "maxRuntime": 180,
  "limit": 5
}
```

**Example Response:**
```json
{
  "data": [
    {
      "id": 6,
      "title": "Inception",
      "tagline": "Your mind is the scene of the crime.",
      "overview": "A thief who steals corporate secrets through the use of dream-sharing technology...",
      "releaseDate": "2010-07-15",
      "genres": ["Action", "Science Fiction", "Adventure"],
      "rating": 8.3,
      "director": "Christopher Nolan",
      "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
      "language": "English",
      // ... other movie data
    },
    // ... more recommended movies
  ],
  "meta": {
    "count": 5,
    "totalResults": 12,
    "appliedPreferences": {
      "favoriteGenres": ["Action", "Sci-Fi"],
      "favoriteTitles": ["The Matrix", "Inception"],
      "favoriteActors": ["Keanu Reeves", "Leonardo DiCaprio"],
      "preferredLanguage": "English",
      "minimumRating": 7.5,
      "releaseYearRange": [1990, 2023],
      "excludedGenres": ["Horror"],
      "maxRuntime": 180
    }
  }
}
```

#### Compare Two Movies

```
GET /api/movies/compare
```

Returns a comparison and similarity analysis between two movies.

**Query Parameters:**
- `movie1` (required): ID of first movie
- `movie2` (required): ID of second movie

**Example Response:**
```json
{
  "data": {
    "similarities": [
      "Both movies share the Science Fiction genre",
      "Both are directed by Christopher Nolan",
      "Share cast members: Michael Caine",
      "Similar audience ratings (8.3 and 8.3)"
    ],
    "differences": [
      "Release dates are 4 years apart (2010 and 2014)",
      "The movies have partially different genres: Inception (Action, Science Fiction, Adventure) vs Interstellar (Adventure, Drama, Science Fiction)"
    ],
    "similarityScore": 0.7
  },
  "meta": {
    "movie1Id": 6,
    "movie2Id": 9
  }
}
```

## Data Models

### Movie Object

```typescript
interface Movie {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  releaseDate: string;
  posterPath: string;
  backdropPath: string;
  runtime: number;
  budget: number;
  revenue: number;
  genres: string[];
  rating: number;
  voteCount: number;
  director: string;
  cast: string[];
  language: string;
  keywords?: string[];
  mood?: string[];
  similarMovies?: number[];
  themes?: string[];
  ageRating?: string;
  awards?: string[];
  criticScore?: number;
  audienceScore?: number;
  streamingPlatforms?: string[];
}
```

### Movie Themes

Available themes for classification:

```typescript
enum MovieTheme {
  COMING_OF_AGE = "Coming of Age",
  REDEMPTION = "Redemption",
  SURVIVAL = "Survival",
  REVENGE = "Revenge",
  LOVE = "Love",
  FAMILY = "Family",
  POWER = "Power",
  IDENTITY = "Identity",
  JUSTICE = "Justice",
  MORALITY = "Morality",
  TECHNOLOGY = "Technology",
  FRIENDSHIP = "Friendship",
  HEROISM = "Heroism"
}
```

### Movie Moods

Available moods for classification:

```typescript
enum MovieMood {
  DARK = "Dark",
  UPLIFTING = "Uplifting",
  TENSE = "Tense",
  FUNNY = "Funny",
  ROMANTIC = "Romantic",
  THRILLING = "Thrilling",
  NOSTALGIC = "Nostalgic",
  INSPIRING = "Inspiring",
  DISTURBING = "Disturbing",
  MELANCHOLIC = "Melancholic"
}
```

## Use Cases

### Building a Multi-step Movie Agent

This API is designed for creating intelligent movie agents with multi-step workflows. Here are some examples:

1. **Movie Analysis Workflow**:
   - Get top 10 rated movies
   - Summarize and classify each movie
   - Analyze trends across these movies
   - Generate insights about what makes a highly-rated movie

2. **Personalized Recommendation System**:
   - Collect user preferences (favorite genres, actors, etc.)
   - Get personalized recommendations
   - Compare recommended movies to explain their relationships
   - Present a curated selection with explanations

3. **Movie Exploration Agent**:
   - Start with a specific movie
   - Find similar movies based on theme/mood/director
   - Generate summaries for quick understanding
   - Build a movie discovery journey based on user feedback

4. **Content Classification Pipeline**:
   - Process multiple movies
   - Extract themes, moods and target audiences
   - Group movies into collections
   - Generate collection descriptions

## Error Handling

All endpoints follow a consistent error response format:

```json
{
  "error": "Error message describing what went wrong"
}
```

Common HTTP status codes:
- `200 OK`: Request succeeded
- `400 Bad Request`: Invalid parameters or request body
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server-side error

## Development

This project is built with Next.js API routes. To modify or extend:

```bash
# Clone the repository
git clone https://github.com/your-username/movies-api.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## License

MIT
