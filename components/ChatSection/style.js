import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .text {
    width: 45%;
  }
  .text *{
    margin:1rem 0;
  }
  img {
    border-radius: 8px;
  }
  @media screen and (max-width:768px){
    flex-direction:column-reverse;
    text-align:center;
  }
  @media screen and (max-width:480px){
    .text{
        width:100%;
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
  width: 100%;
  font-size:18px;

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 20px;
  }
`;
