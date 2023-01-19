import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem 0;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 1rem;
  @media screen and (max-width: 1024px) {
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 1rem;
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: auto;
    justify-items: center;
    grid-gap: 1rem;
  }
`;

export const Card = styled.div`
  border: ${(props) =>
    props.border ? props.border : "1px solid var(--grey-border-color)"};
  width: 300px;
  min-height: 300px;
  display: ${(props) => (props.display ? props.display : "flex")};
  row-gap: 0.1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  padding: 1rem;
  :hover {
    cursor: pointer;
  }
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

export const Circle = styled.div`
  border-radius: 50%;
  background-color: #f4f4f4; ;
`;

export const Image = styled.img``;

export const FullName = styled.span`
  font-weight: 600;
  font-size: 24px;
  width: 100%;
  text-align: center;
  border-bottom: 0.3px solid var(--subtle-text);
  padding-bottom: 1rem;
`;

export const VendorData = styled.div``;

export const VendorLocation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: ${(props) => (props.color ? props.color : "#0D0D0D")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
`;

export const Acceptance = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const AcceptanceList = styled.div`
  span {
    background-color: #fafafa;
    padding: 3px;
    color: var(--primary-brand);
    margin-right: 0.3rem;
    border-radius: 8px;
    font-size: 13px;
  }
`;

export const Text = styled.div`
  color: var(--subtle-text);
`;
