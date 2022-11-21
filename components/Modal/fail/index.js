import React, { useContext } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { BackGround, Heading, ISockLogo, ModalContainer, P } from "./style";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";

const FailModal = ({ heading, message }) => {
  const { modal, setModal } = useContext(GlobalContext);

  return (
    <BackGround
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setModal({ ...modal, failModal: !modal.failModal })}
    >
      <ModalContainer
        as={motion.div}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ImCross />
        <Heading>{heading ? heading : "Failed"}</Heading>
        <P>{message ? message : "Action Failed"}</P>
      </ModalContainer>
    </BackGround>
  );
};

export default FailModal;
