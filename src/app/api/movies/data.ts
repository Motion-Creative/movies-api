export interface Movie {
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

export enum MovieTheme {
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

export enum MovieMood {
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

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    releaseDate: "1994-09-23",
    posterPath: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    backdropPath: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    runtime: 142,
    budget: 25000000,
    revenue: 28341469,
    genres: ["Drama", "Crime"],
    rating: 8.7,
    voteCount: 23456,
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    language: "English"
  },
  {
    id: 2,
    title: "The Godfather",
    tagline: "An offer you can't refuse.",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    releaseDate: "1972-03-14",
    posterPath: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdropPath: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    runtime: 175,
    budget: 6000000,
    revenue: 245066411,
    genres: ["Drama", "Crime"],
    rating: 8.7,
    voteCount: 18034,
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
    language: "English"
  },
  {
    id: 3,
    title: "The Dark Knight",
    tagline: "Why so serious?",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    releaseDate: "2008-07-16",
    posterPath: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
    backdropPath: "/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",
    runtime: 152,
    budget: 185000000,
    revenue: 1004558444,
    genres: ["Drama", "Action", "Crime", "Thriller"],
    rating: 8.5,
    voteCount: 29901,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    language: "English"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    tagline: "Just because you are a character doesn't mean you have character.",
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    releaseDate: "1994-09-10",
    posterPath: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdropPath: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg",
    runtime: 154,
    budget: 8000000,
    revenue: 213928762,
    genres: ["Thriller", "Crime"],
    rating: 8.5,
    voteCount: 24654,
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    language: "English"
  },
  {
    id: 5,
    title: "Schindler's List",
    tagline: "The true story of how one man saved 1100 lives.",
    overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    releaseDate: "1993-11-30",
    posterPath: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    backdropPath: "/loRmLlpsaAFIJhDSLmtVnvI3j6F.jpg",
    runtime: 195,
    budget: 22000000,
    revenue: 321365567,
    genres: ["Drama", "History", "War"],
    rating: 8.6,
    voteCount: 14324,
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall"],
    language: "English"
  },
  {
    id: 6,
    title: "Inception",
    tagline: "Your mind is the scene of the crime.",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseDate: "2010-07-15",
    posterPath: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    backdropPath: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    runtime: 148,
    budget: 160000000,
    revenue: 836836967,
    genres: ["Action", "Science Fiction", "Adventure"],
    rating: 8.3,
    voteCount: 32012,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    language: "English"
  },
  {
    id: 7,
    title: "Parasite",
    tagline: "Act like you own the place.",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    releaseDate: "2019-05-30",
    posterPath: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdropPath: "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    runtime: 132,
    budget: 11400000,
    revenue: 258670626,
    genres: ["Comedy", "Thriller", "Drama"],
    rating: 8.5,
    voteCount: 15721,
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    language: "Korean"
  },
  {
    id: 8,
    title: "The Lord of the Rings: The Return of the King",
    tagline: "The eye of the enemy is moving.",
    overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
    releaseDate: "2003-12-01",
    posterPath: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    backdropPath: "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg",
    runtime: 201,
    budget: 94000000,
    revenue: 1142456987,
    genres: ["Adventure", "Fantasy", "Action"],
    rating: 8.5,
    voteCount: 21108,
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Orlando Bloom"],
    language: "English"
  },
  {
    id: 9,
    title: "Interstellar",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    releaseDate: "2014-11-05",
    posterPath: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdropPath: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    runtime: 169,
    budget: 165000000,
    revenue: 701729206,
    genres: ["Adventure", "Drama", "Science Fiction"],
    rating: 8.3,
    voteCount: 29215,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    language: "English"
  },
  {
    id: 10,
    title: "The Matrix",
    tagline: "Welcome to the real world.",
    overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    releaseDate: "1999-03-30",
    posterPath: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdropPath: "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    runtime: 136,
    budget: 63000000,
    revenue: 463517383,
    genres: ["Action", "Science Fiction"],
    rating: 8.2,
    voteCount: 22631,
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
    language: "English"
  },
  {
    id: 11,
    title: "Spirited Away",
    tagline: "The tunnel led Chihiro to a mysterious town...",
    overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    releaseDate: "2001-07-20",
    posterPath: "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    backdropPath: "/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
    runtime: 125,
    budget: 19000000,
    revenue: 383397782,
    genres: ["Animation", "Family", "Fantasy"],
    rating: 8.5,
    voteCount: 13658,
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naitō"],
    language: "Japanese"
  },
  {
    id: 12,
    title: "Goodfellas",
    tagline: "Three Decades of Life in the Mafia.",
    overview: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    releaseDate: "1990-09-12",
    posterPath: "/6QMSLvU5ziIL2T6VrkaKzN2YkxK.jpg",
    backdropPath: "/sw7mordbZxgITU877yTpZCud90M.jpg",
    runtime: 145,
    budget: 25000000,
    revenue: 46836394,
    genres: ["Drama", "Crime"],
    rating: 8.5,
    voteCount: 10929,
    director: "Martin Scorsese",
    cast: ["Ray Liotta", "Robert De Niro", "Joe Pesci", "Lorraine Bracco"],
    language: "English"
  },
  {
    id: 13,
    title: "Whiplash",
    tagline: "The road to greatness can take you to the edge.",
    overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    releaseDate: "2014-10-10",
    posterPath: "/7fn624j5lj3xTme2SgiLCHfMkU6.jpg",
    backdropPath: "/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg",
    runtime: 105,
    budget: 3300000,
    revenue: 49000000,
    genres: ["Drama", "Music"],
    rating: 8.4,
    voteCount: 12950,
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist", "Paul Reiser"],
    language: "English"
  },
  {
    id: 14,
    title: "The Silence of the Lambs",
    tagline: "To enter the mind of a killer she must challenge the mind of a madman.",
    overview: "Clarice Starling, a young F.B.I. cadet, seeks the help of an imprisoned and manipulative cannibal killer to track down another serial murderer.",
    releaseDate: "1991-02-13",
    posterPath: "/qjAyTj2BSObY8K9g2QaZV4kUOQN.jpg",
    backdropPath: "/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
    runtime: 118,
    budget: 19000000,
    revenue: 272742922,
    genres: ["Crime", "Drama", "Thriller"],
    rating: 8.3,
    voteCount: 14082,
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine"],
    language: "English"
  },
  {
    id: 15,
    title: "Seven Samurai",
    tagline: "The Mighty Warriors Who Became the Seven National Heroes of a Small Town",
    overview: "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
    releaseDate: "1954-04-26",
    posterPath: "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
    backdropPath: "/sJNNMCc6B7KZIY3LH3JMYJJNH5j.jpg",
    runtime: 207,
    budget: 500000,
    revenue: 2800000,
    genres: ["Action", "Drama"],
    rating: 8.6,
    voteCount: 3176,
    director: "Akira Kurosawa",
    cast: ["Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima", "Isao Kimura"],
    language: "Japanese"
  },
  {
    id: 16,
    title: "City of God",
    tagline: "If you run you're dead... if you stay, you're dead again. Period.",
    overview: "Cidade de Deus is a shantytown that started during the 1960s and became one of Rio de Janeiro's most dangerous places in the beginning of the 1980s. To tell the story of this place, the movie describes the life of various characters, all seen by the point of view of the narrator, Buscapé.",
    releaseDate: "2002-05-18",
    posterPath: "/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
    backdropPath: "/1DNjMHcjLG8UX6NLMxGS6VMQNTF.jpg",
    runtime: 130,
    budget: 3300000,
    revenue: 30600000,
    genres: ["Drama", "Crime"],
    rating: 8.5,
    voteCount: 9340,
    director: "Fernando Meirelles",
    cast: ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen", "Douglas Silva"],
    language: "Portuguese"
  },
  {
    id: 17,
    title: "Life Is Beautiful",
    tagline: "An unforgettable fable that proves love, family and imagination conquer all.",
    overview: "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
    releaseDate: "1997-12-20",
    posterPath: "/f7DImXDebOs148U4uPjI61iDvaK.jpg",
    backdropPath: "/bORe0eI72D874TMawOOFvqWS6Xe.jpg",
    runtime: 116,
    budget: 20000000,
    revenue: 230700000,
    genres: ["Comedy", "Drama"],
    rating: 8.5,
    voteCount: 11615,
    director: "Roberto Benigni",
    cast: ["Roberto Benigni", "Nicoletta Braschi", "Giorgio Cantarini", "Giustino Durano"],
    language: "Italian"
  },
  {
    id: 18,
    title: "Gladiator",
    tagline: "A Hero Will Rise.",
    overview: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders and becomes a gladiator.",
    releaseDate: "2000-05-01",
    posterPath: "/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
    backdropPath: "/fayJD9HC5NB0t8eQNs4tYDduvRT.jpg",
    runtime: 155,
    budget: 103000000,
    revenue: 460583960,
    genres: ["Action", "Drama", "Adventure"],
    rating: 8.2,
    voteCount: 15612,
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed"],
    language: "English"
  },
  {
    id: 19,
    title: "The Green Mile",
    tagline: "Walk a mile you'll never forget.",
    overview: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    releaseDate: "1999-12-10",
    posterPath: "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    backdropPath: "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
    runtime: 189,
    budget: 60000000,
    revenue: 286801374,
    genres: ["Fantasy", "Drama", "Crime"],
    rating: 8.5,
    voteCount: 14999,
    director: "Frank Darabont",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse", "Bonnie Hunt"],
    language: "English"
  },
  {
    id: 20,
    title: "The Departed",
    tagline: "Cops or Criminals. When you're facing a loaded gun what's the difference?",
    overview: "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done the same. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    releaseDate: "2006-10-05",
    posterPath: "/nT97ifVT2J1yMQmeq2K9RGjXVCg.jpg",
    backdropPath: "/8Od5zV7Q7zNOX0y9tyNgpTmoiGA.jpg",
    runtime: 151,
    budget: 90000000,
    revenue: 291465034,
    genres: ["Drama", "Thriller", "Crime"],
    rating: 8.2,
    voteCount: 12958,
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson", "Mark Wahlberg"],
    language: "English"
  },
  {
    id: 21,
    title: "Dune: Part Two",
    tagline: "Long live the fighters.",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    releaseDate: "2024-02-28",
    posterPath: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    backdropPath: "/e3SfKu4cUQKcg1inGYe26hWZDQb.jpg",
    runtime: 166,
    budget: 190000000,
    revenue: 711828700,
    genres: ["Science Fiction", "Adventure"],
    rating: 8.4,
    voteCount: 3529,
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    language: "English"
  },
  {
    id: 22,
    title: "Oppenheimer",
    tagline: "The world forever changes.",
    overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    releaseDate: "2023-07-19",
    posterPath: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdropPath: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    runtime: 181,
    budget: 100000000,
    revenue: 976000000,
    genres: ["Drama", "History", "Thriller"],
    rating: 8.1,
    voteCount: 6721,
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    language: "English"
  },
  {
    id: 23,
    title: "The Prestige",
    tagline: "Are you watching closely?",
    overview: "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
    releaseDate: "2006-10-19",
    posterPath: "/5MlvT4DZIdkpb7A9t375HVoiJ1v.jpg",
    backdropPath: "/nboT8ZbMxnRTAK29WO7S6GXj3Lj.jpg",
    runtime: 130,
    budget: 40000000,
    revenue: 109676311,
    genres: ["Drama", "Mystery", "Thriller"],
    rating: 8.2,
    voteCount: 13978,
    director: "Christopher Nolan",
    cast: ["Hugh Jackman", "Christian Bale", "Michael Caine", "Scarlett Johansson"],
    language: "English"
  },
  {
    id: 24,
    title: "The Lion King",
    tagline: "Life's greatest adventure is finding your place in the Circle of Life.",
    overview: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
    releaseDate: "1994-06-23",
    posterPath: "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    backdropPath: "/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
    runtime: 88,
    budget: 45000000,
    revenue: 968511805,
    genres: ["Animation", "Family", "Drama"],
    rating: 8.3,
    voteCount: 15473,
    director: "Roger Allers",
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Moira Kelly"],
    language: "English"
  },
  {
    id: 25,
    title: "Casablanca",
    tagline: "They had a date with fate in Casablanca!",
    overview: "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
    releaseDate: "1942-11-26",
    posterPath: "/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    backdropPath: "/wOfzdzC0QZFxjUKcmhJsUVpzkrJ.jpg",
    runtime: 102,
    budget: 950000,
    revenue: 3700000,
    genres: ["Romance", "Drama", "War"],
    rating: 8.2,
    voteCount: 5112,
    director: "Michael Curtiz",
    cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid", "Claude Rains"],
    language: "English"
  },
];

export function getAllMovies(): Movie[] {
  return movies;
}

export function getMovieById(id: number): Movie | undefined {
  return movies.find(movie => movie.id === id);
}

export function getPaginatedMovies(page: number = 1, pageSize: number = 50): {
  movies: Movie[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
} {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedMovies = movies.slice(startIndex, endIndex);

  return {
    movies: paginatedMovies,
    totalCount: movies.length,
    totalPages: Math.ceil(movies.length / pageSize),
    currentPage: page,
    pageSize
  };
}

export function generateMovieSummary(movieId: number): { 
  title: string; 
  summary: string; 
  keypoints: string[];
  yearReleased: number;
  director: string;
} | undefined {
  const movie = getMovieById(movieId);
  if (!movie) return undefined;
  
  const year = new Date(movie.releaseDate).getFullYear();
  
  const summary = movie.overview.length > 100 
    ? `${movie.overview.substring(0, 100)}...` 
    : movie.overview;
  
  const keypoints = [
    `Directed by ${movie.director}`,
    `${movie.runtime} minutes runtime`,
    `${movie.genres.join(", ")} genres`,
    `${year} release`,
    `${movie.rating}/10 rating from ${movie.voteCount} votes`
  ];
  
  return {
    title: movie.title,
    summary,
    keypoints,
    yearReleased: year,
    director: movie.director
  };
}

export function classifyMovie(movieId: number): {
  primaryGenre: string;
  secondaryGenres: string[];
  themes: string[];
  mood: string[];
  targetAudience: string;
  era: string;
} | undefined {
  const movie = getMovieById(movieId);
  if (!movie) return undefined;
  
  const year = new Date(movie.releaseDate).getFullYear();
  let era = "";
  
  if (year < 1950) era = "Classic";
  else if (year < 1980) era = "New Hollywood";
  else if (year < 2000) era = "Modern";
  else if (year < 2010) era = "Early Digital";
  else era = "Contemporary";
  
  const mood = [];
  if (movie.genres.includes("Horror") || movie.genres.includes("Thriller")) mood.push(MovieMood.TENSE, MovieMood.DARK);
  if (movie.genres.includes("Comedy")) mood.push(MovieMood.FUNNY);
  if (movie.genres.includes("Romance")) mood.push(MovieMood.ROMANTIC);
  if (movie.genres.includes("Drama") && movie.rating > 8) mood.push(MovieMood.INSPIRING);
  if (movie.genres.includes("Action")) mood.push(MovieMood.THRILLING);
  
  const themes = [];
  const overview = movie.overview.toLowerCase();
  
  if (overview.includes("family") || overview.includes("father") || overview.includes("mother") || overview.includes("son") || overview.includes("daughter")) 
    themes.push(MovieTheme.FAMILY);
  if (overview.includes("love") || overview.includes("relationship")) 
    themes.push(MovieTheme.LOVE);
  if (overview.includes("crime") || overview.includes("law") || overview.includes("police")) 
    themes.push(MovieTheme.JUSTICE);
  if (overview.includes("death") || overview.includes("kill") || overview.includes("murder")) 
    themes.push(MovieTheme.SURVIVAL);
  if (overview.includes("hero") || overview.includes("save")) 
    themes.push(MovieTheme.HEROISM);
  
  if (themes.length === 0) themes.push(MovieTheme.IDENTITY);
  
  return {
    primaryGenre: movie.genres[0] || "Unknown",
    secondaryGenres: movie.genres.slice(1),
    themes,
    mood,
    targetAudience: movie.rating > 8.5 ? "Broad appeal" : "Genre enthusiasts",
    era
  };
}

export function getRecommendedMovies(preferences: {
  favoriteGenres?: string[];
  favoriteTitles?: string[];
  favoriteActors?: string[];
  preferredLanguage?: string;
  minimumRating?: number;
  releaseYearRange?: [number, number];
  excludedGenres?: string[];
  maxRuntime?: number;
}): Movie[] {
  const allMovies = getAllMovies();
  
  let filteredMovies = allMovies;
  
  if (preferences.favoriteGenres && preferences.favoriteGenres.length > 0) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.genres.some(genre => preferences.favoriteGenres?.includes(genre))
    );
  }
  
  if (preferences.favoriteTitles && preferences.favoriteTitles.length > 0) {
    const favoriteMovieIds = filteredMovies
      .filter(movie => preferences.favoriteTitles?.includes(movie.title))
      .map(movie => movie.id);
    
    if (favoriteMovieIds.length > 0) {
      const favoriteMovies = favoriteMovieIds.map(id => getMovieById(id)).filter(m => m) as Movie[];
      const favoriteGenres = [...new Set(favoriteMovies.flatMap(m => m.genres))];
      
      filteredMovies = filteredMovies.filter(movie => 
        favoriteGenres.some(genre => movie.genres.includes(genre)) || 
        favoriteMovieIds.includes(movie.id)
      );
    }
  }
  
  if (preferences.favoriteActors && preferences.favoriteActors.length > 0) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.cast.some(actor => preferences.favoriteActors?.includes(actor))
    );
  }
  
  if (preferences.preferredLanguage) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.language === preferences.preferredLanguage
    );
  }
  
  if (preferences.minimumRating) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.rating >= (preferences.minimumRating || 0)
    );
  }
  
  if (preferences.releaseYearRange) {
    const [minYear, maxYear] = preferences.releaseYearRange;
    filteredMovies = filteredMovies.filter(movie => {
      const year = new Date(movie.releaseDate).getFullYear();
      return year >= minYear && year <= maxYear;
    });
  }
  
  if (preferences.excludedGenres && preferences.excludedGenres.length > 0) {
    filteredMovies = filteredMovies.filter(movie => 
      !movie.genres.some(genre => preferences.excludedGenres?.includes(genre))
    );
  }
  
  if (preferences.maxRuntime) {
    filteredMovies = filteredMovies.filter(movie => 
      movie.runtime <= (preferences.maxRuntime || Infinity)
    );
  }
  
  return filteredMovies.sort((a, b) => b.rating - a.rating);
}

