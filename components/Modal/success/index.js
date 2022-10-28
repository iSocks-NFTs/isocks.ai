import React, { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { BackGround, Heading, ISockLogo, ModalContainer, P } from "./Modalstyle";
import { motion } from "framer-motion";

const SuccessModal = () => {
  const { modal,setModal } = useContext(GlobalContext);

  return (
    <BackGround
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setModal({...modal,successModal:!modal.successModal})}
    >
      <ModalContainer
        as={motion.div}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ISockLogo src="/img/icons/tick-circle.svg" alt="Tick Icon" />
        <Heading>Successful</Heading>
        <P>The action has been successful. thank you.</P>
      </ModalContainer>
    </BackGround>
  );
};

export default SuccessModal;
