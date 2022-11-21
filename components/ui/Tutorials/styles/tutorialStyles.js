import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  background-color: #f6f6f6;
  padding:1rem 0;
`;

export const Card = styled.div`
  width: 320px;
  height: 310px;
  background-color: #fff;
  padding: 10px 35px;
  border-radius: 6px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

export const CardHeaderImg = styled.img`
  border-radius: 6px;
`;

export const CardHeader = styled.span`
  font-weight: 600;
`;

export const CardText = styled.span`
  font-size: 85%;
  color: var(--subtle-text);
`;

export const Heading = styled.h3`
  font-family: "Nunito Sans";
  text-align: center;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: -0.1rem;
`;
export const P = styled.p`
  font-family: "Nunito Sans";
  text-align: center;
  width: 35%;
  margin: 0 auto;
  margin-bottom: 2rem;
  color: var(--subtle-text);
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CardStack = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 26%);
  justify-items:center;
  row-gap: 1rem;
  width: 85%;
  margin: 0 auto;
  padding: 5px 0;
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 50%);
    justify-items:center;
  }
`;
