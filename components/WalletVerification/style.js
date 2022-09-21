import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height:90vh;
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

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const Input = styled.input`
  height: ${(props) => (props.height ? props.height : "60px")};
  width: clamp(250px, 320px, 450px);
  background-color: #fff;
  margin:0 auto;
  color: var(--primary-brand);
  padding:0 3px;
  border: 0.933743px solid #e3e6e8;
  font-size: 20px;
  border-radius: 3px;
  :focus {
    outline: var(--primary-brand);
  }
`;

export const Button = styled.button`
  background-color: var(--primary-brand);
  padding: 15px 50px;
  font-size: 15px;
  margin:0 auto;
  width: clamp(250px, 320px, 450px);
  color: #fff;
  border-radius: 30px;
  transition: 0.7s;
  border: 1px solid var(--primary-brand);
  :hover {
    cursor:pointer;
    color:var(--primary-brand);
    background-color: #fff;
    border: 1px solid var(--primary-brand);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  row-gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: var(--subtle-text);
  width: clamp(250px, 320px, 450px);
`;
