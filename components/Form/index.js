import styled from "styled-components";

export const FormContainer = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "")};
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
  color: var(--primary-brand);
  padding: 0 3px;
  border: 2px solid #e3e6e8;
  font-size: 20px;
  border-radius: 3px;
  :focus {
    outline: var(--primary-brand);
  }
`;

export const Type = styled.span``;

export const WalletAddress = styled.input`
  height: ${(props) => (props.height ? props.height : "60px")};
  width: clamp(250px, 320px, 450px);
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  color: var(--primary-brand);
  padding: 0 3px;
  border: 0.933743px solid #e3e6e8;
  font-size: 20px;
  border-radius: 3px;
  :focus {
    outline: var(--primary-brand);
  }
  ::after {
    content: "ERC20";
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
  position: relative;
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  row-gap: 0.5rem;
  column-gap: ${(props) => (props.columnGap ? props.columnGap : "0")};
  span {
    font-size: 15px;
    font-weight: 400;
  }
  div {
    width: clamp(250px, 320px, 450px);
  }
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--primary-brand)"};
  padding: 15px 50px;
  font-size: 15px;
  width: ${(props) =>
    props.width ? props.width : "clamp(250px, 320px, 450px)"};
  color: ${(props) => (props.color ? props.color : "#fff")};
  border-radius: 30px;
  transition: 0.7s;
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  border: 1px solid
    ${(props) =>
      props.borderColor ? props.borderColor : "var(--primary-brand)"};
  :hover {
    cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : "var(--primary-brand)"};
    background-color: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : "#fff"};
    border: 1px solid
      ${(props) =>
        props.hoverBorderColor
          ? props.hoverBorderColor
          : "var(--primary-brand)"};
  }
  :focus,
  :active {
    color: #fff;
    background-color: var(--primary-brand);
  }
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
`;
export const Msg = styled.span`
  font-size: 11px;
  color: ${(props) => (props.color ? props.color : "var(--primary-brand)")};
`;

export const Resend = styled.span`
  color: var(--primary-brand);
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "")};
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  color: ${(props) => (props.color ? props.color : "var(--subtle-text)")};
  width: clamp(250px, 320px, 450px);
  a {
    text-decoration: underline;
  }
`;

export const OTPContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;
export const OTPBox = styled.input`
  width: 45px;
  height: 45px;
  background-color: #fff;
  border: 0.933743px solid #e3e6e8;
  color: var(--primary-brand);
  font-size: 25px;
  padding-left: 0.9rem;
  border-radius: 3px;
  :focus {
    outline: none;
  }
`;

export const Uploaded = styled.div`
  border: 1px solid #e3e6e8;
  color: var(--primary-brand);
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) =>
    props.width ? props.width : "clamp(250px, 320px, 450px)"};
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
export const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UD = styled.img`
  position: absolute;
  top: 2.15rem;
  left: 1.3rem;
  width: ${(props) => (props.width ? props.width : "45px")};
  height: ${(props) => (props.height ? props.height : "45px")};
`;
