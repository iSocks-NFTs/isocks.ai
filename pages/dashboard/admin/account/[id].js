import Head from "next/head";
import { Container, Heading } from "../../../../components/Dashboard/style";
import AccountInfo from "../../../../components/Dashboard/Account";
import Layout from "../../../../layouts/admin_layout";

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
  return (
    <Layout>
      <Head>
        <title>iSocks | User Account Settings</title>
      </Head>
      <Container height="100vh">
        <Heading>User Account</Heading>
        <AccountInfo data={data} />
      </Container>
    </Layout>
  );
};

export default Account;
