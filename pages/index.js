import React, { useState, useContext } from "react";
import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Tutorial from "../components/ui/Tutorials";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Subscribe from "../components/Subscribe";

import ComingSoon from "../components/ComingSoon";
import Modal from "../components/Modal";
import { GlobalContext } from "../context/globalContext";

export default function Home() {
  const [ready, setReady] = useState(false);
  const { comingSoonModal } = useContext(GlobalContext);

  return (
    <>
      <Head>
        <title>iSock | Homepage</title>
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
          {comingSoonModal ? (
            <>
              <Modal />
            </>
          ) : (
            <></>
          )}
          <Navbar />
          <ComingSoon />
          <Subscribe />
          <Footer />
        </>
      )}
    </>
  );
}
