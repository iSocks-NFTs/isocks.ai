import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1rem;
  background-color: #fafafa;
`;

export const Heading = styled.h3`
  font-family: "Nunito Sans";
  text-align: center;
  font-weight: 600;
  font-size: 35px;
  margin-bottom: -0.1rem;
`;

export const Form = styled.form`
  border: none;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const FormContainer = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 32px;
  height: 50px;
  margin: 0 auto;
  width: 40%;
  margin-top: 1rem;
  background-color: #fff;
  @media screen and (max-width: 480px) {
    width: 80%;
  }
  .status {
    text-align: center;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  height: 100%;
  border-radius: 32px;
  width: 100%;
  background-color: #fff;
  color: var(--primary-brand);
  padding-left: 10px;
  font-size: 13px;
  border: none;
  :focus {
    outline: none;
    background: none;
  }
`;

export const Button = styled.button`
  background-color: var(--primary-brand);
  border-radius: 32px;
  border: none;
  padding: 15px 20px;
  border-color: #e1e1e1;
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;
