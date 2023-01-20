import Head from "next/head";
import BuyOptionsComponent from "../../components/BuyOption";
import Layout from "../../layouts/normal_layout";

import { baseURL } from "../../config";

export async function getStaticProps() {
  const endpoint = "/api/user/vendor";

  const response = await fetch(`${baseURL + endpoint}`, {
    headers: {
      key: process.env.NEXT_PUBLIC_BACKEND_KEY,
    },
  });

  const data = await response.json();

  return {
    props: { data },
  };
}

const BuyOption = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>iSocks | Choose Buying Option</title>
      </Head>
      <BuyOptionsComponent vendors={data} />
    </Layout>
  );
};

export default BuyOption;
