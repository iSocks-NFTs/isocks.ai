import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavImg,
  MobileNav,
} from "./navbarStyles";
import Link from "next/link";

const Navbar = () => {
  const [mobileNav, setMobileNav] = React.useState(false);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <NavImg src="/img/logo/logo.png" alt="logo" />
        </NavLink>
        <Bars onClick={() => setMobileNav(!mobileNav)} />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Buy iSocks
          </NavLink>
          <NavLink to="/services" activeStyle>
            Redeem iSocks
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Verify iSocks
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/join-waitlist">Join the whitelist</NavBtnLink>
        </NavBtn>
      </Nav>
      {mobileNav ? (
        <>
          <MobileNav>
            <NavImg src="/img/logo/logo.png" alt="logo"/>
            <Link href="/">Buy iSocks</Link>
            <Link href="/">Redeem iSocks</Link>
            <Link href="/">Verify iSocks</Link>
            <Link href="/">Pre-order</Link>
          </MobileNav>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
