import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchActorDetails, fetchActorMovies } from 'services/api';
import MovieItem from '../MovieItem/MovieItem';
import {
  ActorDetailContainer,
  ActorDetailHeader,
  ActorDetailBackLink,
  ActorDetailImage,
  ActorDetailInfo,
  ActorDetailName,
  ActorDetailBirthday,
  ActorDetailBiography,
  ActorDetailMovies,
  ActorDetailMoviesTitle,
  ActorDetailMoviesCarousel,
  ActorDetailMovieItem,
} from './ActorDetail.styled';

export const ActorDetail = () => {
  const { actorId } = useParams();
  const [actorDetails, setActorDetails] = useState({});
  const [actorMovies, setActorMovies] = useState([]);
  const carouselRef = useRef(null);
  const location = useLocation();

  // Variable para almacenar la URL anterior
  const previousUrl = useRef(location.state?.from || '/');

  useEffect(() => {
    // Función asincrónica para obtener los detalles del actor y sus películas
    const fetchData = async () => {
      try {
        // Obtener los detalles del actor por su ID
        const actorDetailsData = await fetchActorDetails(actorId);
        setActorDetails(actorDetailsData);

        // Obtener las películas en las que el actor ha participado
        const actorMoviesData = await fetchActorMovies(actorId);
        setActorMovies(actorMoviesData);
      } catch (error) {
        console.error('Error fetching actor details:', error);
      }
    };

    // Llamar a la función para obtener datos cuando cambie actorId
    fetchData();
  }, [actorId]);

  // Verificar si actorDetails tiene datos antes de mostrarlos
  if (!actorDetails || Object.keys(actorDetails).length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <ActorDetailContainer>
      {/* Utiliza la variable previousUrl para redirigir */}
      <ActorDetailBackLink to={previousUrl.current}>Atrás</ActorDetailBackLink>
      <ActorDetailHeader>
        <ActorDetailImage
          src={`https://image.tmdb.org/t/p/w185${actorDetails.profile_path}`}
          alt={actorDetails.name}
        />
        <ActorDetailInfo>
          <ActorDetailName>{actorDetails.name}</ActorDetailName>
          <ActorDetailBirthday>Fecha de Nacimiento: {actorDetails.birthday}</ActorDetailBirthday>
          <ActorDetailBiography>Biografía: {actorDetails.biography}</ActorDetailBiography>
        </ActorDetailInfo>
      </ActorDetailHeader>

      <ActorDetailMovies>
        <ActorDetailMoviesTitle>Películas en las que ha participado:</ActorDetailMoviesTitle>
        {/* Carrusel de películas */}
        <ActorDetailMoviesCarousel
          ref={carouselRef}
          onDragStart={(event) => {
            event.preventDefault();
            const startX = event.pageX || event.touches[0].pageX;
            const scrollLeft = carouselRef.current.scrollLeft;

            const handleDragMove = (event) => {
              const x = event.pageX || event.touches[0].pageX;
              const walk = (x - startX) * 2;
              carouselRef.current.scrollLeft = scrollLeft - walk;
            };

            const handleDragEnd = () => {
              window.removeEventListener('mousemove', handleDragMove);
              window.removeEventListener('touchmove', handleDragMove);
              window.removeEventListener('mouseup', handleDragEnd);
              window.removeEventListener('touchend', handleDragEnd);
            };

            window.addEventListener('mousemove', handleDragMove);
            window.addEventListener('touchmove', handleDragMove);
            window.addEventListener('mouseup', handleDragEnd);
            window.addEventListener('touchend', handleDragEnd);
          }}
        >
          {actorMovies.map((movie) => (
            <ActorDetailMovieItem key={movie.id}>
              <MovieItem movie={movie} showTitle={false} />
            </ActorDetailMovieItem>
          ))}
        </ActorDetailMoviesCarousel>
      </ActorDetailMovies>
    </ActorDetailContainer>
  );
};
