import { useRouter } from "next/router";
import React from "react";
import {
  Container,
  Heading,
  Text,
} from "../../../../components/Dashboard/style";
import Head from "next/head";
import Table from "../../../../components/Dashboard/Table";
import { Button, ButtonContainer } from "../../../../components/Form";
import Layout from "../../../../layouts/admin_layout";
import { TailSpin } from "react-loader-spinner";
import { baseURL } from "../../../../config";

export async function getServerSideProps() {
  const endpoint = `/api/find/transaction`;
  // Fetch Data
  const response = await fetch(`${baseURL + endpoint}`, {
    headers: {
      key: process.env.NEXT_PUBLIC_BACKEND_KEY,
    },
  });
  let data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const Transaction = ({ data }) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  function back() {
    router.push("/dashboard/admin");
    setLoading(true);
  }

  return (
    <Layout>
      <Head>
        <title>iSocks | Admin Transactions</title>
      </Head>
      <Container>
        <Heading>Transaction Data Feed</Heading>
        {data.length !== 0 ? (
          <Table transactions={data} />
        ) : (
          <Text textAlign="center">No Transactions Available</Text>
        )}
        <ButtonContainer>
          <Button onClick={back}>
            {loading ? (
              <TailSpin
                height="25"
                width="25"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Back"
            )}
          </Button>
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default Transaction;
