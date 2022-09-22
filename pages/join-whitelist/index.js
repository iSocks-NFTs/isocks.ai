import React from "react";
import Head from "next/head";
import Layout from "../../layouts/normal_layout";
import JoinWhiteList from "../../components/JoinWhiteListForm";
import WalletVerification from '../../components/WalletVerification';
import Modal from "../../components/Modal";
import { GlobalContext } from "../../context/globalContext";

const JoinWaitList = () => {
  const { comingSoonModal, addressVerified} = React.useContext(GlobalContext);

  return (
    <Layout>
      <Head>
        <title>iSocks | Join Waiting List</title>
      </Head>
      {
        addressVerified ? (<JoinWhiteList />) : (<WalletVerification />)
      }
      {comingSoonModal ? (
        <>
          <Modal />
        </>
      ) : (
        <></>
      )}
    </Layout>
  );
};

export default JoinWaitList;
