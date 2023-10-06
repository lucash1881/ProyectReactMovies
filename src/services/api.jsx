import axios from 'axios';

const API_KEY = '7c6fd8749a895e54de80e32ef54deace';

export const fetchTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=es-ES`
  );
  return response.data.results;
};

export const fetchSearchMovies = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
};

export const fetchGetMovieDetails = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES`
  );
  return response.data;
};

export const fetchGetMovieCredits = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=es-ES`
  );
  return response.data.cast;
};

export const fetchGetMovieReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=es-ES&page=1`
  );
  return response.data.results;
};

export const fetchTopRated = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`
  );
  return response.data.results;
};

export const fetchNewMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
  );
  return response.data.results;
};

export const fetchMovieTrailer = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=es-ES`
  );
  return response.data.results;
};

export const fetchSearchByGenre = async (genreId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
  );
  return response.data.results;
};

export const fetchGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es-ES`
  );
  return response.data.genres;
};

export const fetchGenreById = async (genreId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/${genreId}?api_key=${API_KEY}&language=es-ES`
  );
  return response.data;
};

export const fetchSearchByDirector = async (director) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=es-ES&query=${director}&include_adult=false`
  );
  const directorId = response.data.results[0]?.id;

  if (!directorId) {
    return [];
  }

  const moviesResponse = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=${directorId}`
  );

  return moviesResponse.data.results;
};

export const fetchMoviesByTitle = async (title) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${title}&page=1&include_adult=false`
  );
  return response.data.results;
};

export const fetchActorMovies = async (actorId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}&language=es-ES`
  );
  return response.data.cast;
};

export const fetchActors = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=es-ES&page=1`
  );
  return response.data.results;
};

export const fetchPopularActors = async (setActors) => {
  try {
    const actorsData = await fetchActors();
    setActors(actorsData);
  } catch (error) {
    console.error('Error fetching actors:', error);
  }
};
export const fetchActorsByName = async (name) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&language=es-ES&query=${name}&include_adult=false`
  );
  return response.data.results;
};
export const fetchActorDetails = async (actorId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=es-ES`
  );
  return response.data;
};
