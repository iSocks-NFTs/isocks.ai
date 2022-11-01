import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-shadow: 0px 0px 15px -30px rgba(0, 0, 0, 0.5);
  padding: 1.5rem 10px;
`;

export const Brand = styled.img`
  width: auto;
  height: 25px;
  :hover{
    cursor:pointer;
  }
`;

export const UserSettings = styled.div`
  position: absolute;
  top: 5rem;
  right: 0rem;
  width: 220px;
  height: 150px;
  background-color: #fff;
  box-shadow: 4px 4px 15px -30px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: auto;
  }
  span{
    margin:5px 0;
  }
`;

export const WelcomeMessage = styled.span`
    font-weight:600;
    font-size:22px;
    margin:5px 0;
`;

export const UserAddress = styled.span``

export const UserBox = styled.div`
  position: relative;
  padding: 1rem;
  :hover {
    cursor: pointer;
  }
`;

export const NavLink = styled.ul`
  list-style:none;
  display: flex;
  column-gap:1rem;
  @media screen and (max-width:520px) {
    display:none;
  }
`

export const NavLinks = styled.li`
  color:var(--subtle-text);
`

export const Link = styled.a``