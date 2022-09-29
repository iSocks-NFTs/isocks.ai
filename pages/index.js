import React, { useState, useContext } from "react";
import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Tutorial from "../components/ui/Tutorials";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Subscribe from "../components/Subscribe";

import ComingSoon from "../components/ComingSoon";
import { GlobalContext } from "../context/globalContext";
import Modal from "../components/Modal";
import SubscribeModal from '../components/Modal/emailSubscribe/index';
import VideoModal from "../components/VideoModal";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [ready, setReady] = useState(false);
  const { comingSoonModal,subscribeForm,comingSoonVideo } = useContext(GlobalContext);

  return (
    <>
      <Head>
        <title>iSocks | Homepage</title>
        <link rel="icon" href="/img/icons/logo.svg" />
        <meta name="author" content="Adefeyitimi Adeyeloja" />
        <meta name="description" content="Welcome to the iSocks NFT Community" />
        <meta name="keywords" content="iSocks, iSocks.ai, iSocks NFT Community, iSocks, meta nfts" />
        <meta name="robots" content="index" />
      </Head>
      {ready ? (
        <>
          <Navbar />
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
            {comingSoonVideo && <VideoModal />}
            {comingSoonModal && <Modal />}
            {subscribeForm && <SubscribeModal /> }
          </AnimatePresence>
          <Subscribe />
          <Footer />
        </>
      )}
    </>
  );
}
