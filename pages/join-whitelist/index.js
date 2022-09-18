import React from "react";
import Head from 'next/head';
import Layout from "../../layouts/normal_layout";
import JoinWhiteList from "../../components/JoinWhiteListForm";
import Modal from "../../components/Modal";
import { GlobalContext } from "../../context/globalContext";

const JoinWaitList = () => {

    const {comingSoonModal} = React.useContext(GlobalContext);

  return (
    <Layout>
      <Head>
        <title>iSocks | Join Waiting List</title>
      </Head>
      <JoinWhiteList />
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
