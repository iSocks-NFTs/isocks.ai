import styled from 'styled-components';

const Button = styled.button`
  border-radius: 32px;
  border: none;
  padding: 15px 20px;
  border:1px solid var(--primary-brand);
  background-color: #fff;
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;

const Outline = ({children}) =>{
    return (
        <Button>
            {children}
        </Button>
    )
}

export default Outline;