import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { BackGround, ISockLogo, ModalContainer } from "./Modalstyle";
import { motion } from "framer-motion";

const Modal = () => {
  const { comingSoonModal, setComingSoonModal } = useContext(GlobalContext);

  const dropIn = {
    hidden: {},
    visible: {},
    exit: {},
  };

  return (
    <BackGround
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setComingSoonModal(!comingSoonModal)}
    >
      <ModalContainer
        as={motion.div}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ISockLogo src="/img/logo/logo.png" alt="iSock Logo" />
        Coming Soon!
      </ModalContainer>
    </BackGround>
  );
};

export default Modal;
