import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  background-color: #1c1c1c;
  color: #fff;
`;

export const SectionContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const Carousel = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0;
  margin: 0;
  list-style-type: none;
  scroll-behavior: smooth;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;
