import styled from "styled-components";

export const Container = styled.div`
    max-width:100%;
    margin:6rem 0;
`;

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 1rem;
`

export const BuyOptionLink = styled.a`
    text-decoration: underline;
    color:var(--primary-brand);
    display: inline-flex;
    align-items: center;
    column-gap: 0.5rem;
    transition: 0.7s;
    :hover{
        cursor:pointer;
    }
`

export const Circle = styled.div`
    padding:1rem;
    background-color: #F4F4F4;
    border-radius:50%;
`

export const Image = styled.img`
    width:50px;
    height:50px;

`

export const Option = styled.span`
    font-weight: 600;
    font-size:22px;
`

export const ArrowRight = styled.img``

export const OptionDescription = styled.span`
    padding:15px;
    text-align: center;
    color:var(--subtle-text);
`

export const Card = styled.div`
  border: ${(props) => props.border ? props.border : "1px solid var(--grey-border-color)"};
  width: 300px;
  height: 300px;
  display: flex;
  row-gap:0.1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  background-color: ${(props) => props.bgColor ? props.bgColor : ""};
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
