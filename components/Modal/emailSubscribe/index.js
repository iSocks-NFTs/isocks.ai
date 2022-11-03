import React, { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { BackGround, ISockLogo, ModalContainer } from "./Modalstyle";
import { motion } from "framer-motion";

const SubscribeModal = () => {
  const { modal,setModal } = useContext(GlobalContext);

  return (
    <BackGround
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setModal({...modal,subscribeForm:!modal.subscribeForm})}
    >
      <ModalContainer
        as={motion.div}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ISockLogo src="/img/logo/logo.png" alt="iSock Logo" />
        Successfully subscribed to iSocks Newsletters.
      </ModalContainer>
    </BackGround>
  );
};

export default SubscribeModal;
