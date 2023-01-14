import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;
  max-width: 100%;
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }
  p {
    width: 50%;
    font-size: 32px;
    font-family: cursive;
  }
  @media screen and (max-width: 480px) {
    .section {
      flex-direction: column;
    }
    img {
      width: 300px;
      height: auto;
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    .section {
      flex-direction: column;
    }
    p {
      width: 100%;
      font-size: 20px;
      text-align: center;
    }
  }
`;

export const Image = styled.img`
  width: auto;
  height: 350px;
  object-fit: cover;
  border-radius: 8px;
`;
