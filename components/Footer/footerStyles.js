import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height:auto;
  padding: 10px 5rem;
  background-color: var(--primary-brand);
  @media screen and (max-width: 786px) {
    padding: 10px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export const Image = styled.img``;

export const ImgCaption = styled.span`
  display: block;
  color: var(--subtle-text);
  font-size: 15px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Heading = styled.span`
  font-size: 14px;
  color: var(--subtle-text);
  font-weight: 700;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
  :hover{
    cursor:pointer;
  }
`;

export const Brand = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 1rem;

`;

export const Information = styled.div`
  display: flex;
  column-gap: 3rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 1.2rem;
  }
`;

export const ContactUs = styled.div`
  color: var(--subtle-text);
  display:flex;
  flex-direction: column;
  span {
    font-weight: 700;
  }
  .email {
    font-size: 15px;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
