import Head from "next/head";
import VendorComponent from "../../components/Vendor";
import Layout from '../../layouts/normal_layout'

const Vendor = () =>{
    return(
        <Layout>
            <Head>
                <title>iSocks | Vendor</title>
            </Head>
            <VendorComponent />
        </Layout>
    )
}

export default Vendor;