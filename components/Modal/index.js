import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { BackGround, ISockLogo, ModalContainer } from "./Modalstyle";
import { motion } from "framer-motion";

const Modal = () => {
  const { modal,setModal } = useContext(GlobalContext);

  return (
    <BackGround
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setModal({...modal,comingSoonModal:!modal.comingSoonModal})}
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
