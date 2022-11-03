import Router from "next/router";
import {
  Container,
  Heading,
  Text,
} from "../../../../components/Dashboard/style";
import Head from "next/head";
import Table from "../../../../components/Dashboard/Table";
import { Button, ButtonContainer } from "../../../../components/Form";
import Layout from "../../../../layouts/admin_layout";

export async function getServerSideProps() {
  // Fetch Data
  const response = await fetch("http://13.245.209.100/api/find/transaction");
  let data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const Transaction = ({ data }) => {
  const router = Router;
  return (
    <Layout>
      <Head>
        <title>iSocks | Admin Transactions</title>
      </Head>
      <Container height="100vh">
        <Heading>Transaction Data Feed</Heading>
        {data.length !== 0 ? (
          <Table transactions={data} />
        ) : (
          <Text textAlign="center">No Transactions Available</Text>
        )}
        <ButtonContainer>
          <Button onClick={() => router.back()}>Back</Button>
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default Transaction;
