import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import NavBar from "../components/Navbar/";
import Footer from "../components/Footer";

export default function Layout({ children }) {

  
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
