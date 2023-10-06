import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { ActorListContainer, SectionContainer, Carousel, Title, ActorCard } from './ActorList.styled';
import { fetchActorsByName, fetchActors } from 'services/api';
import genericUserImage from './genericuser.png';

export const ActorList = () => {
  const [actors, setActors] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sectionTitle, setSectionTitle] = useState('Actores Populares');
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actorsData = await fetchActors();
        setActors(actorsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (event) => {
    const query = event.target.value.trim();
    setSearchQuery(query);

    if (query === '') {
      setSearchResults([]);
      setSectionTitle('Actores Populares');
      return;
    }

    try {
      const results = await fetchActorsByName(query);
      setSearchResults(results);
      setSectionTitle('Resultados de búsqueda');
    } catch (error) {
      console.error('Error fetching actors by name:', error);
      setSearchResults([]);
      setSectionTitle('Actores Populares');
    }
  };

  const handleDragStart = (event) => {
    event.preventDefault();
    const startX = event.pageX || event.touches[0].pageX;
    const scrollLeft = carouselRef.current.scrollLeft;

    const handleDragMove = (event) => {
      const x = event.pageX || event.touches[0].pageX;
      const walk = (x - startX) * 0.75; // Reducir la sensibilidad ajustando el valor aquí
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

  return (
    <ActorListContainer>
      <input
        type="text"
        placeholder="Buscar actores por nombre"
        onChange={handleSearch}
        value={searchQuery}
      />
      <SectionContainer
        onMouseDown={(event) => handleDragStart(event)}
        onTouchStart={(event) => handleDragStart(event)}
      >
        <Title>{sectionTitle}</Title>
        <Carousel ref={carouselRef}>
          {searchResults.length > 0
            ? searchResults.map((actor) => (
                // Configura el enlace para redirigir a la página de ActorDetail
                <Link to={`/actor/${actor.id}`} key={actor.id}>
                  <ActorCard className="actor-carousel">
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                          : genericUserImage
                      }
                      alt={actor.name}
                    />
                    <p>{actor.name}</p>
                  </ActorCard>
                </Link>
              ))
            : actors.map((actor) => (
                // Configura el enlace para redirigir a la página de ActorDetail
                <Link to={`/actor/${actor.id}`} key={actor.id}>
                  <ActorCard className="actor-carousel">
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                          : genericUserImage
                      }
                      alt={actor.name}
                    />
                    <p>{actor.name}</p>
                  </ActorCard>
                </Link>
              ))}
        </Carousel>
      </SectionContainer>
    </ActorListContainer>
  );
};

export default ActorList;
