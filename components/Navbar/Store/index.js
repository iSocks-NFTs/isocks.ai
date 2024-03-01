import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import CurrencySelect from "../../CurrencySelect";
import Cart from "../../Cart";
import { useRouter } from "next/router";
import { IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Profile from "../../Store/Profile";

export default function StoreNavbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const currency = [
    {
      title: "US Dollar",
      imgURL: "/img/currency/dollar.svg",
      shortForm: "USD",
    },
    {
      title: "USDT - Tether",
      imgURL: "/img/currency/usdt.svg",
      shortForm: "USDT",
    },
    {
      title: "Nigerian Naira",
      imgURL: "/img/currency/naira.svg",
      shortForm: "NGN",
    },
    {
      title: "Defi Tiger",
      imgURL: "https://bscscan.com/token/images/defitiger_32.png",
      shortForm: "DTG",
    },
  ];

  const mobileLinks = [
    {
      title: "All Products",
      url: "/store/products",
    },
    {
      title: "Collections",
      url: "/store/collections",
    },
    {
      title: "Profile",
      url: "/store/profile",
    },
  ];

  const links = [
    {
      title: "All Products",
      url: "/store/products",
    },
    {
      title: "Collections",
      url: "/store/collections",
    },
  ];

  const { pathname, push } = useRouter();

  return (
    <>
      <div className="w-full bg-white text-center text-[--primary-brand]">
        <p className="inline-flex items-center gap-x-3 mx-1">
          <span>30% Off Purchases using DeFi Tiger Token </span>
          <Image
            src="https://www.defitigertoken.com/dtg.png"
            width={20}
            height={20}
            alt="Defi Tiger Token"
          />
        </p>
        <p className="inline-flex items-center gap-x-3 mx-1">
          <span>Buy More than 1 iSock and Get Free Shipping </span>
          🧦
        </p>
      </div>
      <nav className="sm:px-24 md:px-3 px-3 py-3 text-white flex justify-between w-full bg-[--primary-brand] items-center">
        <div className="md:hidden block">
          <Cart />
        </div>
        <Link href="/store">
          <Image
            src="/img/logo/isocks_store.svg"
            width={240}
            height={30}
            className="cursor-pointer"
          />
        </Link>
        <div className="md:flex hidden items-center justify-center gap-x-1 border rounded-full px-3 cursor-pointer">
          <span className="text-lg">We Accept</span>
          {currency.map((currency, index) => {
            return (
              <Image
                src={currency.imgURL}
                alt={currency.title}
                title={currency.title}
                width={25}
                height={25}
                key={index}
              />
            );
          })}
        </div>
        <div className="md:flex hidden gap-x-4 items-center justify-center">
          {links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                className={`${pathname === link.url && "text-white underline"}`}
              >
                {link.title}
              </a>
            );
          })}
          <FaMagnifyingGlass size={20} className="cursor-pointer" />
          <Profile />
          <Cart />
        </div>
        <div className="hover:cursor-pointer md:hidden block gap-x-3">
          <IoMdMenu size={35} onClick={() => setMobileNavOpen(true)} />
        </div>
      </nav>
      <AnimatePresence initial={false} node="wait" onExitComplete={() => null}>
        {mobileNavOpen && (
          <motion.nav
            className="w-full z-20 absolute top-0 left-0 h-screen bg-white"
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
            <div className="w-full flex justify-end pr-3 pt-3 text-black">
              <IoMdClose onClick={() => setMobileNavOpen(false)} size={35} />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-y-3">
              <Link href="/store">
                <Image
                  src="/img/logo/isocks_store_black.svg"
                  width={240}
                  height={30}
                  className="cursor-pointer"
                />
              </Link>
              <div className="flex flex-col items-center justify-center gap-x-1 border-2 rounded-md px-3 cursor-pointer p-3 bg-black text-white shadow-slate-700">
                <span className="text-xl">We Accept</span>
                {currency.map((currency, index) => {
                  return (
                    <p key={index} className="inline-flex gap-x-1">
                      <Image
                        src={currency.imgURL}
                        width={20}
                        height={20}
                        alt={currency.title}
                      />
                      {currency.title}
                    </p>
                  );
                })}
              </div>
              <div className="flex gap-x-2 items-center flex-col justify-center">
                {mobileLinks.map((link, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => push(link.url)}
                      className="text-[--primary-brand]"
                    >
                      {link.title}
                    </button>
                  );
                })}
                <p className="inline-flex items-center justify-center bg-black text-white rounded-full px-6 py-3 gap-x-1">
                  Search
                  <FaMagnifyingGlass />
                </p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
