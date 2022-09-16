import styled from "styled-components";

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
`;

export const Container = styled.div`
  max-width: 100%;
  padding:10px 0;
  margin: 2rem 0;
  background-image: url("/roadmap/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
`;

export const Point = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: center;
  align-items: center;
  margin:3rem 0;
  @media screen and (max-width:480px) {
    flex-direction:${(props) => props.flexDirectionMobile ? props.flexDirectionMobile : 'column'};
    row-gap:1.5rem;
  }
`;

export const Box = styled.div`
    display:flex;
    flex-direction: column;
    row-gap:0.6rem;
    width:25%;
    @media screen and (max-width:480px) {
      width:80%;
      text-align: center;
    }
`;

export const PointHeaderText = styled.span`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
`;

export const PointHeaderBody = styled.span`
    color:var(--subtle-text);
`;

export const PointImage = styled.img`
    transition: 0.7s;
    :hover{
      cursor: pointer;
      transform: scale(1.1);
    }
`;

export const TimeStamp = styled.span`
    font-weight:600;
    background-color: var(--background-color);
    width:${(props) => props.width ? props.width : "40%"};
    display: inline-flex;
    justify-content:${(props) => props.justifyContent ? props.justifyContent : "center"};
    font-size:16px;
    border-radius: 3px;
    @media screen and (max-width:480px) {
      margin:0 auto;
    }
`