import { useState } from "react";
import Layout from "../../layouts/normal_layout";
import Head from "next/head";
import Page from "../../components/Partners";
import Option1 from "../../components/Partners/Options/Option1";
import { AnimatePresence } from "framer-motion";
import BioData from "../../components/Partners/Options/Fashion/BioData";
import CompanyData from "../../components/Partners/Options/Fashion/CompanyData";

export default function Partners() {
  const [option, setOption] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    brandName: "",
    emailAddress: "",
    ownIsockNFT: false,
    walletAddress: "",
    ownStore: false,
    storeAddress: "",
    brandAge: "",
    targetAudience: "",
  });

  const optionList = [
    <Option1 key={1} option={option} setOption={setOption} />,
    <Page key={2} option={option} setOption={setOption} />,
    <BioData
      key={3}
      option={option}
      setOption={setOption}
      formData={formData}
      setFormData={setFormData}
    />,
    <CompanyData
      key={4}
      option={option}
      setOption={setOption}
      formData={formData}
      setFormData={setFormData}
    />,
  ];

  return (
    <Layout>
      <Head>
        <title>iSocks | Partners</title>
      </Head>
      <main>
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {optionList[option]}
        </AnimatePresence>
      </main>
    </Layout>
  );
}
