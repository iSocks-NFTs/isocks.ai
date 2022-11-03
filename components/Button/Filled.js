import styled from "styled-components";

const Button = styled.button`
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

const Filled = ({ children }) => {
  return <Button>{children}</Button>;
};

export default Filled;
