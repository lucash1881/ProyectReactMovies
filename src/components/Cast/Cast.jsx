import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieCredits } from 'services/api';
import { MovieCastContainer } from './Cast.styled';
import { MovieCastItem } from './Cast.styled';

import genericUserImage from './genericuser.png'; // Ruta de la imagen genérica

export const Cast = () => {
  const [movieCast, setMovieCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetMovieCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  const renderProfileImage = (profilePath) => {
    if (profilePath) {
      return `https://image.tmdb.org/t/p/w276_and_h350_face/${profilePath}`;
    } else {
      return genericUserImage; // Usar la imagen genérica si no hay foto disponible
    }
  };

  return (
    <MovieCastContainer>
      {movieCast.map(({ name, id, character, original_name, profile_path }) => (
        <MovieCastItem key={id}>
          <img src={renderProfileImage(profile_path)} alt={name} />
          <h3>{original_name}</h3>
          <p>Personaje: {character}</p>
        </MovieCastItem>
      ))}
    </MovieCastContainer>
  );
};
