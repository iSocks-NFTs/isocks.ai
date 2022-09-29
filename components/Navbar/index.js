import React, { useContext } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  Image,
  NavBtnLink,
  NavImg,
  MobileNav,
  Close,
  BackDrop,
  NavLinkOG,
  NavBtnLink02,
} from "./navbarStyles";
import Link from "next/link";
import { GlobalContext } from "../../context/globalContext";
import { AnimatePresence, motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

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
          <NavBtnLink02 href="https://discord.gg/nbrsZY9z59" target="_blank">
            <FaDiscord size={15} />
            Join Discord</NavBtnLink02>
          <NavBtnLink href="/join-whitelist">Pre Order</NavBtnLink>
        </NavBtn>
      </Nav>
      <AnimatePresence initial={false} node="wait" onExitComplete={() => null}>
        {mobileNav && (
          <BackDrop
            as={motion.div}
            initial={{
              x: -500,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: -500,
            }}
          >
            <MobileNav>
              <NavLinkOG href="/">
                <NavImg src="/img/logo/logo.png" alt="logo" />
              </NavLinkOG>
              <span onClick={() => closeFunction()}>Buy iSocks</span>
              <span onClick={() => closeFunction()}>Redeem iSocks</span>
              <span onClick={() => closeFunction()}>Verify iSocks</span>
              <Link href="/join-whitelist">Join Whitelist</Link>
              <Link href="https://discord.gg/nbrsZY9z59" target="_blank">Join Discord</Link>
            </MobileNav>
            <Close
              src="/img/icons/close.svg"
              alt="close button"
              onClick={() => setMobileNav(!mobileNav)}
            />
          </BackDrop>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
