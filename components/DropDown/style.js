import styled from 'styled-components';

export const DropDownButton = styled.div`
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