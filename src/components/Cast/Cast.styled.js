import styled from '@emotion/styled';

export const MovieCastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCastItem = styled.div`
  margin: 15px;
  text-align: center;
  
  img {
    width: 150px;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
  }

  h3 {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #888;
  }
`;
