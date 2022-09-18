import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  border:1px solid #fff;
`;

export const NavImg = styled.img`
    width:auto;
    height:25px;
`

export const NavLink = styled.span`
  color:var(--subtle-text) ;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color:var(--primary-color);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 4px;
  background: var(--primary-brand);
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    border:1px solid var(--primary-brand);
  }
`;

export const MobileNav = styled.div`
  background-color: #fff;
  padding:1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap:2rem;
  height: 100%;
  width:60%;
  a,span{
    font-weight:400;
    cursor:pointer;
  }
  ::before{
    background-color: black;
    width: 100%;
    height: 100%;
  }
`

export const BackDrop = styled.div`
  position: absolute;
  top:0;
  background: rgba(0, 0, 0, 0.5);
  left:0;
  width:100%;
  height:100%;
  z-index: 999;
`

export const Close = styled.img`
  position: absolute;
  top:1%;
  z-index: 999;
  right:30%;
  :hover{
    cursor: pointer;
  }
`