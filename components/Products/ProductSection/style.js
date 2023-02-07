import styled from "styled-components";

export const Container = styled.div`
  padding: 6rem 0;
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
