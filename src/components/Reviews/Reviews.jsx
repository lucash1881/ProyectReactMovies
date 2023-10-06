import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetMovieReviews } from 'services/api';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fetchGetMovieReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  return (
    <>
      {movieReviews.map(({ content, id }) => (
        <div key={id}>
          <p>{content}</p>
        </div>
      ))}
      {movieReviews?.length === 0 && (
        <p>No tenemos reseñas en la Base de Datos actualmente.</p>
      )}
    </>
  );
};
