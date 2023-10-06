import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/149/149852.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 0;
  :hover {
    opacity: 1;
  }
`;

export const SearchFormButtonLabel = styled.span`
  /* Estilos de la etiqueta del botón de búsqueda */
`;

export const SearchFormInput = styled.input`
  /* Estilos del campo de entrada de búsqueda */
`;
