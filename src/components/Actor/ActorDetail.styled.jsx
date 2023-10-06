import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ActorDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1c1c1c;
  color: #fff;
  padding: 20px;
`;

export const ActorDetailHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const ActorDetailBackLink = styled(Link)`
  gap: 4px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    color: orangered;
    opacity: 1;
  }
`;

export const ActorDetailContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px; /* Agregar margen superior aquí */
`;

export const ActorDetailImage = styled.img`
  width: 185px;
  height: 278px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ActorDetailInfo = styled.div`
  flex: 1;
`;

export const ActorDetailName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ActorDetailBirthday = styled.p`
  font-size: 16px;
`;

export const ActorDetailBiography = styled.p`
  margin-top: 10px;
`;

export const ActorDetailMovies = styled.div`
  margin-top: 20px;
}`;

export const ActorDetailMoviesTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ActorDetailMoviesCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer */
  &::-webkit-scrollbar {
    display: none; /* WebKit */
  }
`;

export const ActorDetailMovieItem = styled.div`
  text-align: center;

  img {
    width: 185px;
    height: 278px;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    margin-top: 10px;
    color: #fff;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .actor-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
