import React, { useState, useContext } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Tutorial from "../components/ui/Tutorials";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Subscribe from "../components/Subscribe";
import Header from "../components/Header";

import ComingSoon from "../components/ComingSoon";
import { GlobalContext } from "../context/globalContext";
import Modal from "../components/Modal";
import SubscribeModal from "../components/Modal/emailSubscribe/index";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [ready, setReady] = useState(false);
  const { modal,setModal } = useContext(GlobalContext);


  return (
    <>
      <Head>
        <title>iSocks | Homepage</title>
        <link rel="icon" href="/img/icons/logo.svg" />
        <meta name="author" content="Adefeyitimi Adeyeloja" />
        <meta name="description" content="Welcome to the iSocks NFT Community" />
        <meta name="keywords" content="iSocks, iSocks.ai, iSocks NFT Community, iSocks, meta nfts, Binance, Open Sea" />
        <meta name="robots" content="index" />
      </Head>
      {ready ? (
        <>
          <Navbar />
          <Header />
          <Tutorial />
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
    </>
  );
}
