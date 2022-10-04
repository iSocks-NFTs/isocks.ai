import { Row, Col } from "react-bootstrap";
import Layout from '../../layouts/normal_layout';
import Head from "next/head";
import RedeemedComponent from "../../components/Redeem";


const Redeem = () => {
  return (
    <Layout>
      <Head>
        <title>iSocks | Redeem</title>
      </Head>
      <RedeemedComponent />
    </Layout>
  );
};

export default Redeem;
