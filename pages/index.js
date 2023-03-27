import React, { useState, useContext,useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Subscribe from "../components/Subscribe";
import Header from "../components/Header";
import ComingSoon from "../components/ComingSoon";
import Wardrobe from "../components/Wardrobe";
import { GlobalContext } from "../context/globalContext";
import Modal from "../components/Modal";
import SubscribeModal from "../components/Modal/emailSubscribe/index";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { ProductSection } from "../components/Products/ProductSection";
import PartnerSection from "../components/Partner";
import { FaTelegram } from "react-icons/fa";
import {motion} from 'framer-motion'

const Main = styled.main`
  width: 100%;
`;

function TelegramModal() {
  const [showModal, setShowModal] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => setShowModal(false), 10000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="relative">
      {showModal && (
        <motion.div
          className="fixed z-10 inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="bg-white flex justify-center flex-col items-center rounded-lg p-8 max-w-md mx-auto z-20">
            <img
              src="/img/logo/logo.png"
              alt="logo"
              className="max-w-full h-auto"
            />
            <h2 className="text-lg font-medium mb-4 text-center ">
              Join our Telegram Group!
            </h2>
            <p className="text-center">
              Stay up to date with the community and get rewards.
            </p>
            <a
              href="https://t.me/isocksnft"
              target="_blank"
              onClick={() => setShowModal(false)}
              className="border-2 py-2 px-5 inline-flex justify-center items-center gap-1 duration-300 rounded-sm text-lg hover:bg-[var(--primary-brand)] hover:text-white"
            >
              <FaTelegram size={15} />
              Join Us
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function Home() {
  const [ready, setReady] = useState(true);
  const { modal, setModal } = useContext(GlobalContext);

  return (
    <Main>
      <Head>
        <title>iSocks | Homepage</title>
      </Head>
      {ready ? (
        <>
          <Navbar />
          <TelegramModal />
          <Header />
          <Section />
          <ProductSection />
          <Wardrobe />
          <Roadmap />
          <PartnerSection />
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
