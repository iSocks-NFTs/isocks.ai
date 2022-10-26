import Head from "next/head";
import React from "react";
import Layout from "../../../../layouts/admin_layout";
import { AuthContext } from "../../../../context/authContext";
import Router from "next/router";
import QRComponent from "../../../../components/QR";
import { QRCode } from "qrcode";

const QRManagement = () => {
  const router = Router;

  // React.useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.push("/dashboard/auth");
  //   }
  // }, [isLoggedIn, router]);
  
  return (
    <Layout>
      <Head>
        <title>iSocks | Admin QR Management</title>
      </Head>
      <QRComponent />
    </Layout>
  );
};

export default QRManagement;