export function analyzeMovieTrends(movieIds: number[]): {
  commonGenres: { genre: string; count: number }[];
  averageRating: number;
  ratingDistribution: { [key: string]: number };
  decadeDistribution: { [key: string]: number };
  commonCast: { actor: string; appearances: number }[];
  commonDirectors: { director: string; movies: number }[];
} {
  const movies = movieIds.map(id => getMovieById(id)).filter(m => m) as Movie[];
  
  if (movies.length === 0) {
    return {
      commonGenres: [],
      averageRating: 0,
      ratingDistribution: {},
      decadeDistribution: {},
      commonCast: [],
      commonDirectors: []
    };
  }
  
  const genreCounts: Record<string, number> = {};
  movies.forEach(movie => {
    movie.genres.forEach(genre => {
      genreCounts[genre] = (genreCounts[genre] || 0) + 1;
    });
  });
  
  const commonGenres = Object.entries(genreCounts)
    .map(([genre, count]) => ({ genre, count }))
    .sort((a, b) => b.count - a.count);
  
  const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);
  const averageRating = movies.length > 0 ? totalRating / movies.length : 0;
  
  const ratingDistribution: Record<string, number> = {};
  movies.forEach(movie => {
    const ratingKey = Math.floor(movie.rating).toString();
    ratingDistribution[ratingKey] = (ratingDistribution[ratingKey] || 0) + 1;
  });
  
  const decadeDistribution: Record<string, number> = {};
  movies.forEach(movie => {
    const year = new Date(movie.releaseDate).getFullYear();
    const decade = `${Math.floor(year / 10) * 10}s`;
    decadeDistribution[decade] = (decadeDistribution[decade] || 0) + 1;
  });
  
  const castCounts: Record<string, number> = {};
  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      castCounts[actor] = (castCounts[actor] || 0) + 1;
    });
  });
  
  const commonCast = Object.entries(castCounts)
    .map(([actor, appearances]) => ({ actor, appearances }))
    .sort((a, b) => b.appearances - a.appearances)
    .slice(0, 10);
  
  const directorCounts: Record<string, number> = {};
  movies.forEach(movie => {
    directorCounts[movie.director] = (directorCounts[movie.director] || 0) + 1;
  });
  
  const commonDirectors = Object.entries(directorCounts)
    .map(([director, movies]) => ({ director, movies }))
    .sort((a, b) => b.movies - a.movies)
    .slice(0, 5);
  
  return {
    commonGenres,
    averageRating,
    ratingDistribution,
    decadeDistribution,
    commonCast,
    commonDirectors
  };
}

