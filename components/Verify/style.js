import styled from "styled-components";

export const Container = styled.div`
  margin: 5rem 0;
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
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

export const StageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StageItems = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 0.1px solid #e1e1e1;
  column-gap: 0.7rem;
  padding-bottom: 1rem;
  flex-wrap: nowrap;
`;

export const Stage = styled.span`
  font-weight: ${(props) => props.fontWeight ? props.fontWeight : "700"};
  color: ${(props) => (props.color ? props.color : "var(--primary-brand)")};
  font-size:14px;
  @media screen and (max-width: 520px) {
    font-size: 10px;
  }
`;

export const ArrowRight = styled.img``;

export const FormContainer = styled.div`
  margin: 0 auto;
  margin-top:${(props) => props.marginTop ? props.marginTop : ""};
  height:fit-content;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  row-gap: 1rem;
`;

export const Input = styled.input`
  height: ${(props) => (props.height ? props.height : "60px")};
  width: clamp(250px, 330px, 450px);
  background-color: #fff;
  color: var(--primary-brand);
  padding: 0 3px;
  padding-left: ${(props) => props.paddingLeft ? props.paddingLeft : ''};
  border: 0.933743px solid #e3e6e8;
  font-size: 16px;
  border-radius: 3px;
  caret-color: ${({cursorColor}) => cursorColor ? cursorColor : ""};
  :focus {
    outline: var(--primary-brand);
  }
  ::placeholder{
    font-size:18px;
  }
  :hover{
    cursor:${({cursor}) => cursor ? cursor : ''}
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  width: clamp(250px, 330px, 450px);
  column-gap: 5px;
`;

export const FormGroup = styled.div`
  display: flex;
  position:relative;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: var(--primary-brand);
  padding: 15px 50px;
  font-size: 15px;
  width: clamp(250px, 330px, 450px);
  color: #fff;
  border-radius: 30px;
  transition: 0.7s;
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  border: 1px solid var(--primary-brand);
  margin-top: ${(props) => props.marginTop ? props.marginTop : ''};
  :hover {
    cursor: pointer;
    color: var(--primary-brand);
    background-color: #fff;
    border: 1px solid var(--primary-brand);
  }
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

export const Label = styled.label`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  font-size: 14px;
  color: ${(props) => (props.color ? props.color : "var(--primary-brand)")};
  width: ${(props) => props.width ? props.width : "clamp(250px, 350px, 450px)"};
  margin-left:10px;
  a {
    text-decoration: underline;
  }
  :hover{
    cursor: pointer;
  }
`;

// Step 4 Upload Cards
export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`

export const BuyOptionLink = styled.span`
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
  width: clamp(250px, 300px, 450px);
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
  .uploaded_icon{
    display: flex;
    align-items: center;
    column-gap:0.5rem;
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

export const Icon = styled.img``;

export const LabelContainer = styled.div`
  display: flex;
  column-gap:1rem;
`