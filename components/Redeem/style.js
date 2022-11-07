import styled from "styled-components";

export const Container = styled.div`
  height:150vh;
  border:1px solid transparent;
  background-image: url('img/bg/logo_bg.png');
  background-position: 100% 50%;
  background-size: auto 95%;
  background-repeat: no-repeat;
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

export const FormContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
`;

export const Input = styled.input`
  height: ${(props) => (props.height ? props.height : "60px")};
  width: clamp(250px, 325px, 450px);
  background-color: #fff;
  color: var(--primary-brand);
  padding:5px;
  border: 0.933743px solid #e3e6e8;
  font-size: 20px;
  ::placeholder{
    font-size:16px;
  }
  border-radius: 3px;
  :focus {
    outline: var(--primary-brand);
  }
`;

export const TextArea = styled.textarea`
  height: ${(props) => (props.height ? props.height : "120px")};
  width: clamp(250px, 320px, 450px);
  background-color: #fff;
  color: var(--primary-brand);
  border: 0.933743px solid #e3e6e8;
  padding: 0 3px;
  font-size: 20px;
  border-radius: 3px;
  :focus {
    outline: var(--primary-brand);
  }
  ::placeholder {
    opacity: 0.9;
  }
  resize: none;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: var(--primary-brand);
  padding: 15px 50px;
  font-size: 15px;
  width: clamp(250px, 325px, 450px);
  color: #fff;
  border-radius: 30px;
  transition: 0.7s;
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  border: 1px solid var(--primary-brand);
  :hover {
    cursor: pointer;
    color: var(--primary-brand);
    background-color: #fff;
    border: 1px solid var(--primary-brand);
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: var(--subtle-text);
  width: clamp(250px, 320px, 450px);
  a {
    text-decoration: underline;
  }
  :hover{
    cursor: pointer;
  }
`;

export const UploadLabel = styled.label`
  border: 1px solid #e3e6e8;
  color: var(--primary-brand);
  width: clamp(250px, 320px, 450px);
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
  justify-content: flex-start;
`;

export const Uploaded = styled.div`
  border: 1px solid #e3e6e8;
  color: var(--primary-brand);
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: clamp(250px, 320px, 450px);
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
  .uploaded_icon {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
`;

export const JoinDiscord = styled.div`
  display: flex;
  column-gap: 0.3rem;
  justify-content: center;
  margin: 1.5rem auto;
  width: clamp(250px, 320px, 450px);
`;

export const JoinDiscordText = styled.a``;

export const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const Icon = styled.img``;

export const Terms = styled.span`
  display: flex;
  align-items: flex-start;
  width: clamp(250px, 320px, 450px);
  column-gap: 0.5rem;
  margin: 1rem auto;
  font-size: 14px;
  justify-content: center;
`;

export const DropDownContainer = styled.div`
  width: clamp(250px, 320px, 450px);
  border: 1px solid #e3e6e8;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  height: ${(props) => (props.height ? props.height : "60px")};
  background-color: #fff;
  :hover {
    cursor: pointer;
  }
`;

export const OptionIcon = styled.img``;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-left:1.3rem;
  width: clamp(250px, 420px, 450px);
  column-gap: 5px;
`;

export const CheckBox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background-color: transparent;
  outline: 1px solid var(--subtle-text);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  :checked::after {
    outline: none;
    font-family: "Font Awesome 6 Free";
    content: "\f00c";
    font-weight: 900;
    background-color: var(--primary-brand);
  }
`;
