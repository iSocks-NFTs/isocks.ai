import React, { useContext,useState } from "react";
import { GlobalContext } from "../../../context/globalContext";
import { BackGround, ModalContainer } from "../Modalstyle";
import { motion } from "framer-motion";
import { Form, FormGroup, Input, Label } from "../../Form";
import { Heading } from "../../QR/style";

const QREditModal = ({ data }) => {
  const { modal, setModal } = useContext(GlobalContext);
    const [editData,setEditData] = useState({
        label:'',
        url:''
    })

  return (
    <BackGround
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setModal({ ...modal, qrEditModal: false })}
    >
      <ModalContainer
        as={motion.div}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        width="450px"
        height="450px"
      >
        <Heading>Edit QR</Heading>
        <Heading fontWeight="300">{data?.label}</Heading>
        <Form>
            <FormGroup>
                <Label htmlFor="label">{data?.label}</Label>
                <Input type="text" value={editData.label} onChange={(e) => setEditData({...editData,label:e.targett.value})}/>
            </FormGroup>
        </Form>
      </ModalContainer>
    </BackGround>
  );
};

export default QREditModal;
