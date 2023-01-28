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
import { ProductSection } from "../components/Products/ProductSection";

const Main = styled.main`
  width: 100%;
`;

export default function Home() {
  const [ready, setReady] = useState(true);
  const { modal, setModal } = useContext(GlobalContext);
  const textBody = `A work of art in itself. Designed to perfectly complement our handmade, premium socks, each box is made from high-quality materials and features unique, eye catching designs, Whether it's for personal use or as a gift, the iSocksNFT packaging box adds an extra touch of luxury to the already premium product.
  
  Get yours today on BINANCE Marketplace and elevate your style.`;

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
          {/* <Tutorial /> */}
          <Section />
          <ProductSection />
          <ChatSection />
          <ProductSection
            heading="The Package"
            textBody={textBody}
            imgSrc="/img/products/package.jpg"
          />
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
