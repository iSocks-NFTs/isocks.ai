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
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [ready, setReady] = useState(false);
  const { comingSoonModal } = useContext(GlobalContext);

  return (
    <>
      <Head>
        <title>iSocks | Homepage</title>
        <link rel="icon" href="/img/icons/logo.svg" />
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
            {comingSoonModal && <Modal />}
          </AnimatePresence>
          <Subscribe />
          <Footer />
        </>
      )}
    </>
  );
}
