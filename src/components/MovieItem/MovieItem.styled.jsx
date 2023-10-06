import styled from 'styled-components';

export const MovieItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
`;

export const MovieItemImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MovieItemTitle = styled.span`
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;
