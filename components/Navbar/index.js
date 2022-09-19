import React, { useContext } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavImg,
  MobileNav,
  Close,
  BackDrop,
  NavLinkOG,
} from "./navbarStyles";
import Link from "next/link";
import { GlobalContext } from "../../context/globalContext";

const Navbar = () => {
  const [mobileNav, setMobileNav] = React.useState(false);
  const { setComingSoonModal, comingSoonModal } = useContext(GlobalContext);

  function closeFunction() {
    setMobileNav(false);
    setComingSoonModal(true);
  }

  return (
    <>
      <Nav>
        <NavLinkOG href="/">
          <NavImg src="/img/logo/logo.png" alt="logo" />
        </NavLinkOG>
        <Bars onClick={() => setMobileNav(!mobileNav)} />
        <NavMenu>
          <NavLink onClick={() => setComingSoonModal(true)} activeStyle>
            Buy iSocks
          </NavLink>
          <NavLink onClick={() => setComingSoonModal(true)} activeStyle>
            Redeem iSocks
          </NavLink>
          <NavLink onClick={() => setComingSoonModal(true)} activeStyle>
            Verify iSocks
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink href="/join-whitelist">Join the whitelist</NavBtnLink>
        </NavBtn>
      </Nav>
      {mobileNav ? (
        <BackDrop>
          <MobileNav>
            <NavLinkOG href="/">
              <NavImg src="/img/logo/logo.png" alt="logo" />
            </NavLinkOG>
            <span onClick={() => closeFunction()}>Buy iSocks</span>
            <span onClick={() => closeFunction()}>Redeem iSocks</span>
            <span onClick={() => closeFunction()}>Verify iSocks</span>
            <Link href="/join-whitelist">Join Whitelist</Link>
          </MobileNav>
          <Close
            src="/img/icons/close.svg"
            alt="close button"
            onClick={() => setMobileNav(!mobileNav)}
          />
        </BackDrop>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
