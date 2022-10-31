import Head from "next/head";
import Router from "next/router";
import { Container, Heading } from "../../../../components/Dashboard/style";
import AccountInfo from "../../../../components/Dashboard/Account";
import Layout from "../../../../layouts/admin_layout";
import { Button, ButtonContainer } from "../../../../components/Form";

export async function getServerSideProps(context) {
  const { id } = context.query;

  // Fetch Data on Admin Account
  const response = await fetch(`http://localhost:1337/api/find/user/${id}`);
  const data = await response.json();
  console.log(data);
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
