import { Container,Button } from "../../../styles/success/style";
import Head from "next/head";
import Layout from '../../../layouts/normal_layout'
const Success = () => {
  return (
    <Layout>
      <Head>
        <title>iSocks | Successfully Filled WhiteList</title>
        <link rel="icon" href="/img/icons/logo.svg" />
      </Head>
      <Container>
        Successfully Filled the WhiteList Form <br />
        Make sure to join our Discord Community!
        <Button  href="https://discord.gg/nbrsZY9z59" target="_blank">
          Join Discord
        </Button>
      </Container>
    </Layout>
  );
};

export default Success;
