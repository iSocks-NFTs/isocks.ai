import Head from 'next/head';
import Layout from '../../layouts/normal_layout';
import VerifyComponent from '../../components/Verify';

const Verify = () =>{
    return(
        <Layout>
            <Head>
                <title>
                    iSocks | Verify Socks
                </title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
            </Head>
            <VerifyComponent />
        </Layout>
    )
}

export default Verify;