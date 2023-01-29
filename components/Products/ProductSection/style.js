import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 3rem;
  column-gap: 10rem;
  img {
    object-fit: contain;
    border-radius: 8px;
    margin: 1rem 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const Heading = styled.h3`
  font-family: "Nunito Sans";
  text-align: "center";
  font-weight: 600;
  font-size: 28px;
  margin-bottom: -0.1rem;
  @media screen and (max-width: 520px) {
    font-size: 20px;
  }
`;

export const TextBody = styled.p`
  width: 380px;
  font-size: 18px;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 18px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 20px;
    text-align: center;
  }
`;
