import { useState, useEffect, useRef } from 'react';
import { fetchTrending, fetchTopRated, fetchNewMovies, fetchMoviesByTitle } from 'services/api';
import { HomeContainer, SectionContainer, Carousel, Title } from './Home.styled';
import MovieItem from '../MovieItem/MovieItem';
import { FaSearch } from 'react-icons/fa';

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [moviesTopRated, setMoviesTopRated] = useState([]);
  const [moviesNew, setMoviesNew] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);
  const searchCarouselRef = useRef(null);

  useEffect(() => {
    fetchTrending().then(setMoviesTrending);
    fetchTopRated().then(setMoviesTopRated);
    fetchNewMovies().then(setMoviesNew);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetchMoviesByTitle(searchQuery).then(setSearchMovies);
    } else {
      setSearchMovies([]);
    }
  }, [searchQuery]);

  const handleDragStart = (event, carouselRef) => {
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
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <HomeContainer>
      <div>
        <FaSearch style={{ color: '#fff', marginRight: '10px' }} />
        <input type="text" placeholder="Buscar películas por título" value={searchQuery} onChange={handleSearch} />
      </div>

      {searchMovies.length === 0 ? (
        <>
          <SectionContainer>
            <Title>Nuevas Películas</Title>
            <Carousel ref={carouselRef1} onDragStart={(event) => handleDragStart(event, carouselRef1)}>
              {moviesNew.map((movie) => (
                <MovieItem key={movie.id} movie={movie} showTitle={false} />
              ))}
            </Carousel>
          </SectionContainer>

          <SectionContainer>
            <Title>Tendencia</Title>
            <Carousel ref={carouselRef2} onDragStart={(event) => handleDragStart(event, carouselRef2)}>
              {moviesTrending.map((movie) => (
                <MovieItem key={movie.id} movie={movie} showTitle={false} />
              ))}
            </Carousel>
          </SectionContainer>

          <SectionContainer>
            <Title>Mejor Valoradas</Title>
            <Carousel ref={carouselRef3} onDragStart={(event) => handleDragStart(event, carouselRef3)}>
              {moviesTopRated.map((movie) => (
                <MovieItem key={movie.id} movie={movie} showTitle={false} />
              ))}
            </Carousel>
          </SectionContainer>
        </>
      ) : (
        <SectionContainer>
          <Title>Resultados de búsqueda</Title>
          <Carousel ref={searchCarouselRef} onDragStart={(event) => handleDragStart(event, searchCarouselRef)}>
            {searchMovies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} showTitle={false} />
            ))}
          </Carousel>
        </SectionContainer>
      )}
    </HomeContainer>
  );
};
