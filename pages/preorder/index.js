import Head from "next/head"
import PreOrderComponent from "../../components/PreOrder"
import Layout from '../../layouts/normal_layout';

const PreOrder = () =>{
    return(
        <Layout>
            <Head>
                <title>iSocks | Pre Order</title>
            </Head>
            <PreOrderComponent />
        </Layout>
    )
}

export default PreOrder