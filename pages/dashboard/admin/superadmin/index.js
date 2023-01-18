import Head from "next/head";
import Layout from "../../../../layouts/admin_layout";
import React from "react";
import { Container } from "../../../../components/Dashboard/style";

export default function SuperAdmin({}) {
  return (
    <Layout>
      <Head>
        <title>iSocks | Super Admin Features</title>
      </Head>
      <Container>Super Admin Powers Activate</Container>
    </Layout>
  );
}
