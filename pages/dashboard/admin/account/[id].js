import Head from "next/head";
import Router from "next/router";
import { Container, Heading } from "../../../../components/Dashboard/style";
import AccountInfo from "../../../../components/Dashboard/Account";
import Layout from "../../../../layouts/admin_layout";
import { Button, ButtonContainer } from "../../../../components/Form";
import { baseURL } from "../../../../config";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const FIND_USER = `/api/find/user/${id}`

  // Fetch Data on Admin Account
  const response = await fetch(`${baseURL + FIND_USER}`);
  const data = await response.json();

  return {
    props: { data },
  };
}

const Account = ({ data }) => {
  const router = Router;
  return (
    <Layout>
      <Head>
        <title>iSocks | User Account Settings</title>
      </Head>
      <Container height="fit-content">
        <Heading>User Account</Heading>
        <AccountInfo data={data} />
        <ButtonContainer marginTop="2rem">
          <Button onClick={() => router.back()}>Back</Button>
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default Account;
