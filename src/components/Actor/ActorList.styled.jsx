import styled from 'styled-components';

export const ActorListContainer = styled.div`
  background-color: #000; /* Cambiar el color de fondo a negro */
  color: #fff;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const SectionContainer = styled.div`
  margin-top: 20px;
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: row; /* Cambiar la dirección a fila para mantener el tamaño original */
  overflow-x: auto; /* Agregar scroll horizontal si es necesario */
  gap: 20px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer */
  &::-webkit-scrollbar {
    display: none; /* WebKit */
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
`;

export const ActorCard = styled.div`
  text-align: center;
  img {
    width: 185px;
    height: 278px;
    object-fit: cover;
    border-radius: 8px;
  }
  p {
    margin-top: 10px;
    color: #fff; /* Asegura que el texto sea siempre blanco */
    text-align: center; /* Centra el nombre del actor */
  }
  a {
    text-decoration: none;
    color: #fff; /* Asegura que los enlaces sean siempre blancos */
  }
  .actor-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
