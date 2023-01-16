import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height:130vh;
  border:1px solid transparent;
  background-image: url('img/bg/logo_bg.png');
  background-position: 100% 50%;
  background-size: auto 95%;
  background-repeat: no-repeat;
  @media screen and (max-width:380px) {
    height:fit-content;
    background-position: center;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};
  gap: 1rem;
  flex-wrap: wrap;
`;

export const BuyOptionLink = styled.a`
  text-decoration: underline;
  color: var(--primary-brand);
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  transition: 0.7s;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};
  :hover {
    cursor: pointer;
  }
`;

export const Circle = styled.div`
  width:60px;
  height:60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Option = styled.span`
  font-weight: 600;
  font-size: ${({fontSize}) => fontSize ? fontSize : "22px"};
  margin-top:10px;
`;

export const ArrowRight = styled.img``;

export const OptionDescription = styled.span`
  padding: 15px;
  text-align: center;
  color: var(--subtle-text);
`;

export const Card = styled.div`
  border: ${(props) =>
    props.border ? props.border : "2px solid var(--grey-border-color)"};
  width: ${(props) => (props.width ? props.width : "300px")};
  height: ${(props) => (props.height ? props.height : "300px")};
  display: flex;
  row-gap: 0.1rem;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : 'flex-start'};
  padding: 1rem;
  color: ${(props) => (props.color ? props.color : "var(--primary-brand)")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  hr {
    width: 240px;
  }
  transition:0.8s;
  :hover {
    cursor: ${(props) => (props.cursor ? props.cursor : "auto")};
  }
`;

export const PaymentProof = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`;

export const FileUploadLabel = styled.label``;

export const CardHeading = styled.span`
  font-weight: 400;
  font-size: 22px;
`;

export const BankDetailsBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.2rem;
  width: 250px;
`;

export const AccountNo = styled.span`
  font-size: 25px !important;
  color: #fff !important;
`;

export const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 15px;
    color: #e1e1e1;
  }
`;

export const Copy = styled.img`
  :hover {
    cursor: pointer;
  }
`;

export const MakeTransfer = styled.span`
  font-weight: 300 !important;
  margin: 2rem 0;
  font-size: 15px;
  color: #e1e1e1;
  span {
    font-weight: 600 !important;
    color: #fff !important;
  }
`;

export const BankDetails = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 0.2rem;
  width: 250px;
  margin: 1.5rem 0;
`;

export const BankLeft = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`;

export const BankRight = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`;

export const BankName = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: var(--subtle-text);
`;
export const Kuda = styled.span``;

export const AccountName = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: var(--subtle-text);
`;
export const UserAccountName = styled.span``;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  row-gap: 0.5rem;
`;

export const PaymentMessage = styled.div`
  width: clamp(250px, 320px, 450px);
  display: flex;
  column-gap: 0.3rem;
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
