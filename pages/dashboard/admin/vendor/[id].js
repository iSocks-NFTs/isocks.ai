import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { TailSpin } from "react-loader-spinner";
import {
  Container,
  Heading,
  Text,
} from "../../../../components/Dashboard/style";
import Layout from "../../../../layouts/admin_layout";
import { baseURL } from "../../../../config";

export async function getServerSideProps(context) {
  const { id } = context.query;

  const endpoint = `/api/user/vendor/${id}`;

  const response = await fetch(`${baseURL + endpoint}`, {
    method: "GET",
    headers: {
      key: process.env.NEXT_PUBLIC_BACKEND_KEY,
    },
  });

  console.log(response);

  const vendor = await response.json();

  return {
    props: { vendor },
  };
}

export default function ManageVendorId({ vendor }) {
  return (
    <Layout>
      <Head>
        <title>iSocks | Manage Vendor</title>
      </Head>
      <Container>
        <Heading>Manage Vendor</Heading>
        <Text>Change Vendor Information</Text>
        {vendor.firstName}
      </Container>
    </Layout>
  );
}
