import React from "react";
import styled from "styled-components";
import Navbar from "../components/Dashboard/Navbar";
import Head from "next/head";
import { GlobalContext } from "../context/globalContext";
import NonSSRWrapper from '../components/no-ssr-wrapper';

export default function Layout({ children }) {

  return (
    <>
      <Head>
        <link rel="icon" href="/img/icons/logo.svg" />
      </Head>
      <NonSSRWrapper>
        <Navbar />
      </NonSSRWrapper>
      <div>{children}</div>
    </>
  );
}