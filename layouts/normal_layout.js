import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import NavBar from "../components/Navbar/";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

export default function Layout({ children }) {
  const { comingSoonModal } = useContext(GlobalContext);
  
  return (
    <>
      <NavBar />
      {comingSoonModal ? (
        <>
          <Modal />
        </>
      ) : (
        <></>
      )}
      {children}
      <Footer />
    </>
  );
}
