import React, { useState, useContext } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Subscribe from "../components/Subscribe";
import Header from "../components/Header";
import ComingSoon from "../components/ComingSoon";
import ChatSection from "../components/ChatSection";
import { GlobalContext } from "../context/globalContext";
import Modal from "../components/Modal";
import SubscribeModal from "../components/Modal/emailSubscribe/index";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
`;

export default function Home() {
  const [ready, setReady] = useState(true);
  const { modal, setModal } = useContext(GlobalContext);

  return (
    <Main>
      <Head>
        <title>iSocks | Homepage</title>
        <link rel="icon" href="/img/icons/logo.svg" />
        <meta name="author" content="Adefeyitimi Adeyeloja" />
        <meta
          name="description"
          content="Welcome to the iSocks NFT Community"
        />
        <meta
          name="keywords"
          content="iSocks, iSocks.ai, iSocks NFT Community, iSocks, Meta nfts, Binance, Open Sea"
        />
        <meta name="robots" content="index" />
      </Head>
      {ready ? (
        <>
          <Navbar />
          <Header />
          <ChatSection />
          {/* <Tutorial /> */}
          <Section />
          <Roadmap />
          <Subscribe />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <ComingSoon />
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
          >
            {modal.comingSoonModal && <Modal />}
            {modal.subscribeForm && <SubscribeModal />}
          </AnimatePresence>
          <Subscribe />
          <Footer />
        </>
      )}
    </Main>
  );
}
