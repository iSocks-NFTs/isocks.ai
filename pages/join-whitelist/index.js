import React from "react";
import Layout from "../../layouts/normal_layout";
import JoinWhiteList from "../../components/JoinWhiteListForm";
import Modal from "../../components/Modal";
import { GlobalContext } from "../../context/globalContext";

const JoinWaitList = () => {

    const {comingSoonModal} = React.useContext(GlobalContext);

  return (
    <Layout>
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
