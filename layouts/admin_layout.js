import React from "react";
import styled from "styled-components";
import Navbar from "../components/Dashboard/Navbar";
import Head from "next/head";
import { GlobalContext } from "../context/globalContext";

export default function Layout({ children }) {
  const { setOpenSettings } = React.useContext(GlobalContext);

  return (
    <>
      <Head>
        <link rel="icon" href="/img/icons/logo.svg" />
      </Head>
      <Navbar />
      <div onClick={() => setOpenSettings(false)}>{children}</div>
    </>
  );
}