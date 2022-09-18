import styled from "styled-components";

export const Container = styled.div`
    max-width: 100%;
`

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
  @media screen and (max-width:480px) {
    width:100%;
  }
`;

export const FormContainer = styled.div``

export const Form = styled.form``

export const Input = styled.input``

export const Button = styled.button`
    background-color: var(--primary-brand);
    padding:15px 30px;
    font-size:30px;
    color:#fff;
    border-radius:30px;
    transition:0.7s;
    border:1px solid var(--primary-brand);
    :hover{
        color:var(--primary-brand);
        border:1px solid var(--primary-brand);
    }
`

export const Label = styled.label`
    font-weight:400;
    color:var(--subtle-text);
`