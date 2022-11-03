import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem 0%;
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

export const TextBox = styled.div`
  display:flex; 
  column-gap:0.5rem;
`

export const Icon = styled.img`
  width:15px;
  height:15px;
`

export const Text = styled.div`
  font-size:14px;
  color:var(--subtle-text);
  .resend{
    text-decoration: underline;
    color:var(--primary-brand);
    :hover{
      cursor: pointer;
    }
  }
`