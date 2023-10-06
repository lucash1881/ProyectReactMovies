import styled from '@emotion/styled';
import { createGlobalStyle } from 'styled-components';

export const NavbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #141414;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavbarLabel = styled.span`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 18px;
  padding-right: 30px;
  color: #fff;
`;

export const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 15px;
  position: relative;

  &:hover {
    color: #ffdd00;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: transparent;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
    background-color: #ffdd00;
  }
`;
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #000; /* Color de fondo negro para todo el cuerpo de la página */
  }

  #root {
    min-height: 100vh; /* Establece la altura mínima para ocupar toda la altura de la ventana */
    display: flex;
    flex-direction: column;
  }
`;