import React from "react";
import Head from "next/head";
import NavBar from "../components/Navbar/";
import Subscribe from '../components/Subscribe'
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/icons/logo.svg" />
      </Head>
      <NavBar />
      {children}
      <Subscribe />
      <Footer />
    </>
  );
}
