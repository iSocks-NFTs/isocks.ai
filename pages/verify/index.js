import Head from "next/head";
import Layout from "../../layouts/normal_layout";
import VerifyComponent from "../../components/Verify";
import NonSSRWrapper from "../../components/no-ssr-wrapper";

const Verify = () => {
  return (
    <Layout>
      <Head>
        <title>iSocks | Verify Socks</title>
      </Head>

      <NonSSRWrapper>
        <VerifyComponent />
      </NonSSRWrapper>
    </Layout>
  );
};

export default Verify;
