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

## Use Cases

### Building a Multi-step Movie Agent

This API is designed for creating intelligent movie agents with multi-step workflows. Here are some examples:

1. **Movie Analysis Workflow**:
   - Get top 10 rated movies
   - Summarize and classify each movie
   - Analyze trends across these movies
   - Generate insights about what makes a highly-rated movie
