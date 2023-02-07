import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  background-color: #fff;
  padding: 1rem 0;
`;

export const Heading = styled.h3`
  font-family: "Nunito Sans";
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: -0.1rem;
  @media screen and (max-width: 520px) {
    font-size: 20px;
  }
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ARButton = styled.button`
  margin-top: 2rem;
  background-color: var(--primary-brand);
  color: #fff;
  border: 1px solid var(--primary-brand);
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 32px;
  display: inline-flex;
  align-items: center;
  column-gap: 0.8rem;
  :hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img``;
