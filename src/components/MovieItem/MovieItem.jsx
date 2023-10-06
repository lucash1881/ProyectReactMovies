import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { MovieItemContainer, MovieItemImage, MovieItemTitle } from './MovieItem.styled';

const MovieItem = ({ movie, showTitle }) => {
  const location = useLocation();

  return (
    <MovieItemContainer>
      <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <MovieItemImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        {showTitle && <MovieItemTitle>{movie.title}</MovieItemTitle>}
      </NavLink>
    </MovieItemContainer>
  );
};

export default MovieItem;
