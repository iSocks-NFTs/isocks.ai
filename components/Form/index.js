import styled from "styled-components";

export const FormContainer = styled.div``;

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
  color: var(--primary-brand);
  padding: 0 3px;
  border: 0.933743px solid #e3e6e8;
  font-size: 20px;
  border-radius: 3px;
  :focus {
    outline: var(--primary-brand);
  }
`;

export const Type = styled.span``

export const WalletAddress = styled.input`
  height: ${(props) => (props.height ? props.height : "60px")};
  width: clamp(250px, 320px, 450px);
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#fff"};
  color: var(--primary-brand);
  padding: 0 3px;
  border: 0.933743px solid #e3e6e8;
  font-size: 20px;
  border-radius: 3px;
  :focus {
    outline: var(--primary-brand);
  }
  ::after{
    content:'ERC20'
  }
`

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
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "var(--primary-brand)"};
  padding: 15px 50px;
  font-size: 15px;
  width: clamp(250px, 320px, 450px);
  color: ${(props) => props.color ? props.color : "#fff"};
  border-radius: 30px;
  transition: 0.7s;
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  border: 1px solid ${(props) => props.borderColor ? props.borderColor : "var(--primary-brand)"};
  :hover {
    cursor: ${(props) => props.cursor ? props.cursor : "pointer"};
    color: ${(props) => props.hoverColor ? props.hoverColor : "var(--primary-brand)"};
    background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : "#fff"};
    border: 1px solid ${(props) => props.hoverBorderColor ? props.hoverBorderColor : "var(--primary-brand)"};
  }
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: var(--subtle-text);
  width: clamp(250px, 320px, 450px);
  a{
    text-decoration: underline;
  }
`;

export const OTPContainer = styled.div`
    display:flex;
    column-gap:0.5rem;
`
export const OTPBox = styled.input`
  width:45px;
  height:45px;
  background-color: #fff;
  border: 0.933743px solid #e3e6e8;
  color:var(--primary-brand);
  font-size:25px;
  padding-left:0.9rem;
  border-radius: 3px;
  :focus{
    outline: none;
  }
`