export function explainMovieSimilarity(movieId1: number, movieId2: number): {
  similarities: string[];
  differences: string[];
  similarityScore: number;
} | undefined {
  const movie1 = getMovieById(movieId1);
  const movie2 = getMovieById(movieId2);
  
  if (!movie1 || !movie2) return undefined;
  
  const similarities: string[] = [];
  const differences: string[] = [];
  
  const commonGenres = movie1.genres.filter(genre => movie2.genres.includes(genre));
  if (commonGenres.length > 0) {
    similarities.push(`Both movies share the ${commonGenres.join(", ")} genre${commonGenres.length > 1 ? 's' : ''}`);
  } else {
    differences.push(`The movies have completely different genres: ${movie1.title} (${movie1.genres.join(", ")}) vs ${movie2.title} (${movie2.genres.join(", ")})`);
  }
  
  if (movie1.director === movie2.director) {
    similarities.push(`Both directed by ${movie1.director}`);
  } else {
    differences.push(`Directed by different filmmakers: ${movie1.director} vs ${movie2.director}`);
  }
  
  const commonCast = movie1.cast.filter(actor => movie2.cast.includes(actor));
  if (commonCast.length > 0) {
    similarities.push(`Share cast members: ${commonCast.join(", ")}`);
  } else {
    differences.push("Have completely different casts");
  }
  
  const year1 = new Date(movie1.releaseDate).getFullYear();
  const year2 = new Date(movie2.releaseDate).getFullYear();
  const yearDiff = Math.abs(year1 - year2);
  
  if (yearDiff < 5) {
    similarities.push(`Released in close proximity (${year1} and ${year2})`);
  } else {
    differences.push(`Released ${yearDiff} years apart (${year1} and ${year2})`);
  }
  
  const ratingDiff = Math.abs(movie1.rating - movie2.rating);
  if (ratingDiff < 0.5) {
    similarities.push(`Similar audience ratings (${movie1.rating} and ${movie2.rating})`);
  } else if (ratingDiff > 2) {
    differences.push(`Significant rating difference: ${movie1.title} (${movie1.rating}) vs ${movie2.title} (${movie2.rating})`);
  }
  
  let similarityScore = 0;
  similarityScore += commonGenres.length * 0.2;
  similarityScore += (movie1.director === movie2.director ? 0.2 : 0);
  similarityScore += commonCast.length * 0.1;
  similarityScore += (yearDiff < 5 ? 0.1 : 0);
  similarityScore += (ratingDiff < 1 ? 0.1 : 0);
  
  similarityScore = Math.min(similarityScore, 1.0);
  
  return {
    similarities,
    differences,
    similarityScore
  };
} 