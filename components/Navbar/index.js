import { useState } from "react";
import { NavImg, MobileNav, Close, BackDrop, NavLinkOG } from "./navbarStyles";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { useRouter } from "next/router";
import Toast from "awesome-toast-component";
import Image from "next/image";
import { FaDiscord, FaTelegram } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const { pathname, push } = router;
  const [mobileNav, setMobileNav] = useState(false);

  const links = [
    {
      title: "Buy iSocks",
      url: "/buy",
    },
    {
      title: "Redeem iSocks",
      url: "/redeem",
    },
    {
      title: "Verify iSocks",
      url: "/verify",
    },
    {
      title: "Partner With Us",
      url: "/partners",
    },
  ];

  return (
    <>
      <nav className="sm:px-24 px-3 py-3 items-center flex justify-between shadow-sm w-full bg-white">
        <Image
          src="/img/logo/logo.png"
          height={55 / 2}
          width={285 / 2}
          alt="iSocks Logo"
        />
        <ul className="sm:flex hidden gap-x-4">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={`${
                  pathname === link.url
                    ? "text-black underline"
                    : "text-[--subtle-text]"
                }`}
              >
                <Link href={link.url}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="sm:flex hidden items-center gap-x-4">
          <button
            className="bg-white text-black px-5 py-3 rounded-md inline-flex justify-center items-center gap-x-3 border duration-300 hover:bg-black hover:text-white hover:border"
            onClick={() => push("https://discord.gg/nbrsZY9z59")}
            target="_blank"
          >
            <FaDiscord />
            Discord
          </button>
          <button
            className="bg-black text-white px-5 py-3 rounded-md inline-flex justify-center items-center gap-x-3 border duration-300 hover:bg-white hover:text-black hover:border"
            onClick={() => push("https://t.me/isocksnft")}
            target="_blank"
          >
            <FaTelegram />
            Telegram
          </button>
        </div>
        <div
          className="hover:cursor-pointer sm:hidden block"
          onClick={() => setMobileNav(true)}
        >
          <IoMdMenu size={35} />
        </div>
      </nav>
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
              <p
                className="text-black hover:cursor-pointer"
                onClick={() => new Toast("Feature Under Maintainance")}
              >
                Verify iSocks
              </p>
              <Link href="/join-whitelist">Join Whitelist</Link>
              <Link href="https://t.me/isocksnft">Telegram</Link>
              <Link href="/partners">Partner With Us</Link>
              <Link href="https://discord.gg/nbrsZY9z59" target="_blank">
                Join Discord
              </Link>
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
