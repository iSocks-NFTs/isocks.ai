import Layout from "../../layouts/normal_layout";
import Head from "next/head";
import Page from "../../components/Partners";

export default function Partners() {
  return (
    <Layout>
      <Head>
        <title>iSocks | Partners</title>
      </Head>
      <main><Page /></main>
    </Layout>
  );
}
