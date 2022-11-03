import Layout from '../../layouts/normal_layout';
import Head from "next/head";
import RedeemedComponent from "../../components/Redeem";


const Redeem = () => {
  return (
    <Layout>
      <Head>
        <title>iSocks | Redeem</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </Head>
      <RedeemedComponent />
    </Layout>
  );
};

export default Redeem;
