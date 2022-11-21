import React, { useContext } from "react";
import { Container } from "./style";
import Step1 from "./page1";
import Step2 from "../Vendor";
import Step3 from "./page3";
import Step4 from './page4';
import Step5 from "./page5";
import { GlobalContext } from "../../context/globalContext";
import SuccessModal from "../Modal/success";
import { AnimatePresence } from "framer-motion";

const BuyOptionsComponent = () => {
  const [page, setPage] = React.useState(4);
  const [formData, setFormData] = React.useState({
    vendorOption:'',
    emailAddress:'',
    phoneNumber:'',
    walletAddress:'',
    KudaBankAccountNumber:243435335646,
    uploadedProof:{
      uploaded:false,
      imgfileName:'test.png',
      imgFile:null
    }
  });

  const { successModal, setSuccessModal } = useContext(GlobalContext);

  const componentList = [
    <Step1
      key={1}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <Step2
      key={2}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <Step3
      key={3}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <Step4
      key={4}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
    <Step5
      key={5}
      page={page}
      setPage={setPage}
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  return (
    <Container>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {successModal && <SuccessModal />}
        {componentList[page]}
      </AnimatePresence>
    </Container>
  );
};

export default BuyOptionsComponent;
