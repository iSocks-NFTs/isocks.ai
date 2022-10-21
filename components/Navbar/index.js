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
  NavBtnLink02,
} from "./navbarStyles";
import Link from "next/link";
import { GlobalContext } from "../../context/globalContext";
import { AnimatePresence, motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
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
          <NavLink href="/buy" className={router.pathname == '/buy' ? "active" : ""  || router.pathname == '/vendor' ? "active" : ""}>
            Buy iSocks
          </NavLink>
          <NavLink href="/redeem" className={router.pathname == '/redeem' ? "active" : ""} >
            Redeem iSocks
          </NavLink>
          <NavLink href="/verify" className={router.pathname == '/verify' ? "active" : ""}>
            Verify iSocks
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink02 href="https://discord.gg/nbrsZY9z59" target="_blank">
            <FaDiscord size={15} />
            Join Discord</NavBtnLink02>
          <NavBtnLink href="/preorder">Pre Order</NavBtnLink>
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
              <Link href="/buy">Buy iSocks</Link>
              <Link href="/redeem">Redeem iSocks</Link>
              <Link href="/verify">Verify iSocks</Link>
              <Link href="/join-whitelist">Join Whitelist</Link>
              <Link href="/preorder">Pre Order</Link>
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
