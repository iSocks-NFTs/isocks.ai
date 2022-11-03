import Head from "next/head";
import BuyOptionsComponent from "../../components/BuyOption";
import Layout from "../../layouts/normal_layout";

const BuyOption = () => {
  return (
    <Layout>
        <Head>
            <title>iSocks | Choose Buying Option</title>
        </Head>
        <BuyOptionsComponent />
    </Layout>
  )
};

export default BuyOption;